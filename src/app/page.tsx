import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Accommodation from '@/components/sections/Accommodation';
import Services from '@/components/sections/Services';
import TeaSection from '@/components/sections/TeaSection';
import AboutDentist from '@/components/sections/AboutDentist';
import Gallery from '@/components/sections/Gallery';
import Differentials from '@/components/sections/Differentials';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Accommodation />
        <Services />
        <TeaSection />
        <AboutDentist />
        <Gallery />
        <Differentials />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}