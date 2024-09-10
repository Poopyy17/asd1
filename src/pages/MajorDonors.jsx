import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MajorDonor from "../components/MajorDonor";
import lee from "../assets/Rotary Members/Lee (1).png";
import flor from "../assets/Rotary Members/Flor (1).png";
import question from "../assets/question.png";
import PaulHarris from "../components/PaulHarris";
import badr from "../assets/Rotary Members/Badr (1).png";
import miriam from "../assets/Rotary Members/Badr (2).png";
import buenconsejo from "../assets/Rotary Members/Buenconsejo (1).png";
import besitan from "../assets/Rotary Members/Besitan.png";
import catud from "../assets/Rotary Members/Catud (1).png";
import cornista from "../assets/Rotary Members/Cornista (1).png";
import deVera from "../assets/Rotary Members/De Vera (1).png";
import becca from "../assets/Rotary Members/De Vera (2).png";
import esquillo from "../assets/Rotary Members/Esquillo.png";
import lisa from "../assets/Rotary Members/Flor (2).png";
import hernandez from "../assets/Rotary Members/Hernandez (1).png";
import licarte from "../assets/Rotary Members/Licarte (1).png";
import annie from "../assets/Rotary Members/Licarte (2).png";
import manaig from "../assets/Rotary Members/Manaig (1).png";
import prescy from "../assets/Rotary Members/Manaig (2).png";
import manapsal from "../assets/Rotary Members/Manapsal (1).png";
import molina from "../assets/Rotary Members/Molina (1).png";
import tes from "../assets/Rotary Members/Molina (2).png";
import monzon from "../assets/Rotary Members/Monzon (1).png";
import ocampo from "../assets/Rotary Members/Ocampo (1).png";
import olive from "../assets/Rotary Members/Ocampo (2).png";
import parilla from "../assets/Rotary Members/Parilla (1).png";
import annie1 from "../assets/Rotary Members/Parilla (2).png";
import penson from "../assets/Rotary Members/Penson (1).png";
import pua from "../assets/Rotary Members/Pua.png";
import ramirez from "../assets/Rotary Members/Ramirez (1).png";
import staAna from "../assets/Rotary Members/Sta. Ana.png";
import tah from "../assets/Rotary Members/Tah (1).png";
import vilchez from "../assets/Rotary Members/Vilchez (1).png";
import zhou from "../assets/Rotary Members/Zhou (1).png";
import { useLocation } from "react-router-dom";

