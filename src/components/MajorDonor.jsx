import React from "react";

const MajorDonor = ({ imageSrc, title = "", name }) => {
  // Split the titles into an array, handle cases where title might be an empty string or undefined
  const titles = title ? title.split(",") : [];

  return (
    <div className="relative bg-[#0F1923] border border-[#6B6656] p-4 max-w-sm w-full flex flex-col items-center h-[430px]">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-[300px] object-cover mb-4 border border-[#6B6656]"
      />
      <p className="text-[#ECE8E1] text-3xl font-dinnext uppercase font-black text-center pt-2">
        {name}
      </p>
      {titles.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {titles.map((singleTitle, index) => (
            <span
              key={index}
              className="bg-[#FFD700] text-[#0F1923] font-bold text-xs uppercase px-2 py-1 rounded-full"
            >
              {singleTitle.trim()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MajorDonor;
