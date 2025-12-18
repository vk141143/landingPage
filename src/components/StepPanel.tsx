import { motion } from 'framer-motion';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

interface StepPanelProps {
  step: Step;
}

export default function StepPanel({ step }: StepPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className="relative p-10 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/20"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-6xl mb-6"
      >
        {step.icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className="text-3xl font-black text-[#0F5132] mb-3"
      >
        {step.title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className="text-lg font-semibold text-[#2D7A4F] mb-6"
      >
        {step.subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className="text-lg text-[#1F1F1F]/70 leading-relaxed"
      >
        {step.description}
      </motion.p>

      {/* Micro-interaction: Button tap ripple */}
      {step.id === 1 && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0F5132] text-white rounded-full font-semibold"
        >
          <span>Book Now</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      )}

      {/* Micro-interaction: Notification badge */}
      {step.id === 2 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute top-10 right-10 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
        >
          1
        </motion.div>
      )}

      {/* Micro-interaction: Chat bubbles */}
      {step.id === 3 && (
        <div className="mt-6 space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#D1E7DD] px-4 py-2 rounded-2xl rounded-bl-none max-w-xs"
          >
            <p className="text-sm">On my way! 5 mins away.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-[#0F5132] text-white px-4 py-2 rounded-2xl rounded-br-none max-w-xs ml-auto"
          >
            <p className="text-sm">Perfect, thank you!</p>
          </motion.div>
        </div>
      )}

      {/* Micro-interaction: Map pin */}
      {step.id === 4 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="absolute top-10 right-10 text-4xl"
        >
          📍
        </motion.div>
      )}

      {/* Micro-interaction: Payment success */}
      {step.id === 5 && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold"
        >
          <span>✓</span>
          <span>Payment Successful</span>
        </motion.div>
      )}

      {/* Micro-interaction: Completion checkmark */}
      {step.id === 6 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
          className="absolute top-10 right-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl"
        >
          ✓
        </motion.div>
      )}
    </motion.div>
  );
}
