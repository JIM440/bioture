import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { partnerLogos, type Business } from "@/data/businesses";

const wrap = "mx-auto w-[min(1500px,calc(100%_-_28px))] md:w-[min(1500px,calc(100%_-_48px))]";

const propertyTypes = [
  {
    title: "Contemporary family residence",
    image: "/assets/real-estate/real-estate-residence-1.jpeg",
    meta: "Residence",
  },
  {
    title: "Urban villa concept",
    image: "/assets/real-estate/real-estate-residence-2.jpeg",
    meta: "Residence",
  },
  {
    title: "Multi-residential living",
    image: "/assets/real-estate/real-estate-rental.jpeg",
    meta: "Development",
  },
  {
    title: "Modern residential development",
    image: "/assets/real-estate/real-estate-development-1.jpeg",
    meta: "Development",
  },
];

const capabilities = [
  ["Acquire", "Prime land and property opportunities."],
  ["Develop", "Residential and mixed-use developments."],
  ["Create", "Contemporary spaces for modern living."],
  ["Partner", "Opportunities for investors and landowners."],
];

const experienceCards = [
  {
    title: "Living Spaces",
    copy: "Living rooms · Dining · Kitchens",
    image: "/assets/real-estate/real-estate-living-room-1.jpeg",
  },
  {
    title: "Private Spaces",
    copy: "Bedrooms · Dressing rooms · Bathrooms",
    image: "/assets/real-estate/real-estate-bedroom-1.jpeg",
  },
  {
    title: "Outdoor Living",
    copy: "Pools · Terraces · Landscapes · Garages",
    image: "/assets/real-estate/real-estate-pool-1.jpeg",
  },
];

const storyRows = [
  {
    label: "01 — LIVING ROOMS",
    title: "Made for gathering.",
    copy: "Open, light-filled living spaces designed around comfort, practical circulation and room for family life and entertaining.",
    image: "/assets/real-estate/real-estate-living-room-2.jpeg",
  },
  {
    label: "02 — KITCHENS & DINING",
    title: "Where everyday life comes together.",
    copy: "Practical, refined spaces where preparation, dining and gathering are brought together through considered layouts and durable finishes.",
    image: "/assets/real-estate/real-estate-kitchen-2.jpeg",
  },
  {
    label: "03 — BEDROOMS",
    title: "Calm by design.",
    copy: "Private rooms shaped around rest, ventilation, comfort and a consistent finish standard throughout the residence.",
    image: "/assets/real-estate/real-estate-bedroom-2.jpeg",
  },
  {
    label: "04 — BATHROOMS",
    title: "Refined everyday rituals.",
    copy: "Considered materials, practical layouts and clean detailing transform essential spaces into comfortable private environments.",
    image: "/assets/real-estate/real-estate-restroom-1.jpeg",
  },
  {
    label: "05 — DRESSING ROOMS",
    title: "Storage, integrated beautifully.",
    copy: "Purposeful dressing and storage environments extend the private suite while keeping organisation part of the architecture.",
    image: "/assets/real-estate/real-estate-dressing-room.jpeg",
  },
  {
    label: "06 — HOME OFFICES",
    title: "Room to focus.",
    copy: "Dedicated work environments support concentration, productivity and contemporary ways of working from home.",
    image: "/assets/real-estate/real-estate-office.jpeg",
  },
];

const amenities = [
  {
    title: "Private Cinema",
    image: "/assets/real-estate/real-estate-movie-room.jpeg",
  },
  {
    title: "Private Pools",
    image: "/assets/real-estate/real-estate-pool-2.jpeg",
  },
  {
    title: "Fitness & Wellness",
    image: "/assets/real-estate/real-estate-gym-1.jpeg",
  },
  {
    title: "Secure Parking & Garages",
    image: "/assets/real-estate/real-estate-garage.jpeg",
  },
];

const investmentCards = [
  ["01", "Property Acquisition", "Discover selected residential and property opportunities presented through clear, inspectable experiences."],
  ["02", "Development Partnerships", "Work with Bioture on land, residential and mixed-use development opportunities with a long-term view."],
  ["03", "Land & Investment", "Explore strategically positioned land and property opportunities for private, commercial and development use."],
];

const partnerCards = [
  ["01", "Development Partners", "Landowners, developers and strategic collaborators working with Bioture on residential and mixed-use opportunities."],
  ["02", "Construction Partners", "Trusted contractors, engineers and delivery specialists supporting quality execution from concept to completion."],
  ["03", "Architecture & Design", "Architects, interior designers and consultants helping shape distinctive, functional and enduring spaces."],
  ["04", "Financial Partners", "Institutions and investment partners supporting structured property acquisition, financing and long-term development."],
  ["05", "Property & Sales Partners", "Brokers, agents and market specialists helping connect the right people to the right real estate opportunities."],
];

