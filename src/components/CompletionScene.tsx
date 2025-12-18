import { motion } from 'framer-motion';

export default function CompletionScene() {
  return (
    <div className="relative w-full max-w-md h-96">
      {/* Customer Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-16 bottom-24"
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="22" r="10" fill="#0F5132" />
          <path
            d="M18 60 C18 48, 22 40, 35 40 C48 40, 52 48, 52 60"
            fill="#0F5132"
            stroke="#0F5132"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Driver Van */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute right-20 bottom-24"
      >
        <svg width="90" height="55" viewBox="0 0 90 55" fill="none">
          <rect x="8" y="12" width="60" height="28" rx="4" fill="#0F5132" />
          <rect x="65" y="17" width="18" height="23" rx="3" fill="#0F5132" />
          <rect x="68" y="21" width="12" height="10" rx="2" fill="#D1E7DD" />
          <circle cx="22" cy="43" r="7" fill="#1F1F1F" />
          <circle cx="22" cy="43" r="3" fill="#FAF7F2" />
          <circle cx="60" cy="43" r="7" fill="#1F1F1F" />
          <circle cx="60" cy="43" r="3" fill="#FAF7F2" />
          <path d="M13 20 L22 20 L22 30 L13 30 Z" fill="#D1E7DD" />
        </svg>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 200 }}
        className="absolute left-1/2 top-32 -translate-x-1/2"
      >
        <div className="relative">
          <div className="bg-white border-2 border-[#0F5132] rounded-2xl px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0F5132] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#0F5132] rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-[#0F5132] rounded-full animate-pulse delay-200" />
            </div>
          </div>
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r-2 border-b-2 border-[#0F5132] transform rotate-45" />
        </div>
      </motion.div>

      {/* Payment Success Tick */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5, type: 'spring', stiffness: 150 }}
        className="absolute left-1/2 bottom-32 -translate-x-1/2"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 bg-gradient-to-br from-[#0F5132] to-[#1a7a4f] rounded-full flex items-center justify-center shadow-xl"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M10 20 L17 27 L30 13"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Success Glow */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#0F5132] rounded-full blur-xl"
          />
        </div>
      </motion.div>

      {/* Confetti Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 1, scale: 0 }}
          animate={{
            y: [0, -60, -80],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
            x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
          }}
          transition={{ duration: 1.5, delay: 1.6 + i * 0.1, ease: 'easeOut' }}
          className="absolute left-1/2 bottom-32"
        >
          <div
            className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-[#0F5132]' : i % 3 === 1 ? 'bg-[#FF6F00]' : 'bg-[#D1E7DD]'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}
