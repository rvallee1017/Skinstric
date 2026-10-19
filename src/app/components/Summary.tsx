import NavBar from "./NavBar"

export default function Summary() {
  return (
    <div className="antialiased text-[#1A1B1C]">
      <NavBar />

      <div className="w-full flex-1 overflow-auto bg-white md:overflow-hidden">
        <div className="mx-5 flex max-w-full flex-col px-4 md:px-auto">
          <div className="mb-4 ml-4 text-start md:mb-10 md:ml-0">
            <h2 className="mb-1 text-base font-semibold leading-6 md:text-base">A.I. ANALYSIS</h2>
            <h3 className="text-4xl font-normal leading-16 tracking-tighter md:text-[72px]">DEMOGRAPHICS</h3>
            <h4 className="mt-2 text-sm leading-6">PREDICTED RACE &amp; AGE</h4>
          </div>

          <div className="mb-40 mt-10 grid gap-4 pb-0 md:mb-0 md:grid-cols-[1.5fr_8.5fr_3.15fr] md:gap-4 md:pb-0">
            <div className="h-[62%] space-y-3 bg-white-100 md:flex md:flex-col">
              <div className="flex flex-1 cursor-pointer flex-col justify-between border-t bg-[#1A1B1C] p-3 text-white hover:bg-[#E1E1E2]">
                <p className="text-base font-semibold">South asian</p>
                <h4 className="mb-1 text-base font-semibold">RACE</h4>
              </div>
              <div className="flex flex-1 cursor-pointer flex-col justify-between border-t bg-[#F3F3F4] p-3 hover:bg-[#E1E1E2]">
                <p className="text-base font-semibold">20-29</p>
                <h4 className="mb-1 text-base font-semibold">AGE</h4>
              </div>
              <div className="flex flex-1 cursor-pointer flex-col justify-between border-t bg-[#F3F3F4] p-3 hover:bg-[#E1E1E2]">
                <p className="text-base font-semibold">FEMALE</p>
                <h4 className="mb-1 text-base font-semibold">SEX</h4>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4 md:h-[57vh] md:border-t">
              <p className="left-5 top-2 hidden text-[40px] md:absolute md:block">South asian</p>
              <div className="relative mb-4 aspect-square w-full max-w-[384px] md:absolute md:bottom-2 md:right-5">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '384px',
                    position: 'relative',
                    transform: 'scale(1)',
                    transformOrigin: 'center center',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl font-normal md:text-[40px]">
                      90<span className="absolute text-xl md:text-3xl">%</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-1 text-xs font-normal leading-6 text-[#A0A4AB] md:absolute md:bottom-[-15%] md:left-[22%] md:text-sm lg:left-[30%] lg:text-base xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="mb-2 text-base font-medium leading-6 tracking-tight">RACE</h4>
                  <h4 className="mb-2 text-base font-medium leading-6 tracking-tight">A.I. CONFIDENCE</h4>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between bg-[#1A1B1C] px-4 text-white hover:bg-black">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FactiveRadioButton.41014af7.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">South asian</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">90%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">Latino hispanic</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">4%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">Middle eastern</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">3%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">East asian</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">1%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">Black</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">0%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">White</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">0%</span>
                </div>

                <div className="flex h-12 cursor-pointer items-center justify-between px-4 hover:bg-[#E1E1E2]">
                  <div className="flex items-center gap-1">
                    <img
                      alt="radio button"
                      loading="lazy"
                      width={12}
                      height={12}
                      className="mr-2 h-3 w-3"
                      srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75 2x"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FradioButton.37eec272.png&amp;w=32&amp;q=75"
                      style={{ color: 'transparent' }}
                    />
                    <span className="text-base font-normal leading-6 tracking-tight">Southeast asian</span>
                  </div>
                  <span className="text-base font-normal leading-6 tracking-tight">0%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 bg-white pb-6 pt-4 md:mb-16 md:static md:pt-[37px]">
            <div className="mx-auto flex max-w-full justify-between px-4 md:px-0">
              <a href="/select">
                <div>
                  <div className="relative flex h-12 w-12 rotate-45 scale-[1] items-center justify-center border border-[#1A1B1C] sm:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
                  </div>
                  <div className="group hidden flex-row items-center justify-center sm:flex">
                    <div className="hidden h-12 w-12 rotate-45 scale-[0.85] justify-center border border-[#1A1B1C] group-hover:scale-[0.92] sm:flex">
                    </div>
                    <span className="absolute left-[15px] bottom-[13px] hidden scale-[0.9] rotate-180 sm:block group-hover:scale-[0.92]">▶</span>
                    <span className="ml-6 hidden text-sm font-semibold sm:block">BACK</span>
                  </div>
                </div>
              </a>

              <a href="/">
                <div>
                  <div className="flex h-12 w-12 rotate-45 scale-[1] items-center justify-center border border-[#1A1B1C] sm:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">HOME</span>
                  </div>
                  <div className="hidden flex-row items-center justify-center sm:flex">
                    <span className="mr-5 hidden text-sm font-semibold sm:block">HOME</span>
                    <div className="hidden h-12 w-12 rotate-45 scale-[0.85] justify-center border border-[#1A1B1C] sm:flex"></div>
                    <span className="absolute right-[15px] bottom-[13px] hidden scale-[0.9] sm:block">▶</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
