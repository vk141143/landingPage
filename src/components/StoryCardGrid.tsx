import { motion } from 'framer-motion';
import StoryCard from './StoryCard';

interface Story {
  id: string;
  title: string;
  tagline: string;
}

interface StoryCardGridProps {
  stories: Story[];
  onCardClick: (id: string) => void;
}

export default function StoryCardGrid({ stories, onCardClick }: StoryCardGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {stories.map((story, index) => (
        <StoryCard
          key={story.id}
          story={story}
          index={index}
          onClick={() => onCardClick(story.id)}
        />
      ))}
    </motion.div>
  );
}
