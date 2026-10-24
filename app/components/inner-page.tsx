import Link from "next/link";
import { LightLogo as DesignLogo } from "./light-site";
import { MountainCTA } from "./light-home";

const pages = [["About", "/about"], ["Case studies", "/case-studies"], ["Services", "/services"], ["Our approach", "/approach"], ["Pricing", "/pricing"], ["Insights", "/blogs"], ["Contact", "/contact"]];
export function InnerPage({ active, children }: { active: string; children: React.ReactNode }) {
  return <div className="ip-inner"><div className="in-subnav"><nav className="in-wrap" aria-label="Explore Ispier">{pages.map(([label, href]) => <Link href={href} key={href} aria-current={active === href ? "page" : undefined}>{label}</Link>)}</nav></div>{children}</div>;
}
export function InnerHero({ label, title, accent, description, children, centered = false }: { label: string; title: string; accent: string; description: string; children?: React.ReactNode; centered?: boolean }) {
  return <section className={"in-hero" + (centered ? " in-hero-centered" : "")}><div className={"in-wrap" + (children ? " in-hero-grid" : "")}><div className="in-hero-copy"><div className="in-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{label}</span></div><span className="in-kicker"><i />{label}</span><h1>{title}<br /><em>{accent}</em></h1><p>{description}</p></div>{children}</div></section>;
}
export function BrandVisual() {
  return <div className="in-brand-art" aria-hidden="true"><div className="in-orbit in-orbit-one" /><div className="in-orbit in-orbit-two" /><div className="in-brand-glass"><DesignLogo /><span>Built on conversations.</span><strong>Designed for<br /><em>lasting growth.</em></strong><div className="in-art-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><span className="in-float in-float-one"><i />Trust first</span><span className="in-float in-float-two"><i />Grow naturally</span></div>;
}
export function InnerHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="in-section-heading"><span className="in-kicker"><i />{label}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
export function InnerCTA() { return <MountainCTA />; }
