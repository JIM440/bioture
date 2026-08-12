import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DivisionItemGrid, type DivisionItem } from "@/components/division-item-grid";
import type { Business } from "@/data/businesses";

const sectionsBySlug: Record<string, Array<{ title: string; copy: string; image: string; href?: string; label?: string }>> = {
  "agriculture-food": [
    {
      title: "Productive farms, crops and animal husbandry.",
      copy: "Bioture Agriculture develops practical farming capacity across crop cultivation, animal husbandry and technology-supported production systems. The focus is healthier yields, dependable supply and better value for producers and markets.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=agriculture-partnership",
      label: "Discuss agriculture",
    },
    {
      title: "Food processing that brings harvests closer to consumers.",
      copy: "Food processing turns agricultural yields into ready-to-consumer products through cleaning, grading, preparation, preservation and packaging. The aim is to reduce waste and create stronger market-ready food lines.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=food-processing",
      label: "Explore food processing",
    },
  ],
  "resources-energy": [
    {
      title: "Mining and minerals with responsible participation.",
      copy: "The resources group focuses on mineral opportunities including bauxite, copper and gold, with attention to disciplined partnerships, local value, environmental management and accountable extraction practices.",
      image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=mining-minerals",
      label: "Discuss mining opportunities",
    },
    {
      title: "Oil and gas across extraction, refining and market supply.",
      copy: "Bioture Resources & Energy participates across the oil and gas value chain, from drilling and extraction through refining and consumer-market supply, with an emphasis on responsible technical partners.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=oil-gas",
      label: "Connect on oil and gas",
    },
  ],
  "transport-logistics": [
    {
      title: "Transport and logistics for people, goods and markets.",
      copy: "The transport and logistics company connects people and goods across local, regional and international routes, supporting cargo movement, coordination and wider transport networks.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=transport-logistics",
      label: "Plan logistics",
    },
    {
      title: "Aviation and transport transit that reduces wait time.",
      copy: "Aviation and transport transit services are designed to connect local and international flights, reduce delays and support smoother movement for people and priority goods.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=aviation-transit",
      label: "Discuss aviation transit",
    },
    {
      title: "Automobile engineering for affordable, eco-friendly mobility.",
      copy: "The automobile division explores affordable, more efficient and eco-conscious vehicle solutions, from mobility services to practical engineering partnerships.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=automobile",
      label: "Explore automobile solutions",
    },
  ],
  "finance-consultancy": [
    {
      title: "Finance made accessible for better decisions.",
      copy: "Finance services simplify access to banking and provide financial intelligence for family, business and economic decisions.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=finance-service",
      label: "Request finance support",
    },
    {
      title: "Insurance as a safety net.",
      copy: "Insurance services help individuals, businesses and institutions prepare for risk and protect what matters.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=insurance-service",
      label: "Request insurance guidance",
    },
    {
      title: "Consultancy across family, business, leadership and governance.",
      copy: "Consultancy services support practical decisions, leadership growth, business planning and governance improvement.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
      href: "/contact?subject=consultancy-service",
      label: "Book a session",
    },
  ],
};

const agricultureCards = ["Cassava and roots", "Plantain and banana", "Corn", "Animal husbandry"];
const foodCards = ["Cleaned grains", "Packaged staples", "Ready-to-cook foods", "Preserved produce"];

const resourceCardGroups: Record<string, DivisionItem[]> = {
  "Mining & minerals": [
    {
      name: "Bauxite",
      copy: "Mineral opportunities assessed through disciplined partnerships and responsible participation.",
      image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Copper",
      copy: "Resource development routes shaped around technical capability, market demand and accountable operations.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Gold",
      copy: "High-value mineral participation with attention to governance, local value and long-term stewardship.",
      image: "https://images.unsplash.com/photo-1610375461369-d613b5640e96?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Concession partnerships",
      copy: "Partnership models for licence holders, operators and technical resource teams.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=90",
    },
  ],
  "Oil & gas": [
    {
      name: "Exploration",
      copy: "Participation pathways across early-stage energy opportunities and technical partnerships.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Production",
      copy: "Project participation built around operational discipline, safety and reliable execution.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Refining",
      copy: "Downstream opportunities that connect resource output with practical market supply.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Energy supply",
      copy: "Supply relationships for industrial buyers, infrastructure partners and priority markets.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=90",
    },
  ],
};

const wellnessCardGroups: Record<string, DivisionItem[]> = {
  "Biomedicals & pharmaceuticals": [
    {
      name: "Biomedical research support",
      copy: "Research partnerships, clinical insight and specialist coordination for stronger health outcomes.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Pharmaceutical access",
      copy: "Practical medicine access, distribution readiness and pharmacy-channel support.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Laboratory partnerships",
      copy: "Diagnostic and laboratory relationships that support reliable testing and research workflows.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Disease-control systems",
      copy: "Systems thinking for prevention, monitoring and coordinated disease-response programmes.",
      image: "https://images.unsplash.com/photo-1581093458791-9d09cc8c9f39?auto=format&fit=crop&w=900&q=90",
    },
  ],
  Cosmetics: [
    {
      name: "Skin care",
      copy: "Personal care products shaped around quality, safety and everyday customer trust.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Fragrance",
      copy: "Distinctive scent products built for memorable retail and personal-care experiences.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Beauty products",
      copy: "Market-ready beauty lines with strong presentation and dependable formulation standards.",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Safety-led formulation",
      copy: "Ingredient choices, adviser input and review processes centred on customer wellbeing.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=90",
    },
  ],
};

