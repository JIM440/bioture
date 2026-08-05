import Link from "next/link";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Building2, Globe2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { HomeCompanies } from "@/components/home-companies";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { businesses } from "@/data/businesses";

function InstagramLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="0" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.2" cy="7.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d="M5.1 9.2h3.1V19H5.1V9.2Zm1.6-4.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 9.2h3v1.3h.1c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8V19h-3.1v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19H10V9.2Z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d="M14 8.1h2.1V5.2c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.9H5v3.3h3.1V24h3.7v-7.6h3.1l.5-3.3h-3.6v-2.5c0-1 .3-1.6 2.2-1.6Z" />
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d="M15.4 3c.4 2.4 1.8 3.9 4.2 4.1v3.2a7.2 7.2 0 0 1-4.1-1.2v5.9c0 3.5-2.2 6-5.7 6A5.5 5.5 0 0 1 4 15.5c0-3.4 2.8-6 6.2-5.5v3.4c-1.4-.4-2.8.6-2.8 2.1 0 1.3 1 2.2 2.3 2.2 1.5 0 2.3-.9 2.3-2.7V3h3.4Z" />
    </svg>
  );
}

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d="M12 3a8.7 8.7 0 0 0-7.4 13.2L3.5 21l4.9-1.2A8.7 8.7 0 1 0 12 3Zm0 2.8a5.9 5.9 0 0 1 5 9.1 5.8 5.8 0 0 1-7.1 2.1l-.5-.2-2 .5.5-1.9-.3-.5A5.9 5.9 0 0 1 12 5.8Zm-2.4 3.1c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1l-.6-.3-1.4-.7c-.2-.1-.4-.1-.6.2l-.6.8c-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.3-.4-.5-.4Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative grid min-h-screen place-items-center overflow-hidden text-center text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 scale-110 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90')" }} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.28),rgba(0,0,0,.08)),linear-gradient(0deg,rgba(0,0,0,.42),transparent_60%)]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 py-28 text-center">
            <SectionLabel index="00" label="BioTure Group" light />
            <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(72px,7vw,80px)] font-bold leading-[1.05] tracking-[-0.035em]">
              What we build today shapes tomorrow.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-normal text-white/80">
              Eight businesses. One trusted group. Creating value across essential industries.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild showArrow>
                <Link href="/businesses">Explore our businesses</Link>
              </Button>
            </div>
          </div>
          <Link href="#portfolio" aria-label="Discover portfolio" className="absolute bottom-[30px] left-[34px] z-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-white md:flex">
            Discover <ArrowDown className="size-4" />
          </Link>
        </section>

        <section className="bg-[#edf4f5] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { value: "8", label: "Operating businesses across essential sectors", Icon: Building2 },
                { value: "20+", label: "Specialist divisions and service areas", Icon: BriefcaseBusiness },
                { value: "5+", label: "Priority markets and growth territories", Icon: Globe2 },
                { value: "1", label: "Shared standard of trust across the group", Icon: ShieldCheck },
              ].map(({ value, label, Icon }) => (
                <article key={label} className="motion-item min-h-[225px] bg-white p-7 md:p-8">
                  <div className="flex justify-end">
                    <span className="grid size-14 place-items-center bg-[#edf4f5] text-emerald-950">
                      <Icon className="size-6" strokeWidth={1.8} />
                    </span>
                  </div>
                  <strong className="mt-6 block text-[clamp(52px,5vw,76px)] font-bold leading-none tracking-[-0.05em] text-slate-950">
                    {value}
                  </strong>
                  <p className="mt-4 max-w-[250px] text-lg font-medium leading-7 text-slate-950">{label}</p>
                </article>
              ))}
            </div>

            <div className="lg:pl-10">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-slate-950" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-950">Who we are</span>
              </div>
              <h2 className="mt-6 max-w-2xl text-[clamp(48px,6vw,86px)] font-bold leading-[1.02] tracking-[-0.05em] text-slate-950">
                We build businesses that matter.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
                BioTure is a diversified African group creating dependable companies across property, commerce,
                agriculture, finance, technology, manufacturing, mobility and resources. Each business works with
                focused expertise while sharing one standard of trust.
              </p>
              <Button asChild className="mt-10">
                <Link href="/about">More about BioTure</Link>
              </Button>
            </div>
          </div>
        </section>

        <HomeCompanies businesses={businesses} />


        <section className="section-shell border-t border-stone-200">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel index="02" label="The complete portfolio" />
              <h2 className="mt-5 max-w-4xl text-[clamp(34px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.03em]">
                Discover every company within the BioTure Group.
              </h2>
            </div>
            <Button asChild showArrow>
              <Link href="/businesses">View all businesses</Link>
            </Button>
          </div>
        </section>

        <section className="hidden" aria-hidden="true" style={{ background: "var(--green)" }}>
          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88')" }}
          />
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-[8vw]">
            <SectionLabel index="04" label="Our purpose" light />
            <h2 className="mt-6 max-w-2xl text-[clamp(48px,5vw,82px)] font-medium leading-[1.05] tracking-[-0.03em]">
              Growth that creates opportunity.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              BioTure builds dependable businesses that strengthen industries, support communities and create lasting economic value.
            </p>
            <Link href="/about" className="mt-8 w-max border-b border-white pb-2 font-medium">
              Discover our story ↗
            </Link>
          </div>
        </section>

        <section id="sustainability" className="grid bg-stone-100 lg:grid-cols-2">
          <div className="min-h-[520px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=90')" }} />
          <div className="px-5 py-16 md:px-12 md:py-24 lg:px-20">
            <SectionLabel index="04" label="Sustainability" />
            <h2 className="mt-5 text-[clamp(34px,4vw,64px)] font-medium leading-[1.08] tracking-[-0.02em]">Progress designed to last.</h2>
            <p className="mt-6 max-w-xl text-stone-600">
              Across the group, BioTure aims to grow responsibly, considering people, communities and the environment in the way opportunities are developed.
            </p>
            <div className="mt-10 grid gap-5">
              {[
                ["01", "Responsible operations", "Building quality, safety and accountability into every business."],
                ["02", "Shared prosperity", "Creating jobs, partnerships and stronger local value chains."],
                ["03", "Smarter resource use", "Seeking efficient and lower-impact ways to grow."],
              ].map(([index, title, copy]) => (
                <div key={title} className="grid grid-cols-[52px_1fr] gap-5 border-t border-stone-300 pt-5">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500">{index}</span>
                  <div>
                    <h3 className="text-xl font-medium">{title}</h3>
                    <p className="mt-1 text-stone-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="purpose" className="grid min-h-[700px] text-white lg:grid-cols-[1.05fr_0.95fr]" style={{ background: "var(--green)" }}>
          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88')" }}
          />
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-[8vw]">
            <SectionLabel index="05" label="Our purpose" light />
            <h2 className="mt-6 max-w-2xl text-[clamp(52px,5.4vw,90px)] font-bold leading-[1.03] tracking-[-0.04em]">
              Growth that creates opportunity.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              BioTure builds dependable businesses that strengthen industries, support communities and create lasting economic value.
            </p>
            <Link href="/about" className="mt-8 w-max border-b border-white pb-2 font-medium">
              Discover our story
            </Link>
          </div>
        </section>

        <section className="section-shell">
          <SectionLabel index="05" label="From the group" />
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="section-title">Stories of progress.</h2>
            <ArrowUpRight className="hidden size-8 text-emerald-950 md:block" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Sustainability", "Building responsible businesses for a changing world.", "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85"],
              ["Innovation", "How shared expertise drives new opportunities across the group.", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"],
            ].map(([kicker, title, image]) => (
              <article key={title} className="border border-stone-200">
                <div className="min-h-[310px] bg-cover bg-center" style={{ backgroundImage: `url("${image}")` }} />
                <div className="p-6">
                  <SectionLabel index={kicker === "Sustainability" ? "01" : "02"} label={kicker} />
                  <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.01em]">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="max-w-2xl text-[clamp(44px,5.8vw,86px)] font-bold leading-[1.08] tracking-[-0.03em]">
                  Let&apos;s keep in touch with BioTure.
                </h2>
                <p className="mt-7 max-w-xl text-stone-600">
                  Contact us today to explore group partnerships, investment conversations, media, careers and general enquiries.
                </p>
              </div>

              <div className="mt-12 space-y-5">
                <a href="tel:+000000000000" className="grid grid-cols-[28px_1fr] items-center gap-5 font-medium text-stone-700">
                  <Phone className="size-5 text-black" />
                  <span>+000 000 000 000</span>
                </a>
                <a href="mailto:hello@bioturegroup.com" className="grid grid-cols-[28px_1fr] items-center gap-5 font-medium text-stone-700">
                  <Mail className="size-5 text-black" />
                  <span>hello@bioturegroup.com</span>
                </a>
                <div className="grid grid-cols-[28px_1fr] items-center gap-5 font-medium text-stone-700">
                  <MapPin className="size-5 text-black" />
                  <span>Corporate address placeholder, City, Country</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3 border-t border-stone-300 pt-8">
                {[
                  { href: "https://instagram.com", label: "Instagram", Icon: InstagramLogo },
                  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinLogo },
                  { href: "https://facebook.com", label: "Facebook", Icon: FacebookLogo },
                  { href: "https://tiktok.com", label: "TikTok", Icon: TikTokLogo },
                  { href: "https://wa.me/000000000000", label: "WhatsApp", Icon: WhatsAppLogo },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-12 place-items-center border border-stone-300 text-black transition hover:border-emerald-950 hover:bg-emerald-950 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden bg-black text-white">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
