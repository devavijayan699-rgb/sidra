"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { galleryItems } from "@/data/homepage";
import styles from "./CommunityGallery.module.css";

// 6 items in primary sequence for wide display coverage
const primarySet = [
  ...galleryItems,
  ...galleryItems.map((item) => ({ ...item, id: `${item.id}-dup` })),
];

export default function CommunityGallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.gallery} id="gallery" aria-label="Community Gallery">
      {/* Centered Heading Block matching the 1440px grid */}
      <div className={styles.headingWrapper}>
        <motion.h2
          className={styles.galleryTitle}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Shared meals, bright classrooms and small acts of kindness, that&rsquo;s the spirit of{" "}
          <span>Sidra Foundation.</span>
        </motion.h2>
      </div>

      {/* Looping Marquee */}
      <div
        className={styles.marquee}
        tabIndex={0}
        aria-label="Gallery of community moments. Hover to pause or scroll horizontally."
      >
        <div className={styles.marqueeTrack}>
          {/* Primary accessible set for screen readers */}
          <div className={styles.marqueeGroup}>
            {primarySet.map((item) => (
              <figure key={item.id} className={styles.gcard}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={400}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 720px) 300px, 400px"
                  className={styles.gcardImage}
                />
                <figcaption className={styles.gcardCap}>
                  <Image
                    src="/assets/ellipse4.svg"
                    alt=""
                    width={8}
                    height={8}
                    aria-hidden="true"
                    className={styles.capDot}
                  />
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Duplicate set for seamless looping - hidden from screen readers */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {primarySet.map((item, index) => (
              <figure key={`loop-${item.id}-${index}`} className={styles.gcard}>
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 720px) 300px, 400px"
                  className={styles.gcardImage}
                />
                <figcaption className={styles.gcardCap}>
                  <Image
                    src="/assets/ellipse4.svg"
                    alt=""
                    width={8}
                    height={8}
                    className={styles.capDot}
                  />
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
