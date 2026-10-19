import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonationCTA from "@/components/sections/DonationCTA";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { departmentsOverview } from "@/data/departments";
import styles from "./DepartmentsPage.module.css";

export const metadata: Metadata = {
  title: "Departments | Sidra Foundation",
  description:
    "Four departments working together across education, student development and community care.",
};

export default function DepartmentsPage() {
  return (
    <main id="main-content">
      {/* Department Page Header */}
      <section className={styles.deptHeader}>
        <ScrollReveal className={styles.deptHeaderContent}>
          <SectionHeading
            level="h1"
            prefix="Our"
            accent="departments"
            className={styles.deptTitle}
            dotSrc="/assets/ellipse-lg.svg"
            dotSize={14}
          />
          <p>
            Four departments working together across education, student
            development and community care.
          </p>
        </ScrollReveal>
      </section>

      {/* 4 Alternating Department Rows */}
      <section className={styles.deptList} aria-label="Departments list">
        {departmentsOverview.map((dept) => (
          <RevealWrapper key={dept.id}>
            <article
              className={`${styles.deptRow} ${
                dept.isReversed ? styles.deptRowRev : ""
              }`}
            >
              <div className={styles.deptRowImageWrapper}>
                <Image
                  src={dept.image}
                  alt={dept.imageAlt}
                  width={640}
                  height={380}
                  className={styles.deptRowImage}
                  priority={dept.num === "01"}
                  style={{ viewTransitionName: `dept-hero-${dept.id}` }}
                />
              </div>

                <div className={styles.deptRowText}>
                  <span className={styles.deptRowNum}>{dept.num}</span>
                  <h2>{dept.title}</h2>
                  <p>{dept.description}</p>
                  <Link href={dept.linkHref} className={styles.exploreLink}>
                    <span>Explore Department</span>
                    <Image
                      src="/assets/arrow-right-16.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </section>

        {/* Call to Action with padded top */}
        <RevealWrapper>
          <DonationCTA padded={true} />
        </RevealWrapper>
      </main>
  );
}
