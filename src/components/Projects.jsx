import React, { useState, useEffect } from "react";
import image1 from "../assets/Carousel/1.png";
import image2 from "../assets/Carousel/2.png";
import image3 from "../assets/Carousel/3.png";
import image4 from "../assets/Carousel/4.png";
import image5 from "../assets/Carousel/5.png";
import image6 from "../assets/Carousel/6.png";

const Projects = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 2 ? 0 : prevIndex + 2
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Depend on currentIndex so the effect re-runs when it changes

  // Calculate the number of dots needed
  const numDots = Math.ceil(images.length / 2);

  return (
    <div className="relative flex flex-col items-center justify-center mt-10">
      <h1 className="text-center md:text-5xl sm:text-4xl text-black text-xl font-coolvetica font-bold tracking-widest leading-tight mb-8">
        OUR PROJECTS
      </h1>
      <div className="relative flex px-8 items-center max-w-6xl">
        {" "}
        {/*  Adjust max-w for larger images */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full z-10"
        >
          &#10094;
        </button>
        <div className="flex space-x-4 w-full">
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-90 object-cover transition-opacity duration-1000 ease-in-out" // adjust height
            />
          </div>
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt={`Slide ${currentIndex + 2}`}
              className="w-full h-90 object-cover transition-opacity duration-1000 ease-in-out" // adjust height
            />
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>
      <div className="flex mt-4 space-x-2">
        {Array.from({ length: numDots }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 2)}
            className={`w-3 h-3 rounded-full ${
              index * 2 === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
