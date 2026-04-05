import dynamic from "next/dynamic";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Capabilities } from "@/components/sections/Capabilities";
import { CTASection } from "@/components/sections/CTASection";

// Dynamic import for Hero (uses 3D / client-side only)
const HeroSection = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#E2E8F0] border-t-[#2563EB] animate-spin mx-auto mb-4" />
        <p className="text-[#94A3B8] font-inter">Loading...</p>
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <TrustMetrics />
      <FeaturedProjects />
      <Capabilities />
      <CTASection />
    </div>
  );
}