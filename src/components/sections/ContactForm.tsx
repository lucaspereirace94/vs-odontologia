'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

interface FormData {
  responsibleName: string;
  phone: string;
  childName: string;
  childAge: string;
  service: string;
  preferredDay: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// Função para formatar o telefone com máscara (XX) XXXXX-XXXX
const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, ''); // Remove tudo que não é número
  
  if (numbers.length <= 2) {
    return numbers.replace(/^(\d{0,2})/, '($1');
  } else if (numbers.length <= 7) {
    return numbers.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    return numbers.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').substring(0, 15);
  }
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    responsibleName: '',
    phone: '',
    childName: '',
    childAge: '',
    service: '',
    preferredDay: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.responsibleName.trim()) {
      newErrors.responsibleName = 'Nome do responsável é obrigatório';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido. Use o formato: (XX) XXXXX-XXXX';
    }

    if (!formData.service) {
      newErrors.service = 'Selecione um serviço';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `*Nova Solicitação de Agendamento - VS Odontologia*

*Nome do Responsável:* ${formData.responsibleName}
*Telefone:* ${formData.phone}
*Nome da Criança:* ${formData.childName || 'Não informado'}
*Idade da Criança:* ${formData.childAge || 'Não informado'}
*Serviço Desejado:* ${formData.service}
*Preferência de Dia:* ${formData.preferredDay || 'Não informado'}
*Preferência de Horário:* ${formData.preferredTime || 'Não informado'}

*Mensagem Adicional:*
${formData.message || 'Nenhuma'}

---
_Enviado pelo site vsodontologia.com.br_`;

    const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abre o WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    
    // Reset do formulário após 5 segundos
    setTimeout(() => {
      setFormData({
        responsibleName: '',
        phone: '',
        childName: '',
        childAge: '',
        service: '',
        preferredDay: '',
        preferredTime: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Aplica a máscara se o campo for o telefone
    let formattedValue = value;
    if (name === 'phone') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-azul-claro/30">
        <div className="container-custom max-w-2xl">
          <div className="bg-white p-12 rounded-3xl shadow-lg text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold text-azul-profundo mb-4">
              Solicitação Enviada!
            </h3>
            <p className="text-cinza-azulado leading-relaxed">
              Sua solicitação foi encaminhada para nosso WhatsApp. Em breve entraremos em contato para confirmar o agendamento.
            </p>
            <p className="text-sm text-cinza-azulado/70 mt-4">
              <strong>Atenção:</strong> O agendamento só será confirmado após retorno da clínica.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-azul-claro/30">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-azul-profundo text-sm font-semibold rounded-full border border-azul-pastel mb-4">
            Agendamento
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-azul-profundo mb-4">
            Solicite seu agendamento
          </h2>
          <p className="text-cinza-azulado text-lg">
            Preencha o formulário abaixo e enviaremos sua solicitação diretamente para nosso WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg space-y-6">
          {/* Nome do Responsável */}
          <div>
            <label htmlFor="responsibleName" className="block text-sm font-semibold text-azul-profundo mb-2">
              Nome do Responsável *
            </label>
            <input
              type="text"
              id="responsibleName"
              name="responsibleName"
              value={formData.responsibleName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.responsibleName ? 'border-red-500' : 'border-azul-claro'
              } focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors`}
              placeholder="Seu nome completo"
            />
            {errors.responsibleName && (
              <p className="text-red-500 text-sm mt-1">{errors.responsibleName}</p>
            )}
          </div>

          {/* Telefone com Máscara */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-azul-profundo mb-2">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={15} // Limita ao tamanho máximo da máscara: (XX) XXXXX-XXXX
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-azul-claro'
              } focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors`}
              placeholder="(XX) XXXXX-XXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Nome da Criança e Idade */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="childName" className="block text-sm font-semibold text-azul-profundo mb-2">
                Nome da Criança (opcional)
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors"
                placeholder="Nome da criança"
              />
            </div>

            <div>
              <label htmlFor="childAge" className="block text-sm font-semibold text-azul-profundo mb-2">
                Idade da Criança (opcional)
              </label>
              <input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors"
                placeholder="Ex: 5 anos"
              />
            </div>
          </div>

          {/* Serviço Desejado */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-azul-profundo mb-2">
              Serviço Desejado *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.service ? 'border-red-500' : 'border-azul-claro'
              } focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors bg-white`}
            >
              <option value="">Selecione um serviço</option>
              {clinicConfig.services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          {/* Preferência de Dia e Horário */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="preferredDay" className="block text-sm font-semibold text-azul-profundo mb-2">
                Preferência de Dia (opcional)
              </label>
              <input
                type="text"
                id="preferredDay"
                name="preferredDay"
                value={formData.preferredDay}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors"
                placeholder="Ex: Terça-feira"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-semibold text-azul-profundo mb-2">
                Preferência de Horário (opcional)
              </label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors"
                placeholder="Ex: Manhã"
              />
            </div>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-azul-profundo mb-2">
              Mensagem Adicional (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-azul-claro focus:outline-none focus:ring-2 focus:ring-azul-medio transition-colors resize-none"
              placeholder="Alguma informação adicional que gostaria de compartilhar?"
            />
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            className="btn-primary w-full text-base py-4"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar solicitação de agendamento
          </button>

          <p className="text-xs text-cinza-azulado/70 text-center">
            Ao enviar, você será redirecionado para o WhatsApp da clínica com os dados preenchidos.
          </p>
        </form>
      </div>
    </section>
  );
}