import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { number: 1, title: 'Book Pickup', description: 'Customer schedules waste collection via app' },
  { number: 2, title: 'Driver Notified', description: 'Real-time alert sent to nearby driver' },
  { number: 3, title: 'Chat & Accept', description: 'Driver and customer communicate and confirm' },
  { number: 4, title: 'Meet & Collect', description: 'Driver arrives and collects waste' },
  { number: 5, title: 'Secure Payment', description: 'Customer completes payment securely' },
  { number: 6, title: 'Completed', description: 'Job successfully completed and tracked' },
];

const StickFigureIcon = ({ step, isActive }: { step: number; isActive: boolean }) => {
  const color = '#0F5132';
  
  switch (step) {
    case 1:
      return (
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <circle cx="24" cy="8" r="6" stroke={color} strokeWidth="1.5" />
          <path d="M24 14 L24 36" stroke={color} strokeWidth="1.5" />
          <path d="M24 22 L14 32" stroke={color} strokeWidth="1.5" />
          <path d="M24 22 L34 28" stroke={color} strokeWidth="1.5" />
          <path d="M24 36 L14 52" stroke={color} strokeWidth="1.5" />
          <path d="M24 36 L34 52" stroke={color} strokeWidth="1.5" />
          <motion.rect x="30" y="24" width="10" height="16" rx="2" stroke={color} strokeWidth="1.5" fill="none"
            animate={isActive ? { y: [24, 22, 24] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
          <motion.circle cx="35" cy="28" r="1.5" fill={color}
            animate={isActive ? { opacity: [0.3, 1, 0.3] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
        </svg>
      );
    case 2:
      return (
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <circle cx="24" cy="8" r="6" stroke={color} strokeWidth="1.5" />
          <path d="M24 14 L24 36" stroke={color} strokeWidth="1.5" />
          <path d="M24 22 L14 32" stroke={color} strokeWidth="1.5" />
          <path d="M24 22 L34 32" stroke={color} strokeWidth="1.5" />
          <path d="M24 36 L14 52" stroke={color} strokeWidth="1.5" />
          <path d="M24 36 L34 52" stroke={color} strokeWidth="1.5" />
          <motion.g animate={isActive ? { scale: [1, 1.3, 1], opacity: [1, 0, 1] } : {}} transition={{ duration: 1.5, repeat: Infinity }}>
            <circle cx="36" cy="8" r="6" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="36" cy="8" r="3" stroke={color} strokeWidth="1.5" fill="none" />
          </motion.g>
        </svg>
      );
    case 3:
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="18" cy="8" r="5" stroke={color} strokeWidth="1.5" />
          <path d="M18 13 L18 30 M18 19 L10 26 M18 19 L26 26 M18 30 L10 44 M18 30 L26 44" stroke={color} strokeWidth="1.5" />
          <circle cx="46" cy="8" r="5" stroke={color} strokeWidth="1.5" />
          <path d="M46 13 L46 30 M46 19 L38 26 M46 19 L54 26 M46 30 L38 44 M46 30 L54 44" stroke={color} strokeWidth="1.5" />
          <motion.path d="M26 20 L32 18" stroke={color} strokeWidth="1.5"
            animate={isActive ? { x: [0, 6, 0] } : {}} transition={{ duration: 1.2, repeat: Infinity }} />
          <motion.path d="M38 20 L32 18" stroke={color} strokeWidth="1.5"
            animate={isActive ? { x: [0, -6, 0] } : {}} transition={{ duration: 1.2, repeat: Infinity }} />
        </svg>
      );
    case 4:
      return (
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <circle cx="24" cy="8" r="6" stroke={color} strokeWidth="1.5" />
          <path d="M24 14 L24 36 M24 22 L14 32 M24 22 L34 28 M24 36 L14 52 M24 36 L34 52" stroke={color} strokeWidth="1.5" />
          <motion.g animate={isActive ? { y: [0, -4, 0] } : {}} transition={{ duration: 1, repeat: Infinity }}>
            <rect x="30" y="26" width="12" height="14" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M33 26 L33 23 Q33 21 35 21 L37 21 Q39 21 39 23 L39 26" stroke={color} strokeWidth="1.5" fill="none" />
          </motion.g>
        </svg>
      );
    case 5:
      return (
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <circle cx="20" cy="8" r="6" stroke={color} strokeWidth="1.5" />
          <path d="M20 14 L20 36 M20 22 L10 32 M20 22 L30 32 M20 36 L10 52 M20 36 L30 52" stroke={color} strokeWidth="1.5" />
          <motion.g animate={isActive ? { scale: [0.8, 1.1, 1] } : { scale: 1 }} transition={{ duration: 0.6 }}>
            <circle cx="38" cy="24" r="8" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M38 18 L38 30 M35 21 L38 21 Q40 21 40 23 Q40 25 38 25 L36 25 M36 25 L38 25 Q40 25 40 27 Q40 29 38 29 L35 29" stroke={color} strokeWidth="1.5" />
          </motion.g>
        </svg>
      );
    case 6:
      return (
        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
          <circle cx="20" cy="8" r="6" stroke={color} strokeWidth="1.5" />
          <path d="M20 14 L20 36 M20 22 L10 32 M20 22 L30 32 M20 36 L10 52 M20 36 L30 52" stroke={color} strokeWidth="1.5" />
          <motion.path d="M32 22 L36 26 L42 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
            initial={{ pathLength: 0 }} animate={isActive ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 0.8 }} />
        </svg>
      );
    default:
      return null;
  }
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      let currentStep = 0;
      setActiveStepIndex(0);
      
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep < steps.length) {
          setActiveStepIndex(currentStep);
        } else {
          clearInterval(interval);
        }
      }, 1000);
      
      return () => clearInterval(interval);
    } else {
      setActiveStepIndex(-1);
    }
  }, [isInView]);

  return (
    <motion.section id="how" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-2">HOW IT WORKS</h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">From booking to completion — seamless and transparent</p>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-between items-start max-w-6xl mx-auto relative">
            {steps.map((step, index) => {
              const isActive = activeStepIndex === index;
              const isCompleted = activeStepIndex > index;
              
              return (
                <div key={step.number} className="flex-1 flex flex-col items-center relative">
                  <div className="absolute top-8 left-1/2 w-full h-[2px] -z-10">
                    {index < steps.length - 1 && (
                      <>
                        <div className="h-full bg-gray-200 w-full" />
                        <motion.div className="absolute top-0 left-0 h-full bg-[#0F5132] origin-left"
                          initial={{ scaleX: 0 }} 
                          animate={{ scaleX: isCompleted ? 1 : 0 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }} 
                          style={{ width: '100%' }} />
                        {isActive && (
                          <motion.div 
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0F5132] rounded-full shadow-lg"
                            initial={{ left: '0%' }}
                            animate={{ left: '100%' }}
                            transition={{ duration: 0.8, ease: 'linear' }}
                            style={{ boxShadow: '0 0 10px rgba(15, 81, 50, 0.6)' }}
                          />
                        )}
                      </>
                    )}
                  </div>

                  <motion.div className="relative z-10 mb-6"
                    initial={{ scale: 0.85 }} 
                    animate={{ 
                      scale: isActive || isCompleted ? 1 : 0.85,
                      opacity: isActive || isCompleted ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      isActive || isCompleted ? 'bg-[#0F5132] shadow-lg' : 'bg-gray-300'
                    }`} style={{ boxShadow: isActive ? '0 0 20px rgba(15, 81, 50, 0.4)' : 'none' }}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </motion.div>

                  <motion.div className="text-center mb-6 px-2"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: isActive || isCompleted ? 1 : 0, y: isActive || isCompleted ? 0 : 8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: isActive || isCompleted ? 1 : 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                    <StickFigureIcon step={step.number} isActive={isActive} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const isActive = activeStepIndex >= index;
            return (
              <motion.div key={step.number} className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-[#0F5132]' : 'bg-gray-300'}`}>
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  <StickFigureIcon step={step.number} isActive={isActive} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