const MajorDonors = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const section = document.querySelector(`#${state.scrollTo}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [state]);

  return (
    <>
      <Helmet>
        <title>Major Donors</title>
      </Helmet>

      {/* Main Container */}
      <div className="min-h-screen flex flex-col bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        {/* Header */}
        <div className="flex flex-col w-full py-8 px-4 text-center">
          <h1 className="font-dinnext font-black text-[#FFD700] text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4">
            MAJOR DONORS <br />
            AND
            <br />
            PAUL HARRIS <br />
            FELLOWS
          </h1>
        </div>

        {/* Major Donors Level 1 */}
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-16">
          <div className="bg-[#0F1923] border border-[#6B6656] p-4 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl flex items-center justify-center">
            <div className="bg-[#1A1F29] border border-[#6B6656] p-4 w-full flex items-center justify-center">
              <p className="text-[#ECE8E1] text-center font-dinnext font-black text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                MAJOR DONORS LEVEL 1
              </p>
            </div>
          </div>
        </div>

        {/* Major Donor Cards Grid */}
        <div className="flex justify-center items-center mt-5 px-4 sm:px-10 lg:px-40 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">
            {/* Edwin L. Lee Image */}
            <div className="flex justify-center items-center">
              <MajorDonor
                imageSrc={lee}
                title="First Class President"
                name="Edwin L. Lee"
              />
            </div>

            {/* Hilbert M. Flor Image */}
            <div className="flex justify-center items-center">
              <MajorDonor
                imageSrc={flor}
                title="Change Maker President, Peace President"
                name="Hilbert M. Flor"
              />
            </div>
          </div>
        </div>

        {/* Next Major Donor */}
        <div className="flex justify-center items-center mt-4">
          <MajorDonor imageSrc={question} name="Be the next Major Donor" />
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center mx-auto mt-10 border border-b-1 border-[#6B6656] w-[70%]"></div>

        {/* Paul Harris Header */}
        <div
          id="paul-harris-fellows" // Ensure correct id
          className="flex justify-center items-center text-[#ECE8E1] font-dinnext font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-7"
        >
          PAUL HARRIS FELLOWS
        </div>

        {/* Content */}
        <div className="flex justify-center items-center mt-5 px-4 sm:px-28 lg:px-40 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full pb-10">
            {/* Badr Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={badr} name="Mohammad Yasin Badr" />
            </div>

            {/* Miriam Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={miriam} name="Miriam Badr" />
            </div>

            {/* BUENCONSEJO Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={buenconsejo} name="RITCHE D. BUENCONSEJO" />
            </div>

            {/* BESITAN Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={besitan} name="MANUEL P. BESITAN" />
            </div>

            {/* CATUD Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={catud} name="SOCRATES P. CATUD" />
            </div>

            {/* CORNISTA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={cornista} name="ARCHIVAL V. CORNISTA" />
            </div>

            {/* DE VERA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={deVera} name="HAROLD T. DE VERA" />
            </div>

            {/* BECCA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={becca} name="BECCA DE VERA" />
            </div>

            {/* ESQUILLO Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={esquillo} name="FREDERICK D. ESQUILLO" />
            </div>

            {/* FLOR Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={flor} name="HILBERT M. FLOR" />
            </div>

            {/* LISA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={lisa} name="LISA FLOR" />
            </div>

            {/* HERNANDEZ Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={hernandez} name="RAFAEL J. HERNANDEZ" />
            </div>

            {/* LEE Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={lee} name="EDWIN L. LEE" />
            </div>

            {/* LICARTE Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={licarte} name="ENRICO V. LICARTE" />
            </div>

            {/* ANNIE Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={annie} name="ANNIE LICARTE" />
            </div>

            {/* MANAIG Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={manaig} name="FRANCISCO MANAIG" />
            </div>

            {/* PRECY Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={prescy} name="PRECY MANAIG" />
            </div>

            {/* MANAPSAL Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={manapsal} name="JOSEPH ARON MANAPSAL" />
            </div>

            {/* MOLINA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={molina} name="DIONISIO MOLINA JR." />
            </div>

            {/* TES Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={tes} name="TES MOLINA" />
            </div>

            {/* MONZON Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={monzon} name="RONNIE M. MONZON" />
            </div>

            {/* OCAMPO Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={ocampo} name="RENE S. OCAMPO" />
            </div>

            {/* OLIVE Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={olive} name="OLIVE OCAMPO" />
            </div>

            {/* PARILLA​ Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={parilla} name="EFREN R. PARILLA​" />
            </div>

            {/* ANNIE Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={annie1} name="ANNIE PARILLA" />
            </div>

            {/* PENSON Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={penson} name="ANGELO DWIGHT L. PENSON" />
            </div>

            {/* PUA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={pua} name="JAIME M. PUA" />
            </div>

            {/* RAMIREZ Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={ramirez} name="CHRISTOPHER F. RAMIREZ" />
            </div>

            {/* STA. ANA Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={staAna} name="JOSEPH PATRICK R. STA. ANA" />
            </div>

            {/* TAH Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={tah} name="NUHI M. TAH" />
            </div>

            {/* VILCHEZ Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={vilchez} name="RONALD V. VILCHEZ" />
            </div>

            {/* ZHOU Image */}
            <div className="flex justify-center">
              <PaulHarris imageSrc={zhou} name="JUN MIN ZHOU" />
            </div>
            {/* Add more image component here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorDonors;
