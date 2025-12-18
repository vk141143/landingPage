import { motion } from 'framer-motion';
import { useState } from 'react';

interface HighlightCardProps {
  title: string;
  subtitle: string;
  icon: string;
  contentOpacity: number;
}

export default function HighlightCard({ title, subtitle, icon, contentOpacity }: HighlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
      className="w-80 h-52 p-6 rounded-3xl glass shadow-xl max-md:w-full"
      style={{
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(15, 81, 50, 0.3)'
          : '0 20px 25px -5px rgba(15, 81, 50, 0.1)',
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* Icon */}
        <motion.div
          style={{ opacity: contentOpacity, scale: 0.8 + contentOpacity * 0.2 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-3xl mb-4 shadow-lg"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          style={{ opacity: contentOpacity, y: 8 * (1 - contentOpacity) }}
          className="text-lg font-bold text-dark mb-2 line-clamp-2"
        >
          {title}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: contentOpacity, y: 10 * (1 - contentOpacity) }}
          className="text-sm text-dark/70 line-clamp-2"
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}
