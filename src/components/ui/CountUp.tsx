"use client";

import { useEffect, useRef } from "react";
import { formatNumber } from "@/lib/utils";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  useGrouping?: boolean;
  finalFormattedValue: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  useGrouping = false,
  finalFormattedValue,
  duration = 1400,
  className,
}: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion - initial DOM already renders finalFormattedValue
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic: smooth decelerating curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.round(target * easeOutProgress);
            const formatted = formatNumber(currentNum, useGrouping);

            // Direct DOM update avoids triggering 360 React re-renders/sec across simultaneous counters
            if (currentElement) {
              currentElement.textContent = `${prefix}${formatted}${suffix}`;
            }

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            } else if (currentElement) {
              currentElement.textContent = finalFormattedValue;
            }
          };

          frameRef.current = requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, suffix, prefix, useGrouping, finalFormattedValue, duration]);

  return (
    <span
      ref={elementRef}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
      aria-label={finalFormattedValue}
    >
      {finalFormattedValue}
    </span>
  );
}
