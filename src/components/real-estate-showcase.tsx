import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Business } from "@/data/businesses";

const propertyTypes = [
  {
    title: "Residential homes",
    copy: "State-of-the-art housing concepts shaped around comfort, location and long-term value.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Land assets",
    copy: "Well-positioned plots for private homes, estates and planned community development.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Development properties",
    copy: "Land, commercial and mixed-use opportunities for structured property development.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Commercial spaces",
    copy: "Practical business locations for offices, retail, hospitality and income-generating use.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
  },
];

const interiorSpaces = [
  {
    title: "Living rooms",
    copy: "Open, calm parlors with generous light, practical circulation and room for hosting.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Kitchen sinks",
    copy: "Clean kitchen work zones with durable surfaces, storage and details that support daily use.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Bedrooms",
    copy: "Private rooms shaped for rest, ventilation, storage and a consistent finish standard.",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64b5a?auto=format&fit=crop&w=1400&q=90",
  },
];

const outdoorSpaces = [
  {
    title: "Swimming pools",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Garages",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Terraces",
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1400&q=90",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=92",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=92",
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=92",
  "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1800&q=92",
];

export function RealEstateShowcase({ platform }: { platform?: Business["platform"] }) {
  return (
    <>
      <section className="bg-[#f5f3e8] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(42px,7vw,104px)] font-bold leading-[0.98] tracking-[0]">
              Property types with a longer view.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              Bioture Real Estate presents property acquisition, development and modern housing opportunities through realistic, inspectable property experiences rather than generic placeholders.
            </p>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {propertyTypes.map((type) => (
              <article key={type.title} className="motion-item">
                <div className="motion-image relative aspect-[16/11] overflow-hidden">
                  <Image src={type.image} alt={type.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-5 text-[clamp(26px,3vw,40px)] font-bold leading-[1.05] tracking-[0]">{type.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-stone-600">{type.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[620px] bg-cover bg-center px-5 py-20 text-white md:px-8 md:py-28" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=92')" }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-[1500px] items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/70">Amenities and environments</p>
            <h2 className="mt-5 text-[clamp(44px,6vw,92px)] font-bold leading-[1.02] tracking-[-0.05em]">
              Homes and spaces that feel considered from the first view.
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(40px,6vw,88px)] font-bold leading-[1.02] tracking-[0]">
              Amenities within the homes.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              Interior spaces are shown as part of the property story, from the parlor to work surfaces, bedrooms and finishes that shape everyday comfort.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {interiorSpaces.map((space) => (
              <article key={space.title} className="motion-item">
                <div className="motion-image relative aspect-[4/3] overflow-hidden">
                  <Image src={space.image} alt={space.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-5 text-[clamp(28px,3vw,42px)] font-bold leading-[1.05] tracking-[0]">{space.title}</h3>
                <p className="mt-3 text-stone-600">{space.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(40px,6vw,88px)] font-bold leading-[1.02] tracking-[0]">
              Outdoor spaces with room to breathe.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              Selected properties can feature exterior amenities such as pools, garages, terraces and flexible open-air areas for family and guest use.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {outdoorSpaces.map((space) => (
              <article key={space.title} className="motion-item relative min-h-[360px] overflow-hidden bg-stone-950 text-white md:min-h-[480px]">
                <Image src={space.image} alt={space.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/10 to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 text-[clamp(30px,4vw,52px)] font-bold leading-none tracking-[0]">{space.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(42px,7vw,104px)] font-bold leading-[0.98] tracking-[0]">
              Gallery of places and possibilities.
            </h2>
            <Link href="https://realestate.bioture.com" target="_blank" rel="noreferrer" className="w-max border border-emerald-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-emerald-950 transition hover:bg-emerald-950 hover:text-white">
              View more properties
            </Link>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {gallery.map((image, index) => (
              <div key={image} className="motion-image min-h-[360px] bg-cover bg-center md:min-h-[520px]" style={{ backgroundImage: `url("${image}")` }} role="img" aria-label={`Bioture Real Estate gallery image ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {platform ? (
        <section className="bg-[#f5f3e8] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
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
