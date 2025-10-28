"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "home", label: "Início" },
    { href: "about-me", label: "Sobre mim" },
    { href: "stack", label: "Stacks" },
    { href: "projects", label: "Projetos" },
    { href: "contacts", label: "Contato" },
  ];

  return (
    <>
      {/* Header fixo com fundo visível */}
      <header className="fixed top-0 left-0 w-full text-white h-16 flex items-center justify-center z-50 shadow-md bg-gradient-to-tl from-purple-900/80 to-purple-950/80">
        <div className="w-full md:max-w-10/12 lg:max-w-9/12 flex items-center justify-between px-4">
          {/* Logo / Perfil */}
          <h1 className="text-lg font-semibold">
            <code className="text-purple-800">&lt;</code>
            Sanchez Dev
            <code className="text-purple-800">/&gt;</code>
          </h1>

          {/* Menu - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><a href="#home" className="hover:text-purple-600">Início</a></li>
              <li><a href="#about-me" className="hover:text-purple-600">Sobre mim</a></li>
              <li><a href="#stack" className="hover:text-purple-600">Stacks</a></li>
              <li><a href="#projects" className="hover:text-purple-600">Projetos</a></li>
              <li><a href="#contacts" className="hover:text-purple-600">Contato</a></li>
            </ul>
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Overlay + Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: menuOpen ? "blur(6px)" : "blur(0px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Mobile */}
      <nav
        className={`
          md:hidden fixed top-16 right-0 w-2/5 max-w-xs h-full bg-purple-900/70 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-start gap-6 p-6 text-white">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={`#${link.href}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
