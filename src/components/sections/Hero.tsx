import Link from 'next/link';
import { clinicConfig } from '@/config/clinic';
import Image from 'next/image';
export default function Hero() {
  const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na VS Odontologia.')}`;

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Elementos decorativos de fundo (círculos suaves) */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-azul-claro/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-dourado-claro/30 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-azul-claro/60 text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel">
                Odontopediatria Humanizada em Fortaleza
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-azul-profundo leading-tight">
                Cuidar do sorriso infantil começa com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-azul-profundo to-azul-medio">
                  acolhimento.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-cinza-azulado leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Odontopediatria com atenção individualizada, respeito ao tempo de cada criança e cuidado humanizado para cada família, conduzido pela {clinicConfig.professional.name}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Agendar uma consulta
              </a>
              <Link
                href="#sobre"
                className="btn-secondary text-base"
              >
                Conheça nosso atendimento
              </Link>
            </div>

            {/* Indicador de confiança */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-sm text-cinza-azulado">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-azul-pastel border-2 border-white flex items-center justify-center text-xs font-bold text-azul-profundo">VS</div>
                <div className="w-8 h-8 rounded-full bg-dourado-claro border-2 border-white flex items-center justify-center text-xs font-bold text-azul-profundo">★</div>
              </div>
              <p>Atendimento especializado e registrado ({clinicConfig.professional.cro})</p>
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-full">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-azul-profundo/10 border-4 border-white">
              {/* PLACEHOLDER: Substitua o 'src' pela foto real da Dra. Valessa com uma criança */}
              <div className="absolute inset-0 bg-gradient-to-br from-azul-claro to-azul-pastel flex flex-col items-center justify-center text-azul-profundo p-8 text-center">
                <p className="font-display text-xl font-semibold mb-2">Espaço para Fotografia</p>
                <p className="text-sm opacity-80">
                  Substitua este bloco pela imagem:<br/>
                  <code className="bg-white/50 px-2 py-1 rounded mt-2 inline-block">public/images/hero-dentista.webp</code>
                </p>
              </div>
              
               Descomente e use este bloco quando tiver a imagem real:
              <Image
                src="/images/hero.webp" /* <-- ATUALIZE PARA O NOME EXATO DO SEU ARQUIVO */
                alt="Dra. Valessa Sabino atendendo uma criança com acolhimento no consultório"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            
            </div>
            
            {/* Detalhe decorativo dourado */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-dourado-suave/40 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-dourado-claro/20 rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}