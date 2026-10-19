import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { visionGoals } from "@/data/homepage";
import styles from "./VisionSection.module.css";

export default function VisionSection() {
  return (
    <section className={styles.visionSection} id="vision" aria-labelledby="vision-heading">
      <div className={styles.visionContainer}>
        {/* Head Block */}
        <ScrollReveal className={styles.visionHead}>
          <SectionHeading id="vision-heading" prefix="Vision" accent="2030" />
          <h3>Building a Future Through Education and Empowerment</h3>
          <p>
            By 2030, Sidra Foundation envisions stronger, self-reliant communities empowered
            through quality education, equal opportunities, and sustainable development.
          </p>
        </ScrollReveal>

        {/* Goals Grid */}
        <div className={styles.goals}>
          <h4 className={styles.goalsSubtitle}>Our Vision 2030 Goals</h4>
          <ScrollReveal className={styles.goalsGrid} staggerSelector={`.${styles.goalCard}`} staggerMs={60}>
            {visionGoals.map((goal) => (
              <article key={goal.id} className={styles.goalCard}>
                <div className={styles.goalIcon}>
                  <Image
                    src={goal.icon}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </div>
                <h5 className={styles.goalTitle}>{goal.title}</h5>
                <p className={styles.goalDesc}>{goal.description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
