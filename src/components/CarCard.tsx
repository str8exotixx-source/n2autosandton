import { Gauge, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CarCardProps {
  image: string;
  name: string;
  year: number;
  price: string;
  mileage: string;
  transmission: string;
  featured?: boolean;
  slug: string;
}

const CarCard = ({ image, name, year, price, mileage, transmission, featured, slug }: CarCardProps) => {
  return (
    <Link to={`/car/${slug}`}>
      <Card 
        className="group overflow-hidden card-luxury border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground">{year}</p>
            <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">{name}</h3>
          </div>
        </div>
        
        <p className="text-2xl font-bold text-accent mb-4">{price}</p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="h-3.5 w-3.5" />
            <span>{transmission}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full" size="sm">
          View Details
        </Button>
      </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
