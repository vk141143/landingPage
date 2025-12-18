import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#0F5132]">Who We Are</h2>
          <p className="text-lg text-[#1F1F1F]/80 leading-relaxed">
            We're a team of engineers, designers, and problem-solvers who got tired of seeing waste management treated as an afterthought.
          </p>
          <p className="text-lg text-[#1F1F1F]/80 leading-relaxed">
            We're not here to disrupt for the sake of it. We're here to build infrastructure that works—quietly, reliably, and with respect for the people who use it every day.
          </p>
        </motion.div>

        {/* Right: Symbolic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-[#0F5132]/10">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#0F5132]">People-First Mindset</h3>
              <p className="text-[#1F1F1F]/70">
                Every decision we make starts with the people who will use our platform—from residents to drivers to city planners.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
