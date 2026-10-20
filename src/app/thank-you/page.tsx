"use client";

import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-[#1A1B1C]">
      {/* Dotted background squares */}
      <div className="absolute w-[72vmin] h-[72vmin] rotate-[35deg] border-2 border-dotted border-gray-300" />

      <div className="absolute w-[85vmin] h-[85vmin] rotate-[15deg] border-2 border-dotted border-gray-200" />

      {/* Thank You message */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl mb-8">Thank you!</h1>

        <p className="text-xl text-gray-500">Proceed for the next step</p>
        <button
          onClick={() => router.push("/result")}
          className="fixed bottom-12 right-12 z-20 flex items-center gap-6 proceed-slide"
        >
          <span className="text-sm font-semibold">PROCEED</span>

           <div className="w-9 h-9 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                className="-rotate-45"
                width="8"
                height="10"
                viewBox="0 0 8 10"
                aria-hidden="true"
              >
                <polygon points="0,0 8,5 0,10" fill="#1A1B1C" />
              </svg>
            </div>
        </button>
      </div>
    </main>
  );
}
