import React from "react";
import RosterImage from "../components/RosterImage";
import { Helmet } from "react-helmet-async";
import badr from "../assets/Rotary Members/Badr (1).png";
import miriam from "../assets/Rotary Members/Badr (2).png";
import buenconsejo from "../assets/Rotary Members/Buenconsejo (1).png";
import pine from "../assets/Rotary Members/Buenconsejo (2).png";
import catud from "../assets/Rotary Members/Catud (1).png";
import marisonia from "../assets/Rotary Members/Catud (2).png";
import cornista from "../assets/Rotary Members/Cornista (1).png";
import leeAnn from "../assets/Rotary Members/Cornista (2).png";
import deVera from "../assets/Rotary Members/De Vera (1).png";
import becca from "../assets/Rotary Members/De Vera (2).png";
import flor from "../assets/Rotary Members/Flor (1).png";
import lisa from "../assets/Rotary Members/Flor (2).png";
import gomez from "../assets/Rotary Members/Gomez (1).png";
import mitch from "../assets/Rotary Members/Gomez (2).png";
import hernandez from "../assets/Rotary Members/Hernandez (1).png";
import eloisa from "../assets/Rotary Members/Hernandez (2).png";
import hernandez1 from "../assets/Rotary Members/Hernandez1 (1).png";
import elaine from "../assets/Rotary Members/Hernandez1 (2).png";
import lee from "../assets/Rotary Members/Lee (1).png";
import nytz from "../assets/Rotary Members/Lee (2).png";
import manaig from "../assets/Rotary Members/Manaig (1).png";
import prescy from "../assets/Rotary Members/Manaig (2).png";
import manapsal from "../assets/Rotary Members/Manapsal (1).png";
import cecille from "../assets/Rotary Members/Manapsal (2).png";
import marbibi from "../assets/Rotary Members/Marbibi (1).png";
import marivic from "../assets/Rotary Members/Marbibi (2).png";
import molina from "../assets/Rotary Members/Molina (1).png";
import tes from "../assets/Rotary Members/Molina (2).png";
import monzon from "../assets/Rotary Members/Monzon (1).png";
import tess from "../assets/Rotary Members/Monzon (2).png";
import licarte from "../assets/Rotary Members/Licarte (1).png";
import annie from "../assets/Rotary Members/Licarte (2).png";
import ocampo from "../assets/Rotary Members/Ocampo (1).png";
import olive from "../assets/Rotary Members/Ocampo (2).png";
import palmes from "../assets/Rotary Members/Palmes.png";
import parilla from "../assets/Rotary Members/Parilla (1).png";
import annie1 from "../assets/Rotary Members/Parilla (2).png";
import penson from "../assets/Rotary Members/Penson (1).png";
import cristina from "../assets/Rotary Members/Penson (2).png";
import pua from "../assets/Rotary Members/Pua.png";
import ramirez from "../assets/Rotary Members/Ramirez (1).png";
import analyn from "../assets/Rotary Members/Ramirez (2).png";
import reyes from "../assets/Rotary Members/Reyes.png";
import staAna from "../assets/Rotary Members/Sta. Ana.png";
import tah from "../assets/Rotary Members/Tah (1).png";
import almayda from "../assets/Rotary Members/Tah (2).png";
import vilchez from "../assets/Rotary Members/Vilchez (1).png";
import angelica from "../assets/Rotary Members/Vilchez (2).png";
import zhou from "../assets/Rotary Members/Zhou (1).png";
import jackie from "../assets/Rotary Members/Zhou (2).png";
import afzelius from "../assets/Rotary Members/Honorary Afzelius.png";
import cornista1 from "../assets/Rotary Members/Honorary Cornista.png";
import encarnacion from "../assets/Rotary Members/Honorary Encarnacion.png";
import tumangan from "../assets/Rotary Members/Honorary Tumangan.png";

const members = [
  {
    name: "badr",
  },

  {
    name: "buenconsejo",
  },

  {
    name: "catud",
  },
  {
    name: "cornista",
  },

  {
    name: "harold",
  },

  {
    name: "hilbert",
  },

  {
    name: "rodel",
  },

  {
    name: "rafael",
  },

  {
    name: "ricardo",
  },

  {
    name: "lee",
  },

  {
    name: "francisco",
  },

  {
    name: "joseph",
  },

  {
    name: "arvin",
  },

  {
    name: "dionisio",
  },

  {
    name: "ronillo",
  },

  {
    name: "enrico",
  },

  {
    name: "rene",
  },

  {
    name: "arnel",
  },
  {
    name: "efren",
  },

  {
    name: "angelo",
  },

  {
    name: "pua",
  },
  {
    name: "christopher",
  },

  {
    name: "rey",
  },
  {
    name: "joseph",
  },
  {
    name: "nuhi",
  },

  {
    name: "ronald",
  },

  {
    name: "jun",
  },
];

