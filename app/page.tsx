import LandingBanner from "@/components/landingPage/landingBanner/landingBanner";
import LandingFooter from "@/components/landingPage/landingFooter/landingFooter";
import LandingHeader from "@/components/landingPage/landingHeader/landingHeader";

export default function Landing() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <LandingHeader />
      <LandingBanner/>
      <LandingFooter />
    </div>
  );
}
