"use client";

import React, { useState } from "react";

export default function RecuperationForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <div className="h-[85dvh] flex items-center justify-center relative z-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-24"
      >
        <div className="flex flex-col gap-6 pt-14">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-visby font-light w-[40dvw] bg-baseDark placeholder-baseLight border-baseLight border rounded-lg p-5"
            placeholder="Email"
            required
          />

        </div>

        <button
          type="submit"
          className="relative w-40 h-40 cursor-pointer flex items-center justify-center group"
        >
          <p className="absolute z-10 text-center text-xl no-underline whitespace-nowrap group-hover:hidden">
            RÉCUPÉRER SON MOT DE PASSE
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