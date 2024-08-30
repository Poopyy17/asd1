import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Main content */}
      <h1 className="relative font-dinnext font-black leading-tight -mt-14 md:-mt-1 lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-gray-800">
        Rotary Club of Las Piñas
      </h1>
      <p className="relative lg:text-2xl md:text-xl sm:text-lg text-base text-[#747474] tracking-widest font-sans italic font-normal mt-3">
        service above self
      </p>
    </div>
  );
};

export default Hero;