const Roster = () => {
  // Calculate the number of members
  const memberCount = members.length;

  return (
    <>
      <Helmet>
        <title>Roster of Members</title>
      </Helmet>

      <div className="flex flex-col w-full bg-gray-100 py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#050038] text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4">
          ROSTER OF MEMBERS
        </h1>
        <p className="text-gray-700 font-dinnext text-base sm:text-lg md:text-xl mx-auto max-w-2xl">
          Rotary Club of Las Piñas has a total of {memberCount} members and is
          still growing.
        </p>
      </div>

      <div className="flex justify-center mt-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl pb-10">
          <div className="flex justify-center items-center">
            {/* Badr Image */}
            <RosterImage
              imageSrc={badr}
              name="Mohammad Yasin Badr"
              profession="Floor / Construction Materials"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={miriam} name="Miriam" isSpouse={true} />
          </div>

          {/* Buenconsejo Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={buenconsejo}
              name="Ritche D. Buenconsejo"
              profession="Label Specialist"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={pine} name="Pine" isSpouse={true} />
          </div>

          {/* Catud Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={catud}
              name="SOCRATES P. CATUD"
              profession="Transport Services"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={marisonia}
              name="marisonia"
              isSpouse={true}
            />
          </div>

          {/* Cornista Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={cornista}
              name="ARCHIVAL V. CORNISTA"
              profession="Chemical Engineering / Construction Management"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={leeAnn} name="LEE ANN" isSpouse={true} />
          </div>

          {/* De Vera Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={deVera}
              name="HAROLD T. DE VERA"
              profession="Construction Services"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={becca} name="Becca" isSpouse={true} />
          </div>

          {/* Flor Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={flor}
              name="Hilbert M. Flor"
              profession="Jail Management (RD)"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={lisa} name="Lisa" isSpouse={true} />
          </div>

          {/* Gomez Image */}
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={gomez} name="Rodel G. Gomez" />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={mitch} name="Mitch" isSpouse={true} />
          </div>

          {/* Hernandez Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={hernandez}
              name="Rafael J. Hernandez"
              profession="Life Insurance & Wealth Management Services"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={eloisa} name="Eloisa" isSpouse={true} />
          </div>

          {/* Hernandez1 Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={hernandez1}
              name="Ricardo G. Hernandez"
              profession="Horticulture"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={elaine} name="Elaine" isSpouse={true} />
          </div>

          {/* Hernandez1 Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={lee}
              name="Edwin L. Lee"
              profession="Digital Graphics Equipment & Services"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={nytz} name="Nytz" isSpouse={true} />
          </div>

          {/* Manaig Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={manaig}
              name="Francisco T. Manaig"
              profession="Insurance Brokerage"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={prescy} name="Precy" isSpouse={true} />
          </div>

          {/* Manapsal Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={manapsal}
              name="Joseph Aron I. Manapsal"
              profession="Medicine - Public Health"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={cecille} name="Cecille" isSpouse={true} />
          </div>

          {/* Marbibi Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={marbibi}
              name="Dr. Arvin C. Marbibi"
              profession="Diagnostic - Diabetologist"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={marivic} name="Marivic" isSpouse={true} />
          </div>

          {/* Molina Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={molina}
              name="Dionisio T. Molina Jr."
              profession="Baking Equipment Fabrication"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={tes} name="Tes" isSpouse={true} />
          </div>

          {/* Monzon Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={monzon}
              name="Ronillo M. Monzon"
              profession="Finance & Audit Specialist"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={tess} name="Tess" isSpouse={true} />
          </div>

          {/* Licarte Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={licarte}
              name="Enrico V. Licarte"
              profession="Civil Engineering"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={annie} name="Annie" isSpouse={true} />
          </div>

          {/* Ocampo Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={ocampo}
              name="Rene S. Ocampo"
              profession="Charter Airlines - Cargo"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={olive} name="Olive" isSpouse={true} />
          </div>

          {/* Empty Div */}
          <div className="hidden md:block"></div>

          {/* Palmes Image */}
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={palmes} name="Arnel M. Palmes" />
          </div>

          {/* Parilla Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={parilla}
              name="Efren R. Parilla"
              profession="Educator"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={annie1} name="Annie" isSpouse={true} />
          </div>

          {/* Penson Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={penson}
              name="Angelo Dwight L. Penson"
              profession="Traffic/Transport Engineering"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={cristina} name="Cristina" isSpouse={true} />
          </div>

          {/* Pua Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={pua}
              name="Jaime M. Pua"
              profession="Architechture"
            />
          </div>

          {/* Empty Div */}
          <div className="hidden md:block"></div>

          {/* Ramirez Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={ramirez}
              name="Christopher F. Ramirez"
              profession="Jail Management (Support Unit)"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={analyn} name="Analyn" isSpouse={true} />
          </div>

          {/* Reyes Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={reyes}
              name="Rey Angelo D. Reyes"
              profession="Public Services - Youth Sector"
            />
          </div>

          {/* Sta Ana Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={staAna}
              name="Joseph Patrick R. Sta. Ana"
              profession="Medicine"
            />
          </div>

          {/* Tah Image */}
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={tah} name="Nuhi M. Tah" />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={almayda} name="Almayda" isSpouse={true} />
          </div>

          {/* Vilchez Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={vilchez}
              name="Ronald V. Vilchez"
              profession="Office Equipment & IT product Dealership"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={angelica} name="Angelica" isSpouse={true} />
          </div>

          {/* Zhou Image */}
          <div className="flex justify-center items-center">
            <RosterImage
              imageSrc={zhou}
              name="Jun Min Zhou"
              profession="Home Furnishing Specialist"
            />
          </div>
          <div className="flex justify-center items-center">
            <RosterImage imageSrc={jackie} name="Jackie" isSpouse={true} />
          </div>
        </div>
      </div>

      <div className="w-full py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#050038] text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4">
          HONORARY MEMBERS
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl pb-10">
            <div className="flex justify-center items-center">
              <RosterImage imageSrc={afzelius} name="PDG Edwin O. Afzelius" />
            </div>
            <div className="flex justify-center items-center">
              <RosterImage imageSrc={cornista1} name="PP Artemio B. Cornista" />
            </div>
            <div className="flex justify-center items-center">
              <RosterImage imageSrc={encarnacion} name="Rosita Encarnacion" />
            </div>
            <div className="flex justify-center items-center">
              <RosterImage imageSrc={tumangan} name="PRID Guiller Tumangan" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roster;
