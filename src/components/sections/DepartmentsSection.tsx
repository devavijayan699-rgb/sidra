import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { departmentsData } from "@/data/homepage";
import styles from "./DepartmentsSection.module.css";

export default function DepartmentsSection() {
  return (
    <section
      className={styles.departmentsSection}
      id="departments"
      aria-labelledby="departments-heading"
    >
      <div className={styles.departmentsContainer}>
        {/* Head Block */}
        <ScrollReveal className={styles.headBlock}>
          <SectionHeading id="departments-heading" prefix="Our" accent="Departments" />
          <p className={styles.lead}>
            Explore our departments dedicated to education, student development,
            community empowerment, and humanitarian support.
          </p>
        </ScrollReveal>

        {/* 4-Card Responsive Grid */}
        <ScrollReveal
          className={styles.deptsGrid}
          staggerSelector={`.${styles.deptCard}`}
          staggerMs={80}
        >
          {departmentsData.map((dept) => (
            <article
              key={dept.id}
              className={styles.deptCard}
            >
              <h3 className={styles.deptTitle}>{dept.title}</h3>
              <p className={styles.deptDesc}>{dept.description}</p>
              <Link href={dept.linkHref} className={styles.exploreLink}>
                <span>Explore Department</span>
                <Image
                  className={styles.arrowIcon}
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
  );
}
