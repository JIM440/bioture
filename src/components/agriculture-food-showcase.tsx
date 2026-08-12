import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DivisionItemGrid, type DivisionItem } from "@/components/division-item-grid";

const focusCards = [
  {
    title: "Agriculture focus",
    items: ["Cassava and roots", "Plantain and banana", "Vegetables", "Animal husbandry"],
  },
  {
    title: "Food processing examples",
    items: ["Cleaned grains", "Packaged staples", "Ready-to-cook foods", "Preserved produce"],
  },
];

const agricultureFeature = {
  eyebrow: "Agriculture",
  title: "Productive farms, crops and animal husbandry.",
  copy: "Bioture Agriculture develops practical farming capacity across crop cultivation, animal husbandry and technology-supported production systems. The focus is healthier yields, dependable supply and better value for producers and markets.",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=90",
  href: "/contact?subject=agriculture-partnership",
  label: "Discuss agriculture",
};

const processingFeature = {
  eyebrow: "Food processing",
  title: "Food processing that brings harvests closer to consumers.",
  copy: "Food processing turns agricultural yields into ready-to-consumer products through cleaning, grading, preparation, preservation and packaging. The aim is to reduce waste and create stronger market-ready food lines.",
  image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=1800&q=90",
  href: "/contact?subject=food-processing",
  label: "Explore food processing",
};

const agricultureProducts: DivisionItem[] = [
  {
    name: "Cassava and roots",
    copy: "Staple root crops and cassava-led product opportunities for reliable local food supply.",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Plantain and banana",
    copy: "Fresh produce lines supporting household demand, retail channels and value-added processing.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Corn",
    copy: "Crop production for food staples, animal feed opportunities and processing inputs.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Animal husbandry",
    copy: "Livestock systems designed around responsible care, food supply and practical farm productivity.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=90",
  },
];

const processedProducts: DivisionItem[] = [
  {
    name: "Plantain chips",
    copy: "Snack-ready processed produce with practical packaging and retail appeal.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Coffee",
    copy: "Processed beverage products with attention to consistency, sourcing and presentation.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Packaged staples",
    copy: "Everyday food staples cleaned, prepared and packaged for dependable market supply.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Dried produce",
    copy: "Preserved produce lines that extend shelf life and reduce post-harvest waste.",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=90",
  },
];

export function AgricultureFoodShowcase() {
  return (
    <>
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2">
          {focusCards.map((card) => (
            <article key={card.title} className="border border-stone-200 bg-white p-6 md:p-9">
              <h2 className="text-[clamp(30px,4vw,52px)] font-bold leading-[1.05] tracking-[0]">{card.title}</h2>
              <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-0">
                {card.items.map((item) => (
                  <div key={item} className="border-t border-stone-300 py-4 text-sm font-medium leading-5 text-stone-800">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <FeatureSection section={agricultureFeature} index={0} />
      <DivisionItemGrid title="Agriculture products" items={agricultureProducts} className="bg-white px-5 pb-20 md:px-8 md:pb-28" />
      <FeatureSection section={processingFeature} index={1} />
      <DivisionItemGrid title="Processed food lines" items={processedProducts} className="bg-white px-5 pb-20 md:px-8 md:pb-28" />
    </>
  );
}

function FeatureSection({ section, index }: { section: typeof agricultureFeature; index: number }) {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <article className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className={index % 2 === 1 ? "relative aspect-[5/4] overflow-hidden lg:order-2" : "relative aspect-[5/4] overflow-hidden"}>
          <Image src={section.image} alt={section.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-stone-500">{section.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-[clamp(38px,5vw,74px)] font-bold leading-[1.04] tracking-[0]">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{section.copy}</p>
          <Link href={section.href} className="mt-8 inline-flex items-center gap-3 bg-emerald-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-emerald-900">
            {section.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </section>
  );
}
