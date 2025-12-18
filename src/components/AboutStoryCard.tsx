import { motion, MotionValue, useTransform } from 'framer-motion';

interface StoryStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  finalPosition: 'left' | 'right' | 'center';
}

interface AboutStoryCardProps {
  step: StoryStep;
  progress: MotionValue<number>;
}

export default function AboutStoryCard({ step, progress }: AboutStoryCardProps) {
  const cardOpacity = useTransform(progress, [0, 0.15], [0, 1]);
  const cardScale = useTransform(progress, [0, 0.15], [0.95, 1]);

  const titleOpacity = useTransform(progress, [0.15, 0.35], [0, 1]);
  const titleY = useTransform(progress, [0.15, 0.35], [16, 0]);

  const subtitleOpacity = useTransform(progress, [0.23, 0.43], [0, 1]);
  const subtitleY = useTransform(progress, [0.23, 0.43], [16, 0]);

  const descOpacity = useTransform(progress, [0.31, 0.51], [0, 1]);
  const descY = useTransform(progress, [0.31, 0.51], [16, 0]);

  const cardX = useTransform(
    progress,
    [0.6, 0.9],
    step.finalPosition === 'left' ? [0, -400] : step.finalPosition === 'right' ? [0, 400] : [0, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        x: cardX,
        zIndex: step.id,
      }}
    >
      <div className="w-full max-w-2xl">
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20">
          <motion.h3
            className="text-4xl font-black text-[#0F5132] mb-4"
            style={{ opacity: titleOpacity, y: titleY }}
          >
            {step.title}
          </motion.h3>

          <motion.p
            className="text-xl font-semibold text-[#2D7A4F] mb-6"
            style={{ opacity: subtitleOpacity, y: subtitleY }}
          >
            {step.subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-[#1F1F1F]/70 leading-relaxed"
            style={{ opacity: descOpacity, y: descY }}
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
