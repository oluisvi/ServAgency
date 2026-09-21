"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-reveal, .motion-clip, .motion-stagger"),
    );
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const carousel = document.querySelector<HTMLElement>("[data-project-carousel]");
    const track = carousel?.querySelector<HTMLElement>("[data-project-track]") ?? null;
    const slides = carousel
      ? Array.from(carousel.querySelectorAll<HTMLElement>("[data-project-slide]"))
      : [];
    const markers = carousel
      ? Array.from(carousel.querySelectorAll<HTMLElement>("[data-project-jump]"))
      : [];

    let raf = 0;
    let mobileCarouselRaf = 0;
    let activeProject = -1;

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.dataset.motion = "reduced";
      if (carousel) carousel.style.setProperty("--projects-progress", "1");
      if (track) track.style.removeProperty("transform");
    };

    const setActiveProject = (index: number) => {
      if (!carousel || index === activeProject || index < 0 || index >= slides.length) return;
      activeProject = index;
      carousel.dataset.activeProject = String(index);
      carousel.dataset.projectTreatment = slides[index]?.dataset.projectTreatment ?? "system";
      markers.forEach((marker, markerIndex) => {
        if (markerIndex === index) marker.setAttribute("aria-current", "step");
        else marker.removeAttribute("aria-current");
      });
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-current", slideIndex === index);
      });
    };

    const updateDesktopCarousel = () => {
      if (!carousel || !track || slides.length === 0) return;
      const desktop = window.innerWidth > 900;
      if (!desktop) return;

      const rect = carousel.getBoundingClientRect();
      const scrollRange = Math.max(1, carousel.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollRange);
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + 32);
      const translate = -progress * maxTranslate;
      track.style.transform = `translate3d(${translate}px,0,0)`;
      carousel.style.setProperty("--projects-progress", progress.toFixed(4));

      const active = Math.round(progress * (slides.length - 1));
      setActiveProject(active);

      const viewportCenter = window.innerWidth / 2;
      slides.forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - viewportCenter) / Math.max(window.innerWidth, 1);
        slide.style.setProperty("--project-focus", clamp(1 - distance * 1.8).toFixed(3));
      });
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
    };

    const updateParallax = () => {
      const viewport = Math.max(window.innerHeight, 1);
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -viewport * 0.25 || rect.top > viewport * 1.25) return;
        const strength = Number(item.dataset.parallax ?? 0.08);
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
      raf = window.requestAnimationFrame(updateScrollMotion);
    };

    if (reducedQuery.matches) {
      revealAll();
      setActiveProject(0);
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
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );
    revealItems.forEach((item) => observer.observe(item));

    const magneticCleanups = magneticItems.map((item) => {
      if (!finePointerQuery.matches) return () => undefined;
      const onMove = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        item.style.setProperty("--magnetic-x", `${(x * 0.16).toFixed(2)}px`);
        item.style.setProperty("--magnetic-y", `${(y * 0.16).toFixed(2)}px`);
      };
      const onLeave = () => {
        item.style.setProperty("--magnetic-x", "0px");
        item.style.setProperty("--magnetic-y", "0px");
      };
      item.addEventListener("pointermove", onMove);
      item.addEventListener("pointerleave", onLeave);
      return () => {
        item.removeEventListener("pointermove", onMove);
        item.removeEventListener("pointerleave", onLeave);
      };
    });

    const jumpCleanups = markers.map((marker, index) => {
      const onClick = () => {
        if (!carousel || !track) return;
        if (window.innerWidth <= 900) {
          slides[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          return;
        }
        const scrollRange = Math.max(1, carousel.offsetHeight - window.innerHeight);
        const target = carousel.offsetTop + scrollRange * (index / Math.max(1, slides.length - 1));
        window.scrollTo({ top: target, behavior: "smooth" });
      };
      marker.addEventListener("click", onClick);
      return () => marker.removeEventListener("click", onClick);
    });

    const onTrackScroll = () => {
      if (window.innerWidth > 900 || mobileCarouselRaf) return;
      mobileCarouselRaf = window.requestAnimationFrame(() => {
        updateMobileCarousel();
        mobileCarouselRaf = 0;
      });
    };

    track?.addEventListener("scroll", onTrackScroll, { passive: true });
    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", requestScrollMotion, { passive: true });
    setActiveProject(0);
    updateScrollMotion();
    updateMobileCarousel();

    return () => {
      observer.disconnect();
      magneticCleanups.forEach((cleanup) => cleanup());
      jumpCleanups.forEach((cleanup) => cleanup());
      track?.removeEventListener("scroll", onTrackScroll);
      window.removeEventListener("scroll", requestScrollMotion);
      window.removeEventListener("resize", requestScrollMotion);
      if (raf) cancelAnimationFrame(raf);
      if (mobileCarouselRaf) cancelAnimationFrame(mobileCarouselRaf);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
