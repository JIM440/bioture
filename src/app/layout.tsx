import type { Metadata } from "next";
import { BackToTop } from "@/components/back-to-top";
import { SiteMotion } from "@/components/site-motion";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bioture Group | Many Industries. One Standard of Trust.",
    template: "%s | Bioture Group",
  },
  description:
    "Bioture Group is a diversified group of companies creating dependable solutions across commerce, agriculture, finance, real estate, resources, technology, manufacturing and mobility.",
  icons: {
    icon: "/assets/bioture-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased" data-scroll-behavior="smooth">
      <body>
        <SiteMotion />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
