import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";

type HeroAction = {
  href: string;
  label: string;
  variant?: "default" | "outline" | "light" | "ghost";
};

type HeroProps = {
  eyebrow: string;
  title: string;
  image: string;
  copy?: string;
  actions?: HeroAction[];
};

export function Hero({ eyebrow, title, image, copy, actions = [] }: HeroProps) {
  return (
    <section className="site-legacy-hero relative grid min-h-screen place-items-center overflow-hidden bg-cover bg-center px-[max(5vw,40px)] py-28 text-center text-white" style={{ backgroundImage: `url("${image}")` }}>
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto w-full max-w-[900px]">
        <SectionLabel index="00" label={eyebrow} light className="mb-5" />
        <h1 className="mx-auto max-w-5xl whitespace-pre-line font-bold">
          {title}
        </h1>
        {copy ? <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/78">{copy}</p> : null}
        {actions.length > 0 ? (
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {actions.map((action) => (
              <Button key={action.href} asChild variant={action.variant ?? "default"}>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
