import car1 from '@/assets/car1.jpeg';
import car2 from '@/assets/car2.jpeg';
import car3 from '@/assets/car3.jpeg';
import car4 from '@/assets/car4.jpeg';
import car5 from '@/assets/car5.jpeg';
import car6 from '@/assets/car6.jpeg';
import car7 from '@/assets/car7.jpeg';
import car8 from '@/assets/car8.jpeg';

export interface Car {
  id: number;
  slug: string;
  image: string;
  name: string;
  year: number;
  price: string;
  priceNumeric: number;
  mileage: string;
  mileageNumeric: number;
  transmission: string;
  fuelType: string;
  featured: boolean;
  bodyType: string;
  engine: string;
  power: string;
  color: string;
  interiorColor: string;
  doors: number;
  seats: number;
  description: string;
}

export const cars: Car[] = [
  {
    id: 1,
    slug: 'mercedes-benz-sl65-amg-2008',
    image: car1,
    name: 'Mercedes-Benz SL65 AMG',
    year: 2008,
    price: 'R1,199,995',
    priceNumeric: 1199995,
    mileage: '88,000 km',
    mileageNumeric: 88000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    featured: true,
    bodyType: 'Convertible',
    engine: '6.0L V12 Bi-Turbo',
    power: '450 kW',
    color: 'Silver',
    interiorColor: 'Black Leather',
    doors: 2,
    seats: 2,
    description: 'Experience the pinnacle of Mercedes-AMG engineering with this stunning SL65 AMG. Featuring a hand-built 6.0L V12 Bi-Turbo engine producing an impressive 450 kW, this grand tourer delivers breathtaking performance with uncompromising luxury. The retractable hardtop offers the best of both worlds - coupe comfort and open-air exhilaration.',
  },
  {
    id: 2,
    slug: 'mercedes-benz-a200-hatch-amg-line-2019',
    image: car2,
    name: 'Mercedes-Benz A200 Hatch AMG Line',
    year: 2019,
    price: 'R399,995',
    priceNumeric: 399995,
    mileage: '95,000 km',
    mileageNumeric: 95000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    featured: false,
    bodyType: 'Hatchback',
    engine: '1.3L Turbo',
    power: '120 kW',
    color: 'Black',
    interiorColor: 'Black/Red Leather',
    doors: 5,
    seats: 5,
    description: 'The Mercedes-Benz A200 AMG Line combines sporty aesthetics with everyday practicality. This premium hatchback features the striking AMG styling package, advanced MBUX infotainment system, and a refined turbocharged engine. Perfect for those who demand style and sophistication in a compact package.',
  },
  {
    id: 3,
    slug: 'mahindra-pik-up-karoo-dawn-2024',
    image: car3,
    name: 'Mahindra Pik Up 2.2CRDe Double Cab 4x4 S11 Karoo Dawn',
    year: 2024,
    price: 'R529,995',
    priceNumeric: 529995,
    mileage: '38,000 km',
    mileageNumeric: 38000,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    featured: true,
    bodyType: 'Bakkie',
    engine: '2.2L CRDe Diesel',
    power: '103 kW',
    color: 'Karoo Dawn',
    interiorColor: 'Black Cloth',
    doors: 4,
    seats: 5,
    description: 'The Mahindra Pik Up S11 Karoo Dawn edition offers exceptional value in the double cab 4x4 segment. With its robust 2.2L diesel engine and permanent four-wheel drive, this bakkie is ready for any adventure. Features include a modern interior, comprehensive safety systems, and impressive payload capacity.',
  },
  {
    id: 4,
    slug: 'mercedes-benz-glc220d-2018',
    image: car4,
    name: 'Mercedes-Benz GLC220d',
    year: 2018,
    price: 'R529,995',
    priceNumeric: 529995,
    mileage: '98,000 km',
    mileageNumeric: 98000,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    featured: false,
    bodyType: 'SUV',
    engine: '2.1L Diesel',
    power: '125 kW',
    color: 'White',
    interiorColor: 'Black Leather',
    doors: 5,
    seats: 5,
    description: 'The Mercedes-Benz GLC220d represents the perfect balance of luxury SUV refinement and efficient diesel performance. This sophisticated crossover features a premium interior, advanced driver assistance systems, and the renowned Mercedes-Benz build quality. Ideal for families seeking comfort and practicality.',
  },
  {
    id: 5,
    slug: 'porsche-panamera-diesel-2013',
    image: car5,
    name: 'Porsche Panamera Diesel',
    year: 2013,
    price: 'R399,990',
    priceNumeric: 399990,
    mileage: '132,000 km',
    mileageNumeric: 132000,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    featured: true,
    bodyType: 'Sedan',
    engine: '3.0L V6 Diesel',
    power: '184 kW',
    color: 'Grey',
    interiorColor: 'Cream Leather',
    doors: 4,
    seats: 4,
    description: 'Experience Porsche sports car DNA in a luxurious four-door package with the Panamera Diesel. The efficient 3.0L V6 diesel engine delivers impressive torque while maintaining reasonable fuel economy. This executive sedan offers exceptional driving dynamics, a beautifully crafted interior, and unmistakable Porsche presence.',
  },
  {
    id: 6,
    slug: 'bmw-760li-2014',
    image: car6,
    name: 'BMW 760Li',
    year: 2014,
    price: 'R549,995',
    priceNumeric: 549995,
    mileage: '102,000 km',
    mileageNumeric: 102000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    featured: false,
    bodyType: 'Sedan',
    engine: '6.0L V12 Twin-Turbo',
    power: '400 kW',
    color: 'Black',
    interiorColor: 'Champagne Leather',
    doors: 4,
    seats: 5,
    description: 'The BMW 760Li is the ultimate expression of BMW luxury and performance. Powered by a magnificent 6.0L V12 twin-turbo engine, this flagship sedan offers effortless power delivery and supreme refinement. The extended wheelbase provides exceptional rear passenger comfort, making it perfect for those who appreciate being chauffeured in style.',
  },
  {
    id: 7,
    slug: 'volkswagen-golf-14tsi-2016',
    image: car7,
    name: 'Volkswagen Golf 1.4TSI',
    year: 2016,
    price: 'R249,995',
    priceNumeric: 249995,
    mileage: '118,000 km',
    mileageNumeric: 118000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    featured: false,
    bodyType: 'Hatchback',
    engine: '1.4L TSI Turbo',
    power: '92 kW',
    color: 'White',
    interiorColor: 'Black Cloth',
    doors: 5,
    seats: 5,
    description: 'The Volkswagen Golf 1.4 TSI is a benchmark in the compact hatchback segment. Known for its refined driving dynamics, premium build quality, and efficient turbocharged engine, the Golf offers a sophisticated driving experience. This example comes well-equipped with modern features and excellent fuel economy.',
  },
  {
    id: 8,
    slug: 'mercedes-benz-sl65-amg-2008-2',
    image: car8,
    name: 'Mercedes-Benz SL65 AMG',
    year: 2008,
    price: 'R1,199,995',
    priceNumeric: 1199995,
    mileage: '88,000 km',
    mileageNumeric: 88000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    featured: true,
    bodyType: 'Convertible',
    engine: '6.0L V12 Bi-Turbo',
    power: '450 kW',
    color: 'Black',
    interiorColor: 'Red Leather',
    doors: 2,
    seats: 2,
    description: 'Another exceptional example of the legendary Mercedes-Benz SL65 AMG. This hand-built masterpiece combines devastating V12 performance with refined grand touring capability. The retractable hardtop, premium interior appointments, and AMG-tuned suspension create an unmatched driving experience.',
  },
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find((car) => car.slug === slug);
};

export const getCarById = (id: number): Car | undefined => {
  return cars.find((car) => car.id === id);
};
