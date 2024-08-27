import React from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import Who from "../components/Who";
import Leaders from "../components/Leaders";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

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
        <div className="Hero Section">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

          <Hero />
        </div>

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
