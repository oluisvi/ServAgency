"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading",
  ".split-layout > div",
  ".audit-grid > div",
  ".service-list article",
  ".process-route li",
  ".project-list article",
  ".technology-rail .page-shell > *",
  ".about > div",
  ".faq > div",
  ".contact-grid > div",
  ".footer-grid > div",
].join(",");

export function MotionController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const groupOrders = new Map<Element | null, number>();

    elements.forEach((element, index) => {
      const group = element.parentElement;
      const order = groupOrders.get(group) ?? 0;
      groupOrders.set(group, order + 1);
      element.classList.add("reveal-item");
      element.dataset.revealDirection = index % 2 === 0 ? "left" : "right";
      element.style.setProperty("--reveal-order", String(Math.min(order, 4)));
    });
    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("reveal-item", "is-revealed");
        delete element.dataset.revealDirection;
        element.style.removeProperty("--reveal-order");
      });
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
