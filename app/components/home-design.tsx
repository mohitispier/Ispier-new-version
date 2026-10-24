"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M4 12h15m-5-5 5 5-5 5" />,
    play: <path d="m9 5 11 7-11 7Z" fill="currentColor" strokeWidth="1" />,
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 7" />
      </>
    ),
    star: <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" />,
    chart: (
      <>
        <path d="M4 21v-6m5 6V11m5 10V7m5 14V2" />
      </>
    ),
    process: (
      <>
        <rect x="4" y="5" width="16" height="17" rx="2" />
        <path d="M9 5V2h6v3m-7 9 3 3 5-6" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m15 15 6 6" />
      </>
    ),
    code: (
      <>
        <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-14-2 18" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 9 15-6v18L3 15Zm4 7 2 6h4l-2-5M21 8v8" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>
    ),
    strategy: (
      <>
        <path d="M12 22V3m-7 7 7-7 7 7M4 18h5m6-4h5" />
      </>
    ),
    creativity: (
      <>
        <path d="M8 15a7 7 0 1 1 8 0l-1 3H9Zm1 6h6M12 1v2M2 10h2m16 0h2" />
      </>
    ),
    technology: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 5 10 8L22 5" />
      </>
    ),
    phone: (
      <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A19 19 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.chart}
    </svg>
  );
}
export function DesignLogo() {
  return (
    <span className="ip-logo">
      <svg viewBox="0 0 36 40" aria-hidden="true">
        <defs>
          <linearGradient id="ip-mark" x2="1" y2="1">
            <stop stopColor="#0470ff" />
            <stop offset="1" stopColor="#51e7ff" />
          </linearGradient>
        </defs>
        <rect x="3" y="5" width="11" height="19" rx="5.5" fill="#0879ff" />
        <rect x="19" y="3" width="11" height="19" rx="5.5" fill="#66e5ff" />
        <rect x="4" y="20" width="11" height="18" rx="5.5" fill="#06b7ff" />
        <rect x="19" y="20" width="11" height="18" rx="5.5" fill="#0756cf" />
        <rect
          x="7"
          y="14"
          width="25"
          height="11"
          rx="5.5"
          transform="rotate(-32 19 19)"
          fill="url(#ip-mark)"
        />
      </svg>
      <span>Ispier</span>
    </span>
  );
}
export function DesignHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="ip-header">
      <div className="ip-wrap ip-nav">
        <Link href="/" aria-label="Ispier home" onClick={() => setOpen(false)}>
          <DesignLogo />
        </Link>
        <nav
          className={open ? "ip-links is-open" : "ip-links"}
          aria-label="Main navigation"
          id="ip-navigation"
        >
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["About", "/about"],
            ["Blogs", "/blogs"],
            ["Contact", "/contact"],
          ].map(([title, href]) => (
            <Link
              href={href}
              key={title}
              className={
                pathname === href ||
                (href !== "/" && pathname.startsWith(href + "/"))
                  ? "is-current"
                  : ""
              }
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="ip-nav-actions">
          <Link
            href="/contact"
            className="ip-button"
            onClick={() => setOpen(false)}
          >
            Get Started <Icon name="arrow" />
          </Link>
          <button
            type="button"
            className="ip-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="ip-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
const offerings = [
  {
    id: "reddit",
    name: "Reddit Marketing",
    text: "Position your brand as a trusted recommendation in authentic subreddit conversations.",
    symbol: "",
    icon: "reddit",
  },
  {
    id: "quora",
    name: "Quora Marketing",
    text: "Answer relevant questions with useful content that attracts high-quality traffic.",
    symbol: "Q",
    icon: "quora",
  },
  {
    id: "wikipedia",
    name: "Wikipedia Strategy",
    text: "Build authority through ethical, compliant content, references and inclusion guidance.",
    symbol: "W",
    icon: "wikipedia",
  },
  {
    id: "seo",
    name: "SEO Services",
    text: "Improve rankings through research, technical optimization and authority building.",
    symbol: "",
    icon: "search",
  },
  {
    id: "social",
    name: "Social Media Marketing",
    text: "Create a consistent social presence with content people genuinely engage with.",
    symbol: "",
    icon: "instagram",
  },
  {
    id: "web",
    name: "Website Development",
    text: "Build fast, secure and scalable websites tailored to your exact business needs.",
    symbol: "",
    icon: "code",
  },
  {
    id: "brand",
    name: "Brand Promotion",
    text: "Place your brand naturally through helpful content, posts and relatable ideas.",
    symbol: "",
    icon: "megaphone",
  },
];
const reviews = [
  {
    quote:
      "Ispier's Reddit strategy tripled our organic traffic in 4 months. The authenticity of the approach is unlike anything we had tried before.",
    name: "Rahul Sharma",
    role: "CEO, TechStartup India",
    initials: "RS",
    tone: "peach",
  },
  {
    quote:
      "Their Quora answers brought us leads with conversion rates 3x higher than our paid ads. The quality of traffic is exceptional.",
    name: "Priya Menon",
    role: "Marketing Head, E-Commerce Brand",
    initials: "PM",
    tone: "mint",
  },
  {
    quote:
      "The Wikipedia strategy gave our brand the credibility boost we needed. Investors and partners now reference us as an established player.",
    name: "Arjun Patel",
    role: "Founder, SaaS Platform",
    initials: "AP",
    tone: "rose",
  },
];
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="ip-eyebrow">
      <span>{children}</span>
      <i />
    </div>
  );
}
function OrbitArt({ variant = "about" }: { variant?: "about" | "results" }) {
  const id = "ip-orbit-" + variant;
  return <svg className="ip-orbit-art" viewBox="0 0 640 340" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={id} x1="50" y1="240" x2="580" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#0066ff"/><stop offset=".32" stopColor="#00d9ff"/><stop offset=".58" stopColor="#0058ff"/><stop offset=".83" stopColor="#00c8ff"/><stop offset="1" stopColor="#0051e8"/></linearGradient>
      <radialGradient id={id + "-aura"}><stop stopColor="#006aff" stopOpacity=".42"/><stop offset="1" stopColor="#006aff" stopOpacity="0"/></radialGradient>
      <filter id={id + "-glow"} x="-70%" y="-100%" width="240%" height="300%"><feGaussianBlur stdDeviation="5"/></filter>
      <filter id={id + "-star"} x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <ellipse cx="330" cy="210" rx="290" ry="120" fill={"url(#" + id + "-aura)"}/>
    <g stroke={"url(#" + id + ")"}>
      <ellipse cx="325" cy="205" rx="275" ry="71" transform="rotate(-12 325 205)" strokeWidth="7" opacity=".8" filter={"url(#" + id + "-glow)"}/>
      <ellipse cx="325" cy="205" rx="275" ry="71" transform="rotate(-12 325 205)" strokeWidth="1.7"/>
      <ellipse cx="335" cy="207" rx="264" ry="65" transform="rotate(16 335 207)" strokeWidth="5" opacity=".65" filter={"url(#" + id + "-glow)"}/>
      <ellipse cx="335" cy="207" rx="264" ry="65" transform="rotate(16 335 207)" strokeWidth="1.1"/>
      <path d="M90 230C155 320 485 310 583 202M112 245C221 332 515 297 578 222" opacity=".5"/>
    </g>
    {[[76,205],[164,130],[556,176],[483,273],[252,286]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="10" fill="#008cff" filter={"url(#"+id+"-star)"}/><path d={`M${x-9} ${y}h18M${x} ${y-9}v18`} stroke="#00c8ff" strokeWidth="1"/><circle cx={x} cy={y} r="2.5" fill="#c6ffff"/></g>)}
  </svg>;
}

