import Logo from "../logo/logo";
import SignUpInButton from "../signInUpButton/signInUpButton";

export default function LandingHeader() {
    return (
      <header className="flex justify-between items-center mx-16 h-[15dvh]">
        <Logo />
        <nav className="flex gap-10">
        <SignUpInButton mode={'signup'}/>
        <SignUpInButton mode={'signin'}/>
        </nav>
      </header>
    );
  }