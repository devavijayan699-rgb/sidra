import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidra Foundation",
  description:
    "Sidra Foundation empowers communities through education, support, and sustainable initiatives.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>
        <SmoothScrollProvider>
          <ScrollToTop />
          <div className="pageWrapper">
            <SiteHeader />
            <main className="mainContent">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
