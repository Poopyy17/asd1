import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import image1 from "../assets/Carousel/1.png";
import image2 from "../assets/Carousel/2.png";
import image3 from "../assets/Carousel/3.png";
import image4 from "../assets/Carousel/4.png";
import image5 from "../assets/Carousel/5.png";
import image6 from "../assets/Carousel/7.png";
import image7 from "../assets/Carousel/8.png";
import image8 from "../assets/Carousel/9.png";

const SignatureProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 3, // Scroll 3 slides at a time
    align: "start", // Align slides to the start
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image for zoom
  const [isSmallScreen, setIsSmallScreen] = useState(false); // To track screen size

  useEffect(() => {
    // Track screen size using a media query
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Small screen: < 768px (sm or below)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state

    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Auto scroll every 5 seconds

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize); // Cleanup
      };
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const handleImageClick = (image) => {
    if (isSmallScreen) {
      setSelectedImage(image); // Set clicked image
      setShowModal(true); // Open modal
    }
  };

  const handleCloseModal = () => setShowModal(false); // Close modal

  return (
    <div className="relative flex flex-col items-center justify-center mt-2">
      <div className="embla w-full max-w-6xl overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {[image1, image2, image3, image4, image5, image6, image7, image8].map(
            (image, index) => (
              <div className="embla__slide flex-shrink-0 w-1/3 p-2" key={index}>
                <div
                  className={`relative overflow-hidden rounded-lg shadow-md ${
                    isSmallScreen ? "cursor-pointer" : "" // Only show pointer on small screens
                  }`}
                  onClick={() => handleImageClick(image)} // Handle image click only on small screens
                >
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

      {/* Navigation buttons */}
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

      {/* Pagination dots */}
      <div className="flex mt-2 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi.scrollTo(index)}
            className={`w-2 h-2 rounded-full mb-4 ${
              index === selectedIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Modal for zoomed image using Tailwind */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignatureProjectCarousel;
