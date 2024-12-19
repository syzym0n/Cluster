import LandingHeader from "@/components/landingHeader/landingHeader";
import RecuperationForm from "@/components/recuperationForm/recuperationForm";

export default function RecuperationPage() {
    return (
        <div className="h-dvh w-dvw relative overflow-hidden">
        <LandingHeader />
        <RecuperationForm />
        <img
            src="/icons/basicIcon.png"
            alt="Logo Cluster"
            className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain z-0"
        />
        </div>
    );
}