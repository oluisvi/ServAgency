import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Digite seu nome."),
  company: z.string().trim().max(100, "Use até 100 caracteres.").optional(),
  contact: z.string().trim().min(5, "Informe um WhatsApp ou e-mail válido."),
  need: z.string().trim().min(1, "Selecione uma necessidade."),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o projeto."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
