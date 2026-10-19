
export default function NavBar() {
  return (
      <div className="absolute top-0 left-0 right-0 flex flex-row h-16 w-full justify-between items-center px-6 md:px-12 z-50">
        {/* Top Header */}
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
  );
}