"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import styles from "./ShareButtons.module.css";

interface ShareButtonsProps {
  title: string;
}

const emptySubscribe = () => () => {};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = useSyncExternalStore(
    emptySubscribe,
    () => window.location.href,
    () => ""
  );

  const handleCopyLink = async () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback or ignore
      }
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const waHref = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <div className={styles.share}>
      <span className={styles.shareLabel}>Share</span>
      <div className={styles.btnGroup}>
        <button
          className={`${styles.shareBtn} ${copied ? styles.copiedBtn : ""}`}
          type="button"
          onClick={handleCopyLink}
          aria-label={copied ? "Link copied to clipboard" : "Copy link"}
          title={copied ? "Copied to clipboard!" : "Copy link"}
        >
          <Image
            src="/assets/copy-link.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          {copied && <span className={styles.tooltip}>Copied!</span>}
        </button>

        <a
          className={styles.shareBtn}
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <Image
            src="/assets/whatsapp.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </a>

        <a
          className={styles.shareBtn}
          href={fbHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <Image
            src="/assets/facebook.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
