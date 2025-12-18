import { motion } from 'framer-motion';

export default function TransitionLayer() {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      className="absolute inset-0 z-40 pointer-events-none"
      initial={{
        clipPath: 'circle(0% at 50% 100%)',
      }}
      animate={{
        clipPath: [
          'circle(0% at 50% 100%)',
          'circle(60% at 50% 50%)',
          'circle(120% at 50% 0%)',
          'circle(180% at 50% -20%)',
        ],
      }}
      transition={{
        duration: 1.9,
        times: [0, 0.3, 0.7, 1],
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          background: isMobile
            ? 'linear-gradient(to top, rgba(15, 81, 50, 0.25), rgba(15, 81, 50, 0.15))'
            : 'linear-gradient(to right, rgba(15, 81, 50, 0.25), rgba(15, 81, 50, 0.15))',
          backdropFilter: 'blur(0.5px)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.25, 0],
        }}
        transition={{
          duration: 1.9,
          times: [0, 0.2, 0.7, 1],
          ease: [0.65, 0, 0.35, 1],
        }}
      />
    </motion.div>
  );
}
