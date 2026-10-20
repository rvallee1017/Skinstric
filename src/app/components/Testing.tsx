"use client";

import { useState } from "react";
import NavBar from "./NavBar";

export default function Testing() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [step, setStep] = useState<"name" | "city">("name");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (step === "name") {
    if (!name.trim()) return;
    setStep("city");
    return;
  }

  if (!city.trim()) return;
  setLoading(true);

  try {
    const response = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          location: city.trim(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    window.location.href = "/thank-you";
  } catch (error) {
    console.error("Submission failed:", error);
    setLoading(false);
  }
};

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white text-[#1A1B1C] select-none font-sans">
      <NavBar />

      {/* Subtitle Top-Left */}
      <div className="absolute top-20 left-6 md:left-12 z-20">
        <p className="text-xs font-semibold tracking-wider text-[#1A1B1C]">
          TO START ANALYSIS
        </p>
      </div>

      {/* Diagonal background lines connecting corners */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
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

        {loading ? (
  <div className="text-center">
    <p className="text-2xl text-gray-500 mb-6">
      Processing submission
    </p>

    <div className="flex justify-center gap-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  </div>
) : (
  <>

       <div className="relative z-20 flex flex-col items-center justify-center text-center">
  <p className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-3">
    CLICK TO TYPE
  </p>

  <form onSubmit={handleSubmit} className="relative">
    <input
      key={step}
      className="text-4xl sm:text-6xl font-normal text-center bg-transparent border-b border-[#1A1B1C] focus:outline-none w-[320px] sm:w-[480px] pb-2 tracking-tight text-[#1A1B1C]"
      placeholder={
        step === "name" ? "Introduce Yourself" : "Where are you from?"
      }
      type="text"
      autoComplete="off"
      autoFocus
      value={step === "name" ? name : city}
      onChange={(e) => {
        if (step === "name") {
          setName(e.target.value);
        } else {
          setCity(e.target.value);
        }
      }}
    />

    <button type="submit" className="sr-only">
      Continue
    </button>
  </form>
  </div>
  </>
)}

    </div>

      {/* Bottom Left Back Button */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <a
          href="/"
          className="group flex items-center space-x-3 cursor-pointer"
        >
          <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              className="-rotate-45"
              width="8"
              height="10"
              viewBox="0 0 8 10"
              aria-hidden="true"
            >
              <polygon points="8,0 0,5 8,10" fill="#1A1B1C" />
            </svg>
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#1A1B1C]">
            BACK
          </span>
        </a>
      </div>
    </div>
  );
}
