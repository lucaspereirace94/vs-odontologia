import { Star, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// SUBSTITUA estes dados pelos depoimentos reais copiados do Google da clínica
const testimonials = [
  {
    id: 1,
    name: "Juliana Gomes", // Nome de quem escreveu no Google
    role: "Mãe do Gustavo, 7 anos", // Ex: Pai da Ana, 7 anos
    text: "Ótima localização e ambiente acolhedor. Dra Valessa, um amor de pessoa, ótima profissional e atenciosa demais. Sem dúvidasa, a melhor Dentista.",
    rating: 5
  },
  {
    id: 2,
    name: "Mirlene Fernandes", 
    role: "Mamãe de 2 crianças, uma delas com autismo",
    text: "Maravilhosa! Super atenciosa e paciente com os pequenos. Levei minhas duas filhas, uma delas com autismo, e foi simplesmente incrível. Não teve choro, nem gritos...somente acolhimento e muitos risos.",
    rating: 5
  },
  {
    id: 3,
    name: "Samuel Helyonai", 
    role: "",
    text: "Simplesmente amei. Atendimento de qualidade, profissional qualificada Ambiente aconchegante. Recomendo.",
    rating: 5
  }
];

export default function Testimonials() {
  // Link direto para os depoimentos no Google Maps da clínica
  // SUBSTITUA pelo link real do perfil da VS Odontologia no Google
  const googleReviewsUrl = "https://search.google.com/local/writereview?placeid=ChIJwS7rUQBPxwcRZjifGXvWfHQ"; 

  return (
    <section className="py-20 bg-azul-claro/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            O que as famílias dizem
          </h2>
          <p className="text-cinza-azulado text-lg">
            A confiança dos pais é o nosso maior reconhecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-azul-claro/50 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-dourado-claro/40" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dourado-suave text-dourado-suave" />
                ))}
              </div>
              
              <p className="text-cinza-azulado leading-relaxed mb-6 italic flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-azul-claro pt-4 mt-auto">
                <p className="font-display font-semibold text-azul-profundo">{testimonial.name}</p>
                <p className="text-sm text-cinza-azulado">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver mais no Google (Gera muita credibilidade) */}
        <div className="text-center">
          <a 
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-azul-profundo font-semibold hover:text-dourado-suave transition-colors border-b-2 border-dourado-suave/30 hover:border-dourado-suave pb-1"
          >
            Ver todos os depoimentos no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}