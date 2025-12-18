import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'Verified Drivers',
    description: 'Every driver undergoes background checks and training',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.path
          d="M32 8 L32 32 M32 32 L44 44"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
        <motion.circle
          cx="32"
          cy="32"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Secure Payments',
    description: 'Bank-grade encryption for all transactions',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.rect
          x="20"
          y="28"
          width="24"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
        <motion.path
          d="M24 28 L24 22 A8 8 0 0 1 40 22 L40 28"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Live Tracking',
    description: 'Real-time location updates from pickup to completion',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.circle
          cx="32"
          cy="32"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
        <motion.circle
          cx="32"
          cy="32"
          r="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
        <motion.circle
          cx="32"
          cy="32"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Logs',
    description: 'Complete audit trail of every pickup and payment',
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.rect
          x="16"
          y="12"
          width="32"
          height="40"
          rx="2"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
        <motion.path
          d="M24 24 L40 24 M24 32 L40 32 M24 40 L32 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
];

const SplitText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay + i * 0.02 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function SafetySecurity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #D1E7DD 100%)' }}
        animate={
          isInView
            ? {
                background: [
                  'linear-gradient(135deg, #FAF7F2 0%, #D1E7DD 100%)',
                  'linear-gradient(135deg, #D1E7DD 0%, #FAF7F2 100%)',
                  'linear-gradient(135deg, #FAF7F2 0%, #D1E7DD 100%)',
                ],
              }
            : {}
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] mb-4">
            Safety, Security & Reliability
          </h2>
          <p className="text-lg text-[#1F1F1F]/70">
            Your trust is our foundation
          </p>
        </motion.div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Center Dot */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-3 h-3 bg-[#0F5132] rounded-full -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 1, opacity: 1 }}
            animate={isInView ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />

          {/* Grid Container */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="relative h-[200px]">
                {/* Card that morphs from dot */}
                <motion.div
                  className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-[#0F5132]/10 shadow-lg flex flex-col items-center justify-center text-center"
                  initial={{ 
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    opacity: 0,
                  }}
                  animate={isInView ? {
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    left: 0,
                    top: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                  } : {
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    duration: 0.8,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.15,
                    }}
                    className="text-[#0F5132] mb-4"
                  >
                    {pillar.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-[#0F5132] mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {isInView && <SplitText text={pillar.title} delay={1.4 + index * 0.15} />}
                  </motion.h3>

                  <motion.p
                    className="text-[#1F1F1F]/70 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {isInView && <SplitText text={pillar.description} delay={1.7 + index * 0.15} />}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
