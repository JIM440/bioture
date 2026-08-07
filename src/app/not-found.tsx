import Link from "next/link";
import { ArrowUpRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businesses } from "@/data/businesses";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative grid min-h-screen overflow-hidden bg-emerald-950 px-5 py-28 text-white md:px-8">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.48)),linear-gradient(0deg,rgba(0,0,0,.55),rgba(0,0,0,.18))]" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <SectionLabel index="404" label="Page not found" light />
              <h1 className="mt-6 max-w-4xl text-[clamp(72px,10vw,150px)] font-bold leading-[0.95] text-white">
                This page has moved out of range.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
                The link may be outdated, mistyped or no longer available. Start again from the group homepage or jump into one of the Bioture companies.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light" showArrow>
                  <Link href="/">
                    <Home className="size-4" aria-hidden="true" />
                    Go home
                  </Link>
                </Button>
                <Button asChild showArrow>
                  <Link href="/businesses">
                    <Search className="size-4" aria-hidden="true" />
                    Explore businesses
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-0 border-y border-white/35">
              {businesses.slice(0, 6).map((business) => (
                <Link
                  key={business.slug}
                  href={`/business/${business.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-white/24 py-5 text-white last:border-b-0 md:py-6"
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/52">{business.index}</span>
                    <span className="mt-2 block text-[clamp(24px,3vw,40px)] font-bold leading-tight">{business.shortTitle}</span>
                  </span>
                  <ArrowUpRight className="size-6 transition group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.8} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter title="Find your way back to Bioture." cta="Contact the group" />
    </>
  );
}
