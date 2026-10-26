import Link from "next/link";
import type { Metadata } from "next";
import { InnerPage, InnerHero, InnerHeading, InnerCTA, InnerPhoto } from "../components/inner-page";
import { Arrow, ServiceIcon } from "../components/site";
import { company, aboutPoints, strengths, stats } from "../content";
export const metadata: Metadata = { title: "About us" };
export default function About() {
 return <InnerPage active="/about"><InnerHero label="About Ispier" title="Your growth partner" accent="in the digital world." description={company.aboutText}><InnerPhoto image="about" caption="Human ideas. Lasting impact."/></InnerHero>
 <section className="in-wrap in-stat-strip" aria-label="Ispier in numbers">{stats.map(stat=><div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}<div><strong>Trust first.</strong><span>At every stage of your growth</span></div></section>
 <section className="in-wrap in-section in-story"><InnerHeading label="The way we see it" title="Good marketing feels like a helpful conversation." text="Your brand belongs where your audience already is. We help you show up with something valuable to say." /><div className="in-story-copy"><p>We are Ispier Tech Pvt Ltd. Our work brings together community marketing, content, search and thoughtful digital experiences to build a reputation that lasts.</p><ul className="in-check-list">{aboutPoints.map(point=><li key={point}><span aria-hidden="true">&#10003;</span>{point}</li>)}</ul><Link href="/approach" className="in-text-link">Meet our approach <Arrow /></Link></div></section>
 <section className="in-wrap in-section"><InnerHeading label="What guides us" title="A clear purpose behind every move." /><div className="in-principles">{strengths.map((item,i)=><article className="in-panel" key={item.title}><span className="in-icon"><ServiceIcon id={["seo","social","brand"][i]} /></span><span className="in-card-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section><InnerCTA /></InnerPage>;
}
