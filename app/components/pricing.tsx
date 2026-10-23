import Link from "next/link";
import { plans } from "../content";
import { Arrow } from "./site";
export function PricingCards(){return <div className="original-pricing-grid">{plans.map(plan=><article key={plan.name} className={plan.highlighted?"original-plan featured":"original-plan"}>{plan.highlighted&&<span className="plan-badge">Most Popular</span>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price">{plan.price}<span>{plan.period}</span></div><ul>{plan.features.map(feature=><li key={feature}><span>✓</span>{feature}</li>)}</ul><Link href="/contact" className="agency-button">{plan.cta}<Arrow diagonal/></Link></article>)}</div>}
