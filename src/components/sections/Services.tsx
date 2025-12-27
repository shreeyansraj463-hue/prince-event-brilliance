import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Cake, Building2, PartyPopper, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Complete wedding catering and event management with exquisite setups, gourmet cuisine, and flawless execution for your special day.',
    features: ['Customized Menus', 'Elegant Décor', 'Full Event Planning'],
  },
  {
    icon: Cake,
    title: 'Birthdays',
    description: 'Customized birthday party arrangements from intimate celebrations to grand milestone events, tailored to your preferences.',
    features: ['Theme Parties', 'Cake & Catering', 'Entertainment'],
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Professional conferences, seminars, and formal gatherings executed with precision and sophistication.',
    features: ['Conference Setup', 'Business Catering', 'AV Equipment'],
  },
  {
    icon: PartyPopper,
    title: 'Celebrations',
    description: 'All types of social events including anniversaries, festivals, and community gatherings with memorable experiences.',
    features: ['Cultural Events', 'Festival Catering', 'Custom Themes'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_74%_53%/0.1)]">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafting Perfect Events for{' '}
            <span className="text-primary">Every Occasion</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to grand celebrations, our comprehensive services ensure 
            every detail is handled with care and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
