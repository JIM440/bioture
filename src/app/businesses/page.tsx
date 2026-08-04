import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="Our businesses"
          title={"Expertise across\nessential industries."}
          image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90"
        />
        <section className="section-shell">
          <SectionLabel index="01" label="The BioTure groups" />
          <div className="statement-grid">
            <h2>Eight operating groups. One shared standard.</h2>
            <p>
              Each of BioTure&apos;s eight operating businesses functions as a focused group, bringing together specialist companies,
              divisions and systems within its sector. Together, the groups share knowledge, opportunity and one standard of trust.
            </p>
          </div>
          <div className="business-jump-grid mt-14">
            {businesses.map((business) => (
              <Link key={business.slug} href={`#${business.slug}`} className="business-jump-card">
                <span className="business-jump-count">{business.index}</span>
                <span className="business-jump-meta">{business.navCategory}</span>
                <strong>{business.shortTitle}</strong>
              </Link>
            ))}
          </div>
        </section>
        <section className="bg-stone-100 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 border-b border-stone-300 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="max-w-4xl text-[clamp(52px,7vw,108px)] font-bold leading-none tracking-[-0.05em]">
                The complete portfolio
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                BioTure brings together focused operating companies across essential sectors. Each company has its own
                mandate, market focus and capability, held together by one standard of trust.
              </p>
            </div>
            <div className="grid gap-20 pt-16 md:gap-28">
            {businesses.map((business, index) => (
              <article
                key={business.slug}
                id={business.slug}
                className="motion-item grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <Link
                  href={`/${business.slug}`}
                  aria-label={`Explore ${business.title}`}
                  className={
                    index % 2 === 1
                      ? "motion-image min-h-[420px] bg-cover bg-center lg:order-2 xl:min-h-[560px]"
                      : "motion-image min-h-[420px] bg-cover bg-center xl:min-h-[560px]"
                  }
                  style={{ backgroundImage: `url("${business.image}")` }}
                />
                <div className="max-w-2xl">
                  <div className="mb-8 flex items-center gap-5">
                    <span className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-950">
                      {business.index}
                    </span>
                    <span className="h-px flex-1 bg-stone-300" />
                    <span className="text-sm font-medium uppercase tracking-[0.15em] text-stone-500">
                      {business.category}
                    </span>
                  </div>
                  <h2 className="text-[clamp(42px,5.4vw,84px)] font-bold leading-[0.98] tracking-[-0.05em] text-black">
                    {business.title}
                  </h2>
                  <p className="mt-7 text-lg leading-8 text-stone-700">{business.introCopy}</p>
                  <p className="mt-5 text-base font-medium leading-7 text-stone-600">{business.summary}</p>
                  <ul className="mt-8 grid gap-2 text-stone-700 md:grid-cols-2">
                    {business.divisions.map((division) => (
                      <li key={division.title} className="border-t border-stone-300 pt-3">
                        {division.title}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-9">
                    <Link href={`/${business.slug}`}>Explore this company</Link>
                  </Button>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter title="Find the right BioTure business." cta="Contact the group" />
    </>
  );
}
