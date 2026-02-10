import { Instagram, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="N2 Auto Sandton" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md">
              Your premier destination for luxury and exotic vehicles in Sandton. 
              Discover exceptional cars at exceptional value.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.instagram.com/n2autosandton/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-muted-foreground hover:text-accent transition-colors">Home</a>
              <a href="#inventory" className="block text-muted-foreground hover:text-accent transition-colors">Inventory</a>
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">About Us</a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">Contact</a>
              <a 
                href="https://www.autotrader.co.za/dealer/n2-auto-sandton/138818"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                AutoTrader Listings
              </a>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>49 Andries St, Wynberg</p>
                  <p>Sandton, 2090</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:0818880888" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  081 888 0888
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} N2 Auto Sandton. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
