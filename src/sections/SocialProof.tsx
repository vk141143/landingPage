import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const metrics = [
  { value: 50000, suffix: '+', label: 'Pickups Completed' },
  { value: 98, suffix: '%', label: 'On-Time Rate' },
 { value: 95, suffix: '%', label: 'Issue Resolution Rate' },
  { value: 100, suffix: '%', label: 'Transparent' },
];

function Counter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, count, value]);

  return (
    <div className="flex items-baseline justify-center">
      <motion.span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F5132]">
        {rounded}
      </motion.span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F5132] ml-1">
        {suffix}
      </span>
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });

  return (
    <section
      ref={ref}
      className="relative w-full py-12 md:py-20 px-4 md:px-6"
      style={{ background: '#FAF7F2' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F5132] mb-3 md:mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-base md:text-lg text-[#1F1F1F]/70">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center"
            >
              <Counter
                value={metric.value}
                suffix={metric.suffix}
                isInView={isInView}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="h-1 w-20 bg-gradient-to-r from-[#0F5132] to-[#2D7A4F] mx-auto my-4 origin-center"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 2.2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-[#1F1F1F] text-lg font-medium"
              >
                {metric.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
