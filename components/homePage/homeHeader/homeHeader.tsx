import Link from "next/link";

import Logo from "@/components/logo/logo";
import HomeFilterbar from "../homeFilterbar/homeFilterbar";

interface HomeHeaderProps {
    nickname: string | null;
    classOrder: string[]; 
    filteredClass: string;
    setFilteredClass: (value: string) => void;
}

export default function HomeHeader({ nickname, classOrder, filteredClass, setFilteredClass }: HomeHeaderProps) {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
            <HomeFilterbar 
             classOrder={classOrder}
             filteredClass={filteredClass}
             setFilteredClass={setFilteredClass} 
            />
            <Link className="uppercase text-xl" href="/account">{nickname}</Link>
        </header>
    );
}