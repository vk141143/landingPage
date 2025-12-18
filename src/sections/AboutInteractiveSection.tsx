import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

enum AboutStage {
  PROBLEM = 0,
  SOLUTION = 1,
  IMPACT = 2,
}

const aboutSlides = [
  {
    stage: AboutStage.PROBLEM,
    title: 'Waste pickup is uncoordinated',
    subtitle: "People don't know who will come or when.",
  },
  {
    stage: AboutStage.SOLUTION,
    title: 'Smart waste collection system',
    subtitle: 'Connecting communities with efficient pickup services.',
  },
  {
    stage: AboutStage.IMPACT,
    title: 'Cleaner cities. Predictable service.',
    subtitle: 'Less waiting. Less confusion.',
  },
];

const HumanIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="6" r="3" />
    <path d="M12 10c-3 0-5 2-5 4v6h10v-6c0-2-2-4-5-4z" />
  </svg>
);

const BuildingIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="4" width="16" height="18" rx="1" />
    <rect x="8" y="8" width="2" height="2" fill="white" opacity="0.6" />
    <rect x="14" y="8" width="2" height="2" fill="white" opacity="0.6" />
    <rect x="8" y="13" width="2" height="2" fill="white" opacity="0.6" />
    <rect x="14" y="13" width="2" height="2" fill="white" opacity="0.6" />
  </svg>
);

const TruckIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="2" y="8" width="14" height="8" rx="1" />
    <path d="M16 10h3l2 3v3h-5v-6z" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const AboutStoryScene = ({ stage }: { stage: AboutStage }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {stage === AboutStage.PROBLEM && (
          <motion.div
            key="problem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Human looking around */}
            <motion.div
              className="absolute text-gray-600"
              style={{ left: '30%', top: '50%' }}
              animate={{ x: [-5, 5, -5], rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HumanIcon className="w-12 h-12" />
            </motion.div>

            {/* Scattered buildings */}
            {[{ x: '50%', y: '30%' }, { x: '65%', y: '55%' }, { x: '45%', y: '70%' }].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute text-gray-400"
                style={{ left: pos.x, top: pos.y }}
                animate={{ x: [0, (i - 1) * 3, 0], y: [0, i * 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              >
                <BuildingIcon className="w-10 h-10" />
              </motion.div>
            ))}

            {/* Broken request line */}
            <motion.svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 400">
              <motion.line
                x1="120" y1="200" x2="180" y2="160"
                stroke="#ccc"
                strokeWidth="2"
                strokeDasharray="6 6"
                animate={{ pathLength: [0, 0.7, 0], opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.svg>
          </motion.div>
        )}

        {stage === AboutStage.SOLUTION && (
          <motion.div
            key="solution"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Human with phone pulse */}
            <motion.div
              className="absolute text-[#0F5132]"
              style={{ left: '25%', top: '50%' }}
            >
              <HumanIcon className="w-12 h-12" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#0F5132]"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Connected buildings */}
            {[{ x: '50%', y: '35%' }, { x: '60%', y: '55%' }, { x: '50%', y: '70%' }].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute text-[#0F5132]"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                <BuildingIcon className="w-10 h-10" />
              </motion.div>
            ))}

            {/* Connection lines */}
            <motion.svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 400 400">
              <motion.line
                x1="100" y1="200" x2="200" y2="140"
                stroke="#0F5132"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.line
                x1="100" y1="200" x2="220" y2="220"
                stroke="#0F5132"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.svg>

            {/* Moving truck */}
            <motion.div
              className="absolute text-[#0F5132]"
              initial={{ left: '25%', top: '50%', opacity: 0 }}
              animate={{ left: '45%', top: '45%', opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <TruckIcon className="w-8 h-8" />
            </motion.div>
          </motion.div>
        )}

        {stage === AboutStage.IMPACT && (
          <motion.div
            key="impact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Relaxed human */}
            <motion.div
              className="absolute text-[#0F5132]"
              style={{ left: '30%', top: '50%' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HumanIcon className="w-12 h-12" />
            </motion.div>

            {/* Aligned buildings */}
            {[{ x: '50%', y: '35%' }, { x: '60%', y: '35%' }, { x: '50%', y: '60%' }, { x: '60%', y: '60%' }].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute text-[#0F5132]"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              >
                <BuildingIcon className="w-10 h-10" />
              </motion.div>
            ))}

            {/* Success pulse */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-[#0F5132]"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutTextContent = ({ slide }: { slide: typeof aboutSlides[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
      >
        {slide.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl md:text-2xl text-gray-600 leading-relaxed"
      >
        {slide.subtitle}
      </motion.p>
    </motion.div>
  );
};

export default function AboutInteractiveSection() {
  const [currentStage, setCurrentStage] = useState<AboutStage>(AboutStage.PROBLEM);
  const autoPlayRef = useRef<number | null>(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % 3);
    }, 4500) as unknown as number;

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#D1E7DD]/20 via-[#FAF7F2] to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0F5132]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#D1E7DD]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative h-full min-h-[80vh] flex flex-col md:flex-row items-center">
        {/* LEFT SIDE - Animated Story Scene */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center order-2 md:order-1">
          <AboutStoryScene stage={currentStage} />
        </div>

        {/* RIGHT SIDE - Text Content */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center order-1 md:order-2 px-8 md:px-12 py-12 md:py-0">
          <AnimatePresence mode="wait">
            <AboutTextContent key={currentStage} slide={aboutSlides[currentStage]} />
          </AnimatePresence>
        </div>
      </div>

      {/* Stage Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentStage(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentStage ? 'bg-[#0F5132] w-8' : 'bg-[#0F5132]/30 w-2'
            }`}
            aria-label={`Go to stage ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
