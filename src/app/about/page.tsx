import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  const values = [
    ["01", "Integrity", "We act honestly, transparently and accountably."],
    ["02", "Reliability", "We keep our commitments and build relationships that last."],
    ["03", "Responsibility", "We consider our impact on people, communities and the environment."],
    ["04", "Innovation", "We seek better ways to create meaningful solutions."],
  ];
  const executives = [
    [
      "01",
      "Chief Operating Officer",
      "Mireille Njoya",
      "mireille.njoya@bioturegroup.com",
      "Coordinates group operations, execution standards and performance across the portfolio.",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    ],
    [
      "02",
      "Chief Finance Officer",
      "Patrick Tchoumi",
      "patrick.tchoumi@bioturegroup.com",
      "Leads capital planning, financial stewardship, governance and group-wide reporting.",
      "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=900&q=85",
    ],
    [
      "03",
      "Group Director, Strategy",
      "Clarisse Mballa",
      "clarisse.mballa@bioturegroup.com",
      "Shapes portfolio strategy, strategic partnerships and expansion into priority markets.",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    ],
    [
      "04",
      "Director, People & Culture",
      "Aurelien Fotso",
      "aurelien.fotso@bioturegroup.com",
      "Builds leadership capability, organizational culture and talent systems across the groups.",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    ],
  ];
  const howWeWork = [
    [
      "Center on the customer",
      "Every decision starts with the people, partners and communities we serve. We listen closely, define practical needs and build with accountability.",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=86",
    ],
    [
      "Create with curiosity",
      "We ask better questions, test better routes and stay open to new ways of creating value across industries.",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=86",
    ],
    [
      "Collaborate with candor",
      "Shared expertise moves faster when teams speak clearly, challenge assumptions and work toward common ground.",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=86",
    ],
    [
      "Champion excellence",
      "We set high standards for execution, remove barriers to progress and build businesses designed to endure.",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=86",
    ],
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="About BioTure"
          title="BIOTURE GROUP OF COMPANIES LTD"
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
        />
        <section className="section-shell">
          <SectionLabel index="01" label="Who we are" />
          <div className="statement-grid">
            <h2>A diversified group united by one standard of trust.</h2>
            <div className="space-y-5">
              <p>
                BioTure is built around eight operating groups spanning commerce, agriculture, finance, property,
                natural resources, technology, manufacturing and mobility. Each group contains its own specialist companies,
                divisions and capabilities.
              </p>
              <p>
                At the corporate level, BioTure connects expertise, capital and opportunity, helping each operating group grow
                while maintaining a shared commitment to integrity, reliability and responsible progress.
              </p>
            </div>
          </div>
        </section>
        <section className="grid border-y border-stone-200 md:grid-cols-2">
          {[
            ["02", "Our mission", "To build dependable businesses that solve practical problems and create lasting value."],
            ["03", "Our vision", "To become a trusted African group recognized globally for responsible enterprise and innovation."],
          ].map(([index, label, title]) => (
            <article key={label} className="min-h-[360px] border-stone-200 p-6 md:border-r md:p-10 lg:p-16">
              <SectionLabel index={index} label={label} />
              <h3 className="mt-10 max-w-2xl text-[clamp(30px,4vw,56px)] font-medium leading-[1.08] tracking-[-0.02em]">{title}</h3>
            </article>
          ))}
        </section>
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="border-b border-black pb-5 text-[clamp(36px,4vw,56px)] font-bold leading-tight tracking-[-0.03em]">
              How we work
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {howWeWork.map(([title, copy, image]) => (
                <article key={title} className="motion-item">
                  <div
                    className="motion-image aspect-[1/1] bg-cover bg-center"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                  <h3 className="mt-8 text-[clamp(28px,2.4vw,38px)] font-bold leading-[1.05] tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p className="mt-6 text-[15px] font-medium leading-7 text-black">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-shell">
          <SectionLabel index="04" label="Group leadership" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div className="relative">
              <div
                role="img"
                aria-label="BioTure Group CEO placeholder portrait"
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=88')",
                }}
              />
              <div className="absolute bottom-5 left-5 bg-white px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-600">
                UCHE PHAREZ
              </div>
            </div>
            <div>
              <SectionLabel index="04A" label="Founder & Group Chief Executive Officer" />
              <h2 className="mt-5 text-[clamp(34px,4vw,64px)] font-medium leading-[1.08] tracking-[-0.02em]">Building strong businesses begins with building trust.</h2>
              <blockquote className="mt-8 border-l border-emerald-950 pl-6 text-2xl leading-snug text-stone-700">
                &quot;Our ambition is not simply to participate in industries, but to build dependable institutions that create
                opportunity, strengthen communities and endure across generations.&quot;
              </blockquote>
              <p className="mt-6 text-stone-600">
                As Group Chief Executive Officer, UCHE PHAREZ provides the strategic direction for BioTure&apos;s eight operating groups,
                aligning their individual strengths around responsible growth, disciplined execution and long-term value creation.
              </p>
            </div>
          </div>
        </section>
        <section className="section-shell bg-stone-100">
          <SectionLabel index="05" label="Executive leadership" />
          <div className="statement-grid">
            <h2>A multidisciplinary team guiding the wider BioTure ecosystem.</h2>
            <p>
              Each executive supports the operating groups with focused expertise, shared governance and a commitment to measurable performance.
            </p>
          </div>
          <div className="mt-16 divide-y divide-stone-300 border-y border-stone-300">
            {executives.map(([count, role, name, email, copy, image]) => (
              <article key={role} className="team-row grid gap-5 py-7 transition md:grid-cols-[48px_112px_minmax(220px,0.75fr)_1fr] md:items-center md:px-5">
                <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-emerald-950">{count}</div>
                <div
                  role="img"
                  aria-label={`${role} placeholder portrait`}
                  className="team-photo h-32 w-28 bg-cover bg-center"
                  style={{ backgroundImage: `url("${image}")` }}
                />
                <div>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-emerald-950">{role}</span>
                  <h3 className="mt-2">{name}</h3>
                  <a href={`mailto:${email}`} className="mt-3 block w-max border-b border-emerald-950 pb-1 text-sm font-medium text-emerald-950">
                    {email}
                  </a>
                </div>
                <p className="max-w-xl text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="px-[max(5vw,40px)] py-[120px] text-white" style={{ background: "var(--green)" }}>
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel index="05" label="What guides us" light />
            <h2 className="mt-5 max-w-4xl text-[clamp(34px,5vw,76px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Principles that travel across every company.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {values.map(([index, title, copy]) => (
                <article key={title} className="border border-white/15 p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">{index}</span>
                  <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                  <p className="mt-3 text-white/68">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-shell">
          <SectionLabel index="06" label="Our global ambition" />
          <div className="statement-grid">
            <h2>Nation building across the world.</h2>
            <p>
              This map is prepared for BioTure&apos;s current and future markets. Confirmed countries, offices and projects can be highlighted
              as the group expands.
            </p>
          </div>
          <div className="relative mt-12 grid min-h-[500px] place-items-center overflow-hidden border border-stone-200 bg-white p-6">
            <svg viewBox="0 0 1000 500" role="img" aria-label="Stylised world map" className="w-full max-w-5xl">
              <path
                fill="#dfe8dc"
                d="M66 171l55-66 76-27 75 28 22 55-38 45-57 4-29 44-68-5-35-31zm251-36 45-31 73 16 35 45-20 43-51 20-47-21-32-35zm85 120 39 8 36 61-17 86-49-5-31-79zm150-126 65-48 134 13 72 48-9 42-83 3-32 42-69-13-43 29-61-30-20-50zm156 127 52-24 71 24 47 61-25 50-77 15-51-45z"
              />
              <circle className="map-dot" cx="487" cy="294" r="9" />
              <circle className="map-dot" cx="530" cy="260" r="7" />
              <circle className="map-dot" cx="592" cy="178" r="7" />
              <circle className="map-dot" cx="695" cy="170" r="7" />
              <circle className="map-dot" cx="215" cy="185" r="7" />
            </svg>
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {["Africa", "Middle East", "Europe", "Asia", "Americas"].map((region) => (
                <div key={region} className="bg-green-soft px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-emerald-950">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
