import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    title: "Fachada da Clínica",
    description: "Entrada acolhedora da VS Odontologia",
    placeholder: "public/images/fachada.webp",
    aspect: "aspect-[4/3]"
  },
  {
    id: 2,
    title: "Recepção",
    description: "Ambiente confortável para espera",
    placeholder: "public/images/recepcao.webp",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Consultório Odontológico",
    description: "Equipamentos modernos e higienizados",
    placeholder: "public/images/consultorio-01.webp",
    aspect: "aspect-[4/3]"
  },
  {
    id: 4,
    title: "Ambiente Infantil",
    description: "Espaço lúdico e acolhedor para crianças",
    placeholder: "public/images/ambiente-infantil.webp",
    aspect: "aspect-square"
  },
  {
    id: 5,
    title: "Detalhes da Decoração",
    description: "Cuidado em cada elemento",
    placeholder: "public/images/detalhes.webp",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    title: "Estrutura Completa",
    description: "Consultório preparado para atendimento humanizado",
    placeholder: "public/images/consultorio-02.webp",
    aspect: "aspect-square"
  }
];

export default function Gallery() {
  return (
    <section id="consultorio" className="py-20 bg-azul-claro/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel mb-4">
            Nosso Espaço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Conheça o consultório da VS Odontologia
          </h2>
          <p className="text-cinza-azulado text-lg">
            Um ambiente pensado para proporcionar conforto, segurança e uma experiência positiva para crianças e famílias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-azul-claro/50"
            >
              <div className={`relative ${image.aspect} bg-gradient-to-br from-azul-claro/40 to-azul-pastel/30 flex items-center justify-center`}>
                <div className="text-center p-6">
                  <p className="font-display text-lg font-semibold text-azul-profundo mb-2">{image.title}</p>
                  <p className="text-xs text-cinza-azulado">
                    Substitua por:<br/>
                    <code className="bg-white/60 px-2 py-1 rounded mt-1 inline-block">{image.placeholder}</code>
                  </p>
                </div>

                {/* Quando tiver a imagem real, descomente o bloco abaixo e apague o placeholder acima:
                <Image
                  src={image.placeholder.replace('public', '')}
                  alt={image.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                */}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-azul-profundo/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm">{image.title}</p>
                <p className="text-white/90 text-xs">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}