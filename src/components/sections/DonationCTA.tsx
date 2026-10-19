import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ClickSpark from "@/components/ui/ClickSpark";
import styles from "./DonationCTA.module.css";
import { CONTACT_INFO, PENDING_EXTERNAL_LINKS } from "@/config/navigation";

export default function DonationCTA({ padded = false }: { padded?: boolean }) {
  return (
    <div
      className={`${styles.ctaWrapper} ${padded ? styles.ctaWrapperPadded : ""}`}
      id="contact"
    >
      <ScrollReveal className={styles.ctaCard} aria-labelledby="cta-heading">
        {/* Supplied Background Hero Photograph */}
        <div className={styles.ctaBgWrap}>
          <Image
            src="/assets/hero.webp"
            alt=""
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            loading="lazy"
            decoding="async"
            className={styles.ctaBgImage}
          />
        </div>

        {/* Existing Visual Gradient Overlay */}
        <div className={styles.ctaOverlay} aria-hidden="true" />

        {/* Centered Content Block */}
        <div className={styles.ctaContent}>
          <h2 id="cta-heading" className={styles.ctaTitle}>
            Let&rsquo;s Create a Better Future Together
          </h2>
          <p className={styles.ctaDescription}>
            Have questions or want to be part of our mission? Connect with Sidra Foundation
            to explore opportunities, share ideas, and make a meaningful difference in
            communities.
          </p>

          <div className={styles.ctaBtns}>
            <Magnetic strength={0.3}>
              <ClickSpark sparkColor="#00b050" sparkCount={8}>
                <Link
                  href={PENDING_EXTERNAL_LINKS.donationGateway.url}
                  className={styles.ctaBtnPrimary}
                >
                  <span>Donate Now</span>
                  <Image
                    src="/assets/heart-cta.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className={styles.btnIcon}
                  />
                </Link>
              </ClickSpark>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Inquiry%20-%20Sidra%20Foundation`}
                className={styles.ctaBtnGhost}
              >
                <span>Get in Touch</span>
                <Image
                  src="/assets/arrow-right-cta.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className={styles.btnIcon}
                />
              </a>
            </Magnetic>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
