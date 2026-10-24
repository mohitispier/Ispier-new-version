import type { Metadata } from "next";
import { PageIntro } from "../components/site";
import { PricingCards } from "../components/pricing";
export const metadata: Metadata = { title: "Pricing" };
export default function Pricing() {
  return (
    <>
      <PageIntro
        label="PRICING"
        title="Transparent Plans for"
        accent="Every Business"
        description="No hidden fees. No surprises. Just clear value that grows with your business."
      />
      <section className="container original-pricing">
        <PricingCards />
      </section>
    </>
  );
}
