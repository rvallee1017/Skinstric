
"use client";

import type { ChangeEvent } from "react";

export default function Result() {
        const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

  reader.onloadend = async () => {
    const base64String = reader.result;

    const response = await fetch(
      "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64String }),
      }
    );

    const result = await response.json();
    localStorage.setItem("demographics", JSON.stringify(result.data));
  };

  reader.readAsDataURL(file);
};

    return (
        <div className="antialiased text-[#1A1B1C]">
            <div className="relative z-1000 mb-3 flex h-16 w-full flex-row justify-between py-3">
                <div className="flex scale-75 flex-row items-center justify-center pt-1">
                    <a
                        className="mr-2 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold leading-4 text-[#1A1B1C] transition-colors line-clamp-4"
                        href="/"
                    >
                        SKINSTRIC
                    </a>
                    <img
                        alt="left-bracket"
                        loading="lazy"
                        width="5"
                        height="19"
                        decoding="async"
                        className="h-4.25 w-1"
                        style={{ color: "transparent" }}
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202710.61a74ed4.png&w=16&q=75"
                    />
                    <p className="mx-1.5 text-sm font-semibold text-[#1a1b1c83] text-opacity-70">
                        INTRO
                    </p>
                    <img
                        alt="right-bracket"
                        loading="lazy"
                        width="5"
                        height="19"
                        decoding="async"
                        className="h-4.25 w-1"
                        style={{ color: "transparent" }}
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202711.b2b3b291.png&w=16&q=75"
                    />
                </div>
                <button className="mx-4 h-9 scale-[0.8] bg-[#1A1B1C] px-4 py-2 text-[10px] leading-4 font-semibold text-[#FCFCFC] shadow transition-colors hover:bg-primary/90">
                    ENTER CODE
                </button>
            </div>
            <div className="absolute top-10 left-8 mt-5 text-left">
                <h1 className="text-base font-semibold leading-6 tracking-tight">
                    A.I. ANALYSIS
                </h1>
                <p className="mt-1 text-sm leading-6 text-muted-foreground uppercase">
                    A.I. has estimated the following.
                    <br />
                    Fix estimated information if needed.
                </p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    aria-label="Upload an image for analysis"
                    className="mt-4 text-sm"
                />
            </div>
        </div>
    );
}