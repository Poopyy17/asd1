import React, { useEffect, useState } from "react";
import backgroundVideo from "../assets/RCLP LPGH GG Turnover 2023_2.mp4";

const Hero = () => {
  const [showH1, setShowH1] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set a timer to trigger the h1 animation after 5 seconds
    const h1Timer = setTimeout(() => {
      setShowH1(true);
    }, 5000); // 5 seconds

    // Set a timer to trigger the p animation after an additional delay
    const pTimer = setTimeout(() => {
      setShowP(true);
    }, 6000); // 6 seconds

    // Set a timer to trigger the button animation after an additional delay
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 6300);

    return () => {
      clearTimeout(h1Timer);
      clearTimeout(pTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      {/* Fallback Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyan-500 md:hidden"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className={`font-coolvetica text-gold text-4xl md:text-8xl font-bold p-4 tracking-wider leading-tight -mt-14 transition-opacity ${
            showH1 ? "animate-ease-in opacity-100" : "opacity-0"
          }`}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            transitionDelay: "0s",
          }}
        >
          ROTARY CLUB <br /> OF LAS PIÑAS
        </h1>
        <p
          className={`text-white font-coolvetica text-sm md:text-xl tracking-wider leading-tight transition-opacity ${
            showP ? "animate-ease-in opacity-100" : "opacity-0"
          }`}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            transitionDelay: "1s",
          }}
        >
          SERVICE ABOVE SELF
        </p>
        <button
          className={`mt-7 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition-opacity duration-300 ${
            showButton
              ? "animate-ease-in opacity-100 hover:bg-blue-700"
              : "opacity-0"
          }`}
          style={{ transitionDelay: "1.5s" }}
        >
          Work with us
        </button>
      </div>
    </div>
  );
};

export default Hero;
