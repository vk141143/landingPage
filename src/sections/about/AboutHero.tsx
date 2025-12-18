import { motion } from 'framer-motion';
import TrustCarousel from '../../components/about/TrustCarousel';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#D1E7DD]/20 to-[#FAF7F2]">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #0F5132 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #2D7A4F 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #0F5132 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #0F5132 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Headline */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-[#0F5132] leading-tight"
          >
            Building Smarter,
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              More Transparent
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block"
            >
              Waste Management
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl text-[#1F1F1F]/70 leading-relaxed"
          >
            We believe waste management should be simple, reliable, and human-centered—not chaotic and opaque.
          </motion.p>
        </div>

        {/* Right: Why People Trust Us */}
        <TrustCarousel />
      </div>
    </section>
  );
}
