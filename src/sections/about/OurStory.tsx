import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const storySteps = [
  {
    title: 'The Problem',
    content: 'We saw cities struggling with outdated waste management systems. Missed pickups, frustrated residents, overworked drivers, and no visibility into what was actually happening.',
    color: '#FF6F00',
  },
  {
    title: 'The Insight',
    content: 'The technology existed to fix this. What was missing was not innovation—it was implementation that actually worked for real people in real situations.',
    color: '#2D7A4F',
  },
  {
    title: 'The Build',
    content: 'We spent months talking to drivers, residents, and city officials. We built, tested, broke things, and rebuilt. Every feature earned its place by solving a real problem.',
    color: '#0F5132',
  },
  {
    title: 'The Future',
    content: 'We are just getting started. Our vision is a world where waste management is so reliable, so transparent, that it becomes invisible—working perfectly in the background.',
    color: '#1a7a4f',
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0F5132] text-center mb-20"
        >
          Our Story
        </motion.h2>

        <div className="space-y-32">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-l-4 ${
                  index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
                }`}
                style={{ borderColor: step.color, maxWidth: '600px' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F5132]">{step.title}</h3>
                </div>
                <p className="text-lg text-[#1F1F1F]/80 leading-relaxed">{step.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
