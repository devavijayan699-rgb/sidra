"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./AboutHeader.module.css";

export default function AboutHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.pageHeader}>
      <div className={styles.pageHeaderGrid}>
        <motion.h1
          className={styles.pageHeaderTitle}
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
          <span>About</span>
          <div>
            <span>Sidra Foundation</span>
            <motion.span
              style={{ display: "inline-flex", alignItems: "flex-end" }}
              initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              whileInView={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
                delay: shouldReduceMotion ? 0 : 0.28,
              }}
            >
              <Image
                src="/assets/ellipse-lg.svg"
                alt=""
                width={14}
                height={14}
                aria-hidden="true"
              />
            </motion.span>
          </div>
        </motion.h1>
        <motion.p
          className={styles.pageHeaderIntro}
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
          A charitable organization operating in Maharashtra and Karnataka,
          dedicated to uplifting underserved communities through value-based
          education and social development.
        </motion.p>
      </div>
    </section>
  );
}
