import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/ui/brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer-grid">
        <div>
          <a className="brand-link footer-brand" href="#inicio">
            <Brand />
          </a>
          <p>
            Estratégia, design e tecnologia conectados para resolver problemas
            reais.
          </p>
        </div>
        <div className="footer-links">
          <span>Jacareí · São Paulo · Brasil</span>
          <a href="mailto:contato@servagency.com.br">
            contato@servagency.com.br <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="/privacidade">Privacidade</a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} ServAgency</span>
        <span>Digital systems in motion.</span>
      </div>
    </footer>
  );
}
