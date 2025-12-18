import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative w-full bg-[#0F5132] text-white py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LiftAway</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Fast. Simple. Reliable Waste Removal.
            </p>
            <p className="text-white/60 text-sm">
              Making waste management smarter, one pickup at a time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              {['For Households', 'For Businesses', 'For Drivers', 'Pricing'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation('/about')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              {['Careers', 'Blog', 'Press Kit'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/70">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </button>

          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/70">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 LiftAway. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
