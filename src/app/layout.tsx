import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { clinicConfig } from "@/config/clinic";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: `${clinicConfig.professional.name} | ${clinicConfig.name} - Odontopediatria em Fortaleza`,
  description: `Atendimento odontopediátrico humanizado e especializado em crianças com TEA em Messejana, Fortaleza. Cuidado, acolhimento e respeito ao tempo de cada criança com a ${clinicConfig.professional.name}.`,
  keywords: ["odontopediatra fortaleza", "dentista infantil messejana", "atendimento TEA fortaleza", "VS Odontologia", clinicConfig.professional.name],
  authors: [{ name: clinicConfig.professional.name }],
  openGraph: {
    title: `${clinicConfig.name} | Odontopediatria Humanizada`,
    description: `Cuidar do sorriso infantil começa com acolhimento. Atendimento especializado em Fortaleza - CE.`,
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": clinicConfig.name,
  "image": "https://vsodontologia.com.br/brand/logo.svg",
  "telephone": clinicConfig.contact.whatsappDisplay,
  "email": clinicConfig.contact.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": clinicConfig.location.address,
    "addressLocality": clinicConfig.location.city,
    "addressRegion": clinicConfig.location.state,
    "postalCode": clinicConfig.location.zipCode,
    "addressCountry": "BR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-[var(--color-azul-profundo)] bg-[var(--color-off-white)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}