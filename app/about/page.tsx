import Image from "next/image";
import type { Metadata } from "next";
import { CTA, PageIntro } from "../components/site";
import { company, aboutPoints, strengths } from "../content";
export const metadata:Metadata={title:"About us"};
export default function About(){return <><PageIntro label="WHO WE ARE" title="Reduce Risk & Make Your" accent="Workflow More Productive" description={company.aboutText}/><section className="container about-story"><div className="about-photo"><Image src="/images/hero-marketing.jpg" alt="A collaborative business discussion" fill sizes="(max-width:750px) 90vw,45vw"/><span>10+<br/>Years of Combined Expertise</span></div><div className="story-copy"><span className="eyebrow">ISPIER TECH PVT LTD</span><h2>Natural brand positioning.<br/><span className="serif">Real online communities.</span></h2><ul className="original-about-points">{aboutPoints.map(point=><li key={point}><span>✓</span>{point}</li>)}</ul></div></section><section className="container section"><div className="principles">{strengths.map((s,i)=><article key={s.title}><span className="eyebrow">0{i+1} /</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section><CTA/></>}
