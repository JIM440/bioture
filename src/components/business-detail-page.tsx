import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RealEstateShowcase } from "@/components/real-estate-showcase";
import type { Business } from "@/data/businesses";

export function BusinessDetailPage({ business, nextBusiness }: { business: Business; nextBusiness: Business }) {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero eyebrow={business.title} title={business.heroTitle} image={business.image} />
        <section className="section-shell">
          <SectionLabel index="01" label="Operating group profile" />
          <div className="statement-grid">
            <h2>{business.introTitle}</h2>
            <div className="space-y-6">
              <p>{business.introCopy}</p>
              <p>
                This corporate profile presents the group&apos;s role, capabilities and partnership direction before guiding users to
                specialist platforms where available.
              </p>
              <Button asChild showArrow>
                <Link href="/contact">Speak with the team</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="section-shell border-t border-stone-200">
          <SectionLabel index="02" label={business.slug === "tech" ? "Our capabilities" : "Companies & divisions"} />
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1fr]">
            <h2 className="section-title">Specialized expertise, connected by one standard.</h2>
            <p className="max-w-xl text-stone-600">
              Explore the specialist companies, divisions and capabilities operating within this BioTure group.
            </p>
          </div>
          <div className={business.slug === "sales-solutions" ? "grid gap-4" : "grid gap-5 md:grid-cols-2"}>
            {business.divisions.map((division, index) => (
              business.slug === "sales-solutions" ? (
                <article key={division.title} className="group relative min-h-[420px] overflow-hidden bg-stone-950 text-white md:min-h-[520px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${division.image}")` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.68),rgba(0,0,0,.16)_56%,rgba(0,0,0,.18))]" />
                  <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 md:min-h-[520px] md:p-8">
                    <span className="mb-5 w-max bg-white/12 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      Category {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="max-w-[620px] text-[clamp(42px,5vw,72px)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
                      {division.title}
                    </h3>
                    <p className="mt-5 max-w-md text-xl font-bold leading-snug text-white/88">{division.description}</p>
                    <Link
                      href="/contact?subject=sales-distribution"
                      className="mt-9 w-max bg-white px-8 py-4 text-lg font-bold text-black transition hover:bg-emerald-950 hover:text-white"
                    >
                      Shop now
                    </Link>
                  </div>
                </article>
              ) : (
                <article key={division.title} className="overflow-hidden border border-stone-200 bg-white">
                  <div className="relative min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url("${division.image}")` }}>
                    <span className="absolute left-5 top-5 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-950">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-medium tracking-[-0.01em]">{division.title}</h3>
                    <p className="mt-3 text-stone-600">{division.description}</p>
                  </div>
                </article>
              )
            ))}
          </div>
        </section>
        {business.platform ? (
          <section className="section-shell">
            <div className="grid gap-10 border border-stone-200 p-6 md:p-10 lg:grid-cols-[150px_minmax(0,520px)_auto] lg:items-center lg:gap-16">
              <div className="grid aspect-square place-items-center border border-emerald-950 bg-white p-6">
                <Image src="/assets/bt-green-cropped.png" alt="BioTure platform" width={190} height={126} className="h-auto w-full" />
              </div>
              <div>
                <h2 className="text-[clamp(30px,3vw,46px)] font-bold leading-[1.05] tracking-[-0.035em]">
                  {business.platform.title}
                </h2>
                <p className="mt-4 max-w-md text-stone-600">{business.platform.copy}</p>
              </div>
              <Button asChild variant="outline" className="lg:justify-self-end">
                <a href={business.platform.href} target="_blank" rel="noreferrer">{business.platform.label}</a>
              </Button>
            </div>
          </section>
        ) : null}
        {business.slug === "real-estate" ? <RealEstateShowcase /> : null}
        <section className="bg-stone-100 px-5 py-20 text-black md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel index="04" label="Continue exploring" />
              <h2 className="mt-5 max-w-4xl text-[clamp(38px,5vw,78px)] font-bold leading-[1.04] tracking-[-0.04em]">
                {nextBusiness.shortTitle}
              </h2>
              <p className="mt-5 max-w-xl text-stone-600">Discover another specialized company within the BioTure portfolio.</p>
            </div>
            <Button asChild className="w-max lg:justify-self-end">
              <Link href={`/${nextBusiness.slug}`}>Explore this group</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter title={business.footerTitle} cta={business.footerCta} href={business.actionHref} />
    </>
  );
}
