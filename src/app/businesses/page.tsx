import Link from "next/link";
import { Building2, Factory, HeartPulse, Landmark, Leaf, Pickaxe, Plane, ShoppingBag } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { businesses, partnerLogos } from "@/data/businesses";

const icons = [Building2, ShoppingBag, Leaf, Pickaxe, Factory, HeartPulse, Plane, Landmark];

export default function BusinessesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="Our businesses"
          title={"Bioture groups.\nEight divisions and companies."}
          copy="Explore the companies shaping Bioture&apos;s work across property, commerce, agriculture, resources, manufacturing, wellness, transport and finance."
          image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=92"
          actions={[
            { href: "#portfolio", label: "View companies" },
            { href: "/contact?subject=partnership", label: "Partner with us", variant: "light" },
          ]}
        />

        <section className="section-shell">
          <SectionLabel index="01" label="How Bioture works" />
          <div className="statement-grid">
            <h2>Eight specialist companies. One shared group platform.</h2>
            <p>
              Bioture Group operates through eight specialist companies. Each business has its own leadership, strategy and market focus while benefiting from the group&apos;s shared governance, capital allocation and long-term vision.
            </p>
          </div>
          <div className="business-jump-grid mt-14">
            {businesses.map((business, index) => {
              const Icon = icons[index] ?? Building2;

              return (
                <Link key={business.slug} href={`#${business.slug}`} className="business-jump-card">
                  <span className="grid size-11 place-items-center text-emerald-950">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="business-jump-count">{business.index}</span>
                  <span className="business-jump-meta">{business.navCategory}</span>
                  <strong>{business.shortTitle}</strong>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-emerald-950 px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/60">Partner with Bioture</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(38px,5vw,76px)] font-bold leading-[1.05] tracking-[-0.04em]">
                Partner with us today and make lasting impact.
              </h2>
            </div>
            <Button asChild variant="light" className="min-w-[220px]">
              <Link href="/contact?subject=partnership">Partner</Link>
            </Button>
          </div>
        </section>

        <section id="portfolio" className="bg-stone-100 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="max-w-4xl text-[clamp(52px,7vw,108px)] font-bold leading-none tracking-[-0.05em]">
                Bioture Companies
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-stone-700">
                Bioture brings together focused operating companies across essential sectors. Each company has its own mandate, market focus and capability, held together by one standard of trust.
              </p>
            </div>
            <div className="grid gap-20 pt-16 md:gap-28">
              {businesses.map((business, index) => (
                <article key={business.slug} id={business.slug} className="motion-item grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                  <div
                    className={index % 2 === 1 ? "motion-image min-h-[420px] bg-cover bg-center lg:order-2 xl:min-h-[560px]" : "motion-image min-h-[420px] bg-cover bg-center xl:min-h-[560px]"}
                    style={{ backgroundImage: `url("${business.image}")` }}
                  />
                  <div className="max-w-2xl">
                    <div className="mb-8 flex items-center gap-5">
                      <span className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-950">{business.index}</span>
                      <span className="h-px flex-1 bg-stone-300" />
                      <span className="text-sm font-medium uppercase tracking-[0.15em] text-stone-500">{business.category}</span>
                    </div>
                    <h2 className="text-[clamp(42px,5.4vw,84px)] font-bold leading-[0.98] tracking-[-0.05em] text-black">{business.title}</h2>
                    <p className="mt-7 text-lg leading-8 text-stone-700">{business.introCopy}</p>
                    <p className="mt-5 text-base font-medium leading-7 text-stone-600">{business.summary}</p>
                    <div className="mt-8">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-950">Partners</p>
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                        {business.partners.map((partner, partnerIndex) => (
                          <div
                            key={partner}
                            title={partner}
                            role="img"
                            aria-label={partner}
                            className="partner-image-tile"
                            style={{ backgroundImage: `url("${partnerLogos[(index + partnerIndex) % partnerLogos.length].image}")` }}
                          />
                        ))}
                      </div>
                    </div>
                    {business.divisions.length > 0 ? (
                      <ul className="mt-8 grid gap-2 text-stone-700 md:grid-cols-2">
                        {business.divisions.map((division) => (
                          <li key={division.title} className="border-t border-stone-300 pt-3">{division.title}</li>
                        ))}
                      </ul>
                    ) : null}
                    <Button asChild className="mt-9">
                      <Link href={`/business/${business.slug}`}>Explore this company</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-soft px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel index="03" label="Team" />
              <h2 className="mt-5 max-w-4xl text-[clamp(38px,5vw,76px)] font-bold leading-[1.05] tracking-[-0.04em]">
                Join the Bioture team and help build enduring companies.
              </h2>
            </div>
            <Button asChild>
              <Link href="/contact?subject=careers">Join our team</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter title="Find the right Bioture business." cta="Contact the group" />
    </>
  );
}
