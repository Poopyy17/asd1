import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import image1 from "../assets/Carousel/1.png";
import image2 from "../assets/Carousel/2.png";
import image3 from "../assets/Carousel/3.png";
import image4 from "../assets/Carousel/4.png";
import image5 from "../assets/Carousel/5.png";
import image6 from "../assets/Carousel/6.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 2,
    align: "center", // Centering the slides
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Cycle every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative flex flex-col items-center justify-center mt-10">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h1 className="text-center lg:text-7xl md:text-5xl sm:text-xl text-3xl text-black font-dinnext font-black mt-3 mb-5">
        OUR PROJECTS
      </h1>
      <div className="embla w-full max-w-6xl overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {[image1, image2, image3, image4, image5, image6].map(
            (image, index) => (
              <div className="embla__slide flex-shrink-0 w-1/2 p-2" key={index}>
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
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
      <div className="flex mt-2 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi.scrollTo(index)}
            className={`${
              index === selectedIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      <Link
        to="/signature-projects"
        className="block w-[150px] bg-blue-600 hover:bg-blue-700 text-white mx-auto md:mx-0 my-6 py-2 rounded-md text-center"
      >
        View more
      </Link>
    </div>
  );
};

export default Projects;
