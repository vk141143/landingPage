import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TransmissionConsole() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
      <div className="bg-[#FAF7F2] border border-[#0F5132]/10 rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#0F5132] mb-2">Get In Touch</h3>
          <p className="text-sm text-[#1F1F1F]/60 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0F5132] rounded-full animate-pulse" />
            We will respond within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-transparent border-0 border-b-2 border-[#0F5132]/20 focus:border-[#0F5132] text-[#1F1F1F] px-0 py-3 outline-none transition-all placeholder-transparent peer"
              placeholder="Name"
            />
            <label className={`absolute left-0 transition-all pointer-events-none ${
              formData.name || focusedField === 'name'
                ? '-top-5 text-xs text-[#0F5132]'
                : 'top-3 text-[#1F1F1F]/50'
            }`}>
              Name
            </label>
            {focusedField === 'name' && (
              <motion.div
                layoutId="glow"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F5132]"
              />
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full bg-transparent border-0 border-b-2 border-[#0F5132]/20 focus:border-[#0F5132] text-[#1F1F1F] px-0 py-3 outline-none transition-all placeholder-transparent peer"
              placeholder="Email"
            />
            <label className={`absolute left-0 transition-all pointer-events-none ${
              formData.email || focusedField === 'email'
                ? '-top-5 text-xs text-[#0F5132]'
                : 'top-3 text-[#1F1F1F]/50'
            }`}>
              Email
            </label>
            {focusedField === 'email' && (
              <motion.div
                layoutId="glow"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F5132]"
              />
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              rows={4}
              className="w-full bg-white border-2 border-[#0F5132]/20 focus:border-[#0F5132] text-[#1F1F1F] px-4 py-3 rounded-lg outline-none transition-all placeholder-transparent peer resize-none"
              placeholder="Message"
            />
            <label className={`absolute left-4 transition-all pointer-events-none ${
              formData.message || focusedField === 'message'
                ? '-top-5 text-xs text-[#0F5132]'
                : 'top-3 text-[#1F1F1F]/50'
            }`}>
              Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || isSuccess}
            whileHover={!isSubmitting && !isSuccess ? { scale: 1.02, boxShadow: '0 10px 40px rgba(15, 81, 50, 0.3)' } : {}}
            whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
            className="relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden bg-gradient-to-r from-[#0F5132] to-[#2D7A4F] shadow-lg"
          >
            {isSubmitting && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}

            <span className="relative z-10">
              {isSubmitting ? 'Sending...' : isSuccess ? '✓ Message Sent!' : 'Send Message'}
            </span>
          </motion.button>
        </form>

        {/* Success State */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Confetti Effect */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#0F5132' : i % 3 === 1 ? '#2D7A4F' : '#5EF2C2',
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, (Math.random() - 0.5) * 200],
                  rotate: [0, Math.random() * 360],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: 'easeOut',
                  delay: Math.random() * 0.3,
                }}
              />
            ))}

            <div className="text-center relative z-10">
              {/* Checkmark Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] flex items-center justify-center shadow-2xl"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-3xl font-bold text-[#0F5132] mb-3">Message Sent Successfully!</h4>
                <p className="text-[#1F1F1F]/70 text-lg">We will get back to you within 24 hours.</p>
              </motion.div>

              {/* Ripple Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#0F5132] rounded-full"
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#2D7A4F] rounded-full"
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
