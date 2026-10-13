import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

export const metadata = {
  title: `Política de Privacidade | ${clinicConfig.name}`,
  description: 'Política de privacidade e tratamento de dados da VS Odontologia.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-off-white">
      <div className="container-custom max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-azul-medio hover:text-azul-profundo font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </Link>

        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-azul-claro/50">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-6">Política de Privacidade</h1>
          <p className="text-cinza-azulado mb-8">Última atualização: Outubro de 2026</p>

          <div className="space-y-6 text-cinza-azulado leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">1. Introdução</h2>
              <p>A {clinicConfig.name}, inscrita no CRO sob o registro {clinicConfig.professional.cro}, está comprometida com a proteção da privacidade e dos dados pessoais de seus pacientes, responsáveis e visitantes do site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">2. Dados Coletados</h2>
              <p>No formulário de agendamento do site, coletamos apenas os dados estritamente necessários para o contato inicial: nome do responsável, telefone/WhatsApp, nome e idade da criança (opcionais), serviço desejado e preferências de horário. <strong>Não coletamos dados clínicos, laudos ou informações sensíveis de saúde através deste site.</strong></p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">3. Uso dos Dados</h2>
              <p>Os dados fornecidos são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Retornar o contato e confirmar o agendamento da consulta.</li>
                <li>Enviar lembretes de consulta (via WhatsApp, com prévia autorização).</li>
                <li>Cumprir obrigações legais e regulatórias do Conselho de Odontologia.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">4. Compartilhamento de Dados</h2>
              <p>Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins de marketing. O envio das informações do formulário ocorre diretamente para o WhatsApp comercial da clínica.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">5. Seus Direitos (LGPD)</h2>
              <p>A qualquer momento, você pode solicitar o acesso, correção, anonimização ou exclusão dos seus dados pessoais entrando em contato conosco através do e-mail {clinicConfig.contact.email} ou pelo WhatsApp {clinicConfig.contact.whatsappDisplay}.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-azul-profundo mb-3">6. Contato</h2>
              <p>Em caso de dúvidas sobre esta política, entre em contato:</p>
              <p className="mt-2"><strong>{clinicConfig.name}</strong><br />{clinicConfig.location.fullAddress}<br />E-mail: {clinicConfig.contact.email}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}