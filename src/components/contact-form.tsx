"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const enquiryTypes = [
  "General enquiry",
  "Partnership",
  "Investment",
  "Media",
  "Careers",
  "Real estate",
  "Commerce",
  "Agriculture partnership",
  "Food processing",
  "Resources energy",
  "Mining minerals",
  "Oil gas",
  "Manufacturing",
  "Health wellness",
  "Transport logistics",
  "Aviation transit",
  "Automobile",
  "Finance service",
  "Insurance service",
  "Consultancy service",
  "Consultation",
];

function formatSubject(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function ContactForm() {
  const [enquiryType, setEnquiryType] = useState("");
  const [subject, setSubject] = useState("");
  const normalizedTypes = useMemo(() => new Map(enquiryTypes.map((type) => [type.toLowerCase(), type])), []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedSubject = params.get("subject");

    if (!requestedSubject) {
      return;
    }

    const formatted = formatSubject(requestedSubject);
    setEnquiryType(normalizedTypes.get(formatted.toLowerCase()) ?? formatted);
    setSubject(formatted);
  }, [normalizedTypes]);

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
        <select id="subject" name="enquiryType" value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)}>
          <option value="" disabled>Select enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="field md:col-span-2">
        <label htmlFor="message-subject">Subject</label>
        <input
          id="message-subject"
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="What should we help you with?"
        />
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
