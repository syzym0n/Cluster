import LandingHeader from "@/components/landingPage/landingHeader/landingHeader";
import SignUpForm from "@/components/signInUpLogic/signUpForm/signUpForm"

export default function SignUpPage() {
    return (
        <div>
        <LandingHeader />
        <SignUpForm />
        <img
            src="/icons/basicIcon.png"
            alt="Logo Cluster"
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain z-0"
        />
        </div>
    );
}