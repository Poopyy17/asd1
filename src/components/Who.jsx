import React from "react";
import rotary from "../assets/rotary1.png";

const Who = () => {
  return (
    <div className="relative w-full bg-slate-950 py-16 px-4 md:-mt-[80px] -mt-[100px] overflow-hidden -z-10">
      {/* Background Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid gap-8 md:grid-cols-2 grid-cols-1 mt-20 mb-20">
        <img
          className="w-full max-w-[500px] mx-auto my-4 rounded-lg"
          src={rotary}
          alt="President"
        />
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-white md:text-6xl sm:text-5xl text-3xl font-extrabold font-dinnext leading-tight py-2">
            WHO WE ARE?
          </h1>
          <p className="text-xl text-white font-sans mt-1">
            Like bamboo pole to which it has been consistently compared, the
            Rotary Club of Las Piñas has remained deep-rooted despite the
            passing of time and the changing of guards.
          </p>
          <button className="w-[150px] bg-blue-600 hover:bg-blue-700 text-white mx-auto md:mx-0 my-6 py-3 rounded-md">
            About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Who;
