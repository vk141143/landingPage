import { motion } from 'framer-motion';

export default function TransmissionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(94, 242, 194, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94, 242, 194, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Scan Line */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: '200%' }}
        transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatDelay: 5 }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5EF2C2] to-transparent opacity-30"
      />

      {/* Ambient Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#5EF2C2] rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5EF2C2] rounded-full blur-3xl"
      />
    </div>
  );
}
