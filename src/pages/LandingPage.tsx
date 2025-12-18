import AnimatedNavbar from '../components/AnimatedNavbar';
import Hero from '../sections/Hero';
import Highlights from '../sections/Highlights';
// import About from '../sections/About';
import HowItWorks from '../sections/HowItWorks';
import WhyTrustUs from '../sections/WhyTrustUs';
import WhoIsThisFor from '../sections/WhoIsThisFor';
import WhyDifferent from '../sections/WhyDifferent';
import SafetySecurity from '../sections/SafetySecurity';
import SocialProof from '../sections/SocialProof';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

export default function LandingPage() {
  return (
    <>
      <AnimatedNavbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Highlights />
        {/* <About /> */}
        <HowItWorks />
        <WhyTrustUs />
        <WhoIsThisFor />
        <WhyDifferent />
        <SafetySecurity />
        <SocialProof />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
