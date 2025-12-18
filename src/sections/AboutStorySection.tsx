import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import AboutStoryCard from '../components/AboutStoryCard';

const storySteps = [
  {
    id: 1,
    title: 'Smart Route Optimization',
    subtitle: 'AI-powered efficiency',
    description: 'Our intelligent algorithms analyze traffic patterns, waste volumes, and driver locations to create optimal collection routes.',
    finalPosition: 'left' as const,
  },
  {
    id: 2,
    title: 'Real-Time Tracking',
    subtitle: 'Complete visibility',
    description: 'Track every vehicle in your fleet with live GPS updates, ensuring transparency and accountability.',
    finalPosition: 'left' as const,
  },
  {
    id: 3,
    title: 'Advanced Analytics',
    subtitle: 'Data-driven decisions',
    description: 'Transform raw data into actionable insights with comprehensive dashboards and reporting tools.',
    finalPosition: 'right' as const,
  },
  {
    id: 4,
    title: 'Sustainable Future',
    subtitle: 'Building tomorrow, today',
    description: 'Join us in revolutionizing waste management for a cleaner, more efficient world.',
    finalPosition: 'center' as const,
  },
];

export default function AboutStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const card1Progress = useTransform(scrollYProgress, [0.00, 0.20], [0, 1]);
  const card2Progress = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const card3Progress = useTransform(scrollYProgress, [0.50, 0.70], [0, 1]);
  const card4Progress = useTransform(scrollYProgress, [0.75, 1.00], [0, 1]);

  const progressMap = [card1Progress, card2Progress, card3Progress, card4Progress];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-[#FAF7F2] via-[#D1E7DD]/20 to-[#FAF7F2] py-32"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl px-6">
          {storySteps.map((step, index) => (
            <AboutStoryCard
              key={step.id}
              step={step}
              progress={progressMap[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
