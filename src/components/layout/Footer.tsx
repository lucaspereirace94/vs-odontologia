import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

export default function Footer() {
  return (
    <footer className="bg-azul-profundo text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Image
              src="/brand/logo.png"
              alt={`Logotipo ${clinicConfig.name}`}
              width={180}
              height={54}
              className="brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Odontopediatria humanizada e especializada em atendimento de crianças com TEA em Fortaleza - CE.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={clinicConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dourado-suave transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-dourado-claro">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li><Link href="#inicio" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">Início</Link></li>
              <li><Link href="#sobre" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">Sobre a Dentista</Link></li>
              <li><Link href="#especialidades" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">Especialidades</Link></li>
              <li><Link href="#tea" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">Atendimento TEA</Link></li>
              <li><Link href="#consultorio" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">O Consultório</Link></li>
              <li><Link href="#contato" className="text-white/80 hover:text-dourado-claro transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-dourado-claro">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <span>{clinicConfig.contact.whatsappDisplay}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-dourado-claro transition-colors">
                  {clinicConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <span>{clinicConfig.location.fullAddress}</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-dourado-claro">
              Horários de Atendimento
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <div>
                  <p className="font-semibold text-white">Segunda a Sexta</p>
                  <p>{clinicConfig.hours.weekdays.split(', ')[1]}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <div>
                  <p className="font-semibold text-white">Sábado</p>
                  <p>{clinicConfig.hours.saturday.split(', ')[1]}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-dourado-suave" />
                <div>
                  <p className="font-semibold text-white">Domingo</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória e Selo DentMap */}
        <div className="border-t border-white/10 pt-8">
          
          {/* Selo DentMap */}
          <div className="flex justify-center mb-6">
            <a 
              href="https://dentmap.com.br/dentistas/fortaleza/consultorio-vs-odontologia-199f3866?utm_source=selo&utm_medium=site-parceiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://dentmap.com.br/api/selo/cmn5v1uqh0011oabq3e0pg5hv.svg" 
                alt="Consultório VS Odontologia — verificado no DentMap" 
                width="240" 
                height="72" 
                loading="lazy"
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Copyright e Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © 2026 {clinicConfig.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/privacidade" className="hover:text-dourado-claro transition-colors">
                Política de Privacidade
              </Link>
              <p>
                {clinicConfig.professional.name} | {clinicConfig.professional.cro}
              </p>
            </div>
          </div>
          
          <p className="text-xs text-white/40 text-center mt-4">
            Este site não substitui uma consulta profissional. Em caso de emergência, procure atendimento imediato.
          </p>
        </div>
      </div>
    </footer>
  );
}