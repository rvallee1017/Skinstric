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

      {/* Main Center Diamond Grid & Dotted Outline Frame */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-32 lg:flex-row lg:gap-32">
      

        {/* Diamond Buttons Grid */}
       
         <div className="relative group">
  <div className="absolute -inset-16 rotate-45 border-2 border-dotted border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  <div className="grid grid-cols-2 gap-2 rotate-45">
    {["Demographics", "Skin Type Details", "Cosmetic Concerns", "Weather"].map((label) => (
      <button key={label} className="w-40 h-40 bg-gray-100 hover:bg-gray-300 transition-colors flex items-center justify-center">
        <span className="-rotate-45 text-sm font-semibold uppercase text-center">{label}</span>
      </button>
    ))}
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
