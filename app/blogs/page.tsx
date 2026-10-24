import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { InnerPage, InnerHero, InnerCTA } from "../components/inner-page";
import { Arrow } from "../components/site";
export const metadata: Metadata = { title: "Brand Growth Insights" };
const articles = [
  {
    title: "Start with the conversation, not the campaign",
    text: "A useful community strategy begins with listening. Read the questions your audience asks, understand the language they use, and identify where your experience can add something helpful. On Reddit and Quora, a relevant answer gives people a reason to pay attention. Make the answer useful on its own, disclose your connection to the brand, and follow each community’s rules.",
    href: "/services#reddit",
    label: "Explore community marketing",
  },
  {
    title: "Build a reputation people can verify",
    text: "A consistent brand presence helps customers understand who you are and what you offer. Keep business information accurate, support claims with clear evidence, and respond thoughtfully to feedback. Wikipedia requires independent, reliable sources and editorial neutrality; an article is not a promotional landing page, and inclusion is never guaranteed.",
    href: "/services#wikipedia",
    label: "Explore reputation strategy",
  },
  {
    title: "Connect visibility to a meaningful next step",
    text: "Traffic becomes useful when visitors can find the answer they came for. Organize your website around customer questions, make pages easy to navigate, and give each page a clear next step. Review search visibility, relevant enquiries and engagement together, so your content decisions reflect the goals of your business.",
    href: "/services#seo",
    label: "Explore search strategy",
  },
];

const categories = ["Community marketing", "Brand reputation", "Search & visibility"];
const images = ["/images/creative-meeting.jpg", "/images/strategy.jpg", "/images/analytics.jpg"];
export default function Blogs() {
 return <InnerPage active="/blogs"><InnerHero centered label="Ispier insights" title="Fresh perspectives." accent="Stronger brands." description="Practical thinking on the conversations, content and digital experiences that help your business grow." />
 <section className="in-wrap in-insights-section"><article className="in-featured-insight"><div className="in-featured-photo"><Image src={images[0]} alt="A team discussing ideas together" fill sizes="(max-width:760px) 90vw, 50vw" /></div><div className="in-featured-copy"><span className="in-kicker"><i />Featured perspective</span><span className="in-service-tag">{categories[0]}</span><h2>{articles[0].title}</h2><p>{articles[0].text.slice(0,articles[0].text.indexOf("On Reddit"))}</p><a href="#insight-1" className="in-text-link">Read the perspective <Arrow /></a></div></article>
 <div className="in-editorial-title"><h2>Ideas worth exploring.</h2><span>From the Ispier team</span></div><div className="in-articles">{articles.map((article,i)=><article className="in-panel in-article" key={article.title} id={"insight-"+(i+1)}><div className="in-article-photo"><Image src={images[i]} alt={["A collaborative team workshop","Brand strategy planning","Digital performance analytics"][i]} fill sizes="(max-width:760px) 90vw, 30vw" /></div><div className="in-article-body"><span className="in-service-tag">{categories[i]}</span><h2>{article.title}</h2><p>{article.text}</p><Link className="in-text-link" href={article.href}>{article.label}<Arrow /></Link></div></article>)}</div></section><InnerCTA /></InnerPage>;
}
