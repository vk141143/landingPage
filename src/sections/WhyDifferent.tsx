import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisons = [
  {
    traditional: 'Fixed schedules, miss it and wait',
    liftaway: 'On-demand pickup, anytime',
  },
  {
    traditional: 'No visibility on arrival time',
    liftaway: 'Live tracking & ETA updates',
  },
  {
    traditional: 'Cash payments, no records',
    liftaway: 'Digital payments, full transparency',
  },
];

export default function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <section
      id="why"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6"
      style={{
        background: 'linear-gradient(180deg, #FAF7F2 0%, #D1E7DD 100%)',
      }}
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] mb-4">
            Why We Are Different
          </h2>
          <p className="text-lg text-[#1F1F1F]/70">
            A smarter approach to waste management
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vertical Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0F5132]/20 via-[#0F5132]/40 to-[#0F5132]/20 origin-top"
          />

          {/* Traditional Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-8">
              Traditional System
            </h3>
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-gray-300/50"
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.traditional}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* LiftAway Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#0F5132] mb-8">
              LiftAway
            </h3>
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#0F5132]/30 shadow-lg shadow-[#0F5132]/5"
              >
                <p className="text-[#0F5132] font-medium leading-relaxed">
                  {item.liftaway}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
