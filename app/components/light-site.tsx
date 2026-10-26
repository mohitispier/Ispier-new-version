"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export function LightArrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-5-5 5 5-5 5"} />
    </svg>
  );
}
export function LightLogo() {
  return (
    <span className="lh-logo">
      <svg viewBox="0 0 24 32" fill="none" aria-hidden="true">
        <path
          d="m5 5 11 11L5 27"
          stroke="#0788ff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>ispier</span>
    </span>
  );
}
const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blogs"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];
export function LightHeader() {
  const pathname = usePathname();
  const drawer = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  function close() {
    drawer.current?.close();
    setOpen(false);
  }
  function show() {
    if (!drawer.current?.open) drawer.current?.showModal();
    setOpen(true);
  }
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1025px)");
    function onDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        drawer.current?.close();
        setOpen(false);
      }
    }
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);
  return (
    <>
      <header className="lh-header">
        <div className="nv-wrap lh-nav">
          <Link href="/" aria-label="Ispier home">
            <LightLogo />
          </Link>
          <nav className="lh-nav-links" aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nv-nav-actions">
            <Link href="/contact" className="ref-header-cta">
              Get Started <LightArrow />
            </Link>
            <button
              type="button"
              className="lh-menu-toggle"
              aria-label="Open navigation"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="nv-site-drawer"
              onClick={show}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={drawer}
        id="nv-site-drawer"
        className="ip-nav-drawer"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            close();
        }}
      >
        <div className="ip-drawer-top">
          <Link href="/" aria-label="Ispier home" onClick={close}>
            <LightLogo />
          </Link>
          <button
            type="button"
            className="ip-drawer-close"
            aria-label="Close navigation"
            autoFocus
            onClick={close}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <p className="ip-drawer-tagline">Strategy. Creativity. Growth.</p>
        <nav aria-label="Mobile and tablet navigation">
          {navigation.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              onClick={close}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ip-drawer-bottom">
          <p>Have something in mind?</p>
          <Link href="/contact" className="ip-drawer-cta" onClick={close}>
            Let&apos;s talk <LightArrow />
          </Link>
          <a href="mailto:hello@ispier.com">hello@ispier.com</a>
        </div>
      </dialog>
    </>
  );
}
export function LightFooter() {
  return (
    <footer className="ref-site-footer">
      <div className="ref-footer-content">
        <div className="ref-footer-brand">
          <Link href="/" aria-label="Ispier home">
            <LightLogo />
          </Link>
          <p>
            Strategic marketing that helps ambitious brands connect, grow and
            make an impact.
          </p>
          <Link href="/contact" className="ref-footer-contact-link">
            Let&apos;s work together <LightArrow />
          </Link>
        </div>
        <nav className="ref-footer-links" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="ref-footer-contact">
          <h3>Get in Touch</h3>
          <a href="mailto:hello@ispier.com">hello@ispier.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <p>New Delhi, India</p>
          <div className="ref-footer-socials">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              in
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a href="https://x.com/" aria-label="X">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="ref-footer-bottom">
        <span>&copy; 2026 Ispier. All rights reserved.</span>
        <div>
          <a href="mailto:hello@ispier.com?subject=Privacy%20policy%20request">
            Privacy Policy
          </a>
          <a href="mailto:hello@ispier.com?subject=Terms%20of%20service%20request">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