const manufacturingCardGroups: Record<string, DivisionItem[]> = {
  Manufacturing: [
    {
      name: "Consumer products",
      copy: "Practical goods designed around everyday use, reliable quality and market-ready presentation.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Industrial equipment",
      copy: "Equipment concepts and production systems for practical commercial and industrial needs.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Private-label production",
      copy: "Production partnerships that help clients take branded products from idea to shelf.",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Quality systems",
      copy: "Process controls, supplier standards and review routines built for dependable output.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=90",
    },
  ],
  "Gadgets & artificial intelligence": [
    {
      name: "Smart devices",
      copy: "Connected device concepts designed to support practical work and daily productivity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Applied AI tools",
      copy: "AI-enabled tools that help teams automate work, make decisions and improve service delivery.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Hardware concepts",
      copy: "Product concepts that combine hardware design, sourcing and usability for priority sectors.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Product automation",
      copy: "Automation ideas that reduce repetitive work and improve operational reliability.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=90",
    },
  ],
};

export function BusinessExperienceSections({ business }: { business: Business }) {
  const sections = sectionsBySlug[business.slug] ?? [];

  if (business.slug === "transport-logistics") {
    return <TransportLogisticsSections business={business} />;
  }

  if (business.slug === "resources-energy") {
    return <ResourceEnergySections business={business} />;
  }

  if (business.slug === "health-wellness") {
    return <HealthWellnessSections business={business} />;
  }

  if (business.slug === "manufacturing") {
    return <ManufacturingSections business={business} />;
  }

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {sections.map((section, index) => (
          <article key={section.title} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div
              className={index % 2 === 1 ? "min-h-[390px] bg-cover bg-center lg:order-2 lg:min-h-[560px]" : "min-h-[390px] bg-cover bg-center lg:min-h-[560px]"}
              style={{ backgroundImage: `url("${section.image}")` }}
              role="img"
              aria-label={section.title}
            />
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-[clamp(38px,5vw,74px)] font-bold leading-[1.04] tracking-[-0.045em]">
                {section.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-700">{section.copy}</p>
              {section.href && section.label ? (
                <Link href={section.href} className="mt-8 inline-flex items-center gap-3 border border-emerald-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-emerald-950 transition hover:bg-emerald-950 hover:text-white">
                  {section.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </article>
        ))}

        {business.slug === "agriculture-food" ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <DetailList title="Agriculture focus" items={agricultureCards} />
            <DetailList title="Food processing examples" items={foodCards} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-stone-200 p-6 md:p-8">
      <h3 className="text-3xl font-bold tracking-[-0.03em]">{title}</h3>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="border-t border-stone-300 pt-4 font-bold leading-tight tracking-[0] text-stone-900 !text-[24px] md:!text-[30px]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportLogisticsSections({ business }: { business: Business }) {
  const [logistics, aviation, automobile] = business.divisions;
  const rowDivisions = [logistics, automobile].filter(Boolean);

  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {rowDivisions.map((division, index) => (
          <article key={division.title} className="transport-feature-row">
            <div className={index % 2 === 1 ? "transport-feature-media lg:order-2" : "transport-feature-media"}>
              <Image src={division.image} alt={division.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="transport-feature-copy">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{division.title}</h2>
              <p>{division.description}</p>
              <Link href={`/contact?subject=${index === 0 ? "transport-logistics" : "automobile"}`} className="division-text-cta">
                {index === 0 ? "Plan logistics" : "Explore automobile solutions"}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}

        {aviation ? (
          <FeatureOverlay
            title={aviation.title}
            copy={aviation.description}
            image={aviation.image}
            href="/contact?subject=aviation-transit"
            label="Discuss aviation transit"
          />
        ) : null}
      </div>
    </section>
  );
}

function ResourceEnergySections({ business }: { business: Business }) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {business.divisions.map((division) => (
          <div key={division.title} className="grid gap-10">
            <FeatureOverlay
              title={division.title}
              copy={division.description}
              image={division.image}
              href={business.actionHref}
              label={business.actionLabel}
            />
            <ProductCardGrid
              title={`${division.title} focus`}
              items={resourceCardGroups[division.title] ?? []}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ManufacturingSections({ business }: { business: Business }) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {business.divisions.map((division) => (
          <div key={division.title} className="grid gap-10">
            <FeatureOverlay
              title={division.title}
              copy={division.description}
              image={division.image}
              href={business.actionHref}
              label={business.actionLabel}
            />
            <ProductCardGrid
              title={`${division.title} focus`}
              items={manufacturingCardGroups[division.title] ?? []}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthWellnessSections({ business }: { business: Business }) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {business.divisions.map((division) => (
          <div key={division.title} className="grid gap-10">
            <FeatureOverlay
              title={division.title}
              copy={division.description}
              image={division.image}
              href={business.actionHref}
              label={business.actionLabel}
            />
            <ProductCardGrid
              title={`${division.title} focus`}
              items={wellnessCardGroups[division.title] ?? []}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCardGrid({ title, items }: { title: string; items: DivisionItem[] }) {
  return <DivisionItemGrid title={title} items={items} />;
}

function FeatureOverlay({
  title,
  copy,
  image,
  href,
  label,
}: {
  title: string;
  copy: string;
  image: string;
  href: string;
  label: string;
}) {
  return (
    <article className="group relative min-h-[460px] overflow-hidden bg-stone-950 text-white md:min-h-[560px]">
      <Image src={image} alt={title} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.76),rgba(0,0,0,.34)_58%,rgba(0,0,0,.1))]" />
      <div className="relative z-10 flex min-h-[460px] max-w-3xl flex-col justify-center p-6 md:min-h-[560px] md:p-10">
        <h2 className="max-w-3xl text-[clamp(38px,5vw,74px)] font-bold uppercase leading-[0.98] tracking-[0] text-white">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base font-bold leading-7 text-white/88">{copy}</p>
        <Link href={href} className="division-text-cta division-text-cta-light">
          {label}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
