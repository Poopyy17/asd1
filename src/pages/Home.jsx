import React from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import Who from "../components/Who";
import Leaders from "../components/Leaders";
import Projects from "../components/Projects";
import backgroundVideo from "../assets/RCLP LPGH GG Turnover 2023_2.mp4";

const Home = () => {
  return (
    <>
      {/* Page Title */}
      <Helmet>
        <title>Rotary Club of Las Piñas</title>
      </Helmet>

      {/* Main Container */}
      <div className="flex flex-col">
        {/* Hero Section */}

        <div className="relative h-[450px] md:h-[600px] lg:h-[800px] w-full bg-transparent flex flex-col items-center justify-center text-center overflow-hidden z-10">
          <Hero />
          {/* Video container */}
          <div className="relative bg-white border-2 border-b-4 border-gray-200 rounded-lg mt-5 w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[600px] p-2 items-center justify-center hidden sm:block">
            <video
              src={backgroundVideo}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

        {/* Who Section */}
        <Who />

        {/* Leaders Section */}
        <Leaders />

        {/* Projects Section */}
        <Projects />
      </div>
    </>
  );
};

export default Home;
