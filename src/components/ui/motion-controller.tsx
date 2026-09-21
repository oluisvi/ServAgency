"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const mod = (value: number, divisor: number) =>
  divisor > 0 ? ((value % divisor) + divisor) % divisor : 0;
const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-reveal, .motion-clip, .motion-stagger"),
    );
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    let tiltItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-tilt-surface], .rows article, .services article, .process li, .about li",
      ),
    );
    const pointerFields = Array.from(document.querySelectorAll<HTMLElement>("[data-pointer-field]"));
    const sculpture = document.querySelector<HTMLElement>("[data-sculpture]");
    const techRail = document.querySelector<HTMLElement>(".tech");

    const carousel = document.querySelector<HTMLElement>("[data-project-carousel]");
    const projectWindow = carousel?.querySelector<HTMLElement>("[data-project-window]") ?? null;
    const track = carousel?.querySelector<HTMLElement>("[data-project-track]") ?? null;
    const originalSlides = carousel
      ? Array.from(carousel.querySelectorAll<HTMLElement>("[data-project-slide]"))
      : [];
    const jumps = carousel
      ? Array.from(carousel.querySelectorAll<HTMLButtonElement>("[data-project-jump]"))
      : [];
    const previousButton = carousel?.querySelector<HTMLButtonElement>("[data-project-prev]") ?? null;
    const nextButton = carousel?.querySelector<HTMLButtonElement>("[data-project-next]") ?? null;
    const autoplayToggle =
      carousel?.querySelector<HTMLButtonElement>("[data-project-autoplay-toggle]") ?? null;
    const autoplayLabel =
      carousel?.querySelector<HTMLElement>("[data-project-autoplay-label]") ?? null;

    let scrollRaf = 0;
    let carouselRaf = 0;
    let activeProject = 0;
    let sequenceWidth = 0;
    let carouselOffset = 0;
    let carouselInView = false;
    let autoplayPausedByUser = false;
    let carouselInitialized = false;
    let dragging = false;
    let touching = false;
    let dragPointerId = -1;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let dragMoved = false;
    let dragCaptured = false;
    let suppressClickUntil = 0;
    let interactionResumeAt = 0;
    let lastCarouselTime = 0;
    let lastProgrammaticMobileScroll = 0;
    let allSlides: HTMLElement[] = [...originalSlides];
    let physicalOffsets: number[] = [];
    let physicalWidths: number[] = [];
    let originalOffsets: number[] = [];
    let renderedActiveProject = -1;
    let renderedClosestPhysical = -1;
    let renderedFocusValues: number[] = [];
    const generatedClones: HTMLElement[] = [];

    let manualTween:
      | {
          from: number;
          to: number;
          startedAt: number;
          duration: number;
        }
      | null = null;

    const isMobileCarousel = () => window.innerWidth <= 900;
    const currentPhysicalOffset = () =>
      isMobileCarousel() && track ? track.scrollLeft : carouselOffset;

    const setAutoplayUi = () => {
      if (!autoplayToggle || !autoplayLabel) return;
      autoplayToggle.setAttribute("aria-pressed", autoplayPausedByUser ? "true" : "false");
      autoplayToggle.setAttribute(
        "aria-label",
        autoplayPausedByUser
          ? "Retomar reprodução automática dos projetos"
          : "Pausar reprodução automática dos projetos",
      );
      autoplayLabel.textContent = autoplayPausedByUser ? "PLAY" : "PAUSE";
      carousel?.toggleAttribute("data-autoplay-paused", autoplayPausedByUser);
    };

    const prepareInfiniteTrack = () => {
      if (!track || originalSlides.length === 0 || generatedClones.length > 0) return;

      originalSlides.forEach((slide, index) => {
        slide.dataset.projectIndex = String(index);
      });

      const makeClone = (slide: HTMLElement, side: "before" | "after") => {
        const clone = slide.cloneNode(true) as HTMLElement;
        clone.dataset.projectClone = side;
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [tabindex]").forEach((node) => {
          node.tabIndex = -1;
        });
        generatedClones.push(clone);
        return clone;
      };

      const before = document.createDocumentFragment();
      originalSlides.forEach((slide) => before.appendChild(makeClone(slide, "before")));
      track.insertBefore(before, originalSlides[0]);

      originalSlides.forEach((slide) => track.appendChild(makeClone(slide, "after")));
      allSlides = Array.from(track.querySelectorAll<HTMLElement>("[data-project-slide]"));
    };

    const setTrackOffset = (offset: number) => {
      if (!track || isMobileCarousel()) return;
      carouselOffset = offset;
      track.style.setProperty("--carousel-x", `${-carouselOffset}px`);
    };

    const rebaseDesktopOffset = () => {
      if (!sequenceWidth) return;
      if (carouselOffset >= sequenceWidth * 2) carouselOffset -= sequenceWidth;
      if (carouselOffset < 0) carouselOffset += sequenceWidth;
      setTrackOffset(carouselOffset);
    };

    const rebaseMobileOffset = () => {
      if (!track || !sequenceWidth || !isMobileCarousel()) return;
      if (track.scrollLeft >= sequenceWidth * 2) {
        lastProgrammaticMobileScroll = performance.now();
        track.scrollLeft -= sequenceWidth;
      } else if (track.scrollLeft < 0) {
        lastProgrammaticMobileScroll = performance.now();
        track.scrollLeft += sequenceWidth;
      }
    };

    const setActiveVisualState = (physicalOffset: number) => {
      if (!carousel || !projectWindow || allSlides.length === 0 || originalSlides.length === 0) return;

      const viewportWidth = isMobileCarousel()
        ? Math.max(track?.clientWidth ?? 0, 1)
        : Math.max(projectWindow.clientWidth, 1);
      const viewportCenter = physicalOffset + viewportWidth / 2;
      let closestPhysical = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      allSlides.forEach((slide, index) => {
        const center = (physicalOffsets[index] ?? slide.offsetLeft) + (physicalWidths[index] ?? slide.offsetWidth) / 2;
        const distance = Math.abs(center - viewportCenter);
        const focus = clamp(1 - distance / Math.max(viewportWidth * 0.72, 1));
        if (Math.abs((renderedFocusValues[index] ?? -1) - focus) > 0.002) {
          slide.style.setProperty("--project-focus", focus.toFixed(3));
          renderedFocusValues[index] = focus;
        }
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPhysical = index;
        }
      });

      const closestSlide = allSlides[closestPhysical];
      const logicalIndex = Number(closestSlide?.dataset.projectIndex ?? 0);
      activeProject = Number.isFinite(logicalIndex) ? logicalIndex : 0;

      if (activeProject !== renderedActiveProject) {
        carousel.dataset.activeProject = String(activeProject);
        carousel.dataset.projectTreatment =
          originalSlides[activeProject]?.dataset.projectTreatment ?? "system";
        jumps.forEach((button, index) => {
          if (index === activeProject) button.setAttribute("aria-current", "step");
          else button.removeAttribute("aria-current");
        });
        renderedActiveProject = activeProject;
      }

      const cycleProgress = sequenceWidth
        ? mod(physicalOffset - sequenceWidth, sequenceWidth) / sequenceWidth
        : 0;
      carousel.style.setProperty("--projects-progress", cycleProgress.toFixed(4));

      if (closestPhysical !== renderedClosestPhysical) {
        if (renderedClosestPhysical >= 0) allSlides[renderedClosestPhysical]?.classList.remove("is-current");
        closestSlide?.classList.add("is-current");
        renderedClosestPhysical = closestPhysical;
      }
    };

    const measureCarousel = (preservePosition = true) => {
      if (!track || !projectWindow || originalSlides.length === 0) return;
      const previousWidth = sequenceWidth;
      const previousLogicalProgress = previousWidth
        ? mod(currentPhysicalOffset() - previousWidth, previousWidth) / previousWidth
        : 0;

      allSlides = Array.from(track.querySelectorAll<HTMLElement>("[data-project-slide]"));
      renderedFocusValues = new Array(allSlides.length).fill(-1);
      renderedClosestPhysical = -1;
      renderedActiveProject = -1;
      const firstOriginal = originalSlides[0];
      const firstAfter = allSlides.find(
        (slide) => slide.dataset.projectClone === "after" && slide.dataset.projectIndex === "0",
      );
      if (!firstOriginal || !firstAfter) return;

      sequenceWidth = Math.max(1, firstAfter.offsetLeft - firstOriginal.offsetLeft);
      const firstOriginalLeft = firstOriginal.offsetLeft;
      originalOffsets = originalSlides.map((slide) => slide.offsetLeft - firstOriginalLeft);
      physicalOffsets = allSlides.map((slide) => slide.offsetLeft);
      physicalWidths = allSlides.map((slide) => slide.offsetWidth);

      const targetOffset = sequenceWidth + previousLogicalProgress * sequenceWidth;
      if (!carouselInitialized || !preservePosition) {
        carouselOffset = sequenceWidth;
        if (isMobileCarousel()) {
          lastProgrammaticMobileScroll = performance.now();
          track.scrollLeft = sequenceWidth;
        } else {
          setTrackOffset(sequenceWidth);
        }
        carouselInitialized = true;
      } else if (isMobileCarousel()) {
        lastProgrammaticMobileScroll = performance.now();
        track.scrollLeft = targetOffset;
      } else {
        setTrackOffset(targetOffset);
      }

      setActiveVisualState(currentPhysicalOffset());
    };

    const normalizeForManualNavigation = () => {
      if (!sequenceWidth) return;
      if (isMobileCarousel() && track) {
        let offset = track.scrollLeft;
        while (offset < sequenceWidth * 0.5) offset += sequenceWidth;
        while (offset > sequenceWidth * 1.5) offset -= sequenceWidth;
        if (Math.abs(offset - track.scrollLeft) > 0.5) {
          lastProgrammaticMobileScroll = performance.now();
          track.scrollLeft = offset;
        }
      } else {
        while (carouselOffset < sequenceWidth * 0.5) carouselOffset += sequenceWidth;
        while (carouselOffset > sequenceWidth * 1.5) carouselOffset -= sequenceWidth;
        setTrackOffset(carouselOffset);
      }
    };

    const findTargetForProject = (index: number, direction: -1 | 0 | 1) => {
      if (!sequenceWidth || originalOffsets.length === 0) return currentPhysicalOffset();
      normalizeForManualNavigation();
      const current = currentPhysicalOffset();
      const logicalOffset = originalOffsets[index] ?? 0;
      const candidates = [logicalOffset, sequenceWidth + logicalOffset, sequenceWidth * 2 + logicalOffset];

      if (direction > 0) {
        const forward = candidates.filter((candidate) => candidate > current + 2);
        return forward.length ? Math.min(...forward) : sequenceWidth * 2 + logicalOffset;
      }
      if (direction < 0) {
        const backward = candidates.filter((candidate) => candidate < current - 2);
        return backward.length ? Math.max(...backward) : logicalOffset;
      }
      return candidates.reduce((best, candidate) =>
        Math.abs(candidate - current) < Math.abs(best - current) ? candidate : best,
      candidates[0]);
    };

    const startManualTween = (target: number, duration = 560) => {
      if (!track || !sequenceWidth) return;
      const from = currentPhysicalOffset();
      manualTween = {
        from,
        to: target,
        startedAt: performance.now(),
        duration: reduced.matches ? 1 : duration,
      };
      interactionResumeAt = performance.now() + duration + 180;
      startCarouselLoop();
    };

    const goToProject = (index: number, direction: -1 | 0 | 1 = 0) => {
      if (originalSlides.length === 0) return;
      const normalized = mod(index, originalSlides.length);
      const target = findTargetForProject(normalized, direction);
      startManualTween(target);
    };

    const updateParallax = () => {
      const viewport = Math.max(window.innerHeight, 1);
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -viewport * 0.25 || rect.top > viewport * 1.25) return;
        const strength = Number(item.dataset.parallax ?? 0.04);
        const centerDelta = rect.top + rect.height / 2 - viewport / 2;
        item.style.setProperty("--parallax-y", `${(-centerDelta * strength).toFixed(2)}px`);
      });
    };

    const updateScrollMotion = () => {
      updateParallax();
      scrollRaf = 0;
    };

    const requestScrollMotion = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(updateScrollMotion);
    };

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.dataset.motion = "reduced";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4%" },
    );

    if (reduced.matches) {
      revealAll();
    } else {
      root.dataset.motion = "enhanced";
      revealItems.forEach((item) => observer.observe(item));
    }

    const startCarouselLoop = () => {
      if (!track || carouselRaf) return;
      lastCarouselTime = performance.now();
      carouselRaf = requestAnimationFrame(runCarousel);
    };

    const carouselObserver = carousel
      ? new IntersectionObserver(
          ([entry]) => {
            carouselInView = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.32);
            if (carouselInView) startCarouselLoop();
          },
          { threshold: [0, 0.32, 0.6] },
        )
      : null;
    if (carousel && carouselObserver) carouselObserver.observe(carousel);

    prepareInfiniteTrack();
    tiltItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-tilt-surface], .rows article, .services article, .process li, .about li",
      ),
    );

    const cleanups: Array<() => void> = [];

    const bindRafPointerMove = (
      item: HTMLElement,
      handler: (event: PointerEvent) => void,
    ) => {
      let frame = 0;
      let latest: PointerEvent | null = null;
      const move = (event: PointerEvent) => {
        latest = event;
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (latest) handler(latest);
        });
      };
      item.addEventListener("pointermove", move);
      cleanups.push(() => {
        item.removeEventListener("pointermove", move);
        if (frame) cancelAnimationFrame(frame);
      });
    };

    const ambientMotionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).classList.toggle("is-motion-active", entry.isIntersecting);
        });
      },
      { rootMargin: "220px 0px", threshold: 0 },
    );
    if (sculpture) ambientMotionObserver.observe(sculpture);
    if (techRail) ambientMotionObserver.observe(techRail);
    cleanups.push(() => ambientMotionObserver.disconnect());

    if (!reduced.matches && finePointer.matches) {
      magneticItems.forEach((item) => {
        const move = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const x = event.clientX - (rect.left + rect.width / 2);
          const y = event.clientY - (rect.top + rect.height / 2);
          item.style.setProperty("--magnetic-x", `${(x * 0.14).toFixed(2)}px`);
          item.style.setProperty("--magnetic-y", `${(y * 0.14).toFixed(2)}px`);
        };
        const leave = () => {
          item.style.setProperty("--magnetic-x", "0px");
          item.style.setProperty("--magnetic-y", "0px");
        };
        bindRafPointerMove(item, move);
        item.addEventListener("pointerleave", leave);
        cleanups.push(() => item.removeEventListener("pointerleave", leave));
      });

      tiltItems.forEach((item) => {
        const move = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const px = clamp((event.clientX - rect.left) / Math.max(rect.width, 1));
          const py = clamp((event.clientY - rect.top) / Math.max(rect.height, 1));
          item.style.setProperty("--tilt-x", `${((0.5 - py) * 4.2).toFixed(2)}deg`);
          item.style.setProperty("--tilt-y", `${((px - 0.5) * 5).toFixed(2)}deg`);
          item.style.setProperty("--surface-x", `${(px * 100).toFixed(1)}%`);
          item.style.setProperty("--surface-y", `${(py * 100).toFixed(1)}%`);
        };
        const leave = () => {
          item.style.setProperty("--tilt-x", "0deg");
          item.style.setProperty("--tilt-y", "0deg");
          item.style.setProperty("--surface-x", "50%");
          item.style.setProperty("--surface-y", "50%");
        };
        bindRafPointerMove(item, move);
        item.addEventListener("pointerleave", leave);
        cleanups.push(() => item.removeEventListener("pointerleave", leave));
      });

      pointerFields.forEach((field) => {
        const move = (event: PointerEvent) => {
          const rect = field.getBoundingClientRect();
          const x = clamp((event.clientX - rect.left) / Math.max(rect.width, 1));
          const y = clamp((event.clientY - rect.top) / Math.max(rect.height, 1));
          field.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
          field.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
        };
        bindRafPointerMove(field, move);
      });

      if (sculpture) {
        const move = (event: PointerEvent) => {
          const rect = sculpture.getBoundingClientRect();
          const x = clamp((event.clientX - rect.left) / Math.max(rect.width, 1));
          const y = clamp((event.clientY - rect.top) / Math.max(rect.height, 1));
          sculpture.style.setProperty("--scene-ry", `${((x - 0.5) * 34).toFixed(2)}deg`);
          sculpture.style.setProperty("--scene-rx", `${((0.5 - y) * 26).toFixed(2)}deg`);
          sculpture.style.setProperty("--scene-x", `${((x - 0.5) * 18).toFixed(2)}px`);
          sculpture.style.setProperty("--scene-y", `${((y - 0.5) * 14).toFixed(2)}px`);
        };
        const leave = () => {
          sculpture.style.setProperty("--scene-ry", "-14deg");
          sculpture.style.setProperty("--scene-rx", "12deg");
          sculpture.style.setProperty("--scene-x", "0px");
          sculpture.style.setProperty("--scene-y", "0px");
        };
        bindRafPointerMove(sculpture, move);
        sculpture.addEventListener("pointerleave", leave);
        cleanups.push(() => sculpture.removeEventListener("pointerleave", leave));
      }
    }

    jumps.forEach((button, index) => {
      const click = () => goToProject(index, 0);
      button.addEventListener("click", click);
      cleanups.push(() => button.removeEventListener("click", click));
    });

    const previous = () => goToProject(activeProject - 1, -1);
    const next = () => goToProject(activeProject + 1, 1);
    previousButton?.addEventListener("click", previous);
    nextButton?.addEventListener("click", next);
    cleanups.push(() => previousButton?.removeEventListener("click", previous));
    cleanups.push(() => nextButton?.removeEventListener("click", next));

    const toggleAutoplay = () => {
      autoplayPausedByUser = !autoplayPausedByUser;
      setAutoplayUi();
      interactionResumeAt = performance.now() + 180;
      if (!autoplayPausedByUser) startCarouselLoop();
    };
    autoplayToggle?.addEventListener("click", toggleAutoplay);
    cleanups.push(() => autoplayToggle?.removeEventListener("click", toggleAutoplay));

    const onPointerDown = (event: PointerEvent) => {
      if (!track || event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, input, select, textarea, [data-carousel-interactive]")) {
        interactionResumeAt = performance.now() + 900;
        return;
      }
      manualTween = null;
      if (isMobileCarousel()) {
        touching = true;
        interactionResumeAt = Number.POSITIVE_INFINITY;
        return;
      }
      dragging = true;
      dragCaptured = false;
      dragPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartOffset = carouselOffset;
      dragMoved = false;
      interactionResumeAt = Number.POSITIVE_INFINITY;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!track || isMobileCarousel() || !dragging || event.pointerId !== dragPointerId) return;
      const delta = event.clientX - dragStartX;
      if (Math.abs(delta) > 7 && !dragMoved) {
        dragMoved = true;
        dragCaptured = true;
        track.classList.add("is-dragging");
        track.setPointerCapture?.(event.pointerId);
      }
      if (!dragMoved) return;
      event.preventDefault();
      carouselOffset = dragStartOffset - delta;
      if (sequenceWidth) {
        while (carouselOffset >= sequenceWidth * 2) {
          carouselOffset -= sequenceWidth;
          dragStartOffset -= sequenceWidth;
        }
        while (carouselOffset < 0) {
          carouselOffset += sequenceWidth;
          dragStartOffset += sequenceWidth;
        }
      }
      setTrackOffset(carouselOffset);
      setActiveVisualState(carouselOffset);
    };

    const finishPointer = (event: PointerEvent) => {
      if (!track) return;
      if (isMobileCarousel()) {
        touching = false;
        interactionResumeAt = performance.now() + 520;
        return;
      }
      if (!dragging || event.pointerId !== dragPointerId) return;
      dragging = false;
      track.classList.remove("is-dragging");
      if (dragCaptured) track.releasePointerCapture?.(event.pointerId);
      dragCaptured = false;
      if (dragMoved) suppressClickUntil = performance.now() + 280;
      interactionResumeAt = performance.now() + 320;
    };

    const suppressDraggedClick = (event: MouseEvent) => {
      if (performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    };


    const interactiveProjectLinks = track
      ? Array.from(track.querySelectorAll<HTMLElement>("[data-carousel-interactive]"))
      : [];
    interactiveProjectLinks.forEach((item) => {
      const pause = () => { interactionResumeAt = Number.POSITIVE_INFINITY; };
      const resume = () => { interactionResumeAt = performance.now() + 950; };
      item.addEventListener("pointerenter", pause);
      item.addEventListener("pointerleave", resume);
      item.addEventListener("focus", pause);
      item.addEventListener("blur", resume);
      cleanups.push(() => {
        item.removeEventListener("pointerenter", pause);
        item.removeEventListener("pointerleave", resume);
        item.removeEventListener("focus", pause);
        item.removeEventListener("blur", resume);
      });
    });

    track?.addEventListener("pointerdown", onPointerDown);
    track?.addEventListener("pointermove", onPointerMove);
    track?.addEventListener("pointerup", finishPointer);
    track?.addEventListener("pointercancel", finishPointer);
    track?.addEventListener("click", suppressDraggedClick, true);
    cleanups.push(() => track?.removeEventListener("pointerdown", onPointerDown));
    cleanups.push(() => track?.removeEventListener("pointermove", onPointerMove));
    cleanups.push(() => track?.removeEventListener("pointerup", finishPointer));
    cleanups.push(() => track?.removeEventListener("pointercancel", finishPointer));
    cleanups.push(() => track?.removeEventListener("click", suppressDraggedClick, true));

    const onTrackScroll = () => {
      if (!track || !isMobileCarousel()) return;
      const now = performance.now();
      rebaseMobileOffset();
      setActiveVisualState(track.scrollLeft);
      if (now - lastProgrammaticMobileScroll > 90) interactionResumeAt = now + 620;
    };
    track?.addEventListener("scroll", onTrackScroll, { passive: true });
    cleanups.push(() => track?.removeEventListener("scroll", onTrackScroll));

    const onCarouselKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };
    track?.addEventListener("keydown", onCarouselKeyDown);
    cleanups.push(() => track?.removeEventListener("keydown", onCarouselKeyDown));

    const onResize = () => {
      requestScrollMotion();
      window.setTimeout(() => measureCarousel(true), 80);
    };
    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const runCarousel = (now: number) => {
      if (!lastCarouselTime) lastCarouselTime = now;
      const deltaSeconds = Math.min((now - lastCarouselTime) / 1000, 0.05);
      lastCarouselTime = now;

      if (track && sequenceWidth > 0) {
        if (manualTween) {
          const progress = clamp((now - manualTween.startedAt) / manualTween.duration);
          const eased = easeInOutCubic(progress);
          const nextOffset = manualTween.from + (manualTween.to - manualTween.from) * eased;
          if (isMobileCarousel()) {
            lastProgrammaticMobileScroll = now;
            track.scrollLeft = nextOffset;
            rebaseMobileOffset();
            setActiveVisualState(track.scrollLeft);
          } else {
            carouselOffset = nextOffset;
            setTrackOffset(carouselOffset);
            setActiveVisualState(carouselOffset);
          }
          if (progress >= 1) {
            manualTween = null;
            if (isMobileCarousel()) rebaseMobileOffset();
            else rebaseDesktopOffset();
          }
        } else {
          const canAutoplay =
            carouselInView &&
            !autoplayPausedByUser &&
            !dragging &&
            !touching &&
            !document.hidden &&
            !reduced.matches &&
            now >= interactionResumeAt;

          if (canAutoplay) {
            const speed = isMobileCarousel() ? 34 : 58;
            const distance = speed * deltaSeconds;
            if (isMobileCarousel()) {
              lastProgrammaticMobileScroll = now;
              track.scrollLeft += distance;
              rebaseMobileOffset();
              setActiveVisualState(track.scrollLeft);
            } else {
              carouselOffset += distance;
              rebaseDesktopOffset();
              setActiveVisualState(carouselOffset);
            }
          }
        }
      }

      const shouldKeepRunning = Boolean(
        track && (
          manualTween ||
          dragging ||
          touching ||
          (carouselInView && !autoplayPausedByUser && !document.hidden && !reduced.matches)
        )
      );
      carouselRaf = shouldKeepRunning ? requestAnimationFrame(runCarousel) : 0;
    };

    const onVisibilityChange = () => {
      if (!document.hidden && carouselInView && !autoplayPausedByUser) startCarouselLoop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    cleanups.push(() => document.removeEventListener("visibilitychange", onVisibilityChange));

    setAutoplayUi();
    updateScrollMotion();
    if (track) {
      window.setTimeout(() => {
        measureCarousel(false);
        startCarouselLoop();
      }, 0);
    }

    return () => {
      observer.disconnect();
      carouselObserver?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", requestScrollMotion);
      window.removeEventListener("resize", onResize);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (carouselRaf) cancelAnimationFrame(carouselRaf);
      generatedClones.forEach((clone) => clone.remove());
      if (track) {
        track.style.removeProperty("--carousel-x");
        track.scrollLeft = 0;
      }
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
