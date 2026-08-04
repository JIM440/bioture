import type { Metadata } from "next";
import { SiteMotion } from "@/components/site-motion";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BioTure Group | Many Industries. One Standard of Trust.",
    template: "%s | BioTure Group",
  },
  description:
    "BioTure Group is a diversified group of companies creating dependable solutions across commerce, agriculture, finance, real estate, resources, technology, manufacturing and mobility.",
  icons: {
    icon: "/assets/bt-icon-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body>
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
