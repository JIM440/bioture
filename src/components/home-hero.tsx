"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Business } from "@/data/businesses";

type HomeHeroProps = {
  businesses: Business[];
};

export function HomeHero({ businesses }: HomeHeroProps) {
  const slides = useMemo(
    () =>
      businesses.map((business) => ({
        slug: business.slug,
        label: business.shortTitle,
        title: "Building dependable businesses across Africa.",
        copy: "Bioture builds and operates companies across property, commerce, agriculture, manufacturing, mobility, finance, health and resources to create long-term economic value.",
        image: business.image,
      })),
    [businesses],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  if (!activeSlide) {
    return null;
  }

  return (
    <section className="home-rotating-hero relative grid min-h-screen place-items-center overflow-hidden text-center text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.slug}
            className={index === activeIndex ? "home-rotating-hero-bg is-active" : "home-rotating-hero-bg"}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.42),rgba(0,0,0,.12)),linear-gradient(0deg,rgba(0,0,0,.56),transparent_62%)]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[980px] px-6 py-28 text-center">
        <h1 className="mx-auto max-w-5xl text-[clamp(58px,7vw,96px)] font-bold leading-[1.04]">
          {activeSlide.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-white/84">{activeSlide.copy}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/businesses">Explore our businesses</Link>
          </Button>
          <Button asChild variant="light">
            <Link href="/contact?subject=partnership">Partner with us</Link>
          </Button>
        </div>
      </div>
      <Link href="#portfolio" aria-label="Discover portfolio" className="absolute bottom-[30px] left-[34px] z-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-white md:flex">
        Discover <ArrowDown className="size-4" />
      </Link>
    </section>
  );
}
