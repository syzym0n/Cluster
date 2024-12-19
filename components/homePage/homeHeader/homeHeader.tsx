import Link from "next/link";

import Logo from "@/components/logo/logo";
import HomeSearchbar from "../homeSearchbar/homeSearchbar";

interface HomeHeaderProps {
    nickname: string | null;
    search: string;
    setSearch: (value: string) => void;
}

export default function HomeHeader({ nickname, search, setSearch}: HomeHeaderProps) {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
            <HomeSearchbar 
            search={search}
            setSearch={setSearch}
            />
            <Link className="uppercase text-xl" href="/account">{nickname}</Link>
        </header>
    );
}