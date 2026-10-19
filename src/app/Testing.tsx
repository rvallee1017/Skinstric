'use client';


export default function Testing() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() ?? "";

    await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
  };


  return (
    <div className="antialiased text-[#1A1B1C]">
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
        <div className="flex flex-row pt-1 scale-75 justify-center items-center">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000"
            href="/"
          >
            SKINSTRIC
          </a>
          <img
            alt="left-bracket"
            loading="lazy"
            width={5}
            height={19}
            decoding="async"
            data-nimg="1"
            className="w-[4px] h-[17px]"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202710.61a74ed4.png&amp;w=16&amp;q=75 1x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202710.61a74ed4.png&amp;w=16&amp;q=75"
          />
          <p className="text-[#1a1b1c83] text-opacity-70 font-semibold text-sm ml-1.5 mr-1.5">
            INTRO
          </p>
          <img
            alt="right-bracket"
            loading="lazy"
            width={5}
            height={19}
            decoding="async"
            data-nimg="1"
            className="w-[4px] h-[17px]"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202711.b2b3b291.png&amp;w=16&amp;q=75 1x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%202711.b2b3b291.png&amp;w=16&amp;q=75"
          />
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
          ENTER CODE
        </button>
      </div>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <form
            className="relative z-10"
            onSubmit={handleSubmit}
          >
            <input
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="Introduce Yourself"
              type="text"
              autoComplete="off"
              autoFocus
              name="name"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
          <img
            alt="Diamond Large"
            loading="lazy"
            width={762}
            height={762}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-light-large.27413569.png&amp;w=828&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-light-large.27413569.png&amp;w=1920&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-light-large.27413569.png&amp;w=1920&amp;q=75"
          />
          <img
            alt="Diamond Medium"
            loading="lazy"
            width={682}
            height={682}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[400px] h-[400px] md:w-[682px] md:h-[682px] animate-spin-slower rotate-185"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=750&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=1920&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=1920&amp;q=75"
          />
          <img
            alt="Diamond Small"
            loading="lazy"
            width={602}
            height={602}
            decoding="async"
            data-nimg="1"
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[320px] h-[320px] md:w-[602px] md:h-[602px] animate-spin-slowest"
            style={{ color: "transparent" }}
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=1920&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=1920&amp;q=75"
          />
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="inset-0" aria-label="Back" href="/">
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300" />
                <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6">
                  BACK
                </span>
              </div>
            </div>
          </a>
          <a className="inline-block" href="/result">
            <div
              className="invisible"
              style={{ position: "relative", translate: "none", rotate: "none", scale: "none", visibility: "visible", opacity: 1, transform: "translate(0px, 0%)" }}
            >
              <div>
                <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                    PROCEED
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <span className="text-sm font-semibold hidden sm:block mr-5">
                    PROCEED
                  </span>
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
