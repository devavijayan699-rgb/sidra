"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import DonationCTA from "@/components/sections/DonationCTA";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StoryCard from "@/components/news/StoryCard";
import type { DepartmentDetail } from "@/types";
import styles from "./DepartmentTemplate.module.css";

interface DepartmentTemplateProps {
  data: DepartmentDetail;
}

export default function DepartmentTemplate({ data }: DepartmentTemplateProps) {
  const shouldReduceMotion = useReducedMotion();

  const emTrimmed = data.titleEm.trim();
  const lastSpace = emTrimmed.lastIndexOf(" ");
  const leadEm = lastSpace !== -1 ? emTrimmed.slice(0, lastSpace) : "";
  const lastWord = lastSpace !== -1 ? emTrimmed.slice(lastSpace + 1) : emTrimmed;

  return (
    <main id="main-content">
      {/* Department Hero Section */}
      <section className={styles.ddHeader}>
        <div className={styles.ddHeaderGrid}>
          <div className={styles.ddHeaderText}>
            <motion.h1
              className={styles.ddHeaderTitle}
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
                {data.title}{" "}
                {leadEm && <em>{leadEm} </em>}
                <span className={styles.lastWordWrap}>
                  <em>{lastWord}</em>
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
              className={styles.ddHeaderDesc}
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
              {data.heroDescription}
            </motion.p>
          </div>
          <motion.div
            className={styles.ddHeaderImgWrapper}
            initial={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.05 }
            }
            whileInView={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.85,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              className={styles.ddHeaderImg}
              src={data.heroImage}
              alt={data.heroImageAlt}
              width={640}
              height={520}
              priority
              style={{ viewTransitionName: `dept-hero-${data.slug}` }}
            />
          </motion.div>
        </div>
      </section>

        {/* What We Do Section */}
        <RevealWrapper>
          <section className={styles.ddBlock} aria-labelledby="what-we-do-heading">
            <div className={styles.stack}>
              <SectionHeading id="what-we-do-heading" prefix="What we" accent="do" />
              <ScrollReveal className={styles.whatRows} staggerSelector={`.${styles.whatRow}`} staggerMs={70}>
                {data.whatWeDo.map((item) => (
                  <div key={item.num} className={styles.whatRow}>
                    <div className={styles.whatRowLead}>
                      <span className={styles.whatRowNum}>{item.num}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </section>
        </RevealWrapper>

        {/* From This Department (Related Stories) */}
        <RevealWrapper>
          <section className={`${styles.ddBlock} ${styles.ddBlockLg}`} aria-labelledby="dept-stories-heading">
            <div className={styles.stack}>
              <div className={styles.storiesHead}>
                <SectionHeading
                  id="dept-stories-heading"
                  prefix="From this"
                  accent="department"
                  className={styles.titleMd}
                />
                <Link href="/news" className={styles.allStoriesLink}>
                  <span>All stories</span>
                  <Image
                    src="/assets/arrow-right-16.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <ScrollReveal className={styles.storiesGrid} staggerSelector="article" staggerMs={75}>
                {data.stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </ScrollReveal>
            </div>
          </section>
        </RevealWrapper>

        {/* Other Departments Section */}
        <RevealWrapper>
          <section className={`${styles.ddBlock} ${styles.ddBlockLg}`} aria-labelledby="other-depts-heading">
            <div className={styles.stack}>
              <SectionHeading
                id="other-depts-heading"
                prefix="Other"
                accent="departments"
                className={styles.titleMd}
              />
              <ScrollReveal className={styles.othersGrid} staggerSelector={`.${styles.otherCard}`} staggerMs={75}>
                {data.otherDepartments.map((other) => (
                  <article key={other.linkHref} className={styles.otherCard}>
                    <h3>{other.title}</h3>
                    <p>{other.description}</p>
                    <Link href={other.linkHref} className={styles.otherExploreLink}>
                      <span>Explore Department</span>
                      <Image
                        src="/assets/arrow-right-16.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                ))}
              </ScrollReveal>
            </div>
          </section>
        </RevealWrapper>

        {/* Call to Action with padded top */}
        <RevealWrapper>
          <DonationCTA padded={true} />
        </RevealWrapper>
      </main>
  );
}
