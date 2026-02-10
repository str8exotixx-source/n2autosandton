import { useState, useMemo } from 'react';
import { Calculator, Car, Percent, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FinanceCalculatorProps {
  initialPrice?: number;
}

const FinanceCalculator = ({ initialPrice = 500000 }: FinanceCalculatorProps) => {
  const [vehiclePrice, setVehiclePrice] = useState(initialPrice);
  const [deposit, setDeposit] = useState(Math.round(initialPrice * 0.1));
  const [interestRate, setInterestRate] = useState(11.5);
  const [loanTerm, setLoanTerm] = useState(60);

  const calculations = useMemo(() => {
    const principal = vehiclePrice - deposit;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    };
  }, [vehiclePrice, deposit, interestRate, loanTerm]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Inputs */}
      <Card className="bg-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Calculator className="h-5 w-5 text-primary" />
            Calculate Your Monthly Payment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vehicle Price */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                Vehicle Price
              </Label>
              <span className="text-primary font-semibold">{formatCurrency(vehiclePrice)}</span>
            </div>
            <Slider
              value={[vehiclePrice]}
              onValueChange={(value) => setVehiclePrice(value[0])}
              min={100000}
              max={2000000}
              step={10000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>R100,000</span>
              <span>R2,000,000</span>
            </div>
          </div>

          {/* Deposit */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Deposit Amount</Label>
              <span className="text-primary font-semibold">{formatCurrency(deposit)}</span>
            </div>
            <Slider
              value={[deposit]}
              onValueChange={(value) => setDeposit(value[0])}
              min={0}
              max={vehiclePrice * 0.5}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>R0</span>
              <span>{formatCurrency(vehiclePrice * 0.5)}</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-muted-foreground" />
                Interest Rate (p.a.)
              </Label>
              <span className="text-primary font-semibold">{interestRate.toFixed(1)}%</span>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={7}
              max={20}
              step={0.25}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>7%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                Loan Term
              </Label>
              <span className="text-primary font-semibold">{loanTerm} months</span>
            </div>
            <Slider
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
              min={12}
              max={84}
              step={6}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>12 months</span>
              <span>84 months</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="bg-gradient-to-br from-card to-card/80 border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground">Your Estimated Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Monthly Payment */}
          <div className="text-center p-6 bg-background/50 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Monthly Payment</p>
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {formatCurrency(calculations.monthlyPayment)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">per month</p>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-muted-foreground">Loan Amount</span>
              <span className="font-semibold text-foreground">{formatCurrency(vehiclePrice - deposit)}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="font-semibold text-foreground">{formatCurrency(calculations.totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">Total Amount Payable</span>
              <span className="font-bold text-primary text-lg">{formatCurrency(calculations.totalPayment)}</span>
            </div>
          </div>

          {/* CTA */}
          <Button className="w-full" size="lg" asChild>
            <a href="#contact">Apply for Finance</a>
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            *This is an estimate only. Actual rates may vary based on credit profile.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceCalculator;
