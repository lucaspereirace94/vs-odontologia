import { Heart, User, Users, Smile } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: "Acolhimento e escuta",
    description: "Ouvimos as preocupações dos pais e as necessidades da criança antes de qualquer procedimento."
  },
  {
    icon: User,
    title: "Respeito à individualidade",
    description: "Cada criança é única. Adaptamos nossa abordagem ao ritmo, temperamento e histórico de cada paciente."
  },
  {
    icon: Users,
    title: "Orientação para os responsáveis",
    description: "Explicamos cada etapa do tratamento de forma clara, garantindo que a família se sinta segura e participativa."
  },
  {
    icon: Smile,
    title: "Cuidado com a experiência",
    description: "Transformamos a visita ao dentista em uma experiência positiva, construindo confiança desde a primeira consulta."
  }
];

export default function Accommodation() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Cada criança merece ser cuidada do seu jeito.
          </h2>
          <p className="text-cinza-azulado text-lg">
            Acreditamos que a odontologia infantil vai muito além do tratamento clínico. 
            É sobre construir uma relação de confiança, onde o medo dá lugar à curiosidade e ao cuidado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-off-white p-8 rounded-2xl border border-azul-claro hover:border-azul-medio transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-azul-claro/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-azul-medio/20 transition-colors">
                <feature.icon className="w-7 h-7 text-azul-profundo" />
              </div>
              <h3 className="font-display text-xl font-semibold text-azul-profundo mb-3">
                {feature.title}
              </h3>
              <p className="text-cinza-azulado leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}