import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface TrustCard {
  title: string;
  description: string;
}

const leftCards: TrustCard[] = [
  { title: 'Verified Drivers', description: 'Background-checked professionals' },
  { title: 'Real-Time Tracking', description: 'Complete visibility, always' },
  { title: 'Instant Response', description: 'Support when you need it' },
];

const rightCards: TrustCard[] = [
  { title: 'Secure Payments', description: 'Protected transactions' },
  { title: 'Transparent Pricing', description: 'No hidden charges' },
  { title: 'Quality Assured', description: 'Consistent service standards' },
];

export default function WhyTrustUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const centerControls = useAnimation();
  const armsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftControls.start('visible');
      rightControls.start('visible');
      setTimeout(() => {
        centerControls.start('visible');
        armsControls.start('visible');
      }, 1800);
    } else {
      leftControls.start('hidden');
      rightControls.start('hidden');
      centerControls.start('hidden');
      armsControls.start('hidden');
    }
  }, [isInView, leftControls, rightControls, centerControls, armsControls]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAF7F2 0%, rgba(209, 231, 221, 0.15) 50%, #FAF7F2 100%)',
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full max-w-[1400px] px-8 lg:px-20 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-[#0F5132] text-center mb-16"
        >
          Why Trust Us
        </motion.h2>

        <div className="hidden lg:flex items-center justify-between gap-8">
          {/* Left Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {leftCards.map((card, index) => (
              <TrustCardComponent
                key={`left-${index}`}
                card={card}
                index={index}
                controls={leftControls}
                isLeft={true}
              />
            ))}
          </div>

          {/* Center Figure */}
          <div className="w-[400px] flex items-center justify-center">
            <CenterFigure centerControls={centerControls} armsControls={armsControls} />
          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {rightCards.map((card, index) => (
              <TrustCardComponent
                key={`right-${index}`}
                card={card}
                index={index}
                controls={rightControls}
                isLeft={false}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-12">
          <CenterFigure centerControls={centerControls} armsControls={armsControls} />
          <div className="w-full flex flex-col gap-6">
            {[...leftCards, ...rightCards].map((card, index) => (
              <TrustCardComponent
                key={`mobile-${index}`}
                card={card}
                index={index}
                controls={leftControls}
                isLeft={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustCardComponent({
  card,
  index,
  controls,
  isLeft,
}: {
  card: TrustCard;
  index: number;
  controls: any;
  isLeft: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          x: isLeft ? -120 : 120,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: {
            delay: index * 0.12,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className="bg-white/60 backdrop-blur-sm border border-[#0F5132]/10 rounded-2xl p-8"
    >
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.12 + 0.2, duration: 0.4 },
          },
        }}
        className="text-xl font-bold text-[#0F5132] mb-2"
      >
        {card.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, filter: 'blur(4px)' },
          visible: {
            opacity: 0.7,
            filter: 'blur(0px)',
            transition: { delay: index * 0.12 + 0.32, duration: 0.4 },
          },
        }}
        className="text-[15px] text-[#1F1F1F]"
      >
        {card.description}
      </motion.p>
    </motion.div>
  );
}

function CenterFigure({
  centerControls,
  armsControls,
}: {
  centerControls: any;
  armsControls: any;
}) {

  return (
    <motion.svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      initial="hidden"
      animate={centerControls}
      variants={{
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
        },
      }}
    >
      {/* Body */}
      <motion.line
        x1="150"
        y1="160"
        x2="150"
        y2="260"
        stroke="#0F5132"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Head */}
      <motion.circle cx="150" cy="140" r="20" stroke="#0F5132" strokeWidth="3" fill="none" />

      {/* Left Arm */}
      <motion.line
        x1="150"
        y1="180"
        x2="100"
        y2="180"
        stroke="#0F5132"
        strokeWidth="3"
        strokeLinecap="round"
        animate={armsControls}
        variants={{
          hidden: { x2: 150, y2: 180 },
          visible: {
            x2: 100,
            y2: 210,
            transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
          },
        }}
      />

      {/* Right Arm */}
      <motion.line
        x1="150"
        y1="180"
        x2="200"
        y2="180"
        stroke="#0F5132"
        strokeWidth="3"
        strokeLinecap="round"
        animate={armsControls}
        variants={{
          hidden: { x2: 150, y2: 180 },
          visible: {
            x2: 200,
            y2: 210,
            transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
          },
        }}
      />

      {/* Left Leg */}
      <motion.line
        x1="150"
        y1="260"
        x2="120"
        y2="310"
        stroke="#0F5132"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Right Leg */}
      <motion.line
        x1="150"
        y1="260"
        x2="180"
        y2="310"
        stroke="#0F5132"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
