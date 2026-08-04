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
    <section id="portfolio" className="bg-stone-100 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="max-w-3xl text-[clamp(52px,7vw,108px)] font-bold leading-none tracking-[-0.05em]">
          Our companies
        </h2>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              key={activeBusiness.slug}
              className="motion-image min-h-[500px] bg-cover bg-center xl:min-h-[620px]"
              style={{ backgroundImage: `url("${activeBusiness.image}")` }}
            />
            <h3 className="mt-8 max-w-2xl text-[clamp(30px,3.2vw,54px)] font-bold leading-[1.02] tracking-[-0.045em] text-black">
              {activeBusiness.title}
            </h3>
            <div className="mt-8 max-w-xl space-y-6 text-stone-700">
              <p>{activeBusiness.introCopy}</p>
              <p>{activeBusiness.summary}</p>
            </div>
          </div>
          <div className="border-t border-stone-300">
            {businesses.map((business) => (
              <Link
                key={business.slug}
                href={`/${business.slug}`}
                onFocus={() => setActiveSlug(business.slug)}
                onMouseEnter={() => setActiveSlug(business.slug)}
                className="group grid gap-4 border-b border-stone-300 py-8 transition hover:pl-4 md:grid-cols-[72px_1fr] md:items-center"
              >
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-stone-500 transition group-hover:text-emerald-950">
                  {business.index}
                </span>
                <span className="text-[clamp(26px,3vw,42px)] font-bold leading-[1.04] tracking-[-0.04em] text-black transition group-hover:text-emerald-950">
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
