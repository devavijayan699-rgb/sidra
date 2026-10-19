"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import styles from "./HeroSection.module.css";

const HEADLINE_LINES = [
  "Empowering Communities",
  "Through Education and",
  "Opportunity",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { scrollTo } = useLenis();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const heroEl = heroRef.current;
    const imgEl = imgRef.current;
    if (!heroEl || !imgEl) return;

    let heroHeight = heroEl.offsetHeight || window.innerHeight;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.borderBoxSize?.[0]?.blockSize) {
          heroHeight = entry.borderBoxSize[0].blockSize;
        } else if (entry.contentRect?.height) {
          heroHeight = entry.contentRect.height;
        }
      }
    });
    resizeObserver.observe(heroEl);

    let ticking = false;
    let lastYPercent = -1;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          if (scrollY > 0 && scrollY <= heroHeight) {
            const yPercent = (scrollY / heroHeight) * 8;
            if (Math.abs(yPercent - lastYPercent) > 0.05) {
              imgEl.style.transform = `translate3d(0, ${yPercent.toFixed(2)}%, 0)`;
              lastYPercent = yPercent;
            }
          } else if (scrollY === 0 && lastYPercent !== 0) {
            imgEl.style.transform = "translate3d(0, 0%, 0)";
            lastYPercent = 0;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.heroWrap}>
      <section
        ref={heroRef}
        className={styles.hero}
        aria-labelledby="hero-heading"
      >
        {/* Cinematic Background Image with entrance scale settle & hardware-accelerated 3D parallax */}
        <div className={styles.heroImgWrap}>
          <Image
            ref={imgRef}
            className={styles.heroImg}
            src="/assets/hero.webp"
            alt="Empowering Communities Through Education and Opportunity"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 820px) 100vw, (max-width: 1440px) 100vw, 1440px"
          />
        </div>

        {/* Ambient Dark-to-Transparent Overlay */}
        <div className={styles.heroOverlay} aria-hidden="true" />

        {/* Harmonious Top-Right Donation Card */}
        <div className={styles.impactCard}>
          <div className={styles.impactCardHead}>
            <h3>Make an Immediate Impact</h3>
            <Image
              className={styles.impactCardDot}
              src="/assets/ellipse.svg"
              alt=""
              width={8}
              height={8}
              aria-hidden="true"
            />
          </div>
          <p>Every donation supports frontline community programs</p>
          <Button href="/donate" variant="outline" magnetic={true} spark={true}>
            Donate Now
          </Button>
        </div>

        {/* Bottom-Right Scroll-Down Control with Lenis Smooth Glide */}
        <div className={styles.heroScrollWrap}>
          <Link
            className={styles.heroScroll}
            href="#about"
            aria-label="Scroll down to About section"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#about", { duration: 1.2 });
            }}
          >
            <Image
              className={styles.heroScrollRing}
              src="/assets/scroll-button.svg"
              alt=""
              width={64}
              height={64}
              aria-hidden="true"
            />
            <Image
              className={styles.heroScrollArrow}
              src="/assets/arrow-down.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Bottom-Left Main Headline & Supporting Content */}
        <div className={styles.heroText}>
          <h1 id="hero-heading" className={styles.heroTitle}>
            {HEADLINE_LINES.map((line, idx) => (
              <span key={line} className={styles.headlineLineWrap}>
                <SplitText
                  text={line}
                  delayMs={idx * 120}
                  staggerMs={35}
                  className={styles.headlineLine}
                />
              </span>
            ))}
          </h1>
          <p className={styles.heroDesc}>
            We empower communities through education, support, and sustainable
            initiatives that transform lives.
          </p>
          <div className={styles.heroActions}>
            <Button href="#" variant="ghost" className={styles.watchVideoBtn}>
              <Image
                className={styles.playIcon}
                src="/assets/play.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
              />
              Watch Video
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
