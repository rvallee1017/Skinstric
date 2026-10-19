'use client';

import { useState } from "react";

export default function Testing() {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      window.location.href = "/result";
    } catch (err) {
      console.error(err);
      window.location.href = "/result";
    }
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white text-[#1A1B1C] select-none font-sans">
      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 flex flex-row h-16 w-full justify-between items-center px-6 md:px-12 z-50">
        <div className="flex flex-row items-center space-x-2">
          <a
            className="font-semibold text-sm tracking-tight text-[#1A1B1C]"
            href="/"
          >
            SKINSTRIC
          </a>
          <div className="flex items-center text-xs text-gray-400 font-semibold tracking-wide">
            <span>[</span>
            <span className="mx-1 text-gray-500">INTRO</span>
            <span>]</span>
          </div>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors text-[#FCFCFC] text-[10px] bg-[#1A1B1C] px-4 py-2 uppercase tracking-wider">
          ENTER CODE
        </button>
      </div>

      {/* Subtitle Top-Left */}
      <div className="absolute top-20 left-6 md:left-12 z-20">
        <p className="text-xs font-semibold tracking-wider text-[#1A1B1C]">
          TO START ANALYSIS
        </p>
      </div>

      {/* Diagonal background lines connecting corners */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Center Input Form & Rotating Dotted Squares */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Rotating dotted square frames */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] border border-dotted border-[#A0A4AB] rotate-0 animate-spin-slow"></div>
          <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] border border-dotted border-[#A0A4AB] rotate-12"></div>
          <div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] border border-dotted border-[#A0A4AB] -rotate-6"></div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">
            CLICK TO TYPE
          </p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              className="text-4xl sm:text-6xl font-normal text-center bg-transparent border-b border-[#1A1B1C] focus:outline-none appearance-none w-[320px] sm:w-[480px] pb-2 tracking-tight text-[#1A1B1C]"
              placeholder="Introduce Yourself"
              type="text"
              autoComplete="off"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Left Back Button */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <a href="/" className="group flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="-rotate-45 text-xs">◀</span>
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#1A1B1C]">BACK</span>
        </a>
      </div>
    </div>
  );
}

