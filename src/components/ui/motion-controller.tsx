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
    const track = carousel?.querySelector<HTMLElement>("[data-project-track]") ?? null;
    const slides = carousel
      ? Array.from(carousel.querySelectorAll<HTMLElement>("[data-project-slide]"))
      : [];
    const jumps = carousel
      ? Array.from(carousel.querySelectorAll<HTMLButtonElement>("[data-project-jump]"))
      : [];

    let raf = 0;
    let mobileCarouselRaf = 0;
    let activeProject = -1;

    const setActiveProject = (index: number) => {
      if (!carousel || index < 0 || index >= slides.length || index === activeProject) return;
      activeProject = index;
      carousel.dataset.activeProject = String(index);
      carousel.dataset.projectTreatment = slides[index]?.dataset.projectTreatment ?? "system";
      jumps.forEach((button, buttonIndex) => {
        if (buttonIndex === index) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-current", slideIndex === index);
      });
    };

    const updateProjectFocus = (viewportCenter: number) => {
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        const focus = clamp(1 - distance / Math.max(window.innerWidth * 0.72, 1));
        slide.style.setProperty("--project-focus", focus.toFixed(3));
      });
    };

    const updateDesktopCarousel = () => {
      if (!carousel || !track || slides.length === 0 || window.innerWidth <= 900) return;
      const rect = carousel.getBoundingClientRect();
      const scrollRange = Math.max(1, carousel.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollRange);
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + 24);
      track.style.transform = `translate3d(${-progress * maxTranslate}px,0,0)`;
      carousel.style.setProperty("--projects-progress", progress.toFixed(4));
      setActiveProject(Math.round(progress * (slides.length - 1)));
      updateProjectFocus(window.innerWidth / 2);
    };

    const updateMobileCarousel = () => {
      if (!carousel || !track || slides.length === 0 || window.innerWidth > 900) return;
      const viewportCenter = window.innerWidth / 2;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setActiveProject(closest);
      carousel.style.setProperty(
        "--projects-progress",
        slides.length > 1 ? (closest / (slides.length - 1)).toFixed(4) : "1",
      );
      updateProjectFocus(viewportCenter);
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
      updateDesktopCarousel();
      raf = 0;
    };

    const requestScrollMotion = () => {
      if (raf) return;
      raf = requestAnimationFrame(updateScrollMotion);
    };

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.dataset.motion = "reduced";
      if (carousel) carousel.style.setProperty("--projects-progress", "1");
      if (track) track.style.removeProperty("transform");
    };

    if (reduced.matches) {
      revealAll();
      setActiveProject(0);
      updateMobileCarousel();
      return;
    }

    root.dataset.motion = "enhanced";

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
    revealItems.forEach((item) => observer.observe(item));

    const cleanups: Array<() => void> = [];

    if (finePointer.matches) {
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
      const click = () => {
        if (window.innerWidth <= 900 && track) {
          const slide = slides[index];
          slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          return;
        }
        if (!carousel || slides.length < 2) return;
        const scrollRange = Math.max(1, carousel.offsetHeight - window.innerHeight);
        const targetTop = window.scrollY + carousel.getBoundingClientRect().top;
        window.scrollTo({
          top: targetTop + scrollRange * (index / (slides.length - 1)),
          behavior: "smooth",
        });
      };
      button.addEventListener("click", click);
      cleanups.push(() => button.removeEventListener("click", click));
    });

    const onTrackScroll = () => requestMobileCarousel();
    track?.addEventListener("scroll", onTrackScroll, { passive: true });
    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", requestScrollMotion, { passive: true });
    window.addEventListener("resize", requestMobileCarousel, { passive: true });

    setActiveProject(0);
    updateScrollMotion();
    updateMobileCarousel();

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      track?.removeEventListener("scroll", onTrackScroll);
      window.removeEventListener("scroll", requestScrollMotion);
      window.removeEventListener("resize", requestScrollMotion);
      window.removeEventListener("resize", requestMobileCarousel);
      if (raf) cancelAnimationFrame(raf);
      if (mobileCarouselRaf) cancelAnimationFrame(mobileCarouselRaf);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
