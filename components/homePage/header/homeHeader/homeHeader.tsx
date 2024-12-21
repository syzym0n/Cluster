import Link from "next/link";

import Logo from "@/components/logo/logo";
import HomeSearchbar from "../homeSearchbar/homeSearchbar";

interface HomeHeaderProps {
    nickname: string | null;
    search: string;
    setSearch: (value: string) => void;
    setFilteredType: (value: string) => void;
}

export default function HomeHeader({ nickname, search, setSearch, setFilteredType}: HomeHeaderProps) {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
            <HomeSearchbar 
            search={search}
            setSearch={setSearch}
            setFilteredType={setFilteredType}
            />
            <Link className="uppercase text-xl" href="/account">{nickname}</Link>
        </header>
    );
}