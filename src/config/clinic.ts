export const clinicConfig = {
  name: "VS Odontologia",
  professional: {
    name: "Dra. Valessa Sabino",
    cro: "CRO-CE 16284",
    title: "Odontopediatra",
  },
  contact: {
    // Número formatado para API do WhatsApp (55 + DDD + Número, sem espaços ou traços)
    whatsappNumber: "5585998297330",
    whatsappDisplay: "(85) 99829-7330",
    email: "valessa.sabino@vsodontologia.com.br",
  },
  location: {
    address: "Rua Cesário Lange, 696 – Messejana",
    city: "Fortaleza",
    state: "CE",
    zipCode: "60841-220",
    fullAddress: "Rua Cesário Lange, 696 – Messejana, Fortaleza – CE | CEP 60841-220",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Cesário+Lange,+696,+Messejana,+Fortaleza+-+CE",
  },
  hours: {
    weekdays: "Segunda a Sexta, das 08h às 18h",
    saturday: "Sábado, das 08h às 14h",
    sunday: "Domingo: Fechado",
  },
  // Valores padrão para MVP (podem ser ajustados conforme sua resposta pendente)
  services: [
    "Primeira consulta odontopediátrica",
    "Prevenção e acompanhamento",
    "Orientação de higiene bucal",
    "Avaliação e tratamento de cáries",
    "Atendimento de crianças com ansiedade ou medo do dentista",
    "Atendimento especializado para crianças com TEA",
  ],
  social: {
    instagram: "https://instagram.com/vsodontologia", // Ajustar quando tiver o link real
  },
};