"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Business } from "@/data/businesses";

const fallbackCopy = "Bioture brings together focused operating companies across essential sectors. Each company has its own mandate, market focus and capability, held together by one standard of trust.";

type HomeCompaniesProps = {
  businesses: Business[];
};

export function HomeCompanies({ businesses }: HomeCompaniesProps) {
  const [activeSlug, setActiveSlug] = useState(businesses[0]?.slug);
  const featuredBusinesses = businesses.slice(0, 5);
  const activeBusiness = businesses.find((business) => business.slug === activeSlug) ?? featuredBusinesses[0] ?? businesses[0];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-stone-950 px-5 py-20 text-white md:px-8 md:py-28 lg:min-h-screen"
    >
      <div
        key={activeBusiness.slug}
        className="absolute inset-0 bg-cover bg-center transition duration-700"
        style={{ backgroundImage: `url("${activeBusiness.image}")` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74),rgba(0,0,0,.48)_48%,rgba(0,0,0,.66)),linear-gradient(0deg,rgba(0,0,0,.36),rgba(0,0,0,.08))]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-14 lg:min-h-[720px] lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-10 text-sm font-bold uppercase tracking-[0.12em] text-white">Our Companies</div>
          <h2 className="text-[clamp(56px,7.4vw,118px)] font-bold leading-[0.98] tracking-[-0.05em] text-white">
            {activeBusiness.shortTitle}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/84 md:text-xl">
            {activeBusiness.introCopy || fallbackCopy}
          </p>
          <Link
            href={`/business/${activeBusiness.slug}`}
            className="mt-10 inline-flex h-12 items-center gap-3 border border-white/80 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            Read more
            <ArrowUpRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-0 lg:pl-10">
          {featuredBusinesses.map((business) => {
            const isActive = business.slug === activeBusiness.slug;

            return (
              <Link
                key={business.slug}
                href={`/business/${business.slug}`}
                onFocus={() => setActiveSlug(business.slug)}
                onMouseEnter={() => setActiveSlug(business.slug)}
                className={isActive ? "group border-b-2 border-t border-b-emerald-950 border-t-white/70 py-5 md:py-7" : "group border-t border-white/70 py-5 last:border-b md:py-7"}
              >
                <span className="block text-[clamp(20px,2vw,28px)] font-bold uppercase leading-tight tracking-[-0.02em] text-white transition group-hover:translate-x-2">
                  {business.shortTitle}
                </span>
              </Link>
            );
          })}
          <Link
            href="/businesses"
            className="mt-7 inline-flex w-max items-center gap-2 border border-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            See all
            <ArrowRight className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
