import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { impactMetrics } from "@/data/homepage";
import styles from "./ImpactStats.module.css";

export default function ImpactStats() {
  return (
    <section className={styles.impactSection} id="impact" aria-labelledby="impact-heading">
      <div className={styles.stats}>
        <ScrollReveal>
          <SectionHeading id="impact-heading" prefix="Our" accent="Impact" />
        </ScrollReveal>

        <ScrollReveal
          className={styles.statsGrid}
          staggerSelector={`.${styles.statCell}`}
          staggerMs={50}
        >
          {impactMetrics.map((item) => (
            <div key={item.id} className={styles.statCell}>
              <div className={styles.stat}>
                <strong className={styles.statNumber}>
                  <CountUp
                    target={item.target}
                    suffix={item.suffix}
                    prefix={item.prefix}
                    useGrouping={item.useGrouping}
                    finalFormattedValue={item.displayValue}
                  />
                </strong>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
