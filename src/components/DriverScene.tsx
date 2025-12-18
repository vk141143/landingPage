import { motion } from 'framer-motion';

export default function DriverScene() {
  return (
    <div className="relative w-full max-w-md h-96">
      {/* Incoming Paper Plane */}
      <motion.div
        initial={{ x: 300, y: -20, opacity: 0 }}
        animate={{ x: 120, y: 20, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute right-32 top-32"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M5 20 L35 10 L25 30 L20 22 L5 20 Z"
            fill="#0F5132"
            stroke="#0F5132"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Driver Phone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute right-24 top-28"
      >
        <div className="w-20 h-32 bg-[#0F5132] rounded-xl border-4 border-[#0F5132] shadow-xl">
          <div className="w-full h-full bg-white rounded-lg p-2 flex flex-col gap-1">
            <div className="w-full h-3 bg-[#D1E7DD] rounded" />
            <div className="w-2/3 h-2 bg-[#D1E7DD] rounded" />
            <div className="flex-1" />
            <div className="w-full h-8 bg-gradient-to-r from-[#0F5132] to-[#1a7a4f] rounded-md" />
          </div>
        </div>

        {/* Notification Pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute -top-2 -right-2"
        >
          <div className="relative">
            <div className="w-8 h-8 bg-[#FF6F00] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-[#FF6F00] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Driver Van */}
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        className="absolute right-8 bottom-24"
      >
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
            {/* Van Body */}
            <rect x="10" y="15" width="70" height="30" rx="4" fill="#0F5132" />
            <rect x="75" y="20" width="20" height="25" rx="3" fill="#0F5132" />
            
            {/* Windows */}
            <rect x="78" y="24" width="14" height="12" rx="2" fill="#D1E7DD" />
            
            {/* Wheels */}
            <circle cx="25" cy="48" r="8" fill="#1F1F1F" />
            <circle cx="25" cy="48" r="4" fill="#FAF7F2" />
            <circle cx="70" cy="48" r="8" fill="#1F1F1F" />
            <circle cx="70" cy="48" r="4" fill="#FAF7F2" />
            
            {/* Details */}
            <path d="M15 25 L25 25 L25 35 L15 35 Z" fill="#D1E7DD" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Motion Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 1, delay: 1.5, repeat: 2 }}
        className="absolute right-32 bottom-32"
      >
        <div className="flex flex-col gap-2">
          <div className="w-12 h-1 bg-[#0F5132]/30 rounded-full" />
          <div className="w-16 h-1 bg-[#0F5132]/30 rounded-full" />
          <div className="w-10 h-1 bg-[#0F5132]/30 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
