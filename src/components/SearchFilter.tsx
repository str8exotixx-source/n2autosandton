import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2008'];
  const bodyTypes = ['Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Bakkie'];
  const priceRanges = [
    'Under R300,000',
    'R300,000 - R500,000',
    'R500,000 - R800,000',
    'R800,000 - R1,000,000',
    'Above R1,000,000',
  ];
  const mileageRanges = [
    '0 - 50,000 km',
    '50,001 - 100,000 km',
    '100,001 - 150,000 km',
    'Above 150,000 km',
  ];

  const handleSearch = () => {
    // Scroll to inventory section
    document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-border/50 w-full max-w-md">
      <div className="mb-4">
        <h3 className="font-serif text-xl font-semibold text-primary mb-1">
          Find your Perfect Pre-owned Car
        </h3>
        <p className="text-muted-foreground text-sm">
          Discover Your Next Ride in Our Quality Pre-Owned Inventory
        </p>
      </div>

      {/* Quick Search */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Quick Search</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search our available catalog"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border/50"
          />
        </div>
      </div>

      {/* Search Filters */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Search Filter</p>
        <div className="grid grid-cols-2 gap-3">
          <Select>
            <SelectTrigger className="bg-card border-border/50">
              <SelectValue placeholder="Select a Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-card border-border/50">
              <SelectValue placeholder="Body Type" />
            </SelectTrigger>
            <SelectContent>
              {bodyTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-card border-border/50">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-card border-border/50">
              <SelectValue placeholder="Mileage Range" />
            </SelectTrigger>
            <SelectContent>
              {mileageRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search Button */}
      <Button onClick={handleSearch} className="w-full" size="lg">
        Search 8 Cars
      </Button>
    </div>
  );
};

export default SearchFilter;
