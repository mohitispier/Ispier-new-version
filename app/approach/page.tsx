import type { Metadata } from "next";
import { InnerPage, InnerHero, InnerHeading, InnerCTA, BrandVisual } from "../components/inner-page";
import { whyChoose, strengths } from "../content";
export const metadata: Metadata = { title: "Our approach" };
export default function Approach() {
 return <InnerPage active="/approach"><InnerHero label="The Ispier approach" title="Built on trust." accent="Driven by purpose." description="We build brands that people actually trust and talk about. Every decision starts with your audience and works toward sustainable growth."><BrandVisual /></InnerHero>
 <section className="in-wrap in-section"><InnerHeading label="Our thinking" title="A better way to build your presence." /><div className="in-timeline">{whyChoose.map((item,i)=><article key={item.title}><div className="in-step"><span>0{i+1}</span></div><div className="in-panel"><span className="in-service-tag">The Ispier difference</span><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></section>
 <section className="in-wrap in-section"><InnerHeading label="From strategy to action" title="Thoughtful work. At every touchpoint." /><div className="in-principles">{strengths.map((item,i)=><article className="in-panel" key={item.title}><span className="in-mini-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section><InnerCTA /></InnerPage>;
}
