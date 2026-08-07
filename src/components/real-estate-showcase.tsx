import Link from "next/link";

const propertyTypes = [
  {
    title: "Residential homes",
    copy: "State-of-the-art housing concepts shaped around comfort, location and long-term value.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Development properties",
    copy: "Land, commercial and mixed-use opportunities for structured property development.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=90",
];

export function RealEstateShowcase() {
  return (
    <>
      <section className="bg-[#f5f3e8] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(52px,7vw,118px)] font-bold leading-[0.95] tracking-[-0.055em]">
              Property types with a longer view.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              Bioture Real Estate presents property acquisition, development and modern housing opportunities through realistic, inspectable property experiences rather than generic placeholders.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {propertyTypes.map((type) => (
              <article key={type.title} className="motion-item border border-stone-300 bg-white">
                <div className="motion-image min-h-[420px] bg-cover bg-center md:min-h-[560px]" style={{ backgroundImage: `url("${type.image}")` }} />
                <div className="p-6 md:p-8">
                  <h3 className="text-[clamp(34px,4vw,62px)] font-bold leading-none tracking-[-0.05em]">{type.title}</h3>
                  <p className="mt-5 text-stone-600">{type.copy}</p>
                </div>
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

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(52px,7vw,118px)] font-bold leading-[0.95] tracking-[-0.055em]">
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
    </>
  );
}
