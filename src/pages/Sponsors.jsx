import React from "react";
import { Helmet } from "react-helmet-async";
import bowling from "../assets/Sponsors/RCLP Bowling Team.jpg";
import bowling1 from "../assets/Sponsors/RCLP Bowling Team1.jpg";
import rongelvil from "../assets/Sponsors/Rongelvil.png";
import crystal from "../assets/Sponsors/crystal.jpg";
import ricardo from "../assets/Sponsors/ricardo.jpg";
import bathmobile from "../assets/Sponsors/bathmobile.png";
import rentmoto from "../assets/Sponsors/rentmoto.jpg";
import marbibi from "../assets/Sponsors/marbibi.png";
import hilbert from "../assets/Sponsors/hilbert.jpg";
import cornista from "../assets/Sponsors/PP TEM.jpg";
import ronnie from "../assets/Sponsors/TCP RONNIE.jpg";
import neoTes from "../assets/Sponsors/NEO-TES.jpg";
import rico from "../assets/Sponsors/PP RICO.jpg";

const Sponsors = () => {
  const items = [
    { src: bowling, title: "RCLP Bowling Team", span: "col-span-2 row-span-1" },
    {
      src: bowling1,
      title: "RCLP Bowling Team",
      span: "col-span-2 row-span-1",
    },
    {
      src: rongelvil,
      title: "Rongelvil Trading Inc.",
      span: "col-span-2 row-span-2",
    },
    { src: crystal, title: "Crystal CATX", span: "col-span-2 row-span-2" },
    { src: ricardo, title: "Ricardo's", span: "col-span-2 row-span-2" },
    { src: bathmobile, title: "Bathmobile PH", span: "col-span-2 row-span-2" },
    { src: rentmoto, title: "I-Rentmoto", span: "col-span-2 row-span-2" },
    {
      src: marbibi,
      title: "DR. Arvin C. Marbibi",
      span: "col-span-2 row-span-2",
    },
    {
      src: hilbert,
      title: "JCSUPT Hilbert M. Flor, MPSA",
      span: "col-span-2 row-span-1",
    },
    { src: cornista, title: "PP Tem Cornista", span: "col-span-2 row-span-2" },
    {
      src: ronnie,
      title: "TCP Ronnie Monzon & Family",
      span: "col-span-2 row-span-2",
    },
    {
      src: neoTes,
      title: "NEO-TES Construction & Development Services",
      span: "col-span-2 row-span-1",
    },
    {
      src: rico,
      title: "PP Rico & Ann Annie Licarte & Family",
      span: "col-span-2 row-span-3",
    },
    // Add more items with titles and spans
  ];

  return (
    <>
      <Helmet>
        <title>Sponsors</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col w-full bg-[#0A1428] py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 italic">
          SPONSORS
        </h1>
      </div>

      {/* Content */}
      <div
        className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      px-4 md:px-10 lg:px-20 xl:px-32"
      >
        {items.map((item, index) => (
          <div key={index} className={`relative ${item.span} group`}>
            {/* Title */}
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-bold text-center">
                {item.title}
              </h2>
            </div>
            {/* Image */}
            <img
              src={item.src}
              alt={`Sponsor ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sponsors;
