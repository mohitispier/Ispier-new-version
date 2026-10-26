import { caseStudies } from "./case-study-data";
import type { MetadataRoute } from "next";
import { blogPosts } from "./blog-posts";
import { services } from "./content";
export default function sitemap():MetadataRoute.Sitemap{return ["","/services","/case-studies","/about","/blogs","/pricing","/approach","/contact",...blogPosts.map(post=>"/blog/"+post.slug),...services.map(service=>"/services/"+service.id),...caseStudies.map(study=>"/case-studies/"+study.slug)].map(path=>({url:"https://ispier.com"+path}));}
