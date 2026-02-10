import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface TestDriveFormProps {
  carName: string;
}

const TestDriveForm = ({ carName }: TestDriveFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Test Drive Requested!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="bg-card border-border/50 max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Test Drive Request Submitted!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in the {carName}. Our team will contact you within 24 hours to confirm your test drive appointment.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Book Another Test Drive
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="bg-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            Book Your Test Drive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input id="phone" type="tel" placeholder="081 234 5678" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <Input id="date" type="date" required />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Time
                </label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                Additional Notes (Optional)
              </label>
              <Textarea 
                id="notes" 
                placeholder="Any specific questions or requirements..."
                rows={3}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Test Drive'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Vehicle: {carName}
            </h3>
            <p className="text-muted-foreground mb-4">
              Experience this exceptional vehicle firsthand. Our test drives typically last 30-45 minutes and include a thorough walkthrough of all features.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-foreground">30-45 minute test drive</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="h-4 w-4 text-primary" />
                <span className="text-foreground">Expert walkthrough included</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50">
          <CardContent className="p-6">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Prefer to call?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Speak directly with our sales team to book your test drive.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:0818880888" 
                className="flex items-center gap-3 text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                081 888 0888
              </a>
              <a 
                href="mailto:naazhim@n2auto.co.za" 
                className="flex items-center gap-3 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                naazhim@n2auto.co.za
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestDriveForm;
