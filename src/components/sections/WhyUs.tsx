import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Palette, Clock, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our seasoned professionals bring 8+ years of expertise to every event, ensuring flawless execution.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We maintain the highest standards in food, service, and presentation for an unforgettable experience.',
  },
  {
    icon: Palette,
    title: 'Customized Solutions',
    description: 'Every event is unique. We tailor our services to match your vision, theme, and requirements perfectly.',
  },
  {
    icon: Clock,
    title: 'Reliable Execution',
    description: 'Punctuality and reliability are our hallmarks. We deliver on time, every time, without compromise.',
  },
];

const highlights = [
  '500+ Successful Events',
  '98% Customer Satisfaction',
  'Comprehensive Event Solutions',
  'Local Expertise in Saharsa & Bihar',
];

export function WhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{' '}
              <span className="text-primary">Exceptional Events</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 8 years of experience in event management and catering, Prince Tent & Events 
              has become the premier choice for celebrations across Saharsa and surrounding districts.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="group p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(43_74%_53%/0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
