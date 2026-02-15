
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 glass w-12 h-12 rounded-full flex items-center justify-center text-cyan-500 hover:text-white hover:bg-cyan-500 transition-all shadow-2xl"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

export default BackToTop;
