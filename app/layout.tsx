import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./future-tech.css";
import "./homepage.css";
import { Header, Footer } from "./components/site";
export const metadata: Metadata = { title: { default: "Ispier – Boost Your Brand Visibility & Online Reputation", template: "%s | Ispier" }, description: "Ispier Tech Pvt Ltd – Smart Digital Marketing Agency. Reddit, Quora, Wikipedia marketing, SEO, brand promotion and social media services." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
return <html lang="en" data-scroll-behavior="smooth"><body><Header/><main id="main">{children}</main><Footer/></body></html>;
}





