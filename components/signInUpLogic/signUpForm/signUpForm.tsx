"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const[nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pseudo:", nickname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Password:", confirmPassword);
  };

  return (
    <div className="h-[85dvh] flex items-center justify-center relative z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-12"
      >
        <div className="flex flex-col gap-6 pt-5">
        <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="font-visby font-light w-[40dvw] bg-baseDark placeholder-baseLight border-baseLight border rounded-lg p-5"
            placeholder="Pseudo"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-visby font-light w-[40dvw] bg-baseDark placeholder-baseLight border-baseLight border rounded-lg p-5"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-visby font-light w-[40dvw] bg-baseDark placeholder-baseLight border-baseLight border rounded-lg p-5"
            placeholder="Mot de Passe"
            required
          />
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="font-visby font-light w-[40dvw] bg-baseDark placeholder-baseLight border-baseLight border rounded-lg p-5"
            placeholder="Confirmer Mot de Passe"
            required
          />

        <div className="flex items-center gap-4 mt-4">
          <input
            type="checkbox"
            id="cgu"
            className="w-5 h-5 bg-baseDark accent-baseGreen"
            required
          />
          
          <label
            htmlFor="cgu"
            className="text-lg font-light font-visby text-baseLight"
          >
            J'accepte les <Link href="/administrative/cgu.pdf" className="text-baseGreen underline">
              Conditions Générales d'Utilisation
            </Link> de Dofus Cluster.
          </label>
        </div>

        </div>
        

        <button
          type="submit"
          className="relative w-40 h-40 cursor-pointer flex items-center justify-center group"
        >
          <p className="absolute z-10 text-center text-xl no-underline whitespace-nowrap group-hover:hidden">
            S'INSCRIRE
          </p>

          <img
            src="/assets/transparentLogo.png"
            alt="Logo Cluster"
            className="absolute w-28 h-28 object-contain z-0 group-hover:hidden"
          />

          <img
            src="/icons/basicIcon.png"
            alt="Logo Cluster"
            className="absolute w-28 h-28 object-contain z-0 hidden group-hover:block"
          />
        </button>
      </form>
    </div>
  );
}