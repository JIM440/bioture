import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BusinessExperienceSections } from "@/components/business-experience-sections";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RealEstateShowcase } from "@/components/real-estate-showcase";
import { AgricultureFoodShowcase } from "@/components/agriculture-food-showcase";
import { FinanceConsultancyShowcase } from "@/components/finance-consultancy-showcase";
import { CommerceShowcase } from "@/components/commerce-showcase";
import type { Business } from "@/data/businesses";

export function BusinessDetailPage({ business, nextBusiness }: { business: Business; nextBusiness: Business }) {
  const isAgricultureFood = business.slug === "agriculture-food";
  const isFinanceConsultancy = business.slug === "finance-consultancy";
  const isRealEstate = business.slug === "real-estate";
  const isCommerce = business.slug === "commerce";
  const showDefaultProfile = !isAgricultureFood && !isCommerce;
  const showDefaultDivisions = business.divisions.length > 0 && !isAgricultureFood && !isFinanceConsultancy && !isCommerce;
  const defaultPlatform = business.platform && business.slug !== "real-estate" && !isAgricultureFood && !isCommerce ? business.platform : null;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero eyebrow={business.title} title={business.heroTitle} image={business.image} />
        {showDefaultProfile ? (
          <section className={isRealEstate ? "section-shell real-estate-profile-section" : "section-shell"}>
            <SectionLabel index="01" label="Operating group profile" />
            <div className="statement-grid">
              <h2 className={isFinanceConsultancy ? "finance-profile-heading" : isRealEstate ? "real-estate-profile-heading" : undefined}>{business.introTitle}</h2>
              <div className="space-y-6">
                <p>{business.introCopy}</p>
                <p>
                  This corporate profile presents the group&apos;s role, capabilities and partnership direction before guiding users to
                  specialist platforms where available.
                </p>
                {!isFinanceConsultancy ? (
                  <div className="border-l-4 border-emerald-950 pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">Partner focus</p>
                    <p className="mt-2 text-base leading-7 text-stone-600">{business.partners.join(", ")}</p>
                  </div>
                ) : null}
                <Button asChild showArrow>
                  <Link href={business.actionHref}>Speak with the team</Link>
                </Button>
              </div>
            </div>
          </section>
        ) : null}
        {showDefaultDivisions ? (
          <section className="section-shell border-t border-stone-200">
            <SectionLabel index="02" label="Companies & divisions" />
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1fr]">
              <h2 className="section-title">Specialized expertise, connected by one standard.</h2>
              <p className="max-w-xl text-stone-600">
                Explore the specialist companies, divisions and capabilities operating within this Bioture group.
              </p>
            </div>
            <div className={business.slug === "commerce" ? "grid gap-4" : "grid gap-5 md:grid-cols-2"}>
              {business.divisions.map((division, index) => (
                business.slug === "commerce" ? (
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
                      <p className="mt-5 max-w-md text-sm font-bold uppercase tracking-[0.14em] text-white/72">
                        Partners: {division.partners.join(", ")}
                      </p>
                      <Link
                        href="/contact?subject=commerce"
                        className="mt-9 w-max bg-white px-8 py-4 text-lg font-bold text-black transition hover:bg-emerald-950 hover:text-white"
                      >
                        Shop now
                      </Link>
                    </div>
                  </article>
                ) : (
                  <article key={division.title} className="overflow-hidden border border-stone-200 bg-white">
                    <div className="relative aspect-[4/3] min-h-[360px] bg-cover bg-center" style={{ backgroundImage: `url("${division.image}")` }}>
                      <span className="absolute left-5 top-5 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-medium tracking-[-0.01em]">{division.title}</h3>
                      <p className="mt-3 text-stone-600">{division.description}</p>
                      <div className="mt-6 border-t border-stone-200 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-950">Partners</p>
                        <p className="mt-2 text-sm leading-6 text-stone-600">{division.partners.join(", ")}</p>
                      </div>
                    </div>
                  </article>
                )
              ))}
            </div>
          </section>
        ) : null}
        {defaultPlatform ? (
          <section className="section-shell">
            <div className="grid gap-10 border border-stone-200 p-6 md:p-10 lg:grid-cols-[150px_minmax(0,520px)_auto] lg:items-center lg:gap-16">
              <div className="grid aspect-square place-items-center border border-emerald-950 bg-white p-6">
                <Image src="/assets/bt-green-cropped.png" alt="Bioture platform" width={190} height={126} className="h-auto w-full" />
              </div>
              <div>
                <h2 className="text-[clamp(30px,3vw,46px)] font-bold leading-[1.05] tracking-[-0.035em]">
                  {defaultPlatform.title}
                </h2>
                <p className="mt-4 max-w-md text-stone-600">{defaultPlatform.copy}</p>
              </div>
              <Button asChild variant="outline" className="lg:justify-self-end">
                <a href={defaultPlatform.href} target="_blank" rel="noreferrer">{defaultPlatform.label}</a>
              </Button>
            </div>
          </section>
        ) : null}
        {business.slug === "real-estate" ? <RealEstateShowcase platform={business.platform} /> : null}
        {isCommerce ? <CommerceShowcase platform={business.platform} /> : null}
        {isAgricultureFood ? <AgricultureFoodShowcase /> : null}
        {isFinanceConsultancy ? <FinanceConsultancyShowcase /> : null}
        {!isAgricultureFood && !isFinanceConsultancy && !isCommerce ? <BusinessExperienceSections business={business} /> : null}
      </main>

      <section className="bg-[#f5f6f3]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <h2 className="max-w-xl text-[clamp(42px,5.8vw,84px)] font-bold leading-[1.05] tracking-[0]">
            {nextBusiness.shortTitle}
          </h2>
          <Link href={`/business/${nextBusiness.slug}`} className="next-business-inline">
            <span className="next-business-round-arrow" aria-hidden="true">
              <ArrowUpRight className="size-5" />
            </span>
            <span>
              <span className="next-business-label">Continue exploring</span>
              <span className="next-business-copy">Explore {nextBusiness.title} and its role across the Bioture Group.</span>
            </span>
          </Link>
        </div>
      </section>
      <SiteFooter title={business.footerTitle} cta={business.footerCta} href={business.actionHref} />
    </>
  );
}
