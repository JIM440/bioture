import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Business } from "@/data/businesses";

export function BusinessCard({ business, wide = false }: { business: Business; wide?: boolean }) {
  return (
    <Link
      href={`/${business.slug}`}
      className={wide ? "group business-card lg:col-span-2" : "group business-card"}
    >
      <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${business.image}")` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/45 to-transparent" />
      <div className="relative flex h-full min-h-[430px] flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-white/65">
          <span>{business.index}</span>
          <span>{business.category}</span>
        </div>
        <h2 className="mt-4 max-w-xl text-4xl font-medium leading-tight tracking-[-0.01em] text-white md:text-5xl">{business.title}</h2>
        <p className="mt-4 max-w-md text-white/74">{business.summary}</p>
        <span className="mt-8 inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-white">
          Explore business <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
