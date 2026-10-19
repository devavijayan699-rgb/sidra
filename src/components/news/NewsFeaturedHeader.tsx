"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./NewsFeaturedHeader.module.css";

interface NewsFeaturedHeaderProps {
  tag: string;
  date: string;
  title: string;
  description: string;
  linkHref: string;
}

export default function NewsFeaturedHeader({
  tag,
  date,
  title,
  description,
  linkHref,
}: NewsFeaturedHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.featuredText}>
      <div className={styles.meta}>
        <span className={styles.pill}>{tag}</span>
        <time>{date}</time>
      </div>
      <motion.h1
        id="featured-story-title"
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
        {title}
      </motion.h1>
      <motion.p
        initial={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.65,
          delay: shouldReduceMotion ? 0 : 0.18,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {description}
      </motion.p>
      <Link href={linkHref} className={styles.btnRead}>
        <span>Read More</span>
        <Image
          src="/assets/arrow-right-white.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