function GrowthLine() {
  return (
    <svg
      className="ip-growth-line"
      viewBox="0 0 140 65"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="line-glow">
          <stop stopColor="#0668ff" />
          <stop offset="1" stopColor="#00dbff" />
        </linearGradient>
      </defs>
      <path
        d="m2 60 25-8 18 2 21-23 19 11 42-35"
        stroke="url(#line-glow)"
        strokeWidth="4"
      />
      <path d="m106 7 24-2-3 23" stroke="#00d5ff" strokeWidth="4" />
    </svg>
  );
}
export default function DesignHome() {
  const [yearly, setYearly] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (overview) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [overview]);
  return (
    <div className="ip-home">
      <section className="ip-hero" aria-labelledby="ip-title">
        <div className="ip-hero-photo">
          <Image
            src="/images/ispier-hero-reference.png"
            alt="Ispier growth dashboard on a laptop in a dark blue office"
            fill
            preload
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="ip-wrap ip-hero-content">
          <span className="ip-pill">Your Brand. Our Strategy.</span>
          <h1 id="ip-title">
            Boost Your Brand<br />Visibility &amp; Online<br /><span>Reputation</span>
          </h1>
          <p>
            We help businesses build a strong online presence through strategic marketing, content, and digital platforms &mdash; so you get noticed, trusted and chosen.
          </p>
          <div className="ip-hero-buttons">
            <Link className="ip-button" href="/contact">
              Get Started <Icon name="arrow" />
            </Link>
            <button
              type="button"
              className="ip-watch"
              onClick={() => setOverview(true)}
            >
              <span>
                <Icon name="play" />
              </span>
              Watch Overview
            </button>
          </div>
        </div>
        <div className="ip-wrap ip-proof">
          {[
            ["people", "Trusted by 500+", "Global Brands"],
            ["star", "98%", "Client Retention"],
            ["chart", "10x", "Average ROI"],
            ["process", "100%", "Transparent Process"],
          ].map(([icon, a, b]) => (
            <div key={icon}>
              <span className="ip-proof-icon">
                <Icon name={icon} />
              </span>
              <p>
                {a}
                <br />
                <strong>{b}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="ip-section ip-about">
        <div className="ip-wrap ip-about-grid">
          <div className="ip-about-copy">
            <Eyebrow>About Ispier</Eyebrow>
            <h2>
              Your Growth Partner
              <br />
              in the <em>Digital World</em>
            </h2>
            <p>
              At Ispier Tech Pvt Ltd, digital marketing never feels forced or
              robotic. We integrate your brand into the online world in a way
              that feels real, human and organic.
            </p>
            <p>
              Whether you are a startup trying to get noticed or an established
              brand strengthening its reputation, we build strategies for
              sustainable growth.
            </p>
            <Link className="ip-outline" href="/about">
              Learn More <Icon name="arrow" />
            </Link>
          </div>
          <div className="ip-about-visual">
            <div className="ip-about-waves" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="ip-office-image">
              <Image
                src="/images/ispier-office-reference.png"
                alt="Ispier branded modern office with a meeting table and plants"
                fill
                unoptimized
                sizes="(max-width: 700px) 90vw, 40vw"
              />
            </div>
            <div className="ip-capabilities">
              {[
                ["strategy", "Precision Targeting"],
                ["creativity", "Authentic Content"],
                ["technology", "Platform Expertise"],
                ["process", "Trust-First Growth"],
              ].map(([icon, label]) => (
                <div key={label}>
                  <span>
                    <Icon name={icon} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="ip-section ip-services" id="services">
        <div className="ip-wrap">
          <div className="ip-services-heading">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h2>
                Powerful Digital Solutions
                <br />
                for <em>Your Brand</em>
              </h2>
            </div>
            <p>
              From organic community marketing to technical SEO and web
              development, every service is designed to build trust and drive
              sustainable results.
            </p>
            <Link className="ip-outline" href="/services">
              Explore All Services <Icon name="arrow" />
            </Link>
          </div>
          <div className="ip-service-grid">
            {offerings.map((service) => (
              <Link
                href={"/services#" + service.id}
                key={service.id}
                className="ip-service-card"
              >
                <span className={"ip-service-badge ip-badge-" + service.icon}>
                  {service.icon === "reddit" ? (
                    <svg viewBox="0 0 28 28" aria-hidden="true">
                      <ellipse cx="14" cy="16" rx="9" ry="6" fill="white" />
                      <circle cx="10" cy="15" r="1.4" fill="#ff4b19" />
                      <circle cx="18" cy="15" r="1.4" fill="#ff4b19" />
                      <path
                        d="M10 19q4 3 8 0M14 10l2-6 5 1"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <circle cx="23" cy="5" r="2" fill="white" />
                    </svg>
                  ) : service.symbol ? (
                    <b>{service.symbol}</b>
                  ) : (
                    <Icon name={service.icon} />
                  )}
                </span>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
                <span className="ip-learn">Learn More <Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="ip-section ip-why">
        <div className="ip-wrap ip-why-grid"><div className="ip-results-orbit" aria-hidden="true"><OrbitArt variant="results" /></div>
          <div className="ip-why-copy">
            <Eyebrow>Why Choose Ispier</Eyebrow>
            <h2>
              Built on Trust.
              <br />
              Driven by <em>Results.</em>
            </h2>
            <p>
              We do not chase vanity metrics. We build brands that people
              actually trust and talk about.
            </p>
            <ul>
              {[
                "Authentic & Ethical Marketing",
                "Experienced Team of Digital Experts",
                "Transparent Process & Regular Updates",
                "Long-Term Growth Focus",
              ].map((item) => (
                <li key={item}>
                  <span>
                    <Icon name="check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/approach" className="ip-outline">
              Learn More <Icon name="arrow" />
            </Link>
          </div>
          <div className="ip-results">
            <div className="ip-result-card">
              <div>
                <strong>+250%</strong>
                <span>Brand Visibility</span>
              </div>
              <GrowthLine />
            </div>
            <div className="ip-result-card">
              <div>
                <strong>98%</strong>
                <span>Client Retention</span>
              </div>
              <i className="ip-donut" />
            </div>
            <div className="ip-result-card">
              <div>
                <strong>10x</strong>
                <span>Average ROI</span>
              </div>
              <i className="ip-bars">
                <b />
                <b />
                <b />
              </i>
            </div>
          </div>
          <div className="ip-real"><span className="ip-phone-camera" aria-hidden="true" /><DesignLogo /><div className="ip-phone-chart"><span className="ip-phone-label">Brand performance</span><strong>+250%</strong><GrowthLine /><span className="ip-phone-trend">Growing with trust</span></div><p>Real People.<br />Real Brands.<br /><em>Real Results.</em></p></div>
        </div>
      </section>
      <section className="ip-section ip-testimonials">
        <div className="ip-wrap">
          <div className="ip-review-heading">
            <div>
              <Eyebrow>What Our Clients Say</Eyebrow>
              <h2>Trusted by Businesses Worldwide</h2>
              <p>
                Real results from brands growing through authentic digital
                marketing.
              </p>
            </div>
            <div className="ip-review-arrows">
              <button
                aria-label="Previous testimonials"
                onClick={() => setReviewIndex((reviewIndex + 2) % 3)}
              >
                <Icon name="chevron" />
              </button>
              <button
                aria-label="Next testimonials"
                onClick={() => setReviewIndex((reviewIndex + 1) % 3)}
              >
                <Icon name="chevron" />
              </button>
            </div>
          </div>
          <div className="ip-reviews" aria-live="polite">
            {reviews.map((_, i) => {
              const review = reviews[(i + reviewIndex) % 3];
              return (
                <figure className="ip-review" key={review.name}>
                  <span className="ip-quote">“</span>
                  <blockquote>{review.quote}</blockquote>
                  <figcaption>
                    <span className={"ip-avatar " + review.tone}>
                      {review.initials}
                    </span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                      <small aria-label="5 out of 5 stars">★★★★★</small>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      <section className="ip-section ip-pricing" id="pricing">
        <div className="ip-wrap">
          <div className="ip-pricing-heading">
            <div>
              <Eyebrow>Pricing Plans</Eyebrow>
              <h2>Flexible Plans for Every Stage</h2>
              <p>
                No hidden fees. No surprises. Just clear value that grows with
                your business.
              </p>
            </div>
            <div className="ip-billing" aria-label="Billing period">
              <button
                className={!yearly ? "active" : ""}
                onClick={() => setYearly(false)}
                aria-pressed={!yearly}
              >
                Monthly
              </button>
              <button
                className={yearly ? "active" : ""}
                onClick={() => setYearly(true)}
                aria-pressed={yearly}
              >
                Yearly
              </button>
              <span>Save 20%</span>
            </div>
          </div>
          <div className="ip-plans">
            {[
              {
                name: "Starter",
                price: 9999,
                description:
                  "For startups and small businesses beginning their online journey.",
                features: [
                  "Reddit marketing: 2 subreddits",
                  "10 Quora answers/month",
                  "Basic SEO audit",
                  "Monthly report",
                  "Email support",
                ],
              },
              {
                name: "Growth",
                price: 24999,
                description:
                  "For growing businesses ready to scale their digital presence.",
                features: [
                  "Reddit marketing: 5 subreddits",
                  "30 Quora answers/month",
                  "Wikipedia strategy",
                  "On-page SEO and link building",
                  "Social media: 2 platforms",
                  "Bi-weekly reports",
                ],
              },
              {
                name: "Enterprise",
                price: 0,
                description:
                  "Full-scale marketing for established brands with ambitious goals.",
                features: [
                  "Unlimited Reddit and Quora campaigns",
                  "Full Wikipedia management",
                  "Technical SEO and authority building",
                  "Website development and maintenance",
                  "Dedicated account manager",
                  "Weekly strategy calls",
                ],
              },
            ].map((plan, i) => (
              <article
                key={plan.name}
                className={"ip-plan" + (i === 1 ? " ip-plan-featured" : "")}
              >
                {i === 1 && <span className="ip-popular">Most Popular</span>}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="ip-price">
                  {plan.price
                    ? "\u20B9" +
                      (yearly
                        ? Math.round(plan.price * 0.8)
                        : plan.price
                      ).toLocaleString("en-IN")
                    : "Custom"}
                  {plan.price > 0 && <span>/month</span>}
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={
                    "/contact?plan=" +
                    plan.name.toLowerCase() +
                    "&billing=" +
                    (yearly ? "yearly" : "monthly")
                  }
                  className={i === 1 ? "ip-button" : "ip-outline"}
                >
                  {plan.price ? "Get Started" : "Contact Sales"}{" "}
                  <Icon name="arrow" />
                </Link>
                {yearly && plan.price > 0 && (
                  <small className="ip-billing-note">
                    Billed annually at{" "}
                    {"\u20B9" +
                      (Math.round(plan.price * 0.8) * 12).toLocaleString(
                        "en-IN",
                      )}
                  </small>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ip-cta-section">
        <div className="ip-wrap">
          <div className="ip-final-cta">
            <div>
              <Eyebrow>Ready to Grow Your Brand?</Eyebrow>
              <h2>Let&apos;s Grow Your Brand the Right Way</h2>
              <p>
                Your audience is already talking and looking for solutions.
                Let&apos;s make sure they find you.
              </p>
            </div>
            <Link href="/contact" className="ip-button">
              Get in Touch <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="ip-dialog"
        onCancel={() => setOverview(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOverview(false);
        }}
      >
        <button
          className="ip-dialog-close"
          onClick={() => setOverview(false)}
          aria-label="Close overview"
        >
          &times;
        </button>
        <Eyebrow>The Ispier Approach</Eyebrow>
        <h2>
          Authentic Marketing.
          <br />
          <em>Sustainable Growth.</em>
        </h2>
        <p>
          We integrate your brand into the online world in a way that feels
          real, human and organic.
        </p>
        <ol>
          <li>
            <strong>Precision targeting.</strong> We find where your ideal
            customers spend time and engage them there.
          </li>
          <li>
            <strong>Authentic content.</strong> Every piece matches the platform
            and provides genuine value.
          </li>
          <li>
            <strong>Trust-first growth.</strong> We build credibility before
            conversions and track what works.
          </li>
        </ol>
        <Link
          href="/approach"
          className="ip-button"
          onClick={() => setOverview(false)}
        >
          Explore Our Approach <Icon name="arrow" />
        </Link>
      </dialog>
    </div>
  );
}
export function DesignFooter() {
  return (
    <footer className="ip-footer">
      <div className="ip-wrap ip-footer-grid">
        <div>
          <Link href="/" aria-label="Ispier home">
            <DesignLogo />
          </Link>
          <p>Authentic Marketing. Sustainable Growth.</p>
          <div className="ip-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              𝕏
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="play" />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["About", "/about"],
            ["Blogs", "/blogs"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Our Services</h3>
          {offerings.map((item) => (
            <Link key={item.id} href={"/services#" + item.id}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact Us</h3>
          <a href="mailto:hello@ispier.com">
            <Icon name="mail" />
            hello@ispier.com
          </a>
          <a href="tel:+919876543210">
            <Icon name="phone" />
            +91 98765 43210
          </a>
          <p className="ip-location">
            <Icon name="pin" />
            India
          </p>
        </div>
      </div>
      <div className="ip-footer-bottom">
        <div className="ip-wrap">
          <span>© 2026 Ispier. All rights reserved.</span>
          <div>
            <a href="mailto:hello@ispier.com?subject=Privacy%20policy%20request">
              Privacy Policy
            </a>
            <i />
            <a href="mailto:hello@ispier.com?subject=Terms%20of%20service%20request">
              Terms of Service
            </a>
            <i />
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
