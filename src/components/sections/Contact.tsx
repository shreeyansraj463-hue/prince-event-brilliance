import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['9199138929', '9128576260'],
    action: 'tel:9199138929',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['iamprinceraj25@gmail.com'],
    action: 'mailto:iamprinceraj25@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Lakhan Sweet Corner', 'Nagar Palika Chowk, Saharsa', 'Bihar – 852201'],
    action: 'https://maps.google.com/?q=Nagar+Palika+Chowk+Saharsa+Bihar',
  },
  {
    icon: Clock,
    title: 'Available',
    details: ['24/7 WhatsApp Support', 'Quick Response Guaranteed'],
    action: null,
  },
];

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in your services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919199138929?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast.success('Redirecting to WhatsApp...', {
      description: 'Complete your inquiry on WhatsApp for instant response.',
    });

    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create{' '}
            <span className="text-primary">Magic</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to plan your perfect event? Contact us today and let's bring 
            your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  {info.action ? (
                    <a href={info.action} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </a>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    WhatsApp – Always Available
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get instant response for your queries. We're just a message away!
                  </p>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => window.open('https://wa.me/919199138929', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Request a Quote
                </h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Prince Raj"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="9199138929"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Event Type
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Celebration">Other Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry via WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you'll be redirected to WhatsApp for instant communication.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
