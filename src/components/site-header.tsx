"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Our Businesses" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [languageOpen, setLanguageOpen] = useState(false);
  const languages = [
    { code: "EN", label: "English", flag: "GB" },
    { code: "FR", label: "Francais", flag: "FR" },
    { code: "ES", label: "Espanol", flag: "ES" },
  ];

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

  return (
    <header className={cn("site-header-legacy fixed inset-x-0 top-0 z-50", scrolled ? "is-scrolled" : "is-transparent", hidden ? "is-hidden" : "")}>
      <div className="header-inner-legacy mx-auto flex items-center justify-between gap-12">
        <Link href="/" aria-label="BioTure home" className="brand-legacy relative h-14">
          <Image src={scrolled ? "/assets/bt-green-cropped.png" : "/assets/bt-white-cropped.png"} alt="BioTure" fill className="object-contain object-left" priority />
        </Link>
        <nav className="desktop-nav-legacy hidden items-center gap-[38px] md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/businesses" && pathname !== "/" && pathname !== "/about" && pathname !== "/contact");

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
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <div className={cn("language-switcher", languageOpen ? "open" : "")}>
            <button
              type="button"
              className="language-toggle"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <Globe2 className="size-[17px]" strokeWidth={1.8} aria-hidden="true" />
              <span>{language}</span>
              <span className="lang-chevron">▾</span>
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
                  <span className="flag">{item.flag}</span>
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
          "mobile-nav-panel fixed inset-0 z-50 flex min-h-screen flex-col bg-emerald-950 px-6 py-6 text-white md:hidden",
          open ? "is-open" : "",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Image src="/assets/bt-white-cropped.png" alt="BioTure" width={160} height={106} />
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="mobile-close-button">
            ×
          </button>
        </div>
        <nav className="mt-16 grid gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-3xl font-medium tracking-tight">
              {item.label}
            </Link>
          ))}
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
                  {item.flag} {item.code}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
