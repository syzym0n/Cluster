interface SignUpInButtonProps {
    mode: 'signin' | 'signup';
}

export default function SignUpInButton({ mode }: SignUpInButtonProps) {

    if(mode === 'signin'){
        return (
        <p className="font-visby font-semibold text-lg
        border-baseLight border-2 border-solid py-2 px-7 rounded-full">
            Connexion
        </p>
        );
    } else if(mode === 'signup'){
        return (
          <p className="font-visby font-semibold text-lg text-baseDark
          bg-baseLight border-2 py-2 px-7 rounded-full">
            S'inscrire
        </p>
        );
    } else {
        return null;
    }

  }