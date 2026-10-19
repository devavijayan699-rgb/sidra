"use client";

import { useRef, ReactNode, useCallback } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number; // Distance multiplier (default 0.25 - subtle & clean)
  className?: string;
}

export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafId = useRef<number | null>(null);

  const handlePointerEnter = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
      ref.current.style.transition = "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)";
      ref.current.style.willChange = "transform";
    }
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

      let rect = rectRef.current;
      if (!rect && ref.current) {
        rect = ref.current.getBoundingClientRect();
        rectRef.current = rect;
      }
      if (!rect || !ref.current) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      // Clamp maximum translation to 5px to keep effect clean & refined
      const clampedX = Math.max(-5, Math.min(5, deltaX));
      const clampedY = Math.max(-5, Math.min(5, deltaY));

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
        }
      });
    },
    [strength]
  );

  const handlePointerLeave = useCallback(() => {
    rectRef.current = null;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (ref.current) {
      ref.current.style.transition = "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
      ref.current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  return (
    <div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      {children}
    </div>
  );
}
