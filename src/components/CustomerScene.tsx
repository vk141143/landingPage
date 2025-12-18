import { motion } from 'framer-motion';

export default function CustomerScene() {
  return (
    <div className="relative w-full max-w-md h-96">
      {/* Person Icon */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute left-16 bottom-20"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="25" r="12" fill="#0F5132" />
          <path
            d="M20 70 C20 55, 25 45, 40 45 C55 45, 60 55, 60 70"
            fill="#0F5132"
            stroke="#0F5132"
            strokeWidth="2"
          />
        </svg>

        {/* Hand Wave */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -10, 15, 0] }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
          className="absolute -top-2 -right-4"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M8 16 Q10 12, 14 10 L16 14 Q12 16, 10 20 Z"
              fill="#FF6F00"
              stroke="#FF6F00"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile Phone */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute left-20 bottom-32"
      >
        <div className="relative">
          <div className="w-16 h-28 bg-[#0F5132] rounded-lg border-4 border-[#0F5132] shadow-lg">
            <div className="w-full h-full bg-white rounded-md p-1">
              <div className="w-full h-2 bg-[#D1E7DD] rounded-full mb-1" />
              <div className="w-3/4 h-2 bg-[#D1E7DD] rounded-full" />
            </div>
          </div>

          {/* Tap Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: 1.8, repeat: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#FF6F00]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Paper Plane */}
      <motion.div
        initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
        animate={{
          x: [0, 150, 300],
          y: [0, -40, -20],
          opacity: [0, 1, 1, 0],
          rotate: [0, -15, -10],
        }}
        transition={{ duration: 2, delay: 2.2, ease: 'easeInOut' }}
        className="absolute left-24 bottom-40"
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
    </div>
  );
}
