import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919199138929"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </motion.a>
  );
}
