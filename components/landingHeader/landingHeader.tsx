import Logo from "../logo/logo";
import SignUpInButton from "../signInUpButton/signInUpButton";

export default function LandingHeader() {
    return (
      <div className="flex justify-between">
        <Logo />
        <nav className="flex gap-10">
        <SignUpInButton mode={'signup'}/>
        <SignUpInButton mode={'signin'}/>
        </nav>
      </div>
    );
  }