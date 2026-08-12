import Image from "next/image";

export type DivisionItem = {
  name: string;
  copy: string;
  image: string;
};

export function DivisionItemGrid({
  title,
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-4",
  className = "",
}: {
  title: string;
  items: DivisionItem[];
  columns?: string;
  className?: string;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="mx-auto max-w-[1500px]">
        <h2 className="max-w-2xl text-[clamp(26px,3vw,42px)] font-bold leading-[1.08] tracking-[0]">{title}</h2>
        <div className={`mt-8 grid gap-x-4 gap-y-10 lg:gap-y-16 ${columns}`}>
          {items.map((item) => (
            <article key={item.name}>
              <div className="relative aspect-square overflow-hidden">
                <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <p className="mt-3 !text-[20px] font-bold !leading-snug tracking-[0] text-black md:!text-[22px]">{item.name}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
