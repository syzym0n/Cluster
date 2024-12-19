import Link from "next/link";

import Logo from "@/components/logo/logo";

interface HomeHeaderProps {
    nickname: string | null ; 
  }

export default function HomeHeader({ nickname }: HomeHeaderProps) {
    return (
        <header className="flex justify-between items-center mx-16 h-[15dvh]">
            <Logo />
            <Link className="uppercase text-xl" href="/account">{nickname}</Link>
        </header>
    );
}