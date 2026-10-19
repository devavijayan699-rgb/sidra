import Image from "next/image";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  id?: string;
  prefix: string;
  accent: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
  dotSrc?: string;
  dotSize?: number;
}

export default function SectionHeading({
  id,
  prefix,
  accent,
  level = "h2",
  className = "",
  dotSrc = "/assets/ellipse1.svg",
  dotSize = 12,
}: SectionHeadingProps) {
  const HeadingTag = level;

  // Extract words from accent so the last word and green dot are bound atomically
  const accentTrimmed = accent.trim();
  const lastSpaceIndex = accentTrimmed.lastIndexOf(" ");
  const leadAccent = lastSpaceIndex !== -1 ? accentTrimmed.slice(0, lastSpaceIndex) : "";
  const lastWord = lastSpaceIndex !== -1 ? accentTrimmed.slice(lastSpaceIndex + 1) : accentTrimmed;

  return (
    <HeadingTag
      id={id}
      className={`${styles.title} ${className}`.trim()}
      style={
        {
          "--dot-size": `${dotSize}px`,
          "--dot-margin": dotSize >= 14 ? "8px" : "6px",
          "--dot-gap": dotSize >= 14 ? "12px" : "10px",
        } as React.CSSProperties
      }
    >
      <span className={styles.textWrap}>
        {prefix && (
          <span className={styles.wordBlock}>
            <span className={`${styles.wordBlockInner} ${styles.prefix}`}>
              {prefix}
            </span>
          </span>
        )}
        {leadAccent && (
          <span className={styles.wordBlock}>
            <em className={`${styles.wordBlockInner} ${styles.leadAccent}`}>
              {leadAccent}
            </em>
          </span>
        )}
        <span className={styles.lastWordWrap}>
          {lastWord && (
            <span className={styles.wordBlock}>
              <em className={styles.wordBlockInner}>{lastWord}</em>
            </span>
          )}
          <span className={styles.dotContainer}>
            <Image
              className={styles.titleDot}
              src={dotSrc}
              alt=""
              width={dotSize}
              height={dotSize}
              aria-hidden="true"
            />
          </span>
        </span>
      </span>
    </HeadingTag>
  );
}
