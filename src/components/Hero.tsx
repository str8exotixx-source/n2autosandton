import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import SearchFilter from './SearchFilter';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left">
            <p className="text-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Welcome to N2 Auto Sandton
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 animate-fade-up opacity-0 leading-tight" style={{ animationDelay: '0.4s' }}>
              Ultimate Experience,<br />
              <span className="text-foreground">Absolute Trust</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
              Discover your dream car from our exclusive collection of premium new and pre-owned exotic vehicles in Sandton
            </p>
          </div>

          {/* Right Side - Search Filter */}
          <div className="flex justify-center lg:justify-end animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <SearchFilter />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#inventory" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
