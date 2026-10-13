'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Atendimento TEA', href: '#tea' },
  { name: 'Consultório', href: '#consultorio' },
  { name: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na VS Odontologia.')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-azul-claro/50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo */}
          <Link href="#inicio" className="flex-shrink-0">
            <Image
              src="/brand/logo.svg"
              alt={`Logotipo ${clinicConfig.name}`}
              width={180}
              height={54}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cinza-azulado hover:text-azul-profundo transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Agendar consulta
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="lg:hidden p-2 text-azul-profundo hover:bg-azul-claro rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Expansível */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-azul-claro/50 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-cinza-azulado hover:text-azul-profundo hover:bg-azul-claro/50 px-3 py-2 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar consulta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}