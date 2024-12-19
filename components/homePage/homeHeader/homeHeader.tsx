import Logo from "@/components/logo/logo";

export default function HomeHeader() {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
        </header>
    );
}