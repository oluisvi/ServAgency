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

          <a
            href={
              "mailto:servagencyai@gmail.com" +
              "?subject=Quero%20falar%20sobre%20um%20projeto" +
              "&body=Olá%20ServAgency,%20gostaria%20de%20conversar%20sobre..."
            }
          >
            servagencyai@gmail.com
          </a>

          <a
            href="https://wa.me/5512992568583"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: (12) 99256-8583
          </a>

          <span>
            Jacareí · Vale do Paraíba · Atendimento em todo o Brasil
          </span>
        </div>
      </div>

      <div className="footer-bottom page-shell">
        <span>© 2026 ServAgency. Todos os direitos reservados.</span>

        <a href="/privacidade">Política de privacidade</a>
      </div>
    </footer>
  );
}
