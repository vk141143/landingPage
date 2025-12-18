import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] rounded-3xl p-12 text-white shadow-2xl">
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="w-16 h-16 mb-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </motion.svg>

              <h3 className="text-3xl font-bold mb-6">Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To make waste management transparent, reliable, and human-centered—building infrastructure that works for everyone, every day.
              </p>
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-[#0F5132] via-[#2D7A4F] to-[#0F5132]"
          />

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#FAF7F2] border-2 border-[#0F5132] rounded-3xl p-12 shadow-2xl">
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
                className="w-16 h-16 mb-6 text-[#0F5132]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </motion.svg>

              <h3 className="text-3xl font-bold mb-6 text-[#0F5132]">Vision</h3>
              <p className="text-lg leading-relaxed text-[#1F1F1F]/80">
                A world where waste management is so seamless and reliable that it becomes invisible—working perfectly in the background of thriving communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
