import React from "react";

const RosterImage = ({ imageSrc, name, profession, isSpouse }) => {
  return (
    <div className="relative w-64 h-96 rounded overflow-hidden shadow-[0px_0px_3px_1px_#e2e8f0]">
      <img className="w-full h-56 object-cover" src={imageSrc} alt={name} />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        {isSpouse && (
          <div className="border border-blue-500 text-blue-500 text-sm font-semibold px-3 py-1.5 rounded-full">
            Spouse
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-black uppercase font-dinnext text-[#050038] text-2xl mb-2">
          {name}
        </div>
        {profession && (
          <p className="font-bold text-[#050038] text-base min-h-[24px]">
            • {profession}
          </p>
        )}
      </div>
    </div>
  );
};

export default RosterImage;
