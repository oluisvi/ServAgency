"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Contact({ copy }: { locale: Locale; copy: SiteCopy["contact"] }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [copy.intro, "", `${copy.labels[0]}: ${form.get("name")}`, `${copy.labels[1]}: ${form.get("company")}`, `${copy.labels[2]}: ${form.get("contact")}`, `${copy.labels[3]}: ${form.get("message")}`].join("\n");
    window.open(`https://wa.me/5512992568583?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  return <section className="contact motion-reveal" id="contato"><div><span>{copy.kicker}</span><h2>{copy.title}</h2><p>{copy.body}</p></div><form onSubmit={submit}><input name="name" required placeholder={copy.fields[0]} /><input name="company" placeholder={copy.fields[1]} /><input name="contact" required placeholder={copy.fields[2]} /><textarea name="message" required minLength={10} placeholder={copy.fields[3]} /><button data-magnetic>{copy.button} <ArrowUpRight /></button></form></section>;
}
