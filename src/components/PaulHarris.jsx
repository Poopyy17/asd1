import React from "react";

const PaulHarris = ({ imageSrc, name }) => {
  return (
    <div className="relative bg-[#0F1923] border border-[#6B6656] p-4 max-w-sm w-[250px] flex flex-col items-center h-[350px]">
      <div className="w-full max-w-[250px] h-[200px] flex items-center justify-center mb-4 border border-[#6B6656]">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-[#ECE8E1] text-xl sm:text-xl md:text-2xl font-dinnext uppercase font-black text-center pt-2">
        {name}
      </p>
    </div>
  );
};

export default PaulHarris;
