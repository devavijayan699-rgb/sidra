"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./ArticleHeader.module.css";

interface ArticleHeaderProps {
  date: string;
  readTime: string;
  title: string;
}

export default function ArticleHeader({ date, readTime, title }: ArticleHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className={styles.articleHead}>
      <div className={styles.articleHeadInner}>
        <div className={styles.articleMeta}>
          <time dateTime="2026-10-02">{date}</time>
          <Image
            src="/assets/dot-sep.svg"
            alt=""
            width={4}
            height={4}
            aria-hidden="true"
          />
          <span>{readTime}</span>
        </div>
        <motion.h1
          className={styles.articleTitle}
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
      </div>
    </header>
  );
}
