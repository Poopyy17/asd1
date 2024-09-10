import React from "react";
import { Helmet } from "react-helmet-async";
import Video from "../assets/RCLP LPGH GG Turnover 2023_2.mp4";
import GlobalGrantCarousel from "../components/GlobalGrantCarousel";
import image1 from "../assets/Global Grant Projects/1.png";
import image2 from "../assets/Global Grant Projects/2.png";
import image3 from "../assets/Global Grant Projects/3.png";
import image4 from "../assets/Global Grant Projects/4.png";
import image5 from "../assets/Global Grant Projects/5.png";
import image6 from "../assets/Global Grant Projects/6.png";
import image7 from "../assets/Global Grant Projects/7.png";
import image8 from "../assets/Global Grant Projects/8.png";
import image9 from "../assets/Global Grant Projects/9.png";
import image10 from "../assets/Global Grant Projects/10.png";
import image11 from "../assets/Global Grant Projects/11.png";
import image12 from "../assets/Global Grant Projects/12.png";
import image13 from "../assets/Global Grant Projects/13.png";
import image14 from "../assets/Global Grant Projects/14.png";
import image15 from "../assets/Global Grant Projects/15.png";

const GlobalGrant = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  return (
    <>
      <Helmet>
        <title>Global Grant Project</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col w-full bg-gray-100 py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#050038] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          GLOBAL GRANT PROJECTS
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8 min-h-screen">
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
          <h1 className="font-dinnext font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
            Adolescent Health Clinic Global Grant No. GG2347347
          </h1>
          <div className="relative w-full pb-[56.25%]">
            <video
              src={Video}
              controls
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Border Line */}
          <div className="w-full mt-8 mb-4 border-t border-gray-300"></div>

          <div className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-16">
            <h2 className="font-dinnext font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
              Rotary Commitment
            </h2>
            <p className="text-center mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Addressing TEENAGE PREGNANCY in the PHILIPPINES
            </p>
            <GlobalGrantCarousel images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalGrant;
