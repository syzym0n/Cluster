import Link from "next/link";

import Logo from "@/components/logo/logo";
import HomeFilterbar from "../homeFilterbar/homeFilterbar";

interface HomeHeaderProps {
    nickname: string | null;
    filteredClass: string;
    setFilteredClass: (value: string) => void;
}

export default function HomeHeader({ nickname, filteredClass, setFilteredClass }: HomeHeaderProps) {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
            <HomeFilterbar 
             filteredClass={filteredClass}
             setFilteredClass={setFilteredClass} 
            />
            <Link className="uppercase text-xl" href="/account">{nickname}</Link>
        </header>
    );
}