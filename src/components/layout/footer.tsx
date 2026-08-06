import { Brand } from "@/components/ui/brand";
import { navigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid page-shell">
        <div>
          <a href="#inicio" className="brand-link">
            <Brand />
          </a>
          <p>Tecnologia, design e estratégia para empresas em evolução.</p>
        </div>
        <div>
          <strong>Navegação</strong>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <strong>Soluções</strong>
          <a href="#solucoes">Websites</a>
          <a href="#solucoes">SEO e presença digital</a>
          <a href="#solucoes">Automações e IA</a>
        </div>
        <div>
          <strong>Contato</strong>
          <span>[E-mail a definir]</span>
          <span>[WhatsApp a definir]</span>
          <span>[Cidade e região a definir]</span>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <span>© 2026 ServAgency. Todos os direitos reservados.</span>
        <span>Política de privacidade em preparação.</span>
      </div>
    </footer>
  );
}
