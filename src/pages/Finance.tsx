import { CheckCircle, FileText, Clock, Shield, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceCalculator from '@/components/FinanceCalculator';

const financeFeatures = [
  {
    icon: CheckCircle,
    title: 'Quick Approval',
    description: 'Get pre-approved in minutes with our streamlined application process.',
  },
  {
    icon: FileText,
    title: 'Flexible Terms',
    description: 'Choose from 12 to 84-month loan terms to fit your budget.',
  },
  {
    icon: Clock,
    title: 'Same-Day Funding',
    description: 'Drive away in your new car the same day with fast funding options.',
  },
  {
    icon: Shield,
    title: 'Competitive Rates',
    description: 'Access to multiple lenders ensures you get the best possible rate.',
  },
];

const requirements = [
  'Valid South African ID document',
  'Proof of residence (not older than 3 months)',
  'Latest 3 months bank statements',
  'Latest payslip or proof of income',
  'Valid driver\'s license',
];

const Finance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </a>
              </Button>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">Finance Solutions</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Drive Your Dream Car <span className="text-primary">Today</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                We work with South Africa's leading financial institutions to offer you competitive rates and flexible payment options tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Finance Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {financeFeatures.map((feature) => (
                <Card key={feature.title} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Calculator */}
        <section id="calculator" className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">Payment Estimator</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Finance Calculator
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use our calculator to estimate your monthly payments. Adjust the sliders to see how different options affect your payment.
              </p>
            </div>
            <FinanceCalculator />
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">What You Need</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Documentation Required
                </h2>
                <p className="text-muted-foreground mb-8">
                  To speed up your finance application, please have the following documents ready:
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our finance team today and let us help you find the perfect financing solution for your dream car.
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full gap-2" asChild>
                      <a href="tel:0818880888">
                        <Phone className="h-4 w-4" />
                        Call 081 888 0888
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="mailto:info@n2autosandton.co.za">
                        Email Us
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-6">
                    Our finance specialists are available Monday to Saturday, 8am - 5pm
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What credit score do I need?</h3>
                  <p className="text-muted-foreground">We work with multiple lenders and can assist customers with varying credit profiles. Contact us to discuss your specific situation.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How long does the approval process take?</h3>
                  <p className="text-muted-foreground">Most applications are processed within 24-48 hours. In many cases, we can provide same-day approval for qualified applicants.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I finance a used vehicle?</h3>
                  <p className="text-muted-foreground">Yes! We offer competitive financing options for both new and pre-owned vehicles in our inventory.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Is a deposit required?</h3>
                  <p className="text-muted-foreground">While a deposit is not always required, having one can help reduce your monthly payment and potentially secure better interest rates.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Finance;
