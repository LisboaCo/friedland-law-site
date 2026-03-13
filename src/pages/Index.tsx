import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemAmplification from "@/components/home/ProblemAmplification";
import ResultsSection from "@/components/home/ResultsSection";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GuaranteeSection from "@/components/home/GuaranteeSection";
import LocationsSection from "@/components/home/LocationsSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Friedland Law | Personal Injury Attorneys | Your Fight. Our Battle.™</title>
        <meta name="description" content="Friedland Law provides direct attorney access for personal injury cases across Florida, New York & New Jersey. No win, no fee. Call 800-210-HURT." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemAmplification />
        <ResultsSection />
        <PracticeAreasGrid />
        <TestimonialsSection />
        <GuaranteeSection />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Index;
