"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";

export default function Capture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraState, setCameraState] = useState<
    "loading" | "active" | "denied" | "unavailable"
  >("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const startCamera = async () => {
    setCameraState("loading");
    setErrorMessage("");

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraState("unavailable");
        setErrorMessage("Camera API is not supported in this browser.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch(() => {});
          setCameraState("active");
        };
      }
    } catch (err: any) {
      console.error("Camera access error:", err);
      if (
        err.name === "NotAllowedError" ||
        err.name === "PermissionDeniedError" ||
        err.message?.includes("Permission denied")
      ) {
        setCameraState("denied");
        setErrorMessage(
          "Camera access was denied. Please allow camera permissions in your browser settings to proceed.",
        );
      } else if (
        err.name === "NotFoundError" ||
        err.name === "DevicesNotFoundError" ||
        err.name === "OverconstrainedError"
      ) {
        setCameraState("unavailable");
        setErrorMessage(
          "No camera device was found or the requested constraints could not be satisfied.",
        );
      } else {
        setCameraState("unavailable");
        setErrorMessage(err.message || "Unable to access the camera.");
      }
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <main className="antialiased text-[#1A1B1C]">
      <NavBar />
      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900 flex items-center justify-center">
          {/* Active Video Stream */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`absolute inset-0 w-full h-full object-cover ${
              cameraState === "active" ? "block" : "hidden"
            }`}
          />

          {/* Loading State */}
          {cameraState === "loading" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-semibold tracking-wider">
                INITIALIZING CAMERA...
              </p>
            </div>
          )}

          {/* Access Denied State */}
          {cameraState === "denied" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6 text-center max-w-md mx-auto">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-red-500/20 border border-red-500 text-red-400 text-2xl">
                ✕
              </div>
              <h2 className="text-lg font-semibold mb-2">
                CAMERA ACCESS DENIED
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {errorMessage}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={startCamera}
                  className="px-6 py-2.5 bg-[#FCFCFC] text-[#1A1B1C] font-semibold text-xs rounded hover:bg-gray-200 transition-colors"
                >
                  TRY AGAIN
                </button>
                <a
                  href="/result"
                  className="px-6 py-2.5 bg-transparent border border-white/40 text-white font-semibold text-xs rounded hover:bg-white/10 transition-colors"
                >
                  SKIP & PROCEED
                </a>
              </div>
            </div>
          )}

          {/* Camera Not Available State */}
          {cameraState === "unavailable" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6 text-center max-w-md mx-auto">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 text-2xl">
                ⚠
              </div>
              <h2 className="text-lg font-semibold mb-2">
                CAMERA NOT AVAILABLE, PLEASE CHECK YOUR PERMISSION SETTINGS
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {errorMessage}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={startCamera}
                  className="px-6 py-2.5 bg-[#FCFCFC] text-[#1A1B1C] font-semibold text-xs rounded hover:bg-gray-200 transition-colors"
                >
                  TRY AGAIN
                </button>
                <a
                  href="/result"
                  className="px-6 py-2.5 bg-transparent border border-white/40 text-white font-semibold text-xs rounded hover:bg-white/10 transition-colors"
                >
                  SKIP & PROCEED
                </a>
              </div>
            </div>
          )}

          {cameraState === "active" && (
            <>
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
                <div className="font-semibold text-sm tracking-tight leading-3.5 text-[#FCFCFC] hidden sm:block">
                  TAKE PICTURE
                </div>
                <div className="transform hover:scale-105 ease-in-out duration-300">
                  <img
                    alt="Take Picture"
                    loading="lazy"
                    width="60"
                    height="60"
                    decoding="async"
                    data-nimg="1"
                    className="w-16 h-16 cursor-pointer"
                    src="./takePictureIcon.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
                <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                  TO GET BETTER RESULTS MAKE SURE TO HAVE
                </p>
                <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                  <p>◇ NEUTRAL EXPRESSION</p>
                  <p>◇ FRONTAL POSE</p>
                  <p>◇ ADEQUATE LIGHTING</p>
                </div>
              </div>
            </>
          )}

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
                  <svg
                    className="-rotate-45"
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    aria-hidden="true"
                  >
                    <polygon points="8,0 0,5 8,10" fill="#FFFFFF" />
                  </svg>

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
    </main>
  );
}
