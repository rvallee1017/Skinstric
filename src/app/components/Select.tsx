import NavBar from "./NavBar";

export default function Select() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white text-[#1A1B1C] select-none font-sans">
      <NavBar />

      {/* A.I. Analysis Title Top-Left */}
      <div className="absolute top-20 left-6 md:left-12 z-20 text-left">
        <h1 className="text-sm font-bold tracking-wider text-[#1A1B1C]">
          A.I. ANALYSIS
        </h1>
        <p className="text-xs text-gray-500 uppercase mt-1 leading-relaxed">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
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

      {/* Main Center Diamond Grid & Dotted Outline Frame */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-32 lg:flex-row lg:gap-32">
        {/* Large Dotted Diamond Frame matching the screenshot */}
        <div className="absolute w-[440px] h-[440px] border border-dotted border-[#A0A4AB] rotate-45 pointer-events-none"></div>

        {/* Diamond Buttons Grid */}
        <div className="relative z-20 grid grid-cols-3 grid-rows-3 gap-2">
          {/* Top: Demographics */}
          <div className="flex items-center justify-center col-start-2 row-start-1">
            <a className="text-[#1A1B1C] no-underline" href="/summary">
              <button className="w-36 h-36 bg-[#F3F3F4] hover:bg-[#E1E1E2] transform rotate-45 flex items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 shadow-sm">
                <span className="transform -rotate-45 text-xs font-semibold tracking-wider text-[#1A1B1C]">
                  DEMOGRAPHICS
                </span>
              </button>
            </a>
          </div>

          {/* Left: Cosmetic Concerns */}
          <div className="flex items-center justify-center col-start-1 row-start-2">
            <button className="w-36 h-36 bg-[#F3F3F4] hover:bg-[#E1E1E2] transform rotate-45 flex items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 shadow-sm">
              <span className="transform -rotate-45 text-xs font-semibold tracking-wider text-[#1A1B1C] px-2">
                COSMETIC CONCERNS
              </span>
            </button>
          </div>

          {/* Right: Skin Type Details (Active/Highlighted state) */}
          <div className="flex items-center justify-center col-start-3 row-start-2">
            <button className="w-36 h-36 bg-[#D9D9D9] hover:bg-[#CCCCCC] transform rotate-45 flex items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 shadow-sm">
              <span className="transform -rotate-45 text-xs font-semibold tracking-wider text-[#1A1B1C] px-2">
                SKIN TYPE DETAILS
              </span>
            </button>
          </div>

          {/* Bottom: Weather */}
          <div className="flex items-center justify-center col-start-2 row-start-3">
            <button className="w-36 h-36 bg-[#F9FAFB] hover:bg-gray-200 transform rotate-45 flex items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 shadow-sm">
              <span className="transform -rotate-45 text-xs font-semibold tracking-wider text-[#1A1B1C]">
                WEATHER
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation: Back & Get Summary */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20">
        <a
          href="/result"
          className="group flex items-center space-x-3 cursor-pointer text-[#1A1B1C] no-underline"
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

      <div className="absolute bottom-8 right-6 md:right-12 z-20">
        <a
          href="/summary"
          className="group flex items-center space-x-3 cursor-pointer text-[#1A1B1C] no-underline"
        >
          <span className="text-xs font-semibold tracking-wider text-[#1A1B1C]">
            GET SUMMARY
          </span>
          <div className="w-10 h-10 border border-black rotate-45 flex items-center justify-center group-hover:scale-105 transition-transform">
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
        </a>
      </div>
    </div>
  );
}
