import Link from 'next/link';

export default function Logo() {
    return (
      <Link href='/'
      className="flex items-center gap-3">
        <img src="/icons/basicIcon.png" alt="A server surrounded by magic sparkles." 
        className="w-10"/>
        <h1 className="text-xl">CLUSTER</h1>
      </Link>
    );
  }