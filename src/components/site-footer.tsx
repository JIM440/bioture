import Image from "next/image";
import Link from "next/link";
import { businesses } from "@/data/businesses";

type SiteFooterProps = {
  title?: string;
  cta?: string;
  href?: string;
};

export function SiteFooter({
  title = "Let's build lasting value together.",
  cta = "Contact Bioture",
  href = "/contact",
}: SiteFooterProps) {
  return (
    <footer className="footer-legacy text-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-[50px] border-b border-white/15 pb-[70px] lg:grid-cols-[180px_1fr_auto] lg:items-center">
          <Image src="/assets/bt-white-cropped.png" alt="Bioture" width={190} height={126} />
          <h2 className="max-w-4xl text-[clamp(30px,3.8vw,54px)] leading-tight">{title}</h2>
          <Link href={href} className="w-max border-b border-white/70 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition hover:border-white hover:text-white">
            {cta}
          </Link>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <p className="footer-label">Company</p>
            <Link href="/about">About</Link>
            <Link href="/businesses">Our Businesses</Link>
            <Link href="/#sustainability">Sustainability</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <p className="footer-label">Businesses</p>
            {businesses.slice(0, 4).map((business) => (
              <Link key={business.slug} href={`/business/${business.slug}`}>{business.shortTitle}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">More businesses</p>
            {businesses.slice(4).map((business) => (
              <Link key={business.slug} href={`/business/${business.slug}`}>{business.shortTitle}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://wa.me/000000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:hello@bioturegroup.com">hello@bioturegroup.com</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/15 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/55 md:flex-row md:justify-between">
          <span>© 2026 Bioture Group</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
