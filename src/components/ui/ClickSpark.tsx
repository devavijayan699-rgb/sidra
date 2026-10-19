"use client";

import { useRef, useCallback, useEffect, ReactNode } from "react";
import styles from "./ClickSpark.module.css";

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  opacity: number;
  color: string;
}

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkCount?: number;
  sparkSize?: number;
  className?: string;
}

export default function ClickSpark({
  children,
  sparkColor = "#00b050",
  sparkCount = 8,
  sparkSize = 2.5,
  className = "",
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const drawRef = useRef<() => void>(() => {});
  const animFrameRef = useRef<number | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sparksRef.current = sparksRef.current.filter((spark) => spark.opacity > 0.05);

    for (const spark of sparksRef.current) {
      spark.x += Math.cos(spark.angle) * spark.speed;
      spark.y += Math.sin(spark.angle) * spark.speed;
      spark.opacity *= 0.91;
      spark.speed *= 0.95;

      ctx.save();
      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
      ctx.fillStyle = spark.color;
      ctx.globalAlpha = spark.opacity;
      ctx.shadowColor = spark.color;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    }

    if (sparksRef.current.length > 0) {
      animFrameRef.current = requestAnimationFrame(() => drawRef.current());
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    }
  }, []);

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Sync canvas dimensions
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      const clickX = (e.clientX - rect.left) * dpr;
      const clickY = (e.clientY - rect.top) * dpr;

      // Micro-particles strictly in Sidra Green and white
      const palette = [sparkColor, "#009944", "#ffffff", "rgba(0, 176, 80, 0.8)"];

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.4;
        sparksRef.current.push({
          x: clickX,
          y: clickY,
          angle,
          speed: 1.8 + Math.random() * 2.2,
          size: sparkSize * dpr * (0.8 + Math.random() * 0.4),
          opacity: 1,
          color: palette[i % palette.length],
        });
      }

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(() => drawRef.current());
      }
    },
    [sparkColor, sparkCount, sparkSize]
  );

  return (
    <div className={`${styles.sparkWrapper} ${className}`.trim()} onClick={handleClick}>
      <canvas ref={canvasRef} className={styles.sparkCanvas} />
      {children}
    </div>
  );
}
