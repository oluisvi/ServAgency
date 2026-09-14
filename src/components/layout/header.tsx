import { ArrowUpRight, Menu } from "lucide-react";
import { navigation } from "@/content/site";
import { Brand } from "@/components/ui/brand";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#inicio" aria-label="ServAgency — início">
        <Brand />
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.slice(0, 4).map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato">
        Iniciar projeto <ArrowUpRight aria-hidden="true" />
      </a>

      <details className="mobile-nav">
        <summary aria-label="Abrir menu">
          <Menu aria-hidden="true" />
        </summary>
        <nav aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
