import { Shield, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every vehicle undergoes rigorous inspection before joining our collection',
  },
  {
    icon: Award,
    title: 'Premium Selection',
    description: 'Curated collection of exotic and luxury vehicles from top manufacturers',
  },
  {
    icon: Clock,
    title: 'Hassle-Free Process',
    description: 'Streamlined buying experience with transparent pricing and paperwork',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Knowledgeable staff passionate about helping you find your dream car',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">About Us</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Exotic Car Dealer in Sandton
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              N2 Auto Sandton is your premier destination for luxury and exotic vehicles in the heart of Sandton. 
              We specialize in sourcing and selling the finest new and pre-owned vehicles, from high-performance 
              sports cars to elegant luxury sedans.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence extends beyond just selling cars. We build lasting relationships with 
              our clients, ensuring that every interaction is personalized and every vehicle we sell meets our 
              exacting standards.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl font-serif font-bold text-accent">23+</p>
                <p className="text-sm text-muted-foreground mt-1">Vehicles Available</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-background border border-border">
                <p className="text-3xl font-serif font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Customer Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-lg card-luxury border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
