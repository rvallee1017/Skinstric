"use client";

import type { ChangeEvent } from "react";
import { useState, useRef } from "react";
import NavBar from "./NavBar";

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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-[#1A1B1C] select-none font-sans">
      {/* Top Header */}
      <NavBar />

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
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center min-h-screen w-full max-w-[1250px] mx-auto px-6 gap-y-40 pt-48 pb-32 md:py-20">
        {" "}
        {/* Option 1: Allow A.I. to Scan Your Face (Camera) */}
        <div
          className="relative flex flex-col items-center justify-center cursor-pointer group"
          onClick={handleCameraClick}
        >
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] rotate-0 animate-spin-slow pointer-events-none"></div>
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] rotate-12 pointer-events-none"></div>
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] -rotate-6 pointer-events-none"></div>

          <div className="relative z-10 w-28 h-28 rounded-full border border-black flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <img src="./camera-icon.webp"></img>
          </div>
          <div className="mt-6 text-center z-10">
            <p className="text-xs font-semibold tracking-wider leading-relaxed">
              ALLOW A.I.
              <br />
              TO SCAN YOUR FACE
            </p>
          </div>
        </div>
        {/* Option 2: Allow A.I. Access Gallery */}
        <div
          className="relative flex flex-col items-center justify-center cursor-pointer group"
          onClick={handleGalleryClick}
        >
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] rotate-0 animate-spin-slow pointer-events-none"></div>
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] rotate-12 pointer-events-none"></div>
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-dotted border-[#A0A4AB] -rotate-6 pointer-events-none"></div>

          <div className="relative z-10 w-28 h-28 rounded-full border border-black flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <img src="./gallery-icon.webp"></img>
          </div>
          <div className="mt-6 text-center z-10">
            <p className="text-xs font-semibold tracking-wider leading-relaxed">
              ALLOW A.I.
              <br />
              ACCESS GALLERY
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Left Back Button */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <a
          href="/testing"
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
