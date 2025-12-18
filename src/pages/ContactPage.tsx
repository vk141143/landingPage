import { motion } from 'framer-motion';
import AnimatedNavbar from '../components/AnimatedNavbar';
import AssistantSection from '../components/contact/AssistantSection';
import TransmissionConsole from '../components/contact/TransmissionConsole';
import Footer from '../sections/Footer';

export default function ContactPage() {
  return (
    <>
      <AnimatedNavbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white"
      >
        <div className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <AssistantSection />
            </div>
            <div className="lg:col-span-3">
              <TransmissionConsole />
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
