import React from "react";
import rotary from "../assets/rotary1.png";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div className="relative w-full bg-slate-950 py-16 px-4 md:-mt-[80px] -mt-[100px] overflow-hidden">
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
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-dinnext leading-tight py-2">
            WHO WE ARE?
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-sans mt-2 md:mt-4">
            Like bamboo pole to which it has been consistently compared, the
            Rotary Club of Las Piñas has remained deep-rooted despite the
            passing of time and the changing of guards.
          </p>
          <Link
            to="/about"
            className="block w-[150px] bg-blue-600 hover:bg-blue-700 text-white mx-auto md:mx-0 my-6 py-3 rounded-md text-center"
          >
            About us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Who;
