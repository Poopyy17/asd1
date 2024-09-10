import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const SigProjCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Auto scroll every 5 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative flex flex-col items-center justify-center mt-2">
      <div className="embla w-full max-w-6xl overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              className="embla__slide flex-shrink-0 w-full sm:w-[300px] p-2"
              key={index}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md w-full h-[200px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Prev and Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-3 rounded-full z-10"
      >
        <HiChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-3 rounded-full z-10"
      >
        <HiChevronRight size={24} />
      </button>
    </div>
  );
};

export default SigProjCarousel;
