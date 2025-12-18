import { motion } from 'framer-motion';

interface AvatarStageProps {
  isAvatarSpeaking: boolean;
}

export default function AvatarStage({ isAvatarSpeaking }: AvatarStageProps) {
  return (
    <div className="sticky top-24 h-[600px] flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        {/* Background glow */}
        <motion.div
          animate={{
            scale: isAvatarSpeaking ? [1, 1.05, 1] : 1,
            opacity: isAvatarSpeaking ? [0.3, 0.5, 0.3] : 0.3,
          }}
          transition={{
            duration: isAvatarSpeaking ? 2 : 0.5,
            repeat: isAvatarSpeaking ? Infinity : 0,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#0F5132]/20 to-[#2D7A4F]/10 rounded-full blur-3xl"
        />

        {/* Avatar container */}
        <motion.div
          animate={{
            y: isAvatarSpeaking ? [0, -8, 0] : 0,
          }}
          transition={{
            duration: isAvatarSpeaking ? 3 : 0.5,
            repeat: isAvatarSpeaking ? Infinity : 0,
            ease: 'easeInOut',
          }}
          className="relative z-10 w-full h-full bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden"
        >
          {/* Avatar illustration */}
          <div className="relative">
            {/* Head */}
            <motion.div
              animate={{
                rotate: isAvatarSpeaking ? [0, -3, 3, 0] : 0,
              }}
              transition={{
                duration: isAvatarSpeaking ? 4 : 0.5,
                repeat: isAvatarSpeaking ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] shadow-xl flex items-center justify-center"
            >
              {/* Face */}
              <div className="relative">
                {/* Eyes */}
                <div className="flex gap-4 mb-4">
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Mouth - animated when speaking */}
                <motion.div
                  animate={{
                    scaleY: isAvatarSpeaking ? [1, 1.3, 0.8, 1] : 1,
                  }}
                  transition={{
                    duration: isAvatarSpeaking ? 0.6 : 0.3,
                    repeat: isAvatarSpeaking ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                  className="w-8 h-2 bg-white rounded-full mx-auto"
                />
              </div>
            </motion.div>

            {/* Body */}
            <motion.div
              animate={{
                scaleY: isAvatarSpeaking ? [1, 1.02, 1] : 1,
              }}
              transition={{
                duration: isAvatarSpeaking ? 3 : 0.5,
                repeat: isAvatarSpeaking ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="mt-4 w-24 h-32 bg-gradient-to-b from-[#0F5132] to-[#2D7A4F] rounded-2xl mx-auto"
            />
          </div>

          {/* Speaking indicator */}
          {isAvatarSpeaking && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-8 flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                  className="w-2 h-2 bg-[#0F5132] rounded-full"
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
