import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Create{' '}
            <span className="text-primary">Unforgettable Moments?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Let Prince Tent & Events transform your vision into reality. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => window.open('https://wa.me/919199138929', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Let's Create Magic
            </Button>
            <Button
              variant="gold-outline"
              size="lg"
              onClick={() => window.location.href = 'tel:9199138929'}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Prince Tent & Events
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Complete Catering and Event Management Solutions. Making every celebration memorable since 2016.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-base font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-base font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-sm text-muted-foreground">Wedding Catering</span></li>
                <li><span className="text-sm text-muted-foreground">Birthday Parties</span></li>
                <li><span className="text-sm text-muted-foreground">Corporate Events</span></li>
                <li><span className="text-sm text-muted-foreground">Tent & Decoration</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-base font-bold text-foreground mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <a href="tel:9199138929" className="hover:text-primary transition-colors">9199138929</a>
                    <span className="mx-1">/</span>
                    <a href="tel:9128576260" className="hover:text-primary transition-colors">9128576260</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <a href="mailto:iamprinceraj25@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    iamprinceraj25@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Lakhan Sweet Corner, Nagar Palika Chowk, Saharsa, Bihar – 852201
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Prince Tent & Events. All rights reserved.</p>
            <p>Owner: <span className="text-foreground">Prince Raj</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
