import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream car? Visit our showroom or reach out to our team today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Our Showroom</h3>
                  <p className="text-muted-foreground">49 Andries St, Wynberg</p>
                  <p className="text-muted-foreground">Sandton, 2090</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:0818880888" className="text-accent hover:underline">081 888 0888</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sat: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <a 
                    href="mailto:naazhim@n2auto.co.za" 
                    className="text-accent hover:underline"
                  >
                    naazhim@n2auto.co.za
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Instagram className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Follow Us</h3>
                  <a 
                    href="https://www.instagram.com/n2autosandton/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    @n2autosandton
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="mt-10 rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1234567890123!2d28.0556789!3d-26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiUyAyOMKwMDMnMjAuNCJF!5e0!3m2!1sen!2sza!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="N2 Auto Sandton Location"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-8 rounded-lg card-luxury border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="081 234 5678" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  Vehicle of Interest
                </label>
                <Input id="interest" placeholder="e.g., BMW M3 CS" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about what you're looking for..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
