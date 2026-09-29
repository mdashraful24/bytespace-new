import CourseDiscovery from "@/components/landing/CourseDiscovery";
import GrowthSection from "@/components/landing/GrowthSection";
import HeroSection from "@/components/landing/HeroSection";
import LearningPaths from "@/components/landing/LearningPaths";
import LogoBand from "@/components/landing/LogoBand";
import SiteHeader from "@/components/landing/SiteHeader";
import "./landing.css";
import CreatorSection from "@/components/landing/CreatorSection";

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
      <CreatorSection />
    </main>
  );
}
