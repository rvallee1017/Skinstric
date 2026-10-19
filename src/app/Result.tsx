"use client";

import type { ChangeEvent } from "react";
import { useState, useRef } from "react";

export default function Result() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      if (typeof reader.result !== "string") return;
      setPreviewImage(reader.result);

      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: reader.result }),
          },
        );

        const result = await response.json();
        localStorage.setItem("demographics", JSON.stringify(result.data));
      } catch (err) {
        console.error(err);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleCameraClick = () => {
    window.location.href = "/capture";
  };

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
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

      {/* Preview Box Top-Right */}
      <div className="absolute top-20 right-6 md:right-12 z-20">
        <p className="text-xs font-medium text-gray-500 mb-1">Preview</p>
        <div className="w-24 h-24 border border-gray-300 overflow-hidden bg-gray-50 flex items-center justify-center">
          {previewImage ? (
            <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
          ) : null}
        </div>
      </div>

      {/* Diagonal background lines connecting corners */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Hidden file input for gallery */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Main Content: Two Options (Scan Face & Access Gallery) with Rotating Diamond Frames */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-16 md:gap-32">
        
        {/* Option 1: Allow A.I. to Scan Your Face (Camera) */}
        <div className="relative flex flex-col items-center justify-center cursor-pointer group" onClick={handleCameraClick}>
          <div className="absolute w-[280px] h-[280px] border border-dotted border-[#A0A4AB] rotate-0 animate-spin-slow pointer-events-none"></div>
          <div className="absolute w-[240px] h-[240px] border border-dotted border-[#A0A4AB] rotate-12 pointer-events-none"></div>
          <div className="absolute w-[320px] h-[320px] border border-dotted border-[#A0A4AB] -rotate-6 pointer-events-none"></div>

          <div className="relative z-10 w-28 h-28 rounded-full border border-black flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            </svg>
          </div>
          <div className="mt-6 text-center z-10">
            <p className="text-xs font-semibold tracking-wider leading-relaxed">
              ALLOW A.I.<br />TO SCAN YOUR FACE
            </p>
          </div>
        </div>

        {/* Option 2: Allow A.I. Access Gallery */}
        <div className="relative flex flex-col items-center justify-center cursor-pointer group" onClick={handleGalleryClick}>
          <div className="absolute w-[280px] h-[280px] border border-dotted border-[#A0A4AB] rotate-0 animate-spin-slow pointer-events-none"></div>
          <div className="absolute w-[240px] h-[240px] border border-dotted border-[#A0A4AB] rotate-12 pointer-events-none"></div>
          <div className="absolute w-[320px] h-[320px] border border-dotted border-[#A0A4AB] -rotate-6 pointer-events-none"></div>

          <div className="relative z-10 w-28 h-28 rounded-full border border-black flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="mt-6 text-center z-10">
            <p className="text-xs font-semibold tracking-wider leading-relaxed">
              ALLOW A.I.<br />ACCESS GALLERY
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Left Back Button */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <a href="/testing" className="group flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="-rotate-45 text-xs">◀</span>
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#1A1B1C]">BACK</span>
        </a>
      </div>
    </div>
  );
}

