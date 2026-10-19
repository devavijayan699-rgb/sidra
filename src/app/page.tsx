import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import ImpactStats from "@/components/sections/ImpactStats";
import FlagshipProjects from "@/components/sections/FlagshipProjects";
import CommunityGallery from "@/components/sections/CommunityGallery";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import BlogNewsSection from "@/components/sections/BlogNewsSection";
import DonationCTA from "@/components/sections/DonationCTA";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ImpactStats />
      <FlagshipProjects />
      <CommunityGallery />
      <DepartmentsSection />
      <BlogNewsSection />
      <DonationCTA />
    </main>
  );
}
