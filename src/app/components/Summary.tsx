"use client";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function Summary() {
  const [demographics, setDemographics] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<
    "race" | "age" | "sex"
  >("race");
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const cached = localStorage.getItem("demographics");
        if (cached) {
          const parsed = JSON.parse(cached);
          setDemographics(parsed);
          setInitialSelections(parsed);
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: "" }),
          },
        );
        const result = await response.json();
        if (result?.data) {
          setDemographics(result.data);
          setInitialSelections(result.data);
          localStorage.setItem("demographics", JSON.stringify(result.data));
        } else {
          const mock = {
            race: [
              { name: "South asian", confidence: 90 },
              { name: "Latino hispanic", confidence: 4 },
              { name: "Middle eastern", confidence: 3 },
              { name: "East asian", confidence: 1 },
              { name: "Black", confidence: 0 },
              { name: "White", confidence: 0 },
              { name: "Southeast asian", confidence: 0 },
            ],
            age: [
              { name: "20-29", confidence: 85 },
              { name: "30-39", confidence: 10 },
              { name: "40-49", confidence: 5 },
            ],
            sex: [
              { name: "FEMALE", confidence: 95 },
              { name: "MALE", confidence: 5 },
            ],
          };
          setDemographics(mock);
          setInitialSelections(mock);
        }
      } catch (err) {
        console.error("Failed to fetch demographics:", err);
        const mock = {
          race: [
            { name: "South asian", confidence: 90 },
            { name: "Latino hispanic", confidence: 4 },
            { name: "Middle eastern", confidence: 3 },
            { name: "East asian", confidence: 1 },
            { name: "Black", confidence: 0 },
            { name: "White", confidence: 0 },
            { name: "Southeast asian", confidence: 0 },
          ],
          age: [
            { name: "20-29", confidence: 85 },
            { name: "30-39", confidence: 10 },
            { name: "40-49", confidence: 5 },
          ],
          sex: [
            { name: "FEMALE", confidence: 95 },
            { name: "MALE", confidence: 5 },
          ],
        };
        setDemographics(mock);
        setInitialSelections(mock);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const setInitialSelections = (data: any) => {
    const initial: { [key: string]: string } = {};
    if (data.race?.[0]) initial.race = data.race[0].name;
    if (data.age?.[0]) initial.age = data.age[0].name;
    if (data.sex?.[0]) initial.sex = data.sex[0].name;
    setSelectedValues(initial);
  };

  if (loading) {
    return (
      <div className="antialiased text-[#1A1B1C] min-h-screen bg-white flex flex-col items-center justify-center">
        <NavBar />
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-12 h-12 border-4 border-black/20 border-t-black rounded-full animate-spin mb-4"></div>
          <p className="text-sm font-semibold tracking-wider uppercase">
            LOADING A.I. ANALYSIS...
          </p>
        </div>
      </div>
    );
  }

  const currentList = demographics?.[selectedCategory] || [];
  const activeVal = selectedValues[selectedCategory] || currentList[0]?.name;

  console.log("Current List:", currentList);
  const activeItem =
  Object.entries(currentList).find(([name]) => name === activeVal) ||
  Object.entries(currentList)[0];

  return (
    <div className="antialiased text-[#1A1B1C]">
      <NavBar />

      <div className="w-full flex-1 overflow-auto bg-white md:overflow-hidden">
        <div className="mx-5 flex max-w-full flex-col px-4 md:px-auto">
          <div className="mb-4 ml-4 text-start md:mb-10 md:ml-0">
            <h2 className="mb-1 text-base font-semibold leading-6 md:text-base">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl font-normal leading-16 tracking-tighter md:text-[72px] uppercase">
              DEMOGRAPHICS
            </h3>
            <h4 className="mt-2 text-sm leading-6 uppercase">
              PREDICTED {selectedCategory} &amp; DETAILS
            </h4>
          </div>

          <div className="mb-40 mt-10 grid gap-4 pb-0 md:mb-0 md:grid-cols-[1.5fr_8.5fr_3.15fr] md:gap-4 md:pb-0">
            {/* Left sidebar category selector */}
            <div className="h-[62%] space-y-3 bg-white-100 md:flex md:flex-col">
              <div
                onClick={() => setSelectedCategory("race")}
                className={`flex flex-1 cursor-pointer flex-col justify-between border-t p-3 transition-colors ${
                  selectedCategory === "race"
                    ? "bg-[#1A1B1C] text-white"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold uppercase">
                  {selectedValues.race ||
                    demographics?.race?.[0]?.name ||
                    "South asian"}
                </p>
                <h4 className="mb-1 text-base font-semibold">RACE</h4>
              </div>

              <div
                onClick={() => setSelectedCategory("age")}
                className={`flex flex-1 cursor-pointer flex-col justify-between border-t p-3 transition-colors ${
                  selectedCategory === "age"
                    ? "bg-[#1A1B1C] text-white"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold uppercase">
                  {selectedValues.age ||
                    demographics?.age?.[0]?.name ||
                    "20-29"}
                </p>
                <h4 className="mb-1 text-base font-semibold">AGE</h4>
              </div>

              <div
                onClick={() => setSelectedCategory("sex")}
                className={`flex flex-1 cursor-pointer flex-col justify-between border-t p-3 transition-colors ${
                  selectedCategory === "sex"
                    ? "bg-[#1A1B1C] text-white"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold uppercase">
                  {selectedValues.sex ||
                    demographics?.sex?.[0]?.name ||
                    "FEMALE"}
                </p>
                <h4 className="mb-1 text-base font-semibold">SEX</h4>
              </div>
            </div>

            {/* Center display */}
            <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4 md:h-[57vh] md:border-t">
              <p className="left-5 top-2 hidden text-[40px] md:absolute md:block uppercase">
                {activeVal}
              </p>
              <div className="relative mb-4 aspect-square w-full max-w-[384px] md:absolute md:bottom-2 md:right-5 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-6xl font-normal md:text-[120px] tracking-tighter">
                    {(activeItem?.[1] * 100).toFixed(0) ?? 90}
                    <span className="absolute text-2xl md:text-4xl">%</span>
                  </p>
                </div>
              </div>
              <p className="mb-1 text-xs font-normal leading-6 text-[#A0A4AB] md:absolute md:bottom-[-15%] md:left-[22%] md:text-sm lg:left-[30%] lg:text-base xl:left-[40%] 2xl:left-[45%] uppercase">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            {/* Right breakdown list */}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="mb-2 text-base font-medium leading-6 tracking-tight uppercase">
                    {selectedCategory}
                  </h4>
                  <h4 className="mb-2 text-base font-medium leading-6 tracking-tight uppercase">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                {Object.entries(currentList).map(([name, confidence]) => {
                  const isSelected = activeVal === name;
                  return (
                    <div
                      key={name}
                      onClick={() =>
                        setSelectedValues({
                          ...selectedValues,
                          [selectedCategory]: name,
                        })
                      }
                      className={`flex h-12 cursor-pointer items-center justify-between px-4 transition-colors ${
                        isSelected
                          ? "bg-[#1A1B1C] text-white"
                          : "hover:bg-[#E1E1E2]"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="mr-2 text-xs font-bold">
                          {isSelected ? "●" : "○"}
                        </span>
                        <span className="text-base font-normal leading-6 tracking-tight uppercase">
                          {name}
                        </span>
                      </div>
                      <span className="text-base font-normal leading-6 tracking-tight">
                        {(confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-8 bg-white pb-6 pt-4 md:mb-16 md:static md:pt-9.25">
            <div className="mx-auto flex max-w-full justify-between px-4 md:px-0">
              <a href="/select">
                <div>
                  <div className="relative flex h-12 w-12 rotate-45 scale-[1] items-center justify-center border border-[#1A1B1C] sm:hidden">
                    <span className="-rotate-45 text-xs font-semibold sm:hidden">
                      BACK
                    </span>
                  </div>
                  <div className="group hidden flex-row items-center justify-center sm:flex">
                    <div className="hidden h-12 w-12 rotate-45 scale-[0.85] justify-center border border-[#1A1B1C] group-hover:scale-[0.92] sm:flex"></div>
                    <svg
                
                  className="-rotate-0"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  aria-hidden="true"
                >
                  <polygon points="8,0 0,5 8,10" fill="#1A1B1C" />
                </svg>
                    <span className="ml-6 hidden text-sm font-semibold sm:block">
                      BACK
                    </span>
                  </div>
                </div>
              </a>

              <a href="/">
                <div>
                  <div className="flex h-12 w-12 rotate-45 scale-[1] items-center justify-center border border-[#1A1B1C] sm:hidden">
                    <span className="-rotate-45 text-xs font-semibold sm:hidden">
                      HOME
                    </span>
                  </div>
                  <div className="hidden flex-row items-center justify-center sm:flex">
                    <span className="mr-5 hidden text-sm font-semibold sm:block">
                      HOME
                    </span>
                    <div className="hidden h-12 w-12 rotate-45 scale-[0.85] justify-center border border-[#1A1B1C] sm:flex"></div>
                    <svg
                  className="-rotate-0"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  aria-hidden="true"
                >
                  <polygon points="0,0 8,5 0,10" fill="#1A1B1C" />
                </svg>
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