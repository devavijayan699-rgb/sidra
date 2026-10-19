"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Reset scroll cleanly to top upon route change
      window.scrollTo(0, 0);
      const win = window as unknown as {
        lenis?: { scrollTo: (y: number, opts: { immediate: boolean }) => void };
      };
      if (win.lenis) {
        win.lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return null;
}
