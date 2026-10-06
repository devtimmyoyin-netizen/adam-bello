import Link from "next/link";
import { FooterNameReveal } from "@/components/motion";
import { contact } from "@/lib/contact";

export function SiteFooter() {
  return <footer className="site-footer reference-footer"><div className="footer-top"><div><h2>Get in touch</h2><a href={`mailto:${contact.email}`}>{contact.email}</a><a className="footer-phone" href={contact.phoneHref}>{contact.phone}</a></div><div className="footer-links"><div><Link href="/about">About</Link><Link href="/work-with-me">Work with me</Link><Link href="/work">Selected work</Link></div><div><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.twitter} target="_blank" rel="noreferrer">X / Twitter</a><Link href="/contact">Contact</Link></div></div></div><FooterNameReveal /><div className="footer-base"><span>© {new Date().getFullYear()} Adam Bello</span><span className="footer-role">Operations, Management and Strategy</span><span className="footer-credit">Website Built by <a href="https://devtimmy.com" target="_blank" rel="noreferrer">DevTimmy</a></span></div></footer>;
}
