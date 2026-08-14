import Link from "next/link";
import { BriefcaseBusiness, Building2, Globe2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HomeHero } from "@/components/home-hero";
import { HomeCompanies } from "@/components/home-companies";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { businesses, partnerLogos } from "@/data/businesses";

const sustainabilityCards = [
  ["01", "Green energy", "Prioritising solar-ready facilities, efficient equipment and lower-emission power choices where operations allow."],
  ["02", "Resource efficiency", "Managing water, energy and raw materials through measurable targets, reuse, recycling and waste reduction."],
  ["03", "Environmental management", "Using an EMS mindset aligned with ISO 14001 principles: plan, implement, evaluate and improve."],
  ["04", "Land and crops", "Supporting planted crops, responsible agriculture and soil-conscious practices that protect productive land."],
];
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
        <HomeHero businesses={businesses} />

        <section className="bg-green-soft px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { value: "8", label: "Operating businesses across essential sectors", Icon: Building2 },
                { value: "20+", label: "Specialist divisions and service areas", Icon: BriefcaseBusiness },
                { value: "5+", label: "Priority markets and growth territories", Icon: Globe2 },
                { value: "1", label: "Shared standard of trust across the group", Icon: ShieldCheck },
              ].map(({ value, label, Icon }) => (
                <article key={label} className="motion-item min-h-[156px] bg-white p-4 sm:min-h-[176px] sm:p-5 md:p-6">
                  <div className="flex justify-end">
                    <span className="grid size-9 place-items-center bg-[#edf4f5] text-emerald-950 sm:size-11">
                      <Icon className="size-4 sm:size-5" strokeWidth={1.8} />
                    </span>
                  </div>
                  <strong className="mt-5 block text-[clamp(32px,8vw,62px)] font-bold leading-none tracking-[0] text-slate-950">
                    {value}
                  </strong>
                  <p className="mt-3 max-w-[230px] text-[13px] font-medium leading-5 text-slate-950 sm:text-base sm:leading-6">{label}</p>
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
                Bioture is a diversified African group creating dependable companies across property, commerce,
                agriculture, finance, technology, manufacturing, mobility and resources. Each business works with
                focused expertise while sharing one standard of trust.
              </p>
              <Button asChild className="mt-10">
                <Link href="/about">More about Bioture</Link>
              </Button>
            </div>
          </div>
        </section>

        <HomeCompanies businesses={businesses} />

        <section className="bg-green-soft px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel index="03" label="The complete portfolio" />
              <h2 className="mt-5 max-w-4xl text-[clamp(34px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.03em]">
                Discover every company within the Bioture Group.
              </h2>
            </div>
            <Button asChild showArrow>
              <Link href="/businesses">View all businesses</Link>
            </Button>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel index="02" label="Partners" />
            <div className="mt-8 grid grid-cols-3 gap-2 lg:grid-cols-8">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="partner-logo-card"
                  role="img"
                  aria-label={partner.name}
                >
                  <div className="partner-logo-image" aria-hidden="true" style={{ backgroundImage: `url("${partner.image}")` }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/60">Partner with Bioture</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(38px,5vw,76px)] font-bold leading-[1.05] tracking-[-0.04em]">
                Partner with us today and make lasting impact.
              </h2>
            </div>
            <Button asChild variant="light" className="min-w-[220px]">
              <Link href="/contact?subject=partnership">Partner</Link>
            </Button>
          </div>
        </section>

        <section id="sustainability" className="bg-white px-5 pt-20 md:px-8 md:pt-28">
          <div className="mx-auto grid max-w-[1500px] overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] bg-cover bg-center lg:min-h-[620px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=90')" }}>
              <div className="absolute inset-0 bg-black/18" />
            </div>
            <div className="bg-[#f5f6f3] p-6 md:p-12 lg:p-16">
              <SectionLabel index="04" label="Sustainability" />
              <h2 className="mt-5 max-w-3xl text-[clamp(38px,5vw,74px)] font-bold leading-[1.04] tracking-[-0.04em]">
                Sustainable growth built into every business.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                Bioture treats sustainability as operating discipline: cleaner energy choices, efficient resource use,
                pollution prevention, planted crops and land stewardship, and regular review of environmental risk across the group.
              </p>
              <div className="mt-10 border-l-4 border-emerald-950 pl-5 text-sm leading-7 text-stone-700">
                Our direction is informed by recognized sustainability frameworks, including environmental management systems,
                precautionary risk thinking, pollution prevention and transparent performance review.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 pb-20 pt-6 md:px-8 md:pb-28">
          <div className="mx-auto grid max-w-[1500px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityCards.map(([index, title, copy]) => (
              <article key={title} className="bg-[#f5f6f3] p-5">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">{index}</span>
                <strong className="sustainability-card-title mt-5 block font-bold tracking-[0]">{title}</strong>
                <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
              </article>
            ))}
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
              Bioture builds dependable businesses that strengthen industries, support communities and create lasting economic value.
            </p>
            <Link href="/about" className="mt-8 w-max border-b border-white pb-2 font-medium">
              Discover our story
            </Link>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="max-w-2xl text-[clamp(44px,5.8vw,86px)] font-bold leading-[1.08] tracking-[-0.03em]">
                  Connect with Bioture.
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

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
