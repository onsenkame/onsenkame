"use client";

import { useEffect, useRef } from "react";
import styles from "./layout.module.css";

export default function CopperRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const initialX = window.innerWidth - 64;
    const initialY = 80;
    ring.style.transform = `translate3d(${initialX}px, ${initialY}px, 0) translate(-50%, -50%)`;
    ring.style.opacity = "1";

    let pendingX = initialX;
    let pendingY = initialY;
    let rafQueued = false;

    const flush = () => {
      rafQueued = false;
      ring.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: PointerEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!rafQueued) {
        rafQueued = true;
        requestAnimationFrame(flush);
      }
    };

    const onLeave = () => {
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      ring.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
    };
  }, []);

  return <div ref={ringRef} className={styles.copperRing} aria-hidden="true" />;
}
