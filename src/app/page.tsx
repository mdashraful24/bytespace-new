import CourseDiscovery from "@/components/landing/CourseDiscovery";
import HeroSection from "@/components/landing/HeroSection";
import LearningPaths from "@/components/landing/LearningPaths";
import LogoBand from "@/components/landing/LogoBand";
import SiteHeader from "@/components/landing/SiteHeader";
import GrowthSection from "@/components/landing/GrowthSection";
import "./landing.css";

export default function Page() {
  return (
    <main id="top" className="landing">
      <div className="grid-lines" aria-hidden="true" />
      <SiteHeader />
      <HeroSection />
      <LogoBand />
      <CourseDiscovery />
      <LearningPaths />
      <GrowthSection />
    </main>
  );
}
