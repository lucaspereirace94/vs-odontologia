'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qual é a idade ideal para a primeira consulta?",
    answer: "Recomendamos que a primeira visita ocorra por volta dos 12 meses de idade, ou até 6 meses após o nascimento do primeiro dente. Essa consulta inicial é focada em orientação preventiva e adaptação da criança ao ambiente odontológico."
  },
  {
    question: "Como preparar a criança para a consulta odontológica?",
    answer: "Evite usar o dentista como ameaça ou punição. Converse de forma positiva sobre a visita, explique que o dentista vai ajudar a deixar os dentes fortes e saudáveis. Leia livros infantis sobre o tema e, se possível, traga a criança para uma visita de familiarização antes da consulta."
  },
  {
    question: "Como funciona o atendimento para crianças com TEA?",
    answer: "Nosso atendimento é planejado individualmente. Antes da consulta, conversamos com os responsáveis para entender as necessidades específicas da criança. Adaptamos a comunicação, o ambiente (luz, som, toque) e o tempo de atendimento, garantindo uma experiência segura e respeitosa."
  },
  {
    question: "Os responsáveis podem acompanhar a consulta?",
    answer: "Sim, incentivamos a presença dos pais ou responsáveis durante a consulta, especialmente nas primeiras visitas. Isso ajuda a construir confiança e segurança para a criança."
  },
  {
    question: "Quais serviços são oferecidos?",
    answer: "Oferecemos primeira consulta odontopediátrica, prevenção e acompanhamento, orientação de higiene bucal, avaliação e tratamento de cáries, restaurações, acompanhamento do desenvolvimento bucal e atendimento especializado para crianças com ansiedade, medo do dentista ou TEA."
  },
  {
    question: "Como funciona o agendamento?",
    answer: "Você pode agendar diretamente pelo WhatsApp, preenchendo nosso formulário de contato ou ligando para o consultório. Respondemos em até 2 horas úteis para confirmar data e horário."
  },
  {
    question: "Onde fica a clínica?",
    answer: "Estamos localizados na Rua Cesário Lange, 696 – Messejana, Fortaleza – CE, CEP 60841-220. Temos facilidade de acesso e estacionamento nas proximidades."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos pagamento em dinheiro, Pix, cartão de débito e crédito. Para informações sobre convênios específicos, entre em contato conosco pelo WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-azul-claro/60 text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-cinza-azulado text-lg">
            Esclarecemos as principais dúvidas dos pais e responsáveis.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-azul-claro rounded-xl overflow-hidden bg-off-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-azul-claro/30 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-display font-semibold text-azul-profundo pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-azul-medio flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-cinza-azulado leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}