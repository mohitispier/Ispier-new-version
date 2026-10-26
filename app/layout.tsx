import type { Metadata } from "next";
import "./globals.css";
import "./internal.css";
import "./light-theme.css";
import "./novaly-theme.css";
import "./comfortable-layout.css";
import { Header, Footer } from "./components/site";
export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  title: {
    default: "Ispier | Digital Marketing Agency - Strategy. Creativity. Growth.",
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
