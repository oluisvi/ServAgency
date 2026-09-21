"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/brand";

const STORAGE_KEY = "servagency:thematic-entry-seen:v1";
const OPENING_MS = 1450;
const SAFETY_MS = 7000;

type EntryState = "hidden" | "waiting" | "opening";

function storageHasSeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage is progressive enhancement; the experience still completes safely.
  }
}

function afterFrames(count: number) {
  return new Promise<void>((resolve) => {
    const next = (remaining: number) => {
      if (remaining <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(() => next(remaining - 1));
    };
    next(count);
  });
}

export function ThematicEntry() {
  const [state, setState] = useState<EntryState>("waiting");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (storageHasSeen()) {
      document.documentElement.dataset.entry = "skip";
      setState("hidden");
      return;
    }
    if (reducedMotion) {
      markSeen();
      document.documentElement.dataset.entry = "skip";
      setState("hidden");
      return;
    }

    let cancelled = false;
    let opened = false;
    let openingTimer = 0;
    document.documentElement.dataset.entry = "show";

    const open = () => {
      if (cancelled || opened) return;
      opened = true;
      markSeen();
      setState("opening");
      openingTimer = window.setTimeout(() => {
        if (!cancelled) {
          document.documentElement.dataset.entry = "skip";
          setState("hidden");
        }
      }, OPENING_MS);
    };

    const safetyTimer = window.setTimeout(open, SAFETY_MS);

    const prepare = async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready;
        await afterFrames(3);
        await new Promise((resolve) => window.setTimeout(resolve, 260));
      } finally {
        window.clearTimeout(safetyTimer);
        open();
      }
    };

    void prepare();

    return () => {
      cancelled = true;
      window.clearTimeout(safetyTimer);
      window.clearTimeout(openingTimer);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div className={`thematic-entry thematic-entry-${state}`} aria-hidden="true">
      <div className="entry-panel entry-panel-a" />
      <div className="entry-panel entry-panel-b" />
      <div className="entry-center">
        <div className="entry-coordinate">01 / SIGNAL ORIGIN</div>
        <div className="entry-mark-wrap">
          <BrandMark className="entry-mark" />
          <i className="entry-pulse" />
        </div>
        <div className="entry-copy">
          <span>ESTRATÉGIA</span>
          <i />
          <span>DESIGN</span>
          <i />
          <span>ENGENHARIA</span>
        </div>
        <p>Preparando o sistema</p>
      </div>
    </div>
  );
}
