import Link from "next/link";
import type { Metadata } from "next";
import { InnerPage, InnerHero, InnerHeading, InnerCTA, BrandVisual } from "../components/inner-page";
import { Arrow, ServiceIcon } from "../components/site";
import { services } from "../content";
export const metadata: Metadata = { title: "Our services" };
export default function Services() {
 return <InnerPage active="/services"><InnerHero label="Our services" title="The right strategy." accent="Real brand growth." description="From the first conversation to your next big milestone, our digital services help your brand get found, build trust and grow naturally."><BrandVisual /></InnerHero>
 <section className="in-wrap in-section in-services-section"><InnerHeading label="Made for your next stage" title="Connected services. One growth partner." text="Explore a service below, or talk to us about a strategy that brings them together." /><nav className="in-service-nav" aria-label="Jump to a service">{services.map(item=><a key={item.id} href={"#"+item.id}>{item.name}<span aria-hidden="true">&#8599;</span></a>)}</nav><div className="in-services-grid">{services.map(item=><article className={"in-panel in-service in-service-"+item.id} id={item.id} key={item.id}><div className="in-service-top"><span className="in-icon"><ServiceIcon id={item.id} /></span><span className="in-card-number">/{item.number}</span></div><span className="in-service-tag">{item.tag}</span><h2>{item.name}</h2><p>{item.text}</p><ul className="in-service-features">{item.items.map(feature=><li key={feature}>{feature}</li>)}</ul><Link className="in-text-link" href={"/contact?service="+item.id}>Let&apos;s discuss your project <Arrow /></Link></article>)}</div></section><InnerCTA /></InnerPage>;
}
