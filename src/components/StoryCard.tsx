import { motion } from 'framer-motion';

interface Story {
  id: string;
  title: string;
  tagline: string;
}

interface StoryCardProps {
  story: Story;
  index: number;
  onClick: () => void;
}

export default function StoryCard({ story, index, onClick }: StoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 text-left hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold text-[#0F5132] mb-2">{story.title}</h3>
      <p className="text-sm text-[#2D7A4F]">{story.tagline}</p>

      {/* Arrow indicator */}
      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#0F5132]/10 flex items-center justify-center">
        <svg className="w-4 h-4 text-[#0F5132]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.button>
  );
}
