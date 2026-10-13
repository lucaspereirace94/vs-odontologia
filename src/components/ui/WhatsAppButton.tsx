import { MessageCircle } from 'lucide-react';
import { clinicConfig } from '@/config/clinic';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na VS Odontologia.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}