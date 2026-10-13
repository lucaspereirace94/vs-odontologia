import Image from 'next/image';
import { clinicConfig } from '@/config/clinic';

export default function AboutDentist() {
  const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na VS Odontologia.')}`;

  return (
    <section id="sobre" className="py-20 bg-azul-claro/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Imagem (Placeholder) */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-azul-profundo/10 border-4 border-white bg-azul-pastel/30 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-display text-xl font-semibold text-azul-profundo mb-2">Foto Profissional</p>
                <p className="text-sm text-cinza-azulado">
                  Substitua este bloco pela imagem:<br/>
                  <code className="bg-white/60 px-2 py-1 rounded mt-2 inline-block text-xs">public/images/dentista-perfil.webp</code>
                </p>
              </div>

               Quando tiver a imagem real, descomente o bloco abaixo e apague o placeholder acima:
              <Image
                src="/images/dentista-perfil.webp"
                alt={`Dra. ${clinicConfig.professional.name}, Odontopediatra`}
                fill
                className="object-cover"
              />
              
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dourado-suave/20 rounded-full -z-10" />
          </div>

          {/* Coluna de Texto */}
          <div className="lg:col-span-3 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-white text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel">
              Conheça a Profissional
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo">
              {clinicConfig.professional.name}
            </h2>
            <p className="text-dourado-suave font-semibold text-lg">
              {clinicConfig.professional.title} | {clinicConfig.professional.cro}
            </p>
            
            <div className="space-y-4 text-cinza-azulado leading-relaxed">
              <p>
                Com uma trajetória dedicada à saúde bucal infantil, a Dra. Valessa Sabino acredita que o consultório odontológico deve ser um espaço de construção de confiança, e não de medo. Sua abordagem une conhecimento técnico atualizado a uma profunda sensibilidade humana.
              </p>
              <p>
                Especializada em criar vínculos positivos com seus pequenos pacientes, ela entende que cada criança possui um ritmo único. Seu compromisso é oferecer um atendimento que respeita a individualidade, especialmente no cuidado com crianças que demandam uma abordagem mais sensível, como no espectro autista.
              </p>
              <p className="text-sm italic bg-azul-claro/40 p-4 rounded-lg border-l-4 border-dourado-suave">
                <strong>Nota para edição:</strong> Este texto é um placeholder profissional. Substitua pelos dados reais de formação acadêmica, especializações e filosofia de atendimento da profissional.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Agendar uma consulta
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}