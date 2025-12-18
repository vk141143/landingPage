import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HighlightCard from '../components/HighlightCard';

const highlights = [
  {
    title: 'AI-Powered Route Optimization',
    subtitle: 'Smart algorithms reduce travel time by 40%',
    icon: '🚗',
  },
  {
    title: 'Real-time Driver Tracking',
    subtitle: 'Live GPS monitoring for complete transparency',
    icon: '📍',
  },
  {
    title: 'Eco-Friendly Operations',
    subtitle: 'Reducing carbon footprint with optimized routes',
    icon: '🌱',
  },
];

export default function Highlights() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [centerProgress, setCenterProgress] = useState(0);
  const [splitProgress, setSplitProgress] = useState(0);
  const [contentProgress, setContentProgress] = useState(0);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      // Center card appears
      setTimeout(() => setCenterProgress(1), 100);
      
      // Cards split
      setTimeout(() => setSplitProgress(1), 700);
      
      // Content reveals
      setTimeout(() => setContentProgress(1), 1550);
    } else if (!inView && hasAnimated) {
      setHasAnimated(false);
      setCenterProgress(0);
      setSplitProgress(0);
      setContentProgress(0);
    }
  }, [inView, hasAnimated]);

  return (
    <section
      ref={ref}
      className="relative w-full py-32 px-20 bg-gradient-to-br from-accent via-secondary/30 to-accent overflow-hidden max-md:px-6 max-md:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-5xl font-black text-primary text-center mb-4 max-md:text-4xl">
          Key Highlights
        </h2>
        <p className="text-xl text-dark/70 text-center mb-20 max-md:text-base">
          Experience the future of waste management
        </p>

        {/* Desktop: Center-Split Animation */}
        <div className="hidden md:block relative h-80">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 4 }}
              animate={{
                opacity: centerProgress,
                scale: 0.9 + centerProgress * 0.1,
                y: 4 * (1 - centerProgress),
              }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            >
              <HighlightCard {...highlights[1]} contentOpacity={contentProgress} />
            </motion.div>

            {/* Left Card */}
            {splitProgress > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: splitProgress,
                  x: -420 * splitProgress + (splitProgress > 0.9 ? (1 - splitProgress) * 4 : 0),
                  y: 4 * (1 - centerProgress),
                }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                className="absolute"
              >
                <HighlightCard {...highlights[0]} contentOpacity={contentProgress} />
              </motion.div>
            )}

            {/* Right Card */}
            {splitProgress > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  opacity: splitProgress,
                  x: 420 * splitProgress - (splitProgress > 0.9 ? (1 - splitProgress) * 4 : 0),
                  y: 4 * (1 - centerProgress),
                }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                className="absolute"
              >
                <HighlightCard {...highlights[2]} contentOpacity={contentProgress} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile: Stacked */}
        <div className="md:hidden space-y-6">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: centerProgress,
                y: 20 * (1 - centerProgress),
                scale: 0.96 + centerProgress * 0.04,
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <HighlightCard {...highlight} contentOpacity={contentProgress} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
