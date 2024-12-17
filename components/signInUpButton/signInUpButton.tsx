import Link from 'next/link';

interface SignUpInButtonProps {
    mode: 'signin' | 'signup';
}

export default function SignUpInButton({ mode }: SignUpInButtonProps) {
    const buttonText = mode === 'signin' ? 'Connexion' : "S'inscrire";
    const buttonClasses =
      mode === 'signin'
        ? 'font-visby font-semibold text-lg border-baseLight border-2 border-solid py-2 px-7 rounded-full'
        : 'font-visby font-semibold text-lg text-baseDark bg-baseLight border-2 py-2 px-7 rounded-full';
  
    return (
      <Link href={`/${mode}`} passHref>
        <p className={buttonClasses}>
          {buttonText}
        </p>
      </Link>
    );
  }