import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Gauge, Settings, Fuel, Car, Users, Palette, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FinanceCalculator from '@/components/FinanceCalculator';
import TestDriveForm from '@/components/TestDriveForm';
import { getCarBySlug } from '@/data/cars';

const CarDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const car = slug ? getCarBySlug(slug) : undefined;

  if (!car) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
            <p className="text-muted-foreground mb-8">The vehicle you're looking for doesn't exist or has been sold.</p>
            <Button asChild>
              <Link to="/#inventory">Browse Our Inventory</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const specs = [
    { icon: Calendar, label: 'Year', value: car.year.toString() },
    { icon: Gauge, label: 'Mileage', value: car.mileage },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Fuel, label: 'Fuel Type', value: car.fuelType },
    { icon: Car, label: 'Body Type', value: car.bodyType },
    { icon: Users, label: 'Seats', value: car.seats.toString() },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/#inventory" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Showroom
              </Link>
            </Button>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image Section */}
            <div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {car.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">{car.year} • {car.bodyType}</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {car.name}
              </h1>
              <p className="text-4xl font-bold text-primary mb-6">{car.price}</p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {car.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                    <spec.icon className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="text-sm font-medium text-foreground">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 gap-2" asChild>
                  <a href="tel:0818880888">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
                  <a href="https://wa.me/27818880888" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 32l6.826-2.192A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.318 22.59c-.388 1.094-1.938 2.002-3.168 2.266-.842.18-1.94.322-5.64-1.212-4.732-1.962-7.78-6.756-8.014-7.07-.226-.314-1.9-2.532-1.9-4.83s1.202-3.43 1.628-3.9c.35-.388.924-.574 1.476-.574.178 0 .338.01.482.018.426.018.64.044.92.712.35.838 1.2 2.924 1.306 3.138.106.214.214.5.072.788-.134.296-.25.428-.464.678-.214.25-.418.442-.632.712-.196.232-.416.482-.178.944.238.456 1.058 1.746 2.272 2.828 1.562 1.392 2.878 1.824 3.284 2.028.314.16.688.134.938-.134.316-.34.706-.902 1.104-1.456.282-.396.64-.446.986-.304.352.134 2.23 1.052 2.612 1.244.382.192.636.286.73.448.092.16.092.926-.296 2.02z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8 flex-wrap gap-0">
              <TabsTrigger 
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 sm:px-6 py-3 text-xs sm:text-sm"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="testdrive"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 sm:px-6 py-3 text-xs sm:text-sm"
              >
                Test Drive
              </TabsTrigger>
              <TabsTrigger 
                value="finance"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3 sm:px-6 py-3 text-xs sm:text-sm"
              >
                Finance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Performance</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Engine</span>
                        <span className="font-medium text-foreground">{car.engine}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Power Output</span>
                        <span className="font-medium text-foreground">{car.power}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Transmission</span>
                        <span className="font-medium text-foreground">{car.transmission}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Fuel Type</span>
                        <span className="font-medium text-foreground">{car.fuelType}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Features</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Body Type</span>
                        <span className="font-medium text-foreground">{car.bodyType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Doors</span>
                        <span className="font-medium text-foreground">{car.doors}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Seats</span>
                        <span className="font-medium text-foreground">{car.seats}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Exterior Color</span>
                        <span className="font-medium text-foreground">{car.color}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Interior</span>
                        <span className="font-medium text-foreground">{car.interiorColor}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="testdrive">
              <TestDriveForm carName={car.name} />
            </TabsContent>

            <TabsContent value="finance">
              <FinanceCalculator initialPrice={car.priceNumeric} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default CarDetail;
