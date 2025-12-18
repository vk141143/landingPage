import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ClosingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          We're building infrastructure for a cleaner, smarter future.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/90 mb-12"
        >
          Join us in transforming how communities manage waste.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#0F5132] font-semibold rounded-xl shadow-lg transition-all"
          >
            Explore How It Works
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all hover:bg-white/10"
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
