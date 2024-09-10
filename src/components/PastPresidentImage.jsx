import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PastPresidentImage = ({ images, name, tagLine, ry }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // 3 seconds interval

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="relative w-64 min-h-[400px] flex flex-col rounded overflow-hidden shadow-[0px_0px_3px_1px_#e2e8f0]">
      <div className="w-full h-56" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <img
                className="w-full h-full object-cover"
                src={image.src}
                alt={name}
                style={{ width: "256px", height: "224px" }} // Set fixed size
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-1 flex flex-col items-center text-center">
        <div className="font-black uppercase font-dinnext text-[#050038] text-2xl mb-2 mt-2">
          {name}
        </div>
        {ry && (
          <p className="font-normal text-[#050038] text-base min-h-[24px] mb-2">
            <span className="inline-block px-2 py-0.5 text-sm border border-[#050038] rounded-full">
              RY {ry}
            </span>
          </p>
        )}
        {tagLine && (
          <p className="font-normal text-[#050038] text-base min-h-[24px] mb-2">
            "{tagLine}"
          </p>
        )}
      </div>
    </div>
  );
};

export default PastPresidentImage;
