import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const words = ['Smarter', 'Waste', 'Collection', 'Starts', 'Here'];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[80vh] flex items-center justify-center py-12 md:py-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{
          background: 'linear-gradient(135deg, #0F5132 0%, #2D7A4F 100%)',
        }}
        animate={
          isInView
            ? {
                background: [
                  'linear-gradient(135deg, #0F5132 0%, #2D7A4F 100%)',
                  'linear-gradient(135deg, #2D7A4F 0%, #0F5132 100%)',
                  'linear-gradient(135deg, #0F5132 0%, #2D7A4F 100%)',
                ],
              }
            : {}
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative w-full max-w-4xl text-center">
        {/* Heading with word-by-word reveal */}
        <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
          {words.map((word, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              {word}
            </motion.h2>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: words.length * 0.15 + 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          Join thousands who've already made the switch to reliable, transparent waste management
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{
            duration: 0.6,
            delay: words.length * 0.15 + 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white text-[#0F5132] rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            Get Started Now
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-base md:text-lg hover:border-white/50 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Trust Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: words.length * 0.15 + 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-white/70 text-sm mt-8"
        >
          No credit card required • Free to start • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
