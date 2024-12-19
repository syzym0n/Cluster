import LandingBanner from "@/components/landingBanner/landingBanner";
import LandingFooter from "@/components/landingFooter/landingFooter";
import LandingHeader from "@/components/landingHeader/landingHeader";

export default function Landing() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <LandingHeader />
      <LandingBanner/>
      <LandingFooter />
    </div>
  );
}
