import LandingBanner from "@/components/landingBanner/landingBanner";
import LandingHeader from "@/components/landingHeader/landingHeader";

export default function Landing() {
  return (
    <main className="flex flex-col gap-10">
      <LandingHeader />
      <LandingBanner/>
    </main>
  );
}
