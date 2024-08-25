import React from "react";
import rotary from "../assets/rotary1.png";

const Who = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={rotary} alt="President" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-6xl sm:4xl text-2xl font-bold font-coolvetica tracking-wider leading-tight py-2">
            WHO WE ARE?
          </h1>
          <p className="text-xl">
            Like bamboo pole to which it has been consistently compared, the
            Rotary Club of Las Piñas has remained deep-rooted despite the
            passing of time and the changing of guards.
          </p>
          <button className="w-[130px] bg-blue-600 hover:bg-blue-700 text-white mx-auto md:mx-0 my-6 py-3 rounded-md">
            About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Who;
