import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    problem: 'Manual collection',
    solution: 'Intelligent routing',
    description: 'AI-powered route optimization that saves time, fuel, and reduces emissions.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    ),
    problem: 'Unclear processes',
    solution: 'Full transparency',
    description: 'Real-time tracking and updates so everyone knows exactly what is happening.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    problem: 'Delayed responses',
    solution: 'Instant communication',
    description: 'Direct channels between residents, drivers, and administrators.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    problem: 'Trust gaps',
    solution: 'Verified accountability',
    description: 'Photo verification and digital records for every pickup.',
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] mb-4">What We Do</h2>
          <p className="text-lg text-[#1F1F1F]/70 max-w-2xl mx-auto">
            We transform broken processes into seamless experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-[#FAF7F2] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#0F5132]/5"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] flex items-center justify-center mb-6"
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {card.icon}
                </svg>
              </motion.div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#1F1F1F]/50 line-through">{card.problem}</span>
                  <span className="text-[#0F5132]">→</span>
                  <span className="text-[#0F5132] font-semibold">{card.solution}</span>
                </div>
                <p className="text-[#1F1F1F]/70 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
