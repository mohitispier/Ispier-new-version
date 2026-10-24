import type { Metadata } from "next";
import { CTA, PageIntro, ServiceCards } from "../components/site";
export const metadata: Metadata = { title: "Our services" };
export default function Services() {
  return (
    <>
      <PageIntro
        label="WHAT WE DO"
        title="Complete and Effective Services"
        accent="For Your Business Growth"
        description="From organic community marketing to technical SEO and web development — every service is designed to build trust and drive sustainable results."
      />
      <section className="container services-page">
        <ServiceCards full />
      </section>
      <CTA />
    </>
  );
}
