import type { Metadata } from "next";
import { CTA, PageIntro } from "../components/site";
import { whyChoose, strengths } from "../content";
export const metadata: Metadata = { title: "Why Choose Ispier" };
export default function Approach() {
  return (
    <>
      <PageIntro
        label="WHY CHOOSE ISPIER"
        title="A Different Kind of"
        accent="Marketing Agency"
        description="We don’t chase vanity metrics. We build brands that people actually trust and talk about."
      />
      <section className="container approach-list">
        {whyChoose.map((item, i) => (
          <article key={item.title}>
            <div className="approach-number">
              0{i + 1}
              <span>{item.title}</span>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="container section">
        <div className="principles">
          {strengths.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
