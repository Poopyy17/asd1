import React from "react";
import backgroundVideo from "../assets/RCLP LPGH GG Turnover 2023_2.mp4";

const Hero = () => {
  return (
    <div className="relative h-[450px] md:h-[600px] lg:h-[800px] w-full bg-transparent flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Main content */}
      <h1 className="relative font-dinnext font-black leading-tight animate-smooth-reveal lg:text-6xl md:text-4xl sm:text-3xl text-xl text-gray-800">
        Rotary Club of Las Piñas
      </h1>
      <p className="relative lg:text-2xl md:text-xl sm:text-lg text-base text-[#747474] tracking-widest font-sans italic font-normal mt-3">
        service above self
      </p>

      {/* Video container */}
      <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-lg mt-5 w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[600px] p-2 items-center justify-center hidden sm:block">
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
