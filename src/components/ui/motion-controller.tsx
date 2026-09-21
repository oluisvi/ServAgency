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
    const prev = carousel?.querySelector<HTMLButtonElement>("[data-project-prev]") ?? null;
    const next = carousel?.querySelector<HTMLButtonElement>("[data-project-next]") ?? null;
    const status = carousel?.querySelector<HTMLElement>("[data-project-status]") ?? null;

    let scrollRaf = 0;
    let carouselRaf = 0;
    let activeProject = -1;

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      root.dataset.motion = "reduced";
    };

    const setActiveProject = (index: number) => {
      if (!carousel || index < 0 || index >= slides.length) return;
      if (index !== activeProject) {
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
        if (status) status.textContent = `${slides[index]?.querySelector("h3")?.textContent ?? "Projeto"}, ${index + 1} de ${slides.length}`;
      }
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    };

    const getNearestSlide = () => {
      if (!track || slides.length === 0) return 0;
      const center = track.scrollLeft + track.clientWidth / 2;
      let index = 0;
      let distance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, slideIndex) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const nextDistance = Math.abs(slideCenter - center);
        if (nextDistance < distance) {
          distance = nextDistance;
          index = slideIndex;
        }
      });
      return index;
    };

    const updateCarousel = () => {
      if (!carousel || !track || slides.length === 0) return;
      const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
      const progress = clamp(track.scrollLeft / maxScroll);
      carousel.style.setProperty("--projects-progress", progress.toFixed(4));
      const nearest = getNearestSlide();
      setActiveProject(nearest);

      const viewportCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - viewportCenter);
        const focus = clamp(1 - distance / Math.max(track.clientWidth * 0.72, 1));
        slide.style.setProperty("--project-focus", focus.toFixed(3));
      });
      carouselRaf = 0;
    };

    const requestCarouselUpdate = () => {
      if (carouselRaf) return;
      carouselRaf = window.requestAnimationFrame(updateCarousel);
    };

    const scrollToProject = (index: number) => {
      const slide = slides[index];
      if (!track || !slide) return;
      const target = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
      track.scrollTo({ left: Math.max(0, target), behavior: reduced.matches ? "auto" : "smooth" });
    };

    const updateParallax = () => {
      const viewport = Math.max(window.innerHeight, 1);
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -viewport * 0.2 || rect.top > viewport * 1.2) return;
        const strength = Number(item.dataset.parallax ?? 0.04);
        const centerDelta = rect.top + rect.height / 2 - viewport / 2;
        item.style.setProperty("--parallax-y", `${(-centerDelta * strength).toFixed(2)}px`);
      });
      scrollRaf = 0;
    };

    const requestScrollUpdate = () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(updateParallax);
    };

    if (reduced.matches) {
      revealAll();
      setActiveProject(0);
      updateCarousel();
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
      { threshold: 0.1, rootMargin: "0px 0px -6%" },
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
          item.style.setProperty("--tilt-x", `${((0.5 - py) * 4.5).toFixed(2)}deg`);
          item.style.setProperty("--tilt-y", `${((px - 0.5) * 5.5).toFixed(2)}deg`);
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
      const click = () => scrollToProject(index);
      button.addEventListener("click", click);
      cleanups.push(() => button.removeEventListener("click", click));
    });

    if (prev) {
      const click = () => scrollToProject(Math.max(0, activeProject - 1));
      prev.addEventListener("click", click);
      cleanups.push(() => prev.removeEventListener("click", click));
    }
    if (next) {
      const click = () => scrollToProject(Math.min(slides.length - 1, activeProject + 1));
      next.addEventListener("click", click);
      cleanups.push(() => next.removeEventListener("click", click));
    }

    if (track) {
      let dragging = false;
      let startX = 0;
      let startScroll = 0;
      const pointerDown = (event: PointerEvent) => {
        if (!finePointer.matches || event.button !== 0) return;
        if ((event.target as HTMLElement).closest("a,button")) return;
        dragging = true;
        startX = event.clientX;
        startScroll = track.scrollLeft;
        track.classList.add("is-dragging");
        track.setPointerCapture(event.pointerId);
      };
      const pointerMove = (event: PointerEvent) => {
        if (!dragging) return;
        track.scrollLeft = startScroll - (event.clientX - startX);
      };
      const pointerUp = (event: PointerEvent) => {
        if (!dragging) return;
        dragging = false;
        track.classList.remove("is-dragging");
        if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
        scrollToProject(getNearestSlide());
      };
      const keyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollToProject(Math.min(slides.length - 1, activeProject + 1));
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollToProject(Math.max(0, activeProject - 1));
        }
      };
      track.addEventListener("scroll", requestCarouselUpdate, { passive: true });
      track.addEventListener("pointerdown", pointerDown);
      track.addEventListener("pointermove", pointerMove);
      track.addEventListener("pointerup", pointerUp);
      track.addEventListener("pointercancel", pointerUp);
      track.addEventListener("keydown", keyDown);
      cleanups.push(() => {
        track.removeEventListener("scroll", requestCarouselUpdate);
        track.removeEventListener("pointerdown", pointerDown);
        track.removeEventListener("pointermove", pointerMove);
        track.removeEventListener("pointerup", pointerUp);
        track.removeEventListener("pointercancel", pointerUp);
        track.removeEventListener("keydown", keyDown);
      });
    }

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestCarouselUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate, { passive: true });
    setActiveProject(0);
    updateCarousel();
    updateParallax();

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestCarouselUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (carouselRaf) cancelAnimationFrame(carouselRaf);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
