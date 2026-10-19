"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./SplitText.module.css";

interface SplitTextProps {
  text: string;
  className?: string;
  delayMs?: number;
  staggerMs?: number;
  durationMs?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function SplitText({
  text,
  className = "",
  delayMs = 60,
  staggerMs = 45,
  durationMs = 520,
  as: Component = "span",
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    // Mount rAF so initial CSS translateY(115%) is painted before transition starts
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 40);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Component
      ref={containerRef as unknown as React.RefObject<HTMLHeadingElement>}
      className={`${styles.splitContainer} ${isRevealed ? styles.splitRevealed : ""} ${className}`.trim()}
      style={{ "--split-duration": `${durationMs}ms` } as React.CSSProperties}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className={styles.wordWrapper}>
          <span
            className={styles.wordToken}
            style={{
              transitionDelay: `${delayMs + wordIdx * staggerMs}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
