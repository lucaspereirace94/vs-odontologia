import { UserCheck, MessageCircle, Heart, Shield, Home, Clock } from 'lucide-react';

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento individualizado",
    description: "Cada criança recebe atenção exclusiva, com abordagem adaptada ao seu perfil e necessidades."
  },
  {
    icon: MessageCircle,
    title: "Comunicação transparente",
    description: "Mantemos os responsáveis informados em cada etapa, com clareza e empatia."
  },
  {
    icon: Heart,
    title: "Atenção às necessidades da criança",
    description: "Respeitamos o ritmo, as preferências e os limites de cada pequeno paciente."
  },
  {
    icon: Shield,
    title: "Orientações preventivas",
    description: "Ensinamos hábitos saudáveis de higiene bucal de forma lúdica e eficaz."
  },
  {
    icon: Home,
    title: "Ambiente acolhedor",
    description: "Consultório projetado para ser confortável, seguro e livre de gatilhos de ansiedade."
  },
  {
    icon: Clock,
    title: "Acompanhamento contínuo",
    description: "Follow-up regular para garantir a saúde bucal e o bem-estar da criança ao longo do tempo."
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-dourado-claro/30 text-azul-profundo text-sm font-semibold rounded-full border border-dourado-suave/30 mb-4">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Diferenciais do nosso atendimento
          </h2>
          <p className="text-cinza-azulado text-lg">
            Combinamos técnica, sensibilidade e compromisso com a saúde bucal infantil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-2xl bg-off-white border border-azul-claro/50 hover:border-azul-medio/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-azul-claro/50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-azul-profundo" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-azul-profundo mb-2">
                  {item.title}
                </h3>
                <p className="text-cinza-azulado text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}