import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  InnerPage,
  InnerHero,
  InnerHeading,
  InnerCTA,
  InnerPhoto,
} from "../components/inner-page";
import { Arrow, ServiceIcon } from "../components/site";
import { services } from "../content";
import { serviceImages } from "../service-details";
export const metadata: Metadata = { title: "Our services" };
export default function Services() {
  return (
    <InnerPage active="/services">
      <InnerHero
        label="Our services"
        title="The right strategy."
        accent="Real brand growth."
        description="From the first conversation to your next big milestone, our digital services help your brand get found, build trust and grow naturally."
      >
        <InnerPhoto
          image="services"
          caption="Connected services. One creative partner."
        />
      </InnerHero>
      <section className="in-wrap in-section in-services-section">
        <InnerHeading
          label="Made for your next stage"
          title="Connected services. One growth partner."
          text="Explore a service below, or talk to us about a strategy that brings them together."
        />
        <nav className="in-service-nav" aria-label="Explore a service">
          {services.map((item) => (
            <Link key={item.id} href={"/services/" + item.id}>
              {item.name}
              <span aria-hidden="true">&#8599;</span>
            </Link>
          ))}
        </nav>
        <div className="in-services-grid">
          {services.map((item) => (
            <article
              className={"in-panel in-service in-service-" + item.id}
              id={item.id}
              key={item.id}
            >
              <Link className="in-service-visual" href={"/services/"+item.id} aria-label={"Explore "+item.name}>
                <Image
                  src={
                    "/images/services/" +
                    (serviceImages[item.id] ?? "brand") +
                    ".webp"
                  }
                  alt={item.name + " visual"}
                  width={640}
                  height={480}
                  unoptimized
                />
              </Link>
              <div className="in-service-top">
                <span className="in-icon">
                  <ServiceIcon id={item.id} />
                </span>
                <span className="in-card-number">/{item.number}</span>
              </div>
              <span className="in-service-tag">{item.tag}</span>
              <h2><Link href={"/services/"+item.id}>{item.name}</Link></h2>
              <p>{item.text}</p>
              <ul className="in-service-features">
                {item.items.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                className="in-text-link"
                href={"/services/" + item.id}
              >
                Explore service <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <InnerCTA />
    </InnerPage>
  );
}
