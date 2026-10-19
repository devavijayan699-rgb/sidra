"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import styles from "./SiteHeader.module.css";
import { departmentsOverview } from "@/data/departments";

export default function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollTo, stop, start } = useLenis();
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDepartmentsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDepartmentsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMenu();
    setDepartmentsDropdownOpen(false);
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      scrollTo(0, { duration: 1.2 });
    } else if (href === "/#contact" || href === "#contact") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        e.preventDefault();
        scrollTo("#contact", { duration: 1.2 });
      }
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and pause smooth scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      stop();
      document.body.style.overflow = "hidden";
    } else {
      start();
      document.body.style.overflow = "";
    }
    return () => {
      start();
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, stop, start]);

  // Auto-close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isDepartments = pathname.startsWith("/departments");
  const isNews = pathname.startsWith("/news");

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logoLink} aria-label="Sidra Foundation Home" onClick={(e) => handleNavClick(e, "/")}>
          <Image
            className={styles.logo}
            src="/assets/sidra-logo.webp"
            alt="Sidra Foundation"
            width={132}
            height={44}
            priority
          />
        </Link>

        <div className={styles.navRight}>
          <nav className={styles.navLinks} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${isHome ? styles.activeLink : ""}`}
              aria-current={isHome ? "page" : undefined}
              onClick={(e) => handleNavClick(e, "/")}
            >
              <span>Home</span>
              {isHome && <span className={styles.activeLine} />}
            </Link>

            <Link
              href="/about"
              className={`${styles.navLink} ${isAbout ? styles.activeLink : ""}`}
              aria-current={isAbout ? "page" : undefined}
              onClick={(e) => handleNavClick(e, "/about")}
            >
              <span>About</span>
              {isAbout && <span className={styles.activeLine} />}
            </Link>

            {/* Departments Dropdown Container */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              onFocus={handleDropdownEnter}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setDepartmentsDropdownOpen(false);
                }
              }}
            >
              <Link
                href="/departments"
                className={`${styles.navLink} ${isDepartments ? styles.activeLink : ""}`}
                aria-current={isDepartments ? "page" : undefined}
                aria-expanded={departmentsDropdownOpen}
                aria-haspopup="true"
                onClick={(e) => handleNavClick(e, "/departments")}
              >
                <span>Departments</span>
                <Image
                  src={
                    isDepartments
                      ? "/assets/chevron-down-active.svg"
                      : "/assets/chevron-down.svg"
                  }
                  alt=""
                  width={12}
                  height={12}
                  aria-hidden="true"
                  className={
                    departmentsDropdownOpen ? styles.chevronRotated : ""
                  }
                />
                {isDepartments && <span className={styles.activeLine} />}
              </Link>

              {/* Smooth CSS-Animated Minimal Dropdown Panel */}
              <div
                className={`${styles.dropdownMenu} ${departmentsDropdownOpen ? styles.dropdownMenuVisible : ""
                  }`}
              >
                <div className={styles.dropdownList}>
                  {departmentsOverview.map((dept) => (
                    <Link
                      key={dept.linkHref}
                      href={dept.linkHref}
                      className={styles.dropdownItem}
                      onClick={(e) => handleNavClick(e, dept.linkHref)}
                    >
                      <span className={styles.dropdownName}>
                        {dept.shortTitle || dept.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/news"
              className={`${styles.navLink} ${isNews ? styles.activeLink : ""}`}
              aria-current={isNews ? "page" : undefined}
              onClick={(e) => handleNavClick(e, "/news")}
            >
              <span>Blogs &amp; News</span>
              {isNews && <span className={styles.activeLine} />}
            </Link>

            <Link
              href="/#contact"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              <span>Contact</span>
            </Link>
          </nav>

          <Button
            href="/donate"
            variant="primary"
            size="nav"
            magnetic={true}
            spark={true}
            className={styles.desktopDonateBtn}
          >
            Donate Now
          </Button>

          {/* Accessible Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span
              className={`${styles.hamburgerIcon} ${mobileMenuOpen ? styles.hamburgerOpen : ""
                }`}
            >
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop Portaled to document.body */}
      {mounted &&
        createPortal(
          <>
            <div
              className={`${styles.mobileOverlay} ${
                mobileMenuOpen ? styles.overlayActive : ""
              }`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <div
              id="mobile-navigation-drawer"
              className={`${styles.mobileDrawer} ${
                mobileMenuOpen ? styles.drawerActive : ""
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className={styles.drawerHeader}>
                <Image
                  src="/assets/sidra-logo.webp"
                  alt="Sidra Foundation"
                  width={110}
                  height={37}
                  style={{ objectFit: "contain" }}
                />
                <button
                  type="button"
                  className={styles.drawerCloseBtn}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              <nav className={styles.drawerLinks} aria-label="Mobile Navigation Links">
                <Link
                  href="/"
                  className={isHome ? styles.activeDrawerLink : ""}
                  onClick={(e) => handleNavClick(e, "/")}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={isAbout ? styles.activeDrawerLink : ""}
                  onClick={(e) => handleNavClick(e, "/about")}
                >
                  About
                </Link>
                <Link
                  href="/departments"
                  className={isDepartments ? styles.activeDrawerLink : ""}
                  onClick={(e) => handleNavClick(e, "/departments")}
                >
                  Departments
                </Link>
                <Link
                  href="/news"
                  className={isNews ? styles.activeDrawerLink : ""}
                  onClick={(e) => handleNavClick(e, "/news")}
                >
                  Blogs &amp; News
                </Link>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                >
                  Contact
                </Link>
              </nav>

              <div className={styles.drawerFooter}>
                <Button
                  href="/donate"
                  variant="primary"
                  size="nav"
                  className={styles.mobileDonateBtn}
                  onClick={closeMenu}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </>,
          document.body
        )}
    </header>
  );
}
