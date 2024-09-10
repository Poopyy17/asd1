import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CarouselScreenComponent = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Automatically slide every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {React.Children.map(children, (child, index) => (
            <div
              className="embla__slide flex-[0_0_100%] h-auto relative"
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselScreenComponent;
