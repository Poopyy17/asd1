import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const GlobalGrantCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <div className="relative flex flex-col items-center">
      <div
        className="embla w-full max-w-screen-xl overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div className="embla__slide flex-shrink-0 w-full p-4" key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-[600px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black p-3 rounded-full z-10"
      >
        <HiChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black p-3 rounded-full z-10"
      >
        <HiChevronRight size={24} />
      </button>

      {/* Pagination as Thumbnails */}
      <div className="hidden md:flex space-x-2 mt-4 mb-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
              index === selectedIndex ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlobalGrantCarousel;
