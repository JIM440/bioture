import Image from "next/image";
import { Building2, CalendarDays, MapPin, Network } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businesses } from "@/data/businesses";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const executives = [
  ["01", "Chief Operating Officer", "Mireille Njoya", "mireille.njoya@bioturegroup.com", "Coordinates group operations, execution standards and performance across the portfolio.", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=90"],
  ["02", "Chief Finance Officer", "Patrick Tchoumi", "patrick.tchoumi@bioturegroup.com", "Leads capital planning, financial stewardship, governance and group-wide reporting.", "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=1200&q=90"],
  ["03", "Group Director, Strategy", "Clarisse Mballa", "clarisse.mballa@bioturegroup.com", "Shapes portfolio strategy, strategic partnerships and expansion into priority markets.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90"],
  ["04", "Director, People & Culture", "Aurelien Fotso", "aurelien.fotso@bioturegroup.com", "Builds leadership capability, organizational culture and talent systems across the groups.", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=90"],
];

const partnerLogos = [
  ["Microsoft", "https://logo.clearbit.com/microsoft.com"],
  ["DHL", "https://logo.clearbit.com/dhl.com"],
  ["Schneider Electric", "https://logo.clearbit.com/se.com"],
  ["Afreximbank", "https://logo.clearbit.com/afreximbank.com"],
  ["TotalEnergies", "https://logo.clearbit.com/totalenergies.com"],
  ["Standard Chartered", "https://logo.clearbit.com/sc.com"],
];

const howWeWork = [
  ["Center on the customer", "Every decision starts with the people, partners and communities we serve.", "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=90"],
  ["Create with curiosity", "We ask better questions, test better routes and stay open to new ways of creating value.", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=90"],
  ["Collaborate with candor", "Shared expertise moves faster when teams speak clearly and work toward common ground.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90"],
  ["Champion excellence", "We set high standards for execution and build businesses designed to endure.", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=90"],
];

const totalCompaniesAndDivisions = businesses.length + businesses.reduce((total, business) => total + business.divisions.length, 0);

export default function AboutPage() {
  const glanceStats = [
    { label: "Founded", value: "2026", Icon: CalendarDays },
    { label: "Headquarters", value: "Cameroon", Icon: MapPin },
    { label: "Operating groups", value: "8", Icon: Building2 },
    { label: "Companies & divisions", value: String(totalCompaniesAndDivisions), Icon: Network },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="About Bioture"
          title="Bioture Group of Companies Ltd"
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=92"
        />

        <section className="section-shell">
          <SectionLabel index="01" label="Who we are" />
          <div className="statement-grid">
            <h2>A diversified group built to create lasting enterprise value.</h2>
            <div className="space-y-5">
              <p>
                Bioture Group is a diversified holding company that builds, operates and invests in businesses across essential industries. Through disciplined governance, strategic capital allocation and operational excellence, we create sustainable businesses that contribute to economic growth while generating long-term value for our stakeholders.
              </p>
              <p>
                The group operates through eight specialist companies across real estate, commerce, agriculture and food, resources and energy, manufacturing, health and wellness, transport and logistics, and finance and consultancy.
              </p>
              <Button>
                <Link href='/businesses'>Explore our companies</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-stone-100 px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel index="02" label="Bioture at a glance" />
            <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {glanceStats.map(({ label, value, Icon }) => (
                <article key={label} className="border border-stone-300 bg-white p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone-500 sm:text-xs sm:tracking-[0.15em]">{label}</p>
                    <span className="grid size-9 shrink-0 place-items-center bg-green-soft text-emerald-950 sm:size-10">
                      <Icon className="size-4 sm:size-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <strong className="mt-5 block text-[clamp(28px,8vw,62px)] font-bold leading-none tracking-[0] text-black">{value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto grid gap-6 max-w-[1500px] md:grid-cols-2 md:gap-12">
            {[
              ["03", "Our mission", "To build dependable businesses that solve practical problems and create lasting value."],
              ["04", "Our vision", "To become a trusted African group recognized globally for responsible enterprise and innovation."],
            ].map(([index, label, title]) => (
              <article key={label} className="min-h-[320px] border border-stone-200 p-6 md:p-10 lg:p-12">
                <SectionLabel index={index} label={label} />
                <h3 className="mission-vision-title mt-10 max-w-2xl text-[clamp(34px,4.8vw,68px)] font-bold leading-[1.04] tracking-[-0.04em]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-green-soft">
          <div className="section-shell">
            <SectionLabel index="05" label="Nation building" />
            <div className="statement-grid">
              <h2>Building institutions for Cameroon, Africa and future global markets.</h2>
              <p>
                Bioture is designed to participate in nation building through productive companies, employment, infrastructure, responsible resource use, stronger value chains and partnerships that travel across borders.
              </p>
            </div>
            <div className="about-map-figure relative mx-auto mt-12 grid w-full place-items-center overflow-hidden">
              <Image
                src="/assets/world-map.svg"
                alt="Stylised world map"
                width={1185}
                height={600}
                className="h-auto w-[112%] max-w-none"
              />
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-stone-200">
          <SectionLabel index="06" label="Group leadership" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div className="relative">
              <div role="img" aria-label="Bioture Group CEO portrait" className="aspect-[4/5] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=90')" }} />
              <div className="absolute bottom-5 left-5 bg-white px-5 py-4">
                <strong className="mt-1 block text-3xl font-bold tracking-[-0.03em] text-black">UCHE PHAREZ</strong>
              </div>
            </div>
            <div>
              <SectionLabel index="06A" label="Founder & Group CEO" />
              <h2 className="mt-5 text-[clamp(40px,5vw,78px)] font-bold leading-[1.03] tracking-[-0.045em]">Leadership for disciplined growth.</h2>
              <p className="mt-8 text-xl leading-8 text-stone-700">
                As Founder and Group CEO, Uche Pharez provides strategic leadership across Bioture&apos;s portfolio, guiding capital allocation, long-term growth, governance and partnerships while ensuring every operating company reflects the group&apos;s commitment to trust, innovation and sustainable value creation.
              </p>
              <blockquote className="mt-8 border-l-4 border-emerald-950 pl-6 text-2xl leading-snug text-stone-700">
                &quot;Our ambition is not simply to participate in industries, but to build dependable institutions that create opportunity, strengthen communities and endure across generations.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-green-soft px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel index="07" label="Our Partnership Ecosystem" />
            <h2 className="mt-5 max-w-4xl text-[clamp(38px,5vw,74px)] font-bold leading-[1.05] tracking-[-0.04em]">Strategic relationships that help the group scale responsibly.</h2>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {partnerLogos.map(([partner, logo]) => (
                <div key={partner} className="partner-logo-card" title={partner} aria-label={partner}>
                  <div
                    className="partner-logo-image"
                    role="img"
                    aria-hidden="true"
                    style={{ backgroundImage: `url("${logo}")` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100">
          <div className="section-shell">
            <SectionLabel index="08" label="Executive team" />
            <div className="statement-grid">
              <h2>A multidisciplinary team guiding the wider Bioture ecosystem.</h2>
              <p>Each executive supports the operating groups with focused expertise, shared governance and a commitment to measurable performance.</p>
            </div>
            <div className="mt-16 divide-y divide-stone-300 border-y border-stone-300">
              {executives.map(([count, role, name, email, copy, image]) => (
                <article key={role} className="team-row grid gap-5 py-7 transition md:grid-cols-[48px_112px_minmax(220px,0.75fr)_1fr] md:items-center md:px-5">
                  <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-emerald-950">{count}</div>
                  <div role="img" aria-label={`${role} portrait`} className="team-photo h-48 w-full bg-cover bg-center md:h-32 md:w-28" style={{ backgroundImage: `url("${image}")` }} />
                  <div>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-emerald-950">{role}</span>
                    <h3 className="mt-2 text-[clamp(30px,3vw,48px)] font-bold tracking-[-0.04em]">{name}</h3>
                    <a href={`mailto:${email}`} className="mt-3 block w-max border-b border-emerald-950 pb-1 text-sm font-medium text-emerald-950">{email}</a>
                  </div>
                  <p className="max-w-xl text-stone-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="border-b-4 border-emerald-950 pb-5 text-[clamp(36px,4vw,56px)] font-bold leading-tight tracking-[-0.03em]">How we work</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {howWeWork.map(([title, copy, image]) => (
                <article key={title} className="motion-item">
                  <div className="motion-image aspect-[1/1] bg-cover bg-center" style={{ backgroundImage: `url("${image}")` }} />
                  <h3 className="mt-8 text-[clamp(28px,2.4vw,38px)] font-bold leading-[1.05] tracking-[-0.035em]">{title}</h3>
                  <p className="mt-6 text-[15px] font-medium leading-7 text-black">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 px-[max(5vw,40px)] py-[120px] text-black">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel index="10" label="What guides us" />
            <h2 className="mt-5 max-w-4xl text-[clamp(40px,5vw,76px)] font-bold leading-[1.05] tracking-[-0.04em]">Integrity, trust, reliability and innovation.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Integrity", "We act honestly, transparently and accountably."],
                ["02", "Trust", "We earn confidence through clarity and consistency."],
                ["03", "Reliability", "We keep commitments and build relationships that last."],
                ["04", "Innovation", "We seek better ways to create meaningful solutions."],
              ].map(([index, title, copy]) => (
                <article key={title} className="border border-stone-200 bg-white p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500">{index}</span>
                  <h3 className="mt-10 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-stone-700">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
