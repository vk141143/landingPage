import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const audiences = [
  {
    title: 'Households',
    description: 'Simple, reliable waste pickup for your home',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <motion.path
          d="M32 8 L52 20 L52 44 L32 56 L12 44 L12 20 Z M20 28 L44 28 M20 36 L44 36"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Businesses',
    description: 'Scalable solutions for commercial waste',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <motion.path
          d="M12 52 L12 24 L32 12 L52 24 L52 52 M12 52 L52 52 M32 12 L32 52 M12 24 L52 24 M22 32 L22 42 M42 32 L42 42"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Drivers',
    description: 'Earn more with flexible schedules',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <motion.path
          d="M16 40 L16 28 L24 20 L40 20 L48 28 L48 40 M16 40 L48 40 M20 44 A4 4 0 1 1 20 44.01 M44 44 A4 4 0 1 1 44 44.01 M24 28 L40 28"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
  {
    title: 'Municipal / Enterprise',
    description: 'City-wide infrastructure management',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <motion.path
          d="M32 8 L32 56 M12 20 L52 20 M12 32 L52 32 M12 44 L52 44 M20 8 L20 56 M44 8 L44 56 M8 56 L56 56"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        />
      </svg>
    ),
  },
];

export default function WhoIsThisFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section
      id="who"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-6"
      style={{ background: '#FAF7F2' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-[#1F1F1F]/70">
            Built for everyone in the waste management ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(15, 81, 50, 0.12)',
              }}
              className="bg-white rounded-2xl p-8 border border-[#0F5132]/10 hover:border-[#0F5132]/30 transition-colors cursor-pointer"
            >
              <motion.div
                className="text-[#0F5132] mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {audience.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#0F5132] mb-3">
                {audience.title}
              </h3>
              <p className="text-[#1F1F1F]/70 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
