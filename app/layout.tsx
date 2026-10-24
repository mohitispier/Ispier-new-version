import type { Metadata } from "next";
import "./globals.css";
import "./redesign.css";
import "./future-tech.css";
import "./homepage.css";
import "./internal.css";
import { Header, Footer } from "./components/site";
export const metadata: Metadata = {
  title: {
    default: "Ispier - Next Gen SaaS Tools That Boost Your Marketing & Sales",
    template: "%s | Ispier",
  },
  description:
    "Ispier integrates brands into authentic online conversations across Reddit, Quora, Wikipedia and beyond to build trust and sustainable growth.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
