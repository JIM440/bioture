import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DivisionItemGrid } from "@/components/division-item-grid";
import type { Business } from "@/data/businesses";

const beverages = [
  {
    name: "Wellness drinks",
    copy: "Functional beverages made for everyday refreshment and wellbeing.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Juice blends",
    copy: "Fruit-forward blends with consistent taste, packaging and shelf appeal.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Bottled water",
    copy: "Clean, dependable hydration for homes, offices, retail and events.",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Specialty beverages",
    copy: "Distinctive drink lines shaped around market demand and brand positioning.",
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=90",
  },
];

const fashionItems = [
  {
    name: "Ready-to-wear",
    copy: "Everyday clothing lines with practical fits and clear presentation.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Traditional wear",
    copy: "Cultural garments shaped for occasions, identity and modern styling.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Footwear",
    copy: "Casual and occasion footwear selected for comfort and durability.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Bags",
    copy: "Handbags, work bags and carry pieces for daily and formal use.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Accessories",
    copy: "Finishing pieces that complete retail fashion collections.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Textiles",
    copy: "Fabric selections for designers, tailors and private-label production.",
    image: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Corporate wear",
    copy: "Clean uniforms and business-ready apparel for teams and institutions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Beauty retail",
    copy: "Complementary fashion-adjacent goods for curated retail experiences.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=90",
  },
];

export function CommerceShowcase({ platform }: { platform?: Business["platform"] }) {
  return (
    <>
      <section className="section-shell">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1fr]">
          <h2 className="section-title">Companies and divisions.</h2>
          <p className="max-w-xl text-stone-600">
            Bioture Commerce brings together beverages and fashion through practical product lines, market-ready presentation and dependable distribution.
          </p>
        </div>
        <CommerceFeature
          title="Beverages"
          copy="Distinctive beverage products with carefully selected ingredients, consistent quality and strong retail potential."
          image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=90"
          href="/contact?subject=commerce"
          label="Shop now"
        />
      </section>

      <DivisionItemGrid title="Beverage lines" items={beverages} columns="md:grid-cols-4" className="section-shell bg-white" />

      <section className="section-shell">
        <CommerceFeature
          title="Fashion"
          copy="Fashion products that translate cultural expression, everyday utility and retail demand into wearable collections."
          image="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=90"
          href="/contact?subject=commerce"
          label="Shop now"
        />
      </section>

      <DivisionItemGrid title="Fashion products" items={fashionItems} columns="sm:grid-cols-2 lg:grid-cols-4" className="section-shell bg-white" />

      {platform ? (
        <section className="bg-[#f5f3e8]">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(40px,5.5vw,78px)] font-bold leading-[1.04] tracking-[0]">
                {platform.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">{platform.copy}</p>
            </div>
            <Button asChild className="lg:justify-self-end">
              <a href={platform.href} target="_blank" rel="noreferrer">{platform.label}</a>
            </Button>
          </div>
        </section>
      ) : null}
    </>
  );
}

function CommerceFeature({
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
    <article className="group relative min-h-[420px] overflow-hidden bg-stone-950 text-white md:min-h-[520px]">
      <Image src={image} alt={title} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74),rgba(0,0,0,.24)_58%,rgba(0,0,0,.08))]" />
      <div className="relative z-10 flex min-h-[420px] max-w-2xl flex-col justify-center p-6 md:min-h-[520px] md:p-10">
        <h2 className="max-w-[620px] text-[clamp(42px,5vw,76px)] font-bold uppercase leading-[0.95] tracking-[0] text-white">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-base font-bold leading-7 text-white/88">{copy}</p>
        <Link href={href} className="mt-9 inline-flex w-max items-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-stone-100">
          {label}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
