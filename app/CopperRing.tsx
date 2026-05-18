"use client";

import { useEffect, useRef } from "react";
import styles from "./layout.module.css";

export default function CopperRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const initialX = window.innerWidth - 64;
    const initialY = 80;
    target.current = { x: initialX, y: initialY };
    current.current = { x: initialX, y: initialY };
    ring.style.transform = `translate3d(${initialX}px, ${initialY}px, 0) translate(-50%, -50%)`;
    ring.style.opacity = "1";

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!initialized.current) {
        initialized.current = true;
      }
    };

    const tick = () => {
      const ease = 0.12;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={ringRef} className={styles.copperRing} aria-hidden="true" />;
}
