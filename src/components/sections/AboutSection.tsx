import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about" aria-labelledby="about-heading">
      <div className={styles.about}>
        {/* Left Column: Descriptive Content */}
        <ScrollReveal className={styles.aboutText}>
          <SectionHeading
            id="about-heading"
            prefix="About"
            accent="Sidra Foundation"
          />

          <p>
            Sidra Foundation is a charitable organization operating in Maharashtra and Karnataka,
            dedicated to uplifting underserved communities through value-based education and social
            development. Our mission is to empower underprivileged individuals and families,
            promote self-reliance, and strengthen communal harmony across India.
          </p>

          <p>
            In collaboration with Jamia Markaz, we strive to expand educational opportunities,
            nurture potential, and bring meaningful change to communities in need.
          </p>

          <Link href="/about" className={styles.learnMoreLink}>
            Learn More
            <Image
              className={styles.arrowIcon}
              src="/assets/arrow-right.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
          </Link>
        </ScrollReveal>

        {/* Right Column: Fully Responsive Percentage-Based Collage */}
        <div className={styles.collageWrapper}>
          <ScrollReveal className={styles.collage} aria-hidden="true">
            {/* Frame 1 */}
            <div className={`${styles.collageImg} ${styles.c1}`}>
              <Image
                className={styles.c1Img}
                src="/assets/hero.webp"
                alt=""
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Frame 2 */}
            <div className={`${styles.collageImg} ${styles.c2}`}>
              <Image
                className={styles.c2Img}
                src="/assets/hero.webp"
                alt=""
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Frame 3 */}
            <div className={`${styles.collageImg} ${styles.c3}`}>
              <Image
                className={styles.c3Img}
                src="/assets/hero.webp"
                alt=""
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Heart Badge Backdrop */}
            <div className={styles.heartBadge}>
              <Image
                src="/assets/heart-badge.svg"
                alt=""
                width={84}
                height={84}
              />
            </div>

            {/* Heart Icon */}
            <div className={styles.heartIcon}>
              <Image
                src="/assets/heart.svg"
                alt=""
                width={34}
                height={34}
              />
            </div>

            {/* Hand-Heart Pill Badge */}
            <div className={styles.handBadge} />

            {/* Hand-Heart Icon */}
            <div className={styles.handIcon}>
              <Image
                src="/assets/hand-heart.svg"
                alt=""
                width={44}
                height={44}
              />
            </div>

            {/* Decorative Dots */}
            <div className={styles.dotA}>
              <Image
                src="/assets/ellipse2.svg"
                alt=""
                width={18}
                height={18}
              />
            </div>
            <div className={styles.dotB}>
              <Image
                src="/assets/ellipse3.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
