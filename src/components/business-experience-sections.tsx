import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const agricultureCards = ["Cassava and roots", "Plantain and banana", "Vegetables", "Animal husbandry"];
const foodCards = ["Cleaned grains", "Packaged staples", "Ready-to-cook foods", "Preserved produce"];

export function BusinessExperienceSections({ business }: { business: Business }) {
  const sections = sectionsBySlug[business.slug] ?? [];

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
          <div key={item} className="border-t border-stone-300 pt-4 font-bold text-stone-800">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
