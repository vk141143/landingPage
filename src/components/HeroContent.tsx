import { motion } from 'framer-motion';

interface HeroContentProps {
  slide: {
    id: number;
    title: string;
    subtitle: string;
    cta: string;
  };
  isAnimating: boolean;
}

export default function HeroContent({ slide, isAnimating }: HeroContentProps) {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isAnimating ? 'exit' : 'visible'}
      className="relative z-50"
    >
      <motion.h2
        custom={0}
        variants={contentVariants}
        className="text-4xl md:text-6xl font-bold text-[#0F5132] mb-6 leading-tight"
      >
        {slide.title}
      </motion.h2>

      <motion.p
        custom={0.08}
        variants={contentVariants}
        className="text-xl md:text-2xl text-[#1F1F1F]/70 mb-8"
      >
        {slide.subtitle}
      </motion.p>

      <motion.button
        custom={0.16}
        variants={contentVariants}
        className="px-10 py-4 bg-gradient-to-r from-[#0F5132] to-[#2D7A4F] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {slide.cta}
      </motion.button>
    </motion.div>
  );
}
