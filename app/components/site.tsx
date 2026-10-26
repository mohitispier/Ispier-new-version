"use client";
import { useEffect, useState } from "react";
import { LightHeader, LightFooter } from "./light-site";
import { LightIcon } from "./service-icons";
import { services, plans } from "../content";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function Header() {
  return <LightHeader />;
}
export function Footer() {
  return <LightFooter />;
}
export function ServiceIcon({ id }: { id: string }) {
  if (["ppc", "content", "email"].includes(id)) return <LightIcon name={id} />;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {id === "reddit" || id === "quora" || id === "social" ? (
        <>
          <path d="M21 11a8 8 0 0 1-8 8H9l-6 3 2-6a8 8 0 1 1 16-5Z" />
          <path d="M8 10h8M8 14h5" />
        </>
      ) : id === "seo" ? (
        <>
          <circle cx="10" cy="10" r="6.5" />
          <path d="m15 15 6 6M7 12l3-4 3 2" />
        </>
      ) : id === "brand" || id === "wikipedia" ? (
        <>
          <path d="M12 3 4 6v6c0 4 8 9 8 9s8-5 8-9V6Z" />
          <path d="m8.5 11.5 2.5 2.5 4.5-5" />
        </>
      ) : (
        <>
          <rect x="2.5" y="4" width="19" height="16" rx="2" />
          <path d="M3 8h18m-12 4-3 2 3 2m6-4 3 2-3 2" />
        </>
      )}
    </svg>
  );
}
export function ContactForm() {
  const [selectedPlan,setSelectedPlan]=useState("");
  useEffect(()=>{const value=new URLSearchParams(window.location.search).get("plan");const plan=plans.find(item=>item.name.toLowerCase()===value);if(plan)setSelectedPlan(plan.name);},[]);
  const [ready, setReady] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const d = new FormData(event.currentTarget);
    const body =
      "Name: " +
      d.get("name") +
      "\nEmail: " +
      d.get("email") +
      "\nCompany: " +
      d.get("company") +
      "\nService: " +
      d.get("service") +
      (selectedPlan ? "\nPlan: "+selectedPlan : "") +
      "\n\n" +
      d.get("message");
    window.location.href =
      "mailto:hello@ispier.com?subject=" +
      encodeURIComponent("Project enquiry — " + d.get("name")) +
      "&body=" +
      encodeURIComponent(body);
    setReady(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      {selectedPlan&&<div className="ip-plan-enquiry">Enquiring about the <strong>{selectedPlan}</strong> plan</div>}
      <div className="form-row">
        <label>
          Your name *
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Alex Morgan"
            maxLength={100}
          />
        </label>
        <label>
          Work email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <label>
        Company / website
        <input
          name="company"
          autoComplete="organization"
          placeholder="Where are you building?"
        />
      </label>
      <label>
        What can we help with?
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
          <option>Something else / help me decide</option>
        </select>
      </label>
      <label>
        A little about your project *
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Your goals, your challenges, your next big idea…"
          maxLength={5000}
        />
      </label>
      <p className="form-note">
        This opens your email app with a prepared enquiry. Send the email to
        reach our team.
      </p>
      <button className="button button-dark" type="submit">
        Prepare my enquiry <Arrow diagonal />
      </button>
      {ready && (
        <p className="form-status" role="status">
          Your email draft is ready. Please send it from your email app, or
          email hello@ispier.com directly.
        </p>
      )}
    </form>
  );
}
