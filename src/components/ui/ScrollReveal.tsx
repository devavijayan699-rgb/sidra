"use client";

import { useEffect, useRef, ReactNode, HTMLAttributes } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  staggerSelector?: string;
  staggerMs?: number;
  yOffset?: number;
  id?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  staggerSelector,
  staggerMs = 60,
  yOffset = 18,
  id,
  ...restProps
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect accessibility: prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("revealed");
      return;
    }

    // Pre-bake stagger delays immediately so they are ready before reveal triggers
    if (staggerSelector) {
      const items = el.querySelectorAll<HTMLElement>(staggerSelector);
      items.forEach((item, idx) => {
        item.style.transitionDelay = `${idx * (staggerMs || 70)}ms`;
      });
    }

    let isRevealed = false;
    const reveal = () => {
      if (isRevealed) return;
      isRevealed = true;
      el.classList.add("revealed");
    };

    // Synchronized GSAP ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: reveal,
    });

    // Native IntersectionObserver fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "-30px" }
    );
    observer.observe(el);

    // Initial viewport check with rAF so initial CSS opacity:0 is registered before transition
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      requestAnimationFrame(() => {
        reveal();
      });
    }

    return () => {
      st.kill();
      observer.disconnect();
    };
  }, [staggerSelector, staggerMs]);

  return (
    <div
      ref={ref}
      id={id}
      className={`revealContainer ${staggerSelector ? "hasStagger" : ""} ${className}`.trim()}
      style={{ "--reveal-y": `${yOffset}px` } as React.CSSProperties}
      {...restProps}
    >
      {children}
    </div>
  );
}
