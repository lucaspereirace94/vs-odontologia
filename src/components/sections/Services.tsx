import { Stethoscope, ShieldCheck, Sparkles, ClipboardList, HeartPulse, Brain, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

// Mapeamento inteligente de ícones baseado no nome do serviço
const getIcon = (serviceName: string) => {
  const name = serviceName.toLowerCase();
  if (name.includes('primeira consulta')) return Stethoscope;
  if (name.includes('prevenção')) return ShieldCheck;
  if (name.includes('higiene')) return Sparkles;
  if (name.includes('cáries')) return ClipboardList;
  if (name.includes('ansiedade') || name.includes('medo')) return HeartPulse;
  if (name.includes('tea')) return Brain;
  return CheckCircle2; // Fallback
};

export default function Services() {
  return (
    <section id="especialidades" className="py-20 bg-azul-claro/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Cuidado completo para o sorriso do seu filho
          </h2>
          <p className="text-cinza-azulado text-lg">
            Oferecemos uma gama de procedimentos odontopediátricos, sempre com foco na prevenção e no conforto da criança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicConfig.services.map((service, index) => {
            const Icon = getIcon(service);
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-azul-claro/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-dourado-claro/30 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-azul-profundo" />
                </div>
                <h3 className="font-display text-lg font-semibold text-azul-profundo mb-2">
                  {service}
                </h3>
                <p className="text-cinza-azulado text-sm leading-relaxed">
                  Procedimento realizado com técnicas modernas e materiais de alta qualidade, priorizando sempre o bem-estar do paciente.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}