const propertyTypes = [
  {
    title: "Land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Residential property",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Commercial property",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Property development",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=88",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1400&q=88",
];

export function RealEstateShowcase() {
  return (
    <>
      <section className="bg-[#f5f3e8] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="max-w-4xl text-[clamp(52px,7vw,118px)] font-bold leading-[0.95] tracking-[-0.055em]">
              Property types with a longer view.
            </h2>
            <p className="max-w-2xl text-lg text-stone-700">
              BioTure Real Estate organizes opportunities around clear property categories, making it easier to evaluate land,
              residential homes, commercial spaces and development potential.
            </p>
          </div>
          <div className="mt-16 grid gap-14 md:grid-cols-2">
            {propertyTypes.map((type) => (
              <article key={type.title} className="motion-item">
                <div className="motion-image min-h-[360px] bg-cover bg-center md:min-h-[460px]" style={{ backgroundImage: `url("${type.image}")` }} />
                <h3 className="mt-8 text-center text-[clamp(34px,4vw,62px)] font-bold leading-none tracking-[-0.05em]">
                  {type.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="max-w-4xl text-[clamp(52px,7vw,118px)] font-bold leading-[0.95] tracking-[-0.055em]">
            Gallery of places and possibilities.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {gallery.map((image, index) => (
              <div
                key={image}
                className="motion-image min-h-[360px] bg-cover bg-center md:min-h-[520px]"
                style={{ backgroundImage: `url("${image}")` }}
                role="img"
                aria-label={`BioTure Real Estate gallery image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
