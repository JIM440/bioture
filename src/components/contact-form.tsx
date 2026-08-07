import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="grid gap-5 border border-stone-200 bg-white p-5 md:grid-cols-2 md:p-8">
      {[
        ["name", "Full name", "text", "Enter your full name"],
        ["email", "Email address", "email", "Enter your email address"],
        ["company", "Company (optional)", "text", "Enter your company name"],
      ].map(([id, label, type, placeholder]) => (
        <div key={id} className="field">
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} placeholder={placeholder} required={id !== "company"} />
        </div>
      ))}
      <div className="field">
        <label htmlFor="subject">Enquiry type</label>
        <select id="subject" defaultValue="">
          <option value="" disabled>Select enquiry type</option>
          <option>General enquiry</option>
          <option>Partnership</option>
          <option>Investment</option>
          <option>Media</option>
          <option>Careers</option>
        </select>
      </div>
      <div className="field md:col-span-2">
        <label htmlFor="message">Message</label>
        <textarea id="message" required rows={7} placeholder="Tell us what you would like to build, discuss, or explore." />
      </div>
      <Button type="submit" className="md:col-span-2">
        Submit inquiry
      </Button>
    </form>
  );
}

export function ContactFormHeader() {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-emerald-950">      Group enquiries
    </div>
  );
}
