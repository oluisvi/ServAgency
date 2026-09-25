import { Brand } from "@/components/ui/brand";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function Footer({ copy }: { locale: Locale; copy: SiteCopy }) {
  return <footer><Brand /><p>{copy.footer.body}</p><span>{copy.footer.location}</span><a href="mailto:contato@servagency.com.br">contato@servagency.com.br</a><small>© {new Date().getFullYear()} ServAgency — {copy.footer.signature}</small></footer>;
}
