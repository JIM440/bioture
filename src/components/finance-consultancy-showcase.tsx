import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const financeServices = [
  {
    name: "Consultancy",
    title: "Advisory work across leadership, family and business decisions.",
    copy: "Consultancy services support strategy, governance, planning and sharper operating choices for families, founders and teams.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    href: "/contact?subject=consultancy-service",
    label: "Book a session",
  },
  {
    name: "Finance",
    title: "Accessible finance support for better decisions.",
    copy: "Finance services simplify access to banking, planning and financial intelligence for families, founders and growing institutions.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=90",
    href: "/contact?subject=finance-service",
    label: "Request finance support",
  },
  {
    name: "Insurance",
    title: "Risk guidance that protects what matters.",
    copy: "Insurance services help individuals, businesses and institutions prepare for uncertainty and build a practical safety net.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=90",
    href: "/contact?subject=insurance-service",
    label: "Request insurance guidance",
  },
];

export function FinanceConsultancyShowcase() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16">
        {financeServices.map((service, index) => (
          <article key={service.name} className="motion-item grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className={index % 2 === 1 ? "relative aspect-[5/4] overflow-hidden lg:order-2" : "relative aspect-[5/4] overflow-hidden"}>
              <Image src={service.image} alt={service.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-stone-500">{service.name}</span>
              </div>
              <h2 className="mt-5 text-[clamp(34px,4.5vw,68px)] font-bold leading-[1.06] tracking-[0]">{service.title}</h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">{service.copy}</p>
              <Link href={service.href} className="mt-8 inline-flex items-center gap-3 bg-emerald-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-emerald-900">
                {service.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
