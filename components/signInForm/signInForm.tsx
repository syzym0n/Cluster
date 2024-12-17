"use client"

import React, { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-[85dvh] flex items-center justify-center relative z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-24"
      >
        <div className="flex flex-col gap-12 pt-14">     
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
        </div>

              <button
        type="submit"
        className="relative w-40 h-40 cursor-pointer flex items-center justify-center"
      >

        <p className="absolute z-10 text-center text-xl no-underline whitespace-nowrap">
          SE CONNECTER
        </p>

        <img
          src="/assets/transparentLogo.png"
          alt="Logo Cluster"
          className="absolute w-28 h-28 object-contain z-0"
        />

      </button>



      </form>
    </div>
  );
}