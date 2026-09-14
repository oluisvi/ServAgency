"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".scene-reveal, .project-scene"),
    );

    const revealAll = () => {
      revealItems.forEach((item) => item.classList.add("is-active"));
      root.dataset.motion = "reduced";
    };

    if (reduced.matches) {
      revealAll();
      return;
    }

    root.dataset.motion = "enhanced";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          }
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let ticking = false;
    const updateProgress = () => {
      const scrollable = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
      root.style.setProperty("--page-progress", progress.toFixed(4));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.style.removeProperty("--page-progress");
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
