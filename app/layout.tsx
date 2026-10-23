import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./future-tech.css";
import { Header, Footer } from "./components/site";
export const metadata: Metadata = { title: { default: "Ispier – Next Gen SAAS Tools That Boost Your Marketing & Sales", template: "%s | Ispier" }, description: "Ispier Tech Pvt Ltd – Smart Digital Marketing Agency. Reddit, Quora, Wikipedia marketing, SEO, brand promotion and social media services." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}





