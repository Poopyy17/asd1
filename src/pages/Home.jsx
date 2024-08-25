import React from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import Who from "../components/Who";
import Leaders from "../components/Leaders";
import Projects from "../components/Projects";

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
        <Hero />

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
