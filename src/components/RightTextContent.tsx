import { motion } from 'framer-motion';

interface RightTextContentProps {
  slide: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function RightTextContent({ slide }: RightTextContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg space-y-4 md:space-y-6 text-center md:text-left"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] leading-tight"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-base md:text-lg lg:text-xl text-[#1F1F1F]/70 leading-relaxed"
      >
        {slide.subtitle}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = 'http://13.233.195.173:8000/login'}
        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#0F5132] to-[#1a7a4f] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {slide.cta}
      </motion.button>
    </motion.div>
  );
}
