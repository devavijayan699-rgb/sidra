import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./SiteFooter.module.css";
import {
  CONTACT_INFO,
  SECTION_LINKS,
  PENDING_EXTERNAL_LINKS,
} from "@/config/navigation";

export default function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        {/* Main 4-Column Grid */}
        <ScrollReveal
          className={styles.footerGrid}
          staggerSelector={`.${styles.footerAbout}, .${styles.footerCol}`}
          staggerMs={60}
        >
          {/* About Column */}
          <div className={styles.footerAbout}>
            <Link
              href={SECTION_LINKS.home}
              className={styles.footerLogo}
              aria-label="Sidra Foundation Home"
            >
              <Image
                src="/assets/white-logo.webp"
                alt="Sidra Foundation"
                width={132}
                height={44}
                className={styles.footerLogoImg}
              />
            </Link>
            <p className={styles.footerDesc}>
              Sidra Foundation is a charitable organization dedicated to empowering
              underserved communities through value-based education, humanitarian care,
              and sustainable development.
            </p>
            <ul className={styles.contactList} aria-label="Contact Information">
              <li className={styles.contactItem}>
                <Image
                  src="/assets/mail.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className={styles.contactIcon}
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={styles.contactLink}
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Image
                  src="/assets/phone.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className={styles.contactIcon}
                />
                <a
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className={styles.contactLink}
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li className={`${styles.contactItem} ${styles.contactAddress}`}>
                <Image
                  src="/assets/pin.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className={styles.contactIcon}
                />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colHeading}>Quick Links</h3>
            <ul className={styles.colList}>
              <li>
                <Link href={SECTION_LINKS.home} className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.about} className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.departments} className={styles.footerLink}>
                  Our Departments
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.vision} className={styles.footerLink}>
                  Vision 2030
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.blogs} className={styles.footerLink}>
                  Blogs &amp; News
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.contact} className={styles.footerLink}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Initiatives Column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colHeading}>Our Initiatives</h3>
            <ul className={styles.colList}>
              <li>
                <Link href={SECTION_LINKS.projects} className={styles.footerLink}>
                  Happy Meal
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.projects} className={styles.footerLink}>
                  Safe Water Mission
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.projects} className={styles.footerLink}>
                  Mercy Van
                </Link>
              </li>
              <li>
                <Link href={SECTION_LINKS.projects} className={styles.footerLink}>
                  Sidra Kids Preschool
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className={styles.footerCol}>
            <h3 className={styles.colHeading}>Follow Us</h3>
            <ul className={styles.colList}>
              {PENDING_EXTERNAL_LINKS.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.isConfigured ? social.href : "#"}
                    className={`${styles.footerLink} ${styles.pendingLink}`}
                    title={social.note}
                    aria-label={`${social.name} (${social.note})`}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Bottom Copyright Bar */}
        <div className={styles.footerCopy}>
          <p>&copy; Copyright SIDRA Foundation. All Rights Reserved</p>
          <p className={styles.poweredBy}>Powered by Ziqx</p>
        </div>
      </div>
    </footer>
  );
}
