import Link from "next/link";
import Image from "next/image";
import { LightArrow } from "./light-site";

export function InnerPage({ active, children }: { active: string; children: React.ReactNode }) {
  return <div className="ip-inner" data-page={active}>{children}</div>;
}
export function InnerHero({ label, title, accent, description, children, centered = false }: { label: string; title: string; accent: string; description: string; children?: React.ReactNode; centered?: boolean }) {
  const visual = children ?? (!centered ? <InnerPhoto image="results" caption="Clear thinking. Meaningful progress."/> : null);
  return <section className={"in-hero" + (centered ? " in-hero-centered" : "")}><div className={"in-wrap" + (visual ? " in-hero-grid" : "")}><div className="in-hero-copy"><div className="in-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{label}</span></div><span className="in-kicker"><i />{label}</span><h1>{title}<br /><em>{accent}</em></h1><p>{description}</p></div>{visual}</div></section>;
}
export function InnerPhoto({image,caption}: {image:"about"|"services"|"approach"|"results";caption:string}) {
 return <figure className="in-editorial-photo"><Image src={"/images/internal/"+image+".webp"} alt={{about:"Illustrative creative team conversation in a light studio",services:"A blue and ivory digital design workspace",approach:"Hands arranging blue campaign ideas and design materials",results:"A coordinated blue brand presentation and analytics workspace"}[image]} width={900} height={1000} unoptimized/><figcaption><span>THE ISPIER PERSPECTIVE</span><strong>{caption}</strong></figcaption><span className="in-photo-detail" aria-hidden="true"/></figure>;
}
export function BrandVisual() { return <InnerPhoto image="approach" caption="Good ideas. A considered approach."/>; }
export function InnerHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="in-section-heading"><span className="in-kicker"><i />{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
export function InnerCTA() { return <section className="in-editorial-cta"><div className="in-wrap"><div><span className="in-kicker"><i/>LET&apos;S GROW TOGETHER</span><h2>Your next chapter.<br/>Let&apos;s build it together.</h2><p>Bring your goals. We&apos;ll bring the ideas, clarity and a plan to move forward.</p></div><Link href="/contact" className="in-button">Let&apos;s talk <LightArrow/></Link></div></section>; }
