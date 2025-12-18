import { useRef } from 'react';
import { motion } from 'framer-motion';

interface DotNavigationProps {
  slides: any[];
  currentIndex: number;
  onDotClick: (index: number, position: { x: number; y: number }) => void;
}

export default function DotNavigation({
  slides,
  currentIndex,
  onDotClick,
}: DotNavigationProps) {
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (index: number) => {
    const dotElement = dotRefs.current[index];
    if (!dotElement) return;

    const rect = dotElement.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    onDotClick(index, position);
  };

  return (
    <div className="flex justify-center gap-4 z-50">
      {slides.map((_, index) => (
        <button
          key={index}
          ref={(el) => (dotRefs.current[index] = el)}
          onClick={() => handleClick(index)}
          className="relative group"
          aria-label={`Go to slide ${index + 1}`}
        >
          <motion.div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#0F5132] shadow-md shadow-[#0F5132]/50'
                : 'bg-[#0F5132]/30'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: currentIndex === index ? 1.25 : 1,
            }}
          />
          
          {/* Hover ring */}
          <motion.div
            className="absolute inset-0 -m-2 rounded-full border-2 border-[#0F5132]/20 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </button>
      ))}
    </div>
  );
}
