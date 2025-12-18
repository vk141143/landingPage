import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

enum NavStage {
  CENTER = 0,
  SPLIT = 1,
  READY = 2,
}

export default function AnimatedNavbar() {
  const [stage, setStage] = useState<NavStage>(NavStage.CENTER);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('navAnimated');
    
    if (hasAnimated) {
      setStage(NavStage.READY);
      return;
    }

    const timer1 = setTimeout(() => setStage(NavStage.SPLIT), 600);
    const timer2 = setTimeout(() => {
      setStage(NavStage.READY);
      sessionStorage.setItem('navAnimated', 'true');
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'How', path: '/#how' },
    { label: 'Who', path: '/#who' },
    { label: 'Why', path: '/#why' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMenuClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = path.substring(2);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.substring(2);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: stage === NavStage.CENTER ? '50vw' : 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: stage === NavStage.CENTER ? 0 : stage === NavStage.SPLIT ? '-40vw' : 0,
            }}
            transition={{
              duration: stage === NavStage.CENTER ? 0.6 : 1.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src="/logo.jpg" alt="LiftAway Logo" className="w-10 h-10 rounded-lg shadow-md object-cover" />
            {stage === NavStage.READY && (
              <motion.span
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-bold text-[#0F5132] hidden md:block"
              >
                LiftAway
              </motion.span>
            )}
          </motion.div>

          {/* Center Menu Items */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-5">
            {stage === NavStage.READY &&
              menuItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleMenuClick(item.path)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
                  className="relative text-[#1F1F1F] font-medium hover:text-[#0F5132] transition-colors group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0F5132] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
          </div>

          {/* Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: stage === NavStage.CENTER ? '-50vw' : 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: stage === NavStage.CENTER ? 0 : stage === NavStage.SPLIT ? '40vw' : 0,
            }}
            transition={{
              duration: stage === NavStage.CENTER ? 0.6 : 1.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#0F5132] font-semibold px-4 py-2 rounded-lg hover:bg-[#D1E7DD]/30 transition-colors"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(15, 81, 50, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0F5132] to-[#1a7a4f] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>

      {/* Mobile Menu Button (Bottom Left) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === NavStage.READY ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-[#0F5132] to-[#2D7A4F] rounded-full shadow-lg flex items-center justify-center"
      >
        <motion.div
          animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-24 left-6 bg-white rounded-2xl shadow-2xl p-6 min-w-[200px]"
            >
              <div className="space-y-4">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    onClick={() => handleMenuClick(item.path)}
                    className="w-full text-left px-4 py-3 text-[#0F5132] font-medium hover:bg-[#D1E7DD]/30 rounded-lg transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                  className="pt-4 border-t border-[#0F5132]/10 space-y-3"
                >
                  <button 
                    className="w-full text-left px-4 py-2 text-[#0F5132] font-semibold hover:bg-[#D1E7DD]/30 rounded-lg transition-colors"
                  >
                    Login
                  </button>
                  <button 
                    className="w-full px-4 py-2 bg-gradient-to-r from-[#0F5132] to-[#2D7A4F] text-white font-semibold rounded-lg shadow-md"
                  >
                    Sign Up
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
