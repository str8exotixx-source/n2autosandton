import CarCard from './CarCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cars } from '@/data/cars';

const Inventory = () => {
  return (
    <section id="inventory" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">Our Collection</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium and exotic vehicles. Each car is thoroughly inspected to meet our high standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="gap-2" asChild>
            <a 
              href="https://www.autotrader.co.za/dealer/n2-auto-sandton/138818" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Full Inventory on AutoTrader
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
