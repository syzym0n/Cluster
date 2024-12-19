import LandingHeader from "@/components/landingPage/landingHeader/landingHeader";
import SignInForm from "@/components/signInUpLogic/signInForm/signInForm";

export default function SignInPage() {
    return (
        <div className="h-dvh w-dvw relative overflow-hidden">
        <LandingHeader />
        <SignInForm />
        <img
            src="/icons/basicIcon.png"
            alt="Logo Cluster"
            className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain z-0"
        />
        </div>
    );
}