"use client";

import Link from "next/link";
import { useState } from "react";
import type { Business } from "@/data/businesses";

type HomeCompaniesProps = {
  businesses: Business[];
};

export function HomeCompanies({ businesses }: HomeCompaniesProps) {
  const [activeSlug, setActiveSlug] = useState(businesses[0]?.slug);
  const activeBusiness = businesses.find((business) => business.slug === activeSlug) ?? businesses[0];

  return (
    <section id="portfolio" className="bg-stone-100 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              key={activeBusiness.slug}
              className="motion-image min-h-[560px] bg-cover bg-center md:min-h-[680px] xl:min-h-[760px]"
              style={{ backgroundImage: `url("${activeBusiness.image}")` }}
            />
          </div>
          <div className="border-t border-stone-300">
            {businesses.map((business) => (
              <Link
                key={business.slug}
                href={`/${business.slug}`}
                onFocus={() => setActiveSlug(business.slug)}
                onMouseEnter={() => setActiveSlug(business.slug)}
                className="group grid gap-3 border-b border-stone-300 py-5 transition hover:pl-3 md:grid-cols-[60px_1fr] md:items-center"
              >
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-stone-500 transition group-hover:text-emerald-950">
                  {business.index}
                </span>
                <span className="text-[clamp(24px,2.65vw,38px)] font-bold leading-[1.04] tracking-[-0.04em] text-black transition group-hover:text-emerald-950">
                  {business.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
