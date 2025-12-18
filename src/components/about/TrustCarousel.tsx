import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrustCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <TrustScene key="trust" />}
        {currentSlide === 1 && <ReliableScene key="reliable" />}
        {currentSlide === 2 && <AccountabilityScene key="accountability" />}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-[#0F5132] w-8' : 'bg-[#0F5132]/30 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TrustScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Shield Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] rounded-3xl flex items-center justify-center shadow-2xl">
          <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#0F5132] rounded-3xl blur-2xl -z-10"
        />
      </motion.div>

      {/* Checkmarks */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
          className="absolute"
          style={{
            top: `${30 + i * 25}%`,
            left: `${20 + i * 15}%`,
          }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-[#0F5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-24 text-center"
      >
        <h3 className="text-2xl font-bold text-[#0F5132] mb-1">Trust</h3>
        <p className="text-[#1F1F1F]/60">Verified & Secure</p>
      </motion.div>
    </motion.div>
  );
}

function ReliableScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Clock */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-[#2D7A4F] to-[#0F5132] rounded-full flex items-center justify-center shadow-2xl">
          <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Rotating Dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
            className="absolute w-3 h-3 bg-[#0F5132] rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateY(-80px)`,
            }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-32 h-2 bg-gradient-to-r from-[#0F5132] to-[#2D7A4F] rounded-full"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 text-center"
      >
        <h3 className="text-2xl font-bold text-[#0F5132] mb-1">Reliable</h3>
        <p className="text-[#1F1F1F]/60">Always On Time</p>
      </motion.div>
    </motion.div>
  );
}

function AccountabilityScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Clipboard */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="w-32 h-40 bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] rounded-2xl flex items-center justify-center shadow-2xl">
          <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>

        {/* Checkmark Animation */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <motion.path
              d="M20 40 L35 55 L60 25"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Document Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: `${60 - i * 10}%`, opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
          className="absolute h-1 bg-[#0F5132]/30 rounded-full"
          style={{ top: `${35 + i * 8}%` }}
        />
      ))}

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-16 text-center"
      >
        <h3 className="text-2xl font-bold text-[#0F5132] mb-1">Accountability</h3>
        <p className="text-[#1F1F1F]/60">Full Transparency</p>
      </motion.div>
    </motion.div>
  );
}