const gallery = [
  "/assets/real-estate/real-estate-gallery-house-1.jpeg",
  "/assets/real-estate/real-estate-gallery-room-1.jpeg",
  "/assets/real-estate/real-estate-gallery-rental.jpeg",
  "/assets/real-estate/real-estate-gallery-kitchen.jpeg",
  "/assets/real-estate/real-estate-gallery-house-2.jpeg",
  "/assets/real-estate/real-estate-gallery-indoor.jpeg",
];

export function RealEstateShowcase({ platform: _platform }: { platform?: Business["platform"] }) {
  return (
    <>
      <section className="bg-white py-[78px] md:py-[110px]">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20`}>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Bioture Real Estate</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(42px,6vw,82px)] font-bold leading-[1.02] tracking-[0]">
              Property with a longer view.
            </h2>
            <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
              Bioture Real Estate develops and presents residential, commercial and land opportunities shaped around strategic locations, considered design and long-term value.
            </p>
          </div>
          <div className="grid border-t border-stone-300 md:grid-cols-2">
            {capabilities.map(([title, copy]) => (
              <div key={title} className="border-b border-stone-300 py-5 md:odd:border-r md:odd:pr-6 md:even:pl-6">
                <strong className="block text-lg font-bold text-black">{title}</strong>
                <span className="mt-1 block text-sm leading-6 text-stone-600">{copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f4f2ec] py-[78px] md:py-[110px]">
        <div className={wrap}>
          <div className="mb-[42px]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Property portfolio</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(40px,5.5vw,76px)] font-bold leading-[1.04] tracking-[0]">
                Properties designed for how people live.
              </h2>
            </div>
          </div>

          <div className="grid gap-[14px] md:grid-cols-2 md:grid-rows-[360px_260px_260px] lg:grid-cols-[1.4fr_0.9fr_0.9fr] lg:grid-rows-[320px_320px]">
            {propertyTypes.map((type, index) => (
              <article
                key={type.title}
                className={
                  index === 0
                    ? "group relative min-h-[300px] overflow-hidden bg-black text-white md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : index === 3
                      ? "group relative min-h-[300px] overflow-hidden bg-black text-white lg:col-span-2"
                      : "group relative min-h-[300px] overflow-hidden bg-black text-white"
                }
              >
                <Image src={type.image} alt={type.title} fill sizes="(min-width: 1024px) 34vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
                <div className="absolute bottom-[22px] left-6 right-6 z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">{type.meta}</span>
                  <strong className="mt-1 block text-lg font-bold leading-tight text-white">{type.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[78px] md:py-[110px]">
        <div className={wrap}>
          <div className="mb-12 max-w-[820px]">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">The living experience</p>
            <h2 className="mt-5 text-[clamp(40px,5.5vw,76px)] font-bold leading-[1.04] tracking-[0]">
              Designed from the outside in.
            </h2>
            <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
              A home is more than its architecture. Bioture considers the spaces, details and experiences that define everyday living.
            </p>
          </div>

          <div className="grid gap-[14px] md:grid-cols-2 md:grid-rows-[420px_280px] lg:grid-cols-[1.25fr_0.8fr] lg:grid-rows-[330px_330px]">
            {experienceCards.map((card, index) => (
              <article
                key={card.title}
                className={index === 0 ? "relative min-h-[330px] overflow-hidden bg-black text-white md:col-span-2 lg:col-span-1 lg:row-span-2" : "relative min-h-[330px] overflow-hidden bg-black text-white"}
              >
                <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-transparent to-transparent" />
                <div className="absolute bottom-[25px] left-7 right-7 z-10 text-white">
                  <strong className="block !text-[26px] font-bold leading-tight tracking-[0] text-white">{card.title}</strong>
                  <span className="mt-1 block text-[13px] text-white/82">{card.copy}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ec] py-[78px] text-black md:py-[110px]">
        <div className={wrap}>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-stone-600">Inside the home</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(42px,6vw,84px)] font-bold leading-[1.03] tracking-[0] text-black">
            Spaces considered in every detail.
          </h2>
          <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
            Every room contributes to the experience of a home. From shared spaces to private retreats, each environment is considered around comfort, function and everyday living.
          </p>

          <div className="mt-[75px] grid gap-[75px]">
            {storyRows.map((space, index) => (
              <article key={space.title} className="grid gap-9 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
                <div className={index % 2 === 1 ? "relative h-[380px] overflow-hidden lg:order-2 lg:h-[510px]" : "relative h-[380px] overflow-hidden lg:h-[510px]"}>
                  <Image src={space.image} alt={space.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone-600">{space.label}</span>
                  <p className="mt-3 max-w-xl !text-[clamp(39px,4vw,48px)] font-bold leading-[1.08] tracking-[0] text-black">
                    {space.title}
                  </p>
                  <p className="mt-4 max-w-[500px] text-base leading-7 text-stone-700">{space.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[78px] md:py-[110px]">
        <div className={wrap}>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Lifestyle & amenities</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(40px,5.5vw,76px)] font-bold leading-[1.04] tracking-[0]">
            Beyond the residence.
          </h2>
          <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
            Selected developments can extend the experience beyond the essential rooms of the home with spaces created for recreation, wellness, entertaining and everyday convenience.
          </p>
          <div className="mt-[46px] grid gap-[14px] md:grid-cols-2 lg:grid-cols-3">
            {amenities.map((space) => (
              <article key={space.title} className="relative h-[300px] overflow-hidden bg-black text-white lg:h-[360px]">
                <Image src={space.image} alt={space.title} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />
                <strong className="absolute bottom-5 left-[22px] right-[22px] z-10 block !text-[18px] font-bold leading-tight tracking-[0] text-white">{space.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ec] py-[78px] md:py-[110px]">
        <div className={wrap}>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Development & investment</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(40px,5.5vw,76px)] font-bold leading-[1.04] tracking-[0]">
            Built for living. Positioned for value.
          </h2>
          <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
            Beyond finished homes, Bioture Real Estate provides a route into property acquisition, strategic land and development partnerships.
          </p>
          <div className="mt-12 grid gap-px bg-[#cfd5cc] md:grid-cols-3">
            {investmentCards.map(([index, title, copy]) => (
              <article key={title} className="min-h-[260px] bg-[#f4f2ec] p-[34px]">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-950">{index}</span>
                <p className="mt-[35px] !text-[31px] font-bold leading-tight tracking-[0] text-black">{title}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[78px] md:py-[110px]">
        <div className={wrap}>
          <div className="grid gap-8 lg:flex lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Gallery</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(42px,6vw,88px)] font-bold leading-[1.02] tracking-[0]">
                Places and possibilities.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-[10px] md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[320px_320px]">
            {gallery.map((image, index) => (
              <div
                key={image}
                className="relative min-h-[300px] overflow-hidden lg:min-h-0"
              >
                <Image src={image} alt={`Bioture Real Estate gallery image ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[78px] md:py-[110px]">
        <div className={wrap}>
          <div className="grid gap-8 lg:flex lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">Partner network</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(40px,5.5vw,76px)] font-bold leading-[1.04] tracking-[0]">
                Strong properties are built through strong partnerships.
              </h2>
              <p className="mt-6 max-w-[760px] text-[19px] leading-8 text-stone-700">
                Bioture Real Estate works with a growing network of specialists and organisations across property development, construction, architecture, finance and related services.
              </p>
            </div>
            <Link href="#partner" className="inline-flex w-max items-center gap-3 border border-black px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-black hover:text-white">
              Become a partner
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-[46px] grid gap-px border border-stone-300 bg-stone-300 md:grid-cols-2 lg:grid-cols-3">
            {partnerCards.map(([index, title, copy]) => (
              <article key={title} className="min-h-[260px] bg-white p-[34px]">
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-950">{index}</span>
                <p className="mt-[34px] !text-[29px] font-bold leading-tight tracking-[0] text-black">{title}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
              </article>
            ))}
            <article className="min-h-[260px] bg-emerald-950 p-[34px] text-white">
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">06</span>
              <p className="mt-[34px] !text-[29px] font-bold leading-tight tracking-[0] text-white">Work with Bioture Real Estate</p>
              <p className="mt-3 text-sm leading-6 text-white/78">Bring land, expertise, capital or market access into a partnership built around long-term property value.</p>
              <Link href="#partner" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white underline-offset-4 hover:underline">
                Start a conversation
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {partnerLogos.slice(0, 6).map((partner) => (
              <div key={partner.name} className="flex h-[105px] items-center justify-center">
                <span
                  className="block h-16 w-28 bg-contain bg-center bg-no-repeat"
                  role="img"
                  aria-label={partner.name}
                  style={{ backgroundImage: `url("${partner.image}")` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="bg-emerald-950 py-[90px] text-white md:py-[120px]">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end`}>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/70">Partnership</p>
            <h2 className="mt-5 max-w-[820px] text-[clamp(44px,6vw,84px)] font-bold leading-[1.03] tracking-[0] text-white">
              Bring your land, expertise or capital. Build enduring value with us.
            </h2>
          </div>
          <Link href="/contact?subject=real-estate" className="inline-flex w-max items-center gap-3 border border-white px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-emerald-950">
            Partner with Real Estate
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
