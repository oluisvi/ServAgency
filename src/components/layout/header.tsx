"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { Brand } from "@/components/ui/brand";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="site-header">
      <a
        className="brand-link"
        href="#inicio"
        aria-label="ServAgency, voltar ao início"
      >
        <Brand />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-small header-cta" href="#contato">
        Falar sobre um projeto
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Navegação móvel"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="button" href="#contato" onClick={() => setOpen(false)}>
          Falar sobre um projeto
        </a>
      </nav>
    </header>
  );
}
