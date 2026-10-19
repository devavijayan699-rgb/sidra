import type { Metadata } from "next";
import Image from "next/image";
import DonationCTA from "@/components/sections/DonationCTA";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutHeader from "@/components/about/AboutHeader";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "About | Sidra Foundation",
  description:
    "A charitable organization operating in Maharashtra and Karnataka, dedicated to uplifting underserved communities through value-based education and social development.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
        {/* Page Header with clean motion reveal in exact old style */}
        <AboutHeader />

        {/* Photo Strip */}
        <ScrollReveal staggerSelector="img" staggerMs={80}>
          <section className={styles.photoStrip} aria-label="Community photo gallery">
            <Image
              src="/assets/about-students.webp"
              alt="Students of Sidra"
              width={440}
              height={420}
              priority
            />
            <Image
              src="/assets/about-tree.webp"
              alt="Community tree planting"
              width={440}
              height={420}
            />
            <Image
              src="/assets/about-community.webp"
              alt="Community learning gathering"
              width={440}
              height={420}
            />
          </section>
        </ScrollReveal>

        {/* Who We Are */}
        <RevealWrapper>
          <section className={styles.whoSection}>
            <div className={styles.who}>
              <div>
                <SectionHeading
                  id="who-we-are-heading"
                  prefix="Who"
                  accent="We Are"
                  className={styles.whoTitle}
                />
                <h3>
                  Uplifting underserved communities through value-based
                  education and social development.
                </h3>
              </div>
              <div>
                <p>
                  Sidra Foundation is a charitable organization operating in
                  Maharashtra and Karnataka, dedicated to uplifting underserved
                  communities through value-based education and social development.
                  Our mission is to empower underprivileged individuals and
                  families, promote self-reliance, and strengthen communal harmony
                  across India.
                </p>
                <p>
                  In collaboration with Jamia Markaz, we strive to expand
                  educational opportunities, nurture potential, and bring
                  meaningful change to communities in need.
                </p>
                <div className={styles.locations}>
                  <span className={styles.location}>
                    <Image
                      src="/assets/pin-green.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                    Maharashtra
                  </span>
                  <span className={styles.location}>
                    <Image
                      src="/assets/pin-green.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                    Karnataka
                  </span>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>

        {/* Mission and Vision 2030 */}
        <ScrollReveal staggerSelector={`.${styles.mvCard}`} staggerMs={90}>
          <section className={styles.mv} aria-label="Mission and Vision">
            <article className={`${styles.mvCard} ${styles.mvCardMission}`}>
              <div className={styles.mvIcon}>
                <Image
                  src="/assets/target.svg"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower underprivileged individuals and families, promote
                self-reliance, and strengthen communal harmony across India.
              </p>
            </article>

            <article className={`${styles.mvCard} ${styles.mvCardVision}`}>
              <div className={styles.mvIcon}>
                <Image
                  src="/assets/eye.svg"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                />
              </div>
              <h2>Our Vision 2030</h2>
              <p>
                By 2030, Sidra Foundation envisions stronger, self-reliant
                communities empowered through quality education, equal
                opportunities, and sustainable development.
              </p>
            </article>
          </section>
        </ScrollReveal>

        {/* Call to Action */}
        <RevealWrapper>
          <DonationCTA />
        </RevealWrapper>
      </main>
  );
}
