import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const teaFeatures = [
  "Conversa prévia detalhada com os responsáveis",
  "Identificação respeitosa das necessidades individuais",
  "Orientações antecipadas sobre como será a consulta",
  "Adaptação da comunicação e da linguagem",
  "Atenção especial a estímulos sensoriais (luz, som, toque)",
  "Tempo de adaptação compatível com o planejamento",
  "Orientação contínua aos familiares sobre a preparação"
];

export default function TeaSection() {
  return (
    <section id="tea" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-dourado-claro/30 text-azul-profundo text-sm font-semibold rounded-full border border-dourado-suave/30">
              Atendimento Especializado
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo leading-tight">
              Um atendimento que respeita o tempo e as necessidades de cada criança.
            </h2>
            <p className="text-cinza-azulado text-lg leading-relaxed">
              Sabemos que crianças com Transtorno do Espectro Autista (TEA) podem ter necessidades sensoriais e de comunicação muito específicas. Por isso, nosso atendimento é planejado individualmente, sem generalizações, garantindo um ambiente seguro e previsível.
            </p>
            <p className="text-cinza-azulado leading-relaxed">
              Nosso objetivo não é &ldquo;curar&rdquo; ou mudar a criança, mas sim adaptar o ambiente odontológico para que ela se sinta acolhida, compreendida e capaz de receber o cuidado de saúde bucal que merece.
            </p>

            <ul className="space-y-3 mt-6">
              {teaFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-dourado-suave flex-shrink-0 mt-0.5" />
                  <span className="text-azul-profundo font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Imagem (Placeholder) */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-azul-profundo/5 border-4 border-white bg-azul-claro/30 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-display text-xl font-semibold text-azul-profundo mb-2">Ambiente de Acolhimento</p>
                <p className="text-sm text-cinza-azulado">
                  Substitua este bloco pela imagem:<br/>
                  <code className="bg-white/60 px-2 py-1 rounded mt-2 inline-block text-xs">public/images/tea-ambiente.webp</code>
                </p>
              </div>
              
              {/* Quando tiver a imagem real, descomente o bloco abaixo e apague o placeholder acima:
              <Image
                src="/images/tea-ambiente.webp"
                alt="Ambiente adaptado e acolhedor para atendimento de crianças com TEA"
                fill
                className="object-cover"
              />
              */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dourado-claro/40 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-azul-pastel/40 rounded-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}