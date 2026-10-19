import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white text-[#1A1B1C] select-none font-sans">
      <NavBar />

      {/* --- DESKTOP LAYOUT (>= 1024px) --- */}
      <div className="hidden xl:block">
        {/* Diagonal background lines connecting corners */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="16%"
              x2="23%"
              y2="54%"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <line
              x1="23%"
              y1="54%"
              x2="0"
              y2="93%"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <line
              x1="100%"
              y1="16%"
              x2="77%"
              y2="54%"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <line
              x1="77%"
              y1="54%"
              x2="100%"
              y2="93%"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Left Action: Discover A.I. with diamond icon */}
          <div className="absolute left-16 md:left-28 top-1/2 -translate-y-1/2 flex items-center space-x-3">
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
                DISCOVER A.I.
              </span>
            </a>
          </div>

          {/* Center Heading */}
          <div className="text-center">
            <h1 className="text-[112px] font-normal tracking-[-0.04em] leading-[0.92] text-[#1A1B1C]">
              Sophisticated
              <br />
              skincare
            </h1>
          </div>

          {/* Right Action: Take Test with diamond icon */}
          <div className="absolute right-16 md:right-28 top-1/2 -translate-y-1/2 flex items-center space-x-3">
            <a
              href="/testing"
              className="group flex items-center space-x-3 cursor-pointer"
            >
              <span className="text-xs font-semibold tracking-wider text-[#1A1B1C]">
                TAKE TEST
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

          {/* Bottom Left Description */}
          <div className="absolute bottom-12 left-16 max-w-[280px] text-[11px] font-normal leading-[1.6] text-[#1A1B1C] uppercase tracking-[0.02em]">
            <p>
              SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED
              ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
            </p>
          </div>
        </div>
      </div>

      {/* --- MOBILE / TABLET LAYOUT (< 1024px) --- */}
      <div className="xl:hidden relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] mt-16 px-6 text-center">
        {/* Rotating square frames */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] border border-dotted border-[#A0A4AB] rotate-45"></div>
          <div className="absolute w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] border border-dotted border-[#A0A4AB] rotate-45"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-md mx-auto py-12">
          <h1 className="text-[44px] sm:text-[60px] font-normal tracking-[-0.03em] leading-[1.05] text-[#1A1B1C] mb-4">
            Sophisticated
            <br />
            skincare
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed mb-8 max-w-[280px]">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>

          <a
            href="/testing"
            className="group inline-flex items-center space-x-3 cursor-pointer"
          >
            <span className="text-xs font-bold tracking-wider text-[#1A1B1C]">
              ENTER EXPERIENCE
            </span>
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
          </a>
        </div>
      </div>
    </div>
  );
}
