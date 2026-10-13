import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    role: "Mãe do Pedro, 5 anos",
    text: "A Dra. Valessa tem uma paciência incrível. Meu filho tinha medo de dentista, mas agora adora ir ao consultório. O atendimento é diferenciado!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos R.",
    role: "Pai da Sofia, 7 anos",
    text: "Minha filha é autista e sempre tivemos dificuldade em encontrar profissionais preparados. Na VS Odontologia, ela se sentiu acolhida desde a primeira consulta.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana L.",
    role: "Mãe do Lucas, 4 anos",
    text: "O consultório é lindo e a equipe muito atenciosa. As orientações de higiene bucal foram super úteis e o Lucas aprendeu brincando.",
    rating: 5
  }
];

export default function Testimonials() {
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
          <p className="text-xs text-cinza-azulado/70 mt-4 italic">
            * Depoimentos demonstrativos. Substitua por relatos reais autorizados antes da publicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-azul-claro/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-dourado-claro/50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dourado-suave text-dourado-suave" />
                ))}
              </div>
              
              <p className="text-cinza-azulado leading-relaxed mb-6 italic">
               &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="border-t border-azul-claro pt-4">
                <p className="font-display font-semibold text-azul-profundo">{testimonial.name}</p>
                <p className="text-sm text-cinza-azulado">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}