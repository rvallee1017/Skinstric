"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/result");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-[#1A1B1C]">

      {/* Dotted background squares */}
      <div className="absolute w-[72vmin] h-[72vmin] rotate-[35deg] border-2 border-dotted border-gray-300" />

      <div className="absolute w-[85vmin] h-[85vmin] rotate-[15deg] border-2 border-dotted border-gray-200" />

      {/* Thank You message */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl mb-8">
          Thank you!
        </h1>

        <p className="text-xl text-gray-500">
          Proceed for the next step
        </p>
      </div>
    </main>
  );
}