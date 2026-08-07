"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businesses } from "@/data/businesses";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(true);
  const [language, setLanguage] = useState("EN");
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "Francais" },
    { code: "ES", label: "Espanol" },
  ];
  const businessActive = pathname === "/businesses" || businesses.some((business) => pathname === `/business/${business.slug}`);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    let previousY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setHidden(currentY > previousY && currentY > 140 && !open);
      previousY = currentY;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!languageRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <header className={cn("site-header-legacy fixed inset-x-0 top-0 z-50", scrolled ? "is-scrolled" : "is-transparent", hidden ? "is-hidden" : "")}>
      <div className="header-inner-legacy mx-auto flex items-center justify-between gap-12">
        <Link href="/" aria-label="Bioture home" className="brand-legacy relative h-10">
          <Image
            src={scrolled ? "/assets/bt-green-cropped.png" : "/assets/bt-white-cropped.png"}
            alt="Bioture"
            fill
            sizes="(min-width: 768px) 120px, 100px"
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="desktop-nav-legacy hidden items-center gap-[38px] md:flex" aria-label="Primary navigation">
          {navItems.slice(0, 2).map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("nav-link-legacy py-[35px] transition", isActive ? "active text-emerald-950" : "")}
              >
                {item.label}
              </Link>
            );
          })}
          <div
            className={cn("business-nav-dropdown", businessOpen ? "open" : "")}
            onMouseEnter={() => setBusinessOpen(true)}
            onMouseLeave={() => setBusinessOpen(false)}
          >
            <button
              type="button"
              className={cn("nav-link-legacy business-nav-toggle py-[35px] transition", businessActive ? "active text-emerald-950" : "")}
              aria-expanded={businessOpen}
              onClick={() => setBusinessOpen((value) => !value)}
            >
              Our Businesses
              <ChevronDown className="size-3.5" strokeWidth={2} aria-hidden="true" />
            </button>
            <div className="business-nav-menu" role="menu">
              <Link href="/businesses" role="menuitem" className="business-nav-overview">
                All Companies
              </Link>
              {businesses.map((business) => (
                <Link key={business.slug} href={`/business/${business.slug}`} role="menuitem">
                  {business.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className={cn("nav-link-legacy py-[35px] transition", pathname === "/contact" ? "active text-emerald-950" : "")}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <div ref={languageRef} className={cn("language-switcher", languageOpen ? "open" : "")}>
            <button
              type="button"
              className="language-toggle"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <span className={cn(scrolled ? "text-black" : "text-white")}>{language}</span>
              <ChevronDown className="lang-chevron size-3.5" strokeWidth={2} color={scrolled ? "black" : "white"} aria-hidden="true" />
            </button>
            <div className="language-menu" role="menu">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  role="menuitem"
                  className={cn("language-option", language === item.code ? "active" : "")}
                  onClick={() => {
                    setLanguage(item.code);
                    setLanguageOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <Button asChild size="sm">
            <Link href="/contact">Partner with us</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="menu-button md:hidden"
        >
          <span />
          <span />
        </button>
      </div>
      <div
        className={cn(
          "mobile-nav-panel fixed inset-0 z-50 flex min-h-screen flex-col overflow-y-auto bg-emerald-950 px-6 py-6 text-white md:hidden",
          open ? "is-open" : "",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Image src="/assets/bt-white-cropped.png" alt="Bioture" width={90} height={76} />
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="mobile-close-button">
            <svg viewBox="0 0 256 256" aria-hidden="true" className="size-7" fill="currentColor">
              <path d="M205.7 194.3a8 8 0 0 1-11.4 11.4L128 139.3l-66.3 66.4a8 8 0 0 1-11.4-11.4L116.7 128 50.3 61.7a8 8 0 0 1 11.4-11.4L128 116.7l66.3-66.4a8 8 0 0 1 11.4 11.4L139.3 128Z" />
            </svg>
          </button>
        </div>
        <nav className="mt-12 grid gap-6">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-3xl font-medium tracking-tight">
              {item.label}
            </Link>
          ))}
          <div className="mobile-business-nav">
            <button
              type="button"
              className="mobile-business-toggle"
              aria-expanded={mobileBusinessOpen}
              onClick={() => setMobileBusinessOpen((value) => !value)}
            >
              Our Businesses
              <ChevronDown className={cn("size-5 transition", mobileBusinessOpen ? "rotate-180" : "")} strokeWidth={2} aria-hidden="true" />
            </button>
            {mobileBusinessOpen ? (
              <div className="mobile-business-list">
                <Link href="/businesses" onClick={() => setOpen(false)}>
                  Companies
                </Link>
                {businesses.map((business) => (
                  <Link key={business.slug} href={`/business/${business.slug}`} onClick={() => setOpen(false)}>
                    {business.shortTitle}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-3xl font-medium tracking-tight">
            Contact
          </Link>
          <div className="mobile-language">
            <div className="mobile-language-label">Language</div>
            <div className="mobile-language-options">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={language === item.code ? "active" : ""}
                  onClick={() => setLanguage(item.code)}
                >
                  {item.code}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
