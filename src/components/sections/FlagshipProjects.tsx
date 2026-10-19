import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { flagshipProjects } from "@/data/homepage";
import styles from "./FlagshipProjects.module.css";

export default function FlagshipProjects() {
  return (
    <section className={styles.flagshipSection} id="projects" aria-labelledby="projects-heading">
      <div className={styles.flagshipContainer}>
        {/* Head Block */}
        <ScrollReveal className={styles.headBlock}>
          <SectionHeading id="projects-heading" prefix="Our" accent="Flagship Projects" />
          <p className={styles.lead}>
            Discover Sidra Foundation&rsquo;s flagship initiatives dedicated to improving lives
            through education, essential resources, nourishment, and compassionate community
            support.
          </p>
        </ScrollReveal>

        {/* 4-Card Responsive Grid */}
        <ScrollReveal
          className={styles.flagshipGrid}
          staggerSelector={`.${styles.fcard}`}
          staggerMs={80}
        >
          {flagshipProjects.map((project) => (
            <article key={project.id} className={styles.fcard}>
              {/* Image & Floating Icon Badge */}
              <div className={styles.fcardImg}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.fcardBadge}>
                  <Image
                    src={project.badgeIcon}
                    alt={project.badgeAlt}
                    width={34}
                    height={34}
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.fcardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <Link href={project.linkHref} className={styles.learnMoreLink}>
                  <span>Learn More</span>
                  <Image
                    className={styles.arrowIcon}
                    src="/assets/arrow-right-16.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
