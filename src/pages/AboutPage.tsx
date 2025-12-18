import { motion } from 'framer-motion';
import AnimatedNavbar from '../components/AnimatedNavbar';
import AboutHero from '../sections/about/AboutHero';
import WhoWeAre from '../sections/about/WhoWeAre';
import WhatWeDo from '../sections/about/WhatWeDo';
import OurStory from '../sections/about/OurStory';
import MissionVision from '../sections/about/MissionVision';
import Values from '../sections/about/Values';
import ClosingCTA from '../sections/about/ClosingCTA';
import Footer from '../sections/Footer';

export default function AboutPage() {
  return (
    <>
      <AnimatedNavbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full overflow-x-hidden bg-[#FAF7F2]"
      >
        <AboutHero />
        <WhoWeAre />
        <WhatWeDo />
        <OurStory />
        <MissionVision />
        <Values />
        <ClosingCTA />
        <Footer />
      </motion.main>
    </>
  );
}
