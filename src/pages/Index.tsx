import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Inventory from '@/components/Inventory';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Inventory />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
