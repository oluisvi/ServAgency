"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

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
    const tiltItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-tilt-surface], .rows article, .services article, .process li, .about li",
      ),
    );
    const pointerFields = Array.from(document.querySelectorAll<HTMLElement>("[data-pointer-field]"));
    const sculpture = document.querySelector<HTMLElement>("[data-sculpture]");

    const carousel = document.querySelector<HTMLElement>("[data-project-carousel]");
    const projectWindow = carousel?.querySelector<HTMLElement>("[data-project-window]") ?? null;
    const track = carousel?.querySelector<HTMLElement>("[data-project-track]") ?? null;
    const slides = carousel
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

    let raf = 0;
    let mobileCarouselRaf = 0;
    let activeProject = 0;
    let carouselOffsets: number[] = [];
    let carouselOffset = 0;
    let carouselInView = false;
    let autoplayPausedByUser = false;
    let pauseUntil = 0;
    let autoplayTimer = 0;
    let suppressClickUntil = 0;
    let programmaticMobileScrollUntil = 0;

    let dragging = false;
    let dragPointerId = -1;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let dragMoved = false;

    const isMobileCarousel = () => window.innerWidth <= 900;

    const pauseAutoplayTemporarily = (duration = 7500) => {
      pauseUntil = Date.now() + duration;
    };

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

    const setActiveState = (index: number) => {
      if (!carousel || slides.length === 0) return;
      const normalized = Math.max(0, Math.min(slides.length - 1, index));
      activeProject = normalized;
      carousel.dataset.activeProject = String(normalized);
      carousel.dataset.projectTreatment = slides[normalized]?.dataset.projectTreatment ?? "system";
      carousel.style.setProperty(
        "--projects-progress",
        slides.length > 1 ? (normalized / (slides.length - 1)).toFixed(4) : "1",
      );

      jumps.forEach((button, buttonIndex) => {
        if (buttonIndex === normalized) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
      slides.forEach((slide, slideIndex) => {
        const distance = Math.abs(slideIndex - normalized);
        const focus = clamp(1 - distance * 0.72);
        slide.classList.toggle("is-current", slideIndex === normalized);
        slide.style.setProperty("--project-focus", focus.toFixed(3));
      });
    };

    const measureCarousel = () => {
      if (!track || slides.length === 0 || isMobileCarousel()) return;
      const firstLeft = slides[0]?.offsetLeft ?? 0;
      carouselOffsets = slides.map((slide) => Math.max(0, slide.offsetLeft - firstLeft));
      carouselOffset = carouselOffsets[activeProject] ?? 0;
      track.style.setProperty("--carousel-x", `${-carouselOffset}px`);
    };

    const renderDesktopOffset = (offset: number, immediate = false) => {
      if (!track || isMobileCarousel()) return;
      const maxOffset = carouselOffsets.at(-1) ?? 0;
      carouselOffset = Math.max(0, Math.min(maxOffset, offset));
      track.classList.toggle("is-immediate", immediate);
      track.style.setProperty("--carousel-x", `${-carouselOffset}px`);

      if (carouselOffsets.length > 0) {
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;
        carouselOffsets.forEach((candidate, index) => {
          const distance = Math.abs(candidate - carouselOffset);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        slides.forEach((slide, index) => {
          const distance = Math.abs(carouselOffsets[index] - carouselOffset);
          const slideWidth = Math.max(slide.offsetWidth, 1);
          const focus = clamp(1 - distance / (slideWidth * 0.92));
          slide.style.setProperty("--project-focus", focus.toFixed(3));
        });

        if (nearestIndex !== activeProject && !dragging) setActiveState(nearestIndex);
      }
    };

    const scrollMobileToProject = (index: number, smooth = true) => {
      if (!track || !slides[index]) return;
      const slide = slides[index];
      const left = slide.offsetLeft - Math.max(0, (track.clientWidth - slide.offsetWidth) / 2);
      programmaticMobileScrollUntil = performance.now() + (smooth ? 1100 : 120);
      track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
    };

    const goToProject = (
      index: number,
      options: { smooth?: boolean; pause?: boolean } = {},
    ) => {
      if (slides.length === 0) return;
      const normalized = ((index % slides.length) + slides.length) % slides.length;
      const smooth = options.smooth ?? true;
      if (options.pause ?? true) pauseAutoplayTemporarily();
      setActiveState(normalized);

      if (isMobileCarousel()) {
        scrollMobileToProject(normalized, smooth && !reduced.matches);
        return;
      }

      measureCarousel();
      renderDesktopOffset(carouselOffsets[normalized] ?? 0, !smooth || reduced.matches);
      if (track) {
        window.setTimeout(() => track.classList.remove("is-immediate"), smooth ? 700 : 0);
      }
    };

    const updateMobileCarousel = () => {
      if (!carousel || !track || slides.length === 0 || !isMobileCarousel()) return;
      const trackRect = track.getBoundingClientRect();
      const viewportCenter = trackRect.left + track.clientWidth / 2;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
        const focus = clamp(1 - distance / Math.max(track.clientWidth * 0.78, 1));
        slide.style.setProperty("--project-focus", focus.toFixed(3));
      });
      setActiveState(closest);
      mobileCarouselRaf = 0;
    };

    const requestMobileCarousel = () => {
      if (mobileCarouselRaf) return;
      mobileCarouselRaf = requestAnimationFrame(updateMobileCarousel);
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
      raf = 0;
    };

    const requestScrollMotion = () => {
      if (raf) return;
      raf = requestAnimationFrame(updateScrollMotion);
    };

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.dataset.motion = "reduced";
      setActiveState(0);
      if (track) track.style.removeProperty("--carousel-x");
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

    const carouselObserver = carousel
      ? new IntersectionObserver(
          ([entry]) => {
            carouselInView = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.45);
          },
          { threshold: [0, 0.45, 0.75] },
        )
      : null;
    if (carousel && carouselObserver) carouselObserver.observe(carousel);

    const cleanups: Array<() => void> = [];

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
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          item.removeEventListener("pointermove", move);
          item.removeEventListener("pointerleave", leave);
        });
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
        item.addEventListener("pointermove", move);
        item.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          item.removeEventListener("pointermove", move);
          item.removeEventListener("pointerleave", leave);
        });
      });

      pointerFields.forEach((field) => {
        const move = (event: PointerEvent) => {
          const rect = field.getBoundingClientRect();
          const x = clamp((event.clientX - rect.left) / Math.max(rect.width, 1));
          const y = clamp((event.clientY - rect.top) / Math.max(rect.height, 1));
          field.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
          field.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
        };
        field.addEventListener("pointermove", move);
        cleanups.push(() => field.removeEventListener("pointermove", move));
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
        sculpture.addEventListener("pointermove", move);
        sculpture.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          sculpture.removeEventListener("pointermove", move);
          sculpture.removeEventListener("pointerleave", leave);
        });
      }
    }

    jumps.forEach((button, index) => {
      const click = () => goToProject(index);
      button.addEventListener("click", click);
      cleanups.push(() => button.removeEventListener("click", click));
    });

    const previous = () => goToProject(activeProject - 1);
    const next = () => goToProject(activeProject + 1);
    previousButton?.addEventListener("click", previous);
    nextButton?.addEventListener("click", next);
    cleanups.push(() => previousButton?.removeEventListener("click", previous));
    cleanups.push(() => nextButton?.removeEventListener("click", next));

    const toggleAutoplay = () => {
      autoplayPausedByUser = !autoplayPausedByUser;
      setAutoplayUi();
      if (!autoplayPausedByUser) pauseUntil = Date.now() + 900;
    };
    autoplayToggle?.addEventListener("click", toggleAutoplay);
    cleanups.push(() => autoplayToggle?.removeEventListener("click", toggleAutoplay));

    const onTrackScroll = () => {
      if (!isMobileCarousel()) return;
      if (performance.now() > programmaticMobileScrollUntil) pauseAutoplayTemporarily(5000);
      requestMobileCarousel();
    };
    track?.addEventListener("scroll", onTrackScroll, { passive: true });

    const onPointerDown = (event: PointerEvent) => {
      if (!track || isMobileCarousel() || event.button !== 0) return;
      measureCarousel();
      dragging = true;
      dragPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartOffset = carouselOffset;
      dragMoved = false;
      pauseAutoplayTemporarily(9000);
      track.classList.add("is-dragging");
      track.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!track || !dragging || event.pointerId !== dragPointerId) return;
      const delta = event.clientX - dragStartX;
      if (Math.abs(delta) > 6) dragMoved = true;
      if (!dragMoved) return;
      event.preventDefault();
      renderDesktopOffset(dragStartOffset - delta, true);
    };

    const finishDrag = (event: PointerEvent) => {
      if (!track || !dragging || event.pointerId !== dragPointerId) return;
      dragging = false;
      track.classList.remove("is-dragging");
      track.releasePointerCapture?.(event.pointerId);
      if (dragMoved) suppressClickUntil = performance.now() + 280;

      let nearestIndex = activeProject;
      let nearestDistance = Number.POSITIVE_INFINITY;
      carouselOffsets.forEach((offset, index) => {
        const distance = Math.abs(offset - carouselOffset);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      goToProject(nearestIndex, { pause: true, smooth: true });
    };

    const suppressDraggedClick = (event: MouseEvent) => {
      if (performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    track?.addEventListener("pointerdown", onPointerDown);
    track?.addEventListener("pointermove", onPointerMove);
    track?.addEventListener("pointerup", finishDrag);
    track?.addEventListener("pointercancel", finishDrag);
    track?.addEventListener("click", suppressDraggedClick, true);
    cleanups.push(() => track?.removeEventListener("pointerdown", onPointerDown));
    cleanups.push(() => track?.removeEventListener("pointermove", onPointerMove));
    cleanups.push(() => track?.removeEventListener("pointerup", finishDrag));
    cleanups.push(() => track?.removeEventListener("pointercancel", finishDrag));
    cleanups.push(() => track?.removeEventListener("click", suppressDraggedClick, true));

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

    const pauseOnIntent = () => pauseAutoplayTemporarily(9000);
    projectWindow?.addEventListener("wheel", pauseOnIntent, { passive: true });
    projectWindow?.addEventListener("touchstart", pauseOnIntent, { passive: true });
    carousel?.addEventListener("focusin", pauseOnIntent);
    cleanups.push(() => projectWindow?.removeEventListener("wheel", pauseOnIntent));
    cleanups.push(() => projectWindow?.removeEventListener("touchstart", pauseOnIntent));
    cleanups.push(() => carousel?.removeEventListener("focusin", pauseOnIntent));

    const onResize = () => {
      requestScrollMotion();
      requestMobileCarousel();
      window.setTimeout(() => {
        measureCarousel();
        if (isMobileCarousel()) scrollMobileToProject(activeProject, false);
        else renderDesktopOffset(carouselOffsets[activeProject] ?? 0, true);
      }, 80);
    };

    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    autoplayTimer = window.setInterval(() => {
      if (
        !carouselInView ||
        autoplayPausedByUser ||
        dragging ||
        document.hidden ||
        reduced.matches ||
        Date.now() < pauseUntil
      ) {
        return;
      }
      goToProject(activeProject + 1, { pause: false, smooth: true });
    }, 5200);

    setAutoplayUi();
    setActiveState(0);
    updateScrollMotion();
    measureCarousel();
    renderDesktopOffset(0, true);
    updateMobileCarousel();

    return () => {
      observer.disconnect();
      carouselObserver?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      track?.removeEventListener("scroll", onTrackScroll);
      window.removeEventListener("scroll", requestScrollMotion);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      if (mobileCarouselRaf) cancelAnimationFrame(mobileCarouselRaf);
      if (autoplayTimer) window.clearInterval(autoplayTimer);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
