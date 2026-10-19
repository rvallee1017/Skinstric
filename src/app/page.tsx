export default function Home() {
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

      {/* Diagonal background lines connecting corners */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Left Action: Discover A.I. with diamond icon */}
        <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center space-x-4">
          <a href="/testing" className="group flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="-rotate-45 text-xs">◀</span>
            </div>
            <span className="text-xs font-medium tracking-wider text-[#1A1B1C]">DISCOVER A.I.</span>
          </a>
        </div>

        {/* Center Heading */}
        <div className="text-center">
          <h1 className="text-[56px] sm:text-[72px] lg:text-[100px] font-normal tracking-[-0.03em] leading-[0.95] text-[#1A1B1C]">
            Sophisticated
            <br />
            skincare
          </h1>
        </div>

        {/* Right Action: Take Test with diamond icon */}
        <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center space-x-4">
          <a href="/testing" className="group flex items-center space-x-3 cursor-pointer">
            <span className="text-xs font-medium tracking-wider text-[#1A1B1C]">TAKE TEST</span>
            <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="-rotate-45 text-xs">▶</span>
            </div>
          </a>
        </div>

        {/* Bottom Left Description */}
        <div className="absolute bottom-8 left-8 md:left-12 max-w-[320px] text-xs font-normal leading-relaxed text-[#1A1B1C] uppercase tracking-wide">
          <p>
            Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
          </p>
        </div>
      </div>
    </div>
  );
}


