"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const needs = [
  "Website",
  "Presença digital",
  "Google e SEO",
  "Auditoria",
  "Automação ou IA",
  "Solução sob demanda",
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
    <section
      className="contact section-pad"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="page-shell contact-grid">
        <div>
          <span className="section-number">08</span>
          <h2 id="contact-title">
            Existe um próximo passo melhor para sua empresa. Vamos encontrá-lo
            juntos.
          </h2>
          <p>
            Conte o que precisa, o que está incomodando ou o que deseja
            construir. Nós ajudamos a transformar isso em um plano claro.
          </p>
          <a
            className="button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("whatsapp_click", { location: "contact" })}
          >
            <MessageCircle /> Falar no WhatsApp
          </a>
          <small>Atendimento direto pelo WhatsApp.</small>
        </div>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            Nome
            <input
              {...register("name")}
              autoComplete="name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <span role="alert">{errors.name.message}</span>}
          </label>
          <label>
            Empresa
            <input {...register("company")} autoComplete="organization" />
          </label>
          <label className="full">
            WhatsApp ou e-mail
            <input
              {...register("contact")}
              autoComplete="email"
              aria-invalid={!!errors.contact}
            />
            {errors.contact && (
              <span role="alert">{errors.contact.message}</span>
            )}
          </label>
          <label className="full">
            Necessidade
            <select
              {...register("need")}
              defaultValue=""
              aria-invalid={!!errors.need}
            >
              <option value="" disabled>
                Selecione
              </option>
              {needs.map((need) => (
                <option key={need}>{need}</option>
              ))}
            </select>
            {errors.need && <span role="alert">{errors.need.message}</span>}
          </label>
          <label className="full">
            Mensagem
            <textarea
              {...register("message")}
              rows={5}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span role="alert">{errors.message.message}</span>
            )}
          </label>
          <button className="button full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Preparando…" : "Enviar mensagem"}
            <ArrowRight />
          </button>
          {sent && (
            <p className="form-success full" role="status">
              Dados validados. Abrimos o WhatsApp com sua mensagem pronta para
              envio.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
