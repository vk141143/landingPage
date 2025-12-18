import { motion } from 'framer-motion';

interface Step {
  id: number;
  role: string;
  icon: string;
}

interface StepDotProps {
  step: Step;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export default function StepDot({ step, index, isActive, isCompleted, onClick }: StepDotProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-4 group"
    >
      {/* Dot */}
      <motion.div
        animate={{
          scale: isActive ? 1.2 : 1,
          backgroundColor: isActive
            ? '#0F5132'
            : isCompleted
            ? '#2D7A4F'
            : 'rgba(15, 81, 50, 0.2)',
        }}
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      >
        {/* Ripple effect when active */}
        {isActive && (
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#0F5132]"
          />
        )}

        {/* Icon */}
        <motion.span
          animate={{ scale: isActive ? 1.1 : 1 }}
          className="text-2xl relative z-10"
        >
          {step.icon}
        </motion.span>

        {/* Glow */}
        {isActive && (
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#0F5132] blur-xl"
          />
        )}
      </motion.div>

      {/* Step number */}
      <div className="hidden md:block">
        <div className="text-sm font-bold text-[#0F5132]/60">Step {index + 1}</div>
        <div className="text-xs text-[#2D7A4F]">{step.role}</div>
      </div>
    </button>
  );
}
