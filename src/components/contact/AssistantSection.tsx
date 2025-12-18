import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const intentOptions = [
  { id: 'support', label: 'Support', icon: '🛟' },
  { id: 'sales', label: 'Sales', icon: '💼' },
  { id: 'partnership', label: 'Partnership', icon: '🤝' },
  { id: 'feedback', label: 'Feedback', icon: '💬' },
];

export default function AssistantSection() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setShowGreeting(true), 500);
    setTimeout(() => setShowQuestion(true), 2000);
  }, []);

  return (
    <div className="space-y-8">
      {/* AI Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center lg:justify-start"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl"
              >
                🤖
              </motion.div>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#0F5132] blur-xl -z-10"
          />
        </motion.div>
      </motion.div>

      {/* Dialogue */}
      <div className="space-y-4 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showGreeting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#0F5132] mb-2">Hi. I am LiftAway Assist.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showQuestion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#1F1F1F]/70">What would you like to contact us about?</p>
        </motion.div>
      </div>

      {/* Intent Options */}
      {showQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          {intentOptions.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(15, 81, 50, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIntent(option.id)}
              className={`p-4 rounded-xl border transition-all ${
                selectedIntent === option.id
                  ? 'bg-[#0F5132]/10 border-[#0F5132] shadow-lg'
                  : 'bg-[#FAF7F2] border-[#0F5132]/20 hover:border-[#0F5132]/50'
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="text-sm font-medium text-[#0F5132]">{option.label}</div>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
