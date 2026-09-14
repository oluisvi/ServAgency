"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const needs = [
  "Website ou landing page",
  "Presença digital / marca",
  "Google e SEO",
  "Automação ou integração",
  "Inteligência artificial",
  "Experiência interativa / 3D",
  "Produto ou sistema web",
  "Ainda não sei",
];

const whatsappNumber = "5512992568583";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Conheci a ServAgency pelo site e gostaria de conversar sobre um projeto.",
)}`;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    track("contact_form_validated", { need: data.need });
    const message = [
      "Olá! Enviei meus dados pelo site da ServAgency.",
      `Nome: ${data.name}`,
      data.company ? `Empresa: ${data.company}` : "",
      `Contato: ${data.contact}`,
      `Necessidade: ${data.need}`,
      `Mensagem: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section className="contact section-pad" id="contato" aria-labelledby="contact-title">
      <div className="contact-route" aria-hidden="true"><i/><i/><i/><i/></div>
      <div className="page-shell contact-grid">
        <div className="contact-copy scene-reveal">
          <span className="section-index">07 / START A PROJECT</span>
          <h2 id="contact-title">Tem um problema, uma ideia ou um processo travado?</h2>
          <p className="contact-lead">Vamos definir a rota.</p>
          <p>
            Conte o cenário atual. A conversa começa pelo problema e termina com
            próximos passos claros, mesmo quando a resposta não é uma solução
            complexa.
          </p>
          <a
            className="button button-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("whatsapp_click", { location: "contact" })}
          >
            <MessageCircle aria-hidden="true" /> Falar no WhatsApp
          </a>
        </div>

        <form className="contact-form scene-reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            <span>Nome</span>
            <input {...register("name")} autoComplete="name" aria-invalid={!!errors.name} />
            {errors.name && <small role="alert">{errors.name.message}</small>}
          </label>
          <label>
            <span>Empresa</span>
            <input {...register("company")} autoComplete="organization" />
          </label>
          <label className="full">
            <span>WhatsApp ou e-mail</span>
            <input {...register("contact")} autoComplete="email" aria-invalid={!!errors.contact} />
            {errors.contact && <small role="alert">{errors.contact.message}</small>}
          </label>
          <label className="full">
            <span>O que você precisa?</span>
            <select {...register("need")} defaultValue="" aria-invalid={!!errors.need}>
              <option value="" disabled>Selecione uma frente</option>
              {needs.map((need) => <option key={need}>{need}</option>)}
            </select>
            {errors.need && <small role="alert">{errors.need.message}</small>}
          </label>
          <label className="full">
            <span>Contexto</span>
            <textarea {...register("message")} rows={5} aria-invalid={!!errors.message} placeholder="O que está acontecendo hoje e o que você gostaria de melhorar?" />
            {errors.message && <small role="alert">{errors.message.message}</small>}
          </label>
          <button className="form-submit full" type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? "Preparando…" : "Preparar mensagem"}</span>
            <ArrowUpRight aria-hidden="true" />
          </button>
          {sent && (
            <p className="form-success full" role="status">
              Mensagem preparada. O WhatsApp foi aberto para você revisar e enviar.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
