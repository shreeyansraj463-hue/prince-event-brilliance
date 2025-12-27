import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'weddings', name: 'Weddings' },
  { id: 'decorations', name: 'Decorations' },
  { id: 'catering', name: 'Catering' },
  { id: 'corporate', name: 'Corporate' },
];

const portfolioItems = [
  {
    id: 1,
    category: 'weddings',
    title: 'Royal Wedding Reception',
    description: 'Grand wedding event with elegant décor and premium catering',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format',
    type: 'image',
  },
  {
    id: 2,
    category: 'decorations',
    title: 'Floral Paradise Setup',
    description: 'Stunning floral arrangements and stage decoration',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format',
    type: 'image',
  },
  {
    id: 3,
    category: 'catering',
    title: 'Premium Bar Setup',
    description: 'Professional bar and beverage service',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&auto=format',
    type: 'image',
  },
  {
    id: 4,
    category: 'corporate',
    title: 'Corporate Conference',
    description: 'Professional business event management',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format',
    type: 'image',
  },
  {
    id: 5,
    category: 'weddings',
    title: 'Traditional Ceremony',
    description: 'Beautiful traditional wedding setup',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format',
    type: 'image',
  },
  {
    id: 6,
    category: 'decorations',
    title: 'Elegant Stage Design',
    description: 'Luxurious stage and mandap decoration',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format',
    type: 'image',
  },
  {
    id: 7,
    category: 'catering',
    title: 'Gourmet Spread',
    description: 'Delicious multi-cuisine catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format',
    type: 'image',
  },
  {
    id: 8,
    category: 'corporate',
    title: 'Seminar Setup',
    description: 'Professional seminar and training events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format',
    type: 'image',
  },
];

export function Portfolio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedItem ? filteredItems.findIndex(item => item.id === selectedItem.id) : -1;

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-20" />

      <div className="container mx-auto px-4 relative" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments We've{' '}
            <span className="text-primary">Created</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse through our collection of successful events and see how we transform 
            visions into reality.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(43_74%_53%/0.3)]'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Video Play Button */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gold-outline" size="lg">
            View Full Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-xl font-bold text-foreground">{selectedItem.title}</h3>
              <p className="text-muted-foreground">{selectedItem.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
