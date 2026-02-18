import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PhoneMockup from "@/components/PhoneMockup";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-deep-void">
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PhoneMockup />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
