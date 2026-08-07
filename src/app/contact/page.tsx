import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="Contact Bioture"
          title="Let's explore your next strategic venture."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=92"
          actions={[
            { href: "#contact-form", label: "Send enquiry" },
            { href: "mailto:hello@bioturegroup.com", label: "Email Bioture", variant: "light" },
          ]}
        />
        <section id="contact-form" className="section-shell">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="m-0 p-0">
              <SectionLabel index="01" label="Group enquiries" />
              <h2 className="mt-5 text-[clamp(34px,4vw,60px)] font-medium leading-[1.08] tracking-[-0.02em]">
                Let&apos;s explore what we can build together.
              </h2>
              <address className="mt-10 not-italic text-stone-700">
                <strong className="text-stone-950">Bioture Group</strong>
                <br />
                Corporate address placeholder
                <br />
                City, Country
              </address>
              <div className="mt-8 grid gap-3">
                <a href="mailto:hello@bioturegroup.com" className="w-max border-b border-emerald-950 pb-1 text-emerald-950">hello@bioturegroup.com</a>
                <a href="tel:+000000000000" className="w-max border-b border-emerald-950 pb-1 text-emerald-950">+000 000 000 000</a>
              </div>
              <div className="mt-8 flex gap-3">
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
      <SiteFooter title="Building Value Across Essential Industries." cta="Explore our businesses" href="/businesses" />
    </>
  );
}
