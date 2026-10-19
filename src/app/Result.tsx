"use client";

import type { ChangeEvent } from "react";

export default function Result() {
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      if (typeof reader.result !== "string") return;

      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: reader.result }),
        },
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
      <div className="min-h-[92vh] flex flex-col bg-white relative md:pt-16 justify-center">
        <div className="absolute top-2 left-9 md:left-8 text-left">
          <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
        </div>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 -space-y-5 md:space-y-0">
          <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:translate-y-0 translate-y-[-1%] md:-translate-x-full flex flex-col items-center justify-center">
            <div className="w-67.5 h-67.5 md:w-120.5 md:h-120.5"></div>
            <img
              alt="Diamond Large"
              loading="lazy"
              width="482"
              height="482"
              decoding="async"
              data-nimg="1"
              className="absolute w-67.5 h-67.5 md:w-120.5 md:h-120.5 animate-spin-slow rotate-200"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=1080&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=1080&amp;q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="DiamondMedium"
              loading="lazy"
              width="444.34"
              height="444.34"
              decoding="async"
              data-nimg="1"
              className="absolute w-57.5 h-57.5 md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-190"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=1080&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=1080&amp;q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="DiamondSmall"
              loading="lazy"
              width="405.18"
              height="405.18"
              decoding="async"
              data-nimg="1"
              className="absolute w-47.5 h-47.5 md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=828&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=828&amp;q=75"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                alt="Camera Icon"
                loading="lazy"
                width="136"
                height="136"
                decoding="async"
                data-nimg="1"
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamera-icon.14742046.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamera-icon.14742046.png&amp;w=384&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamera-icon.14742046.png&amp;w=384&amp;q=75"
                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-[1%] right-22.5 md:top-[30.9%] md:-right-3 -translate-y-5">
                <p className="text-xs md:text-sm font-normal mt-1 leading-6">
                  ALLOW A.I.
                  <br />
                  TO SCAN YOUR FACE
                </p>
                <img
                  alt="Scan Line"
                  loading="lazy"
                  width="66"
                  height="59"
                  decoding="async"
                  data-nimg="1"
                  className="absolute hidden md:block md:right-35.75 md:top-5"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResScanLine.99dc727d.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResScanLine.99dc727d.png&amp;w=256&amp;q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResScanLine.99dc727d.png&amp;w=256&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:translate-y-0 translate-y-[-10%] transition-opacity duration-300 opacity-100">
            <div className="w-67.5 h-67.5 md:w-120.5 md:h-120.5"></div>
            <img
              alt="Diamond Large"
              loading="lazy"
              width="484"
              height="484"
              decoding="async"
              data-nimg="1"
              className="absolute w-67.5 h-67.5 md:w-120.5 md:h-120.5 animate-spin-slow rotate-205"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=1080&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-large.884fc6a9.png&amp;w=1080&amp;q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="DiamondMedium"
              loading="lazy"
              width="448"
              height="448"
              decoding="async"
              data-nimg="1"
              className="absolute w-57.5 h-57.5 md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-195"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=1080&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-medium.2224a388.png&amp;w=1080&amp;q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="DiamondSmall"
              loading="lazy"
              width="408"
              height="408"
              decoding="async"
              data-nimg="1"
              className="absolute w-47.5 h-47.5 md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=828&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResDiamond-small.bd0ba7e9.png&amp;w=828&amp;q=75"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                alt="Photo Upload Icon"
                loading="lazy"
                width="136"
                height="136"
                decoding="async"
                data-nimg="1"
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery-icon.c9f2deef.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery-icon.c9f2deef.png&amp;w=384&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery-icon.c9f2deef.png&amp;w=384&amp;q=75"
                style={{ color: "transparent" }}
              />
              <div className="absolute top-[75%] md:top-[70%] md:left-4.25 -translate-y-2.5">
                <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-6 text-right">
                  ALLOW A.I.
                  <br />
                  ACCESS GALLERY
                </p>
                <img
                  alt="Gallery Line"
                  loading="lazy"
                  width="66.33"
                  height="59.37"
                  decoding="async"
                  data-nimg="1"
                  className="absolute hidden md:block md:left-30 md:bottom-9.75"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResGalleryLine.84646ce1.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResGalleryLine.84646ce1.png&amp;w=256&amp;q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResGalleryLine.84646ce1.png&amp;w=256&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-18.75 right-7 md:-top-12.5 md:right-8 transition-opacity duration-300 opacity-100">
            <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
            <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
          </div>
          <input accept="image/*" className="hidden" type="file" />
        </div>
        <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0">
          <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
            <a className="relative" aria-label="Back" href="/testing">
              <div>
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="-rotate-45 text-xs font-semibold sm:hidden">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute left-3.75 bottom-3.25 scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 ">
                    BACK
                  </span>
                </div>
              </div>
            </a>
            <a href="/select">
              <div className="hidden">
                <div>
                  <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                    <span className="-rotate-45 text-xs font-semibold sm:hidden">
                      PROCEED
                    </span>
                  </div>
                  <div className="group hidden sm:flex flex-row relative justify-center items-center">
                    <span className="text-sm font-semibold hidden sm:block mr-5">
                      PROCEED
                    </span>
                    <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                    <span className="absolute right-3.75 bottom-3.25 scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">
                      ▶
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        aria-label="Upload an image for analysis"
        className="mt-4 text-sm"
      />
    </div>
  );
}
