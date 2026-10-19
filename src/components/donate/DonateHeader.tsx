"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./DonateHeader.module.css";

export default function DonateHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.donateHead}>
      <div className={styles.donateHeadInner}>
        <motion.h1
          className={styles.donateTitle}
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
          <span className={styles.titleText}>
            Support a <em>project</em> you believe{" "}
            <span className={styles.lastWordWrap}>
              in
              <motion.span
                className={styles.dotContainer}
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
                  className={styles.titleDot}
                  src="/assets/ellipse-lg.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
              </motion.span>
            </span>
          </span>
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
          Choose a project, then pick a package or give an amount of your own.
        </motion.p>
      </div>
    </section>
  );
}
