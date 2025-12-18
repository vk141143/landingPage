import { motion } from 'framer-motion';

interface EnergyLineProps {
  isActive: boolean;
  isCompleted: boolean;
}

export default function EnergyLine({ isActive, isCompleted }: EnergyLineProps) {
  return (
    <div className="absolute left-6 top-12 w-0.5 h-16 -translate-x-1/2">
      {/* Base line */}
      <motion.div
        animate={{
          backgroundColor: isCompleted ? '#2D7A4F' : 'rgba(15, 81, 50, 0.2)',
        }}
        className="absolute inset-0"
      />

      {/* Energy pulse */}
      {isActive && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 64, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-1 h-8 bg-gradient-to-b from-[#0F5132] to-transparent rounded-full -left-0.25"
        />
      )}
    </div>
  );
}
