import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface Story {
  id: string;
  title: string;
  heading: string;
  content: string[];
}

interface ExpandedStoryPanelProps {
  story: Story;
  onClose: () => void;
  onRevealComplete: () => void;
}

export default function ExpandedStoryPanel({ story, onClose, onRevealComplete }: ExpandedStoryPanelProps) {
  const contentRevealDuration = story.content.length * 0.15 + 0.8;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRevealComplete();
    }, contentRevealDuration * 1000);

    return () => clearTimeout(timer);
  }, [contentRevealDuration, onRevealComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      className="relative p-10 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 min-h-[600px]"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#0F5132]/10 hover:bg-[#0F5132]/20 flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5 text-[#0F5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        className="text-4xl font-black text-[#0F5132] mb-8"
      >
        {story.heading}
      </motion.h3>

      {/* Content paragraphs */}
      <div className="space-y-6">
        {story.content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5 + index * 0.15,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="text-lg text-[#1F1F1F]/80 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
