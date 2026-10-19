export default function Camera() {
  return (
    <body className="__classNameName_5f0add antialiased text-[#1A1B1C] ">
      <div className="flex flex-row h-16 w-full justify-between py-3 mb-3 relative z-1000">
        <div className="flex flex-row pt-1 scale-75 justify-center items-center">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-4 text-[#1A1B1C] z-1000"
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
            data-nimg="1"
            className="w-1 h-4.25"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202710.61a74ed4.png&amp;w=16&amp;q=75 1x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202710.61a74ed4.png&amp;w=16&amp;q=75"
          />
          <p className="text-[#1a1b1c83] text-opacity-70  font-semibold text-sm ml-1.5 mr-1.5">
            INTRO
          </p>
          <img
            alt="right-bracket"
            loading="lazy"
            width="5"
            height="19"
            decoding="async"
            data-nimg="1"
            className="w-1 h-4.25"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202711.b2b3b291.png&amp;w=16&amp;q=75 1x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202711.b2b3b291.png&amp;w=16&amp;q=75"
          />
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-4">
          ENTER CODE
        </button>
      </div>
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/result">
              <div>
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                  <span className="-rotate-45 text-xs font-semibold sm:hidden text-[#FCFCFC]">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute left-3.75 bottom-3.25 scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">
                    BACK
                  </span>
                </div>
              </div>
            </a>
          </div>
          <canvas className="hidden"></canvas>
        </div>
      </div>
    </body>
  );
}
