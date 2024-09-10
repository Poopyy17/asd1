import React from "react";
import { Helmet } from "react-helmet-async";
import SignatureProjectCarousel from "../components/SignatureProjectCarousel";
import SigProj from "../components/SigProj";
import water from "../assets/Areas of Focus/Water.png";
import education from "../assets/Areas of Focus/Basic Education.png";
import disease from "../assets/Areas of Focus/Disease Prevention.png";
import community from "../assets/Areas of Focus/Community Economic.png";
import handWash from "../assets/Signature Projects/Water and Sanitation/1/1.mp4";
import handWash1 from "../assets/Signature Projects/Water and Sanitation/1/2.jpg";
import handWash2 from "../assets/Signature Projects/Water and Sanitation/1/3.jpg";
import handWash3 from "../assets/Signature Projects/Water and Sanitation/1/4.jpg";
import handWash4 from "../assets/Signature Projects/Water and Sanitation/1/5.jpg";
import handWash5 from "../assets/Signature Projects/Water and Sanitation/1/6.jpg";
import literacy1 from "../assets/Signature Projects/Basic Education/1/1.jpg";
import literacy2 from "../assets/Signature Projects/Basic Education/1/2.jpg";
import literacy3 from "../assets/Signature Projects/Basic Education/1/3.jpg";
import literacy4 from "../assets/Signature Projects/Basic Education/1/4.jpg";
import literacy5 from "../assets/Signature Projects/Basic Education/1/5.jpg";
import literacy6 from "../assets/Signature Projects/Basic Education/1/6.jpg";
import polio1 from "../assets/Signature Projects/Disease Prevention/1/1.jpg";
import polio2 from "../assets/Signature Projects/Disease Prevention/1/2.jpg";
import polio3 from "../assets/Signature Projects/Disease Prevention/1/3.jpg";
import polio4 from "../assets/Signature Projects/Disease Prevention/1/4.jpg";
import polio5 from "../assets/Signature Projects/Disease Prevention/1/5.jpg";
import polio6 from "../assets/Signature Projects/Disease Prevention/1/6.jpg";
import grant1 from "../assets/Signature Projects/Basic Education/2/1.jpg";
import grant2 from "../assets/Signature Projects/Basic Education/2/2.jpg";
import grant3 from "../assets/Signature Projects/Basic Education/2/3.jpg";
import grant4 from "../assets/Signature Projects/Basic Education/2/4.jpg";
import grant5 from "../assets/Signature Projects/Basic Education/2/5.jpg";
import grant6 from "../assets/Signature Projects/Basic Education/2/6.jpg";
import grant7 from "../assets/Signature Projects/Basic Education/2/7.jpg";
import grant8 from "../assets/Signature Projects/Basic Education/2/8.jpg";
import grant9 from "../assets/Signature Projects/Basic Education/2/9.jpg";
import grant10 from "../assets/Signature Projects/Basic Education/2/10.jpg";
import grant11 from "../assets/Signature Projects/Basic Education/2/11.jpg";
import grant12 from "../assets/Signature Projects/Basic Education/2/12.jpg";
import donation1 from "../assets/Signature Projects/Basic Education/3/1.jpg";
import donation2 from "../assets/Signature Projects/Basic Education/3/2.jpg";
import donation3 from "../assets/Signature Projects/Basic Education/3/3.jpg";
import donation4 from "../assets/Signature Projects/Basic Education/3/4.jpg";
import donation5 from "../assets/Signature Projects/Basic Education/3/5.jpg";
import donation6 from "../assets/Signature Projects/Basic Education/3/6.jpg";
import rclp1 from "../assets/Signature Projects/Community Economic/1/1.jpg";
import rclp2 from "../assets/Signature Projects/Community Economic/1/2.jpg";
import medical1 from "../assets/Signature Projects/Disease Prevention/2/1.jpg";
import medical2 from "../assets/Signature Projects/Disease Prevention/2/2.jpg";
import medical3 from "../assets/Signature Projects/Disease Prevention/2/3.jpg";
import medical4 from "../assets/Signature Projects/Disease Prevention/2/4.jpg";
import medical5 from "../assets/Signature Projects/Disease Prevention/2/5.jpg";
import medical6 from "../assets/Signature Projects/Disease Prevention/2/6.jpg";
import pillar1 from "../assets/Signature Projects/Water and Sanitation/2/1.jpg";
import pillar2 from "../assets/Signature Projects/Water and Sanitation/2/2.jpg";
import pillar3 from "../assets/Signature Projects/Water and Sanitation/2/3.jpg";
import pillar4 from "../assets/Signature Projects/Water and Sanitation/2/4.jpg";
import pillar5 from "../assets/Signature Projects/Water and Sanitation/2/5.jpg";

const SignatureProjects = () => {
  const projPosts = [
    {
      categoryImage: water,
      title:
        "Water and Sanitation – Construction of Toilet and Handwashing Facility",
      details:
        "Project partnership with BJMP Regional Office Calabarzon for AOF Water and Sanitation with the construction of Toilet and Handwashing Facility at the said school. PP Gen Hilbert Flor as project lead and spearheaded the turnover ceremony, deed of donation and tripartite agreement between Rotary Club, BJMP Calabarzon and Milagrosa ES. Joining in the turnover were Ann Lisa, TGP Raffy, PE Ronald, PP Frank, PP Harry and Ann Becca",
      videoUrl: handWash, // Optional
      images: [handWash1, handWash2, handWash3, handWash4, handWash5],
    },
    {
      categoryImage: education,
      title:
        "A RCLP Signature Project – Literacy Program / Alternative Learning System",
      details:
        "A RCLP Signature Project – Literacy Program / Alternative Learning System @ BJMP Las Pinas spearheaded by PP Gen Obet and TGP Raffy. This year RCLP donated schools supplies and a 50″ Smart Android Ultra HD TV which will be used by the student PDLs undergoing the ALS program. Another AOF Basic Education and Literacy advocacy of the club.",
      images: [
        literacy1,
        literacy2,
        literacy3,
        literacy4,
        literacy5,
        literacy6,
      ],
    },
    {
      categoryImage: disease,
      title: "End Polio Now 2023 – Patak Polio Project",
      details:
        "A Club Signature Project this time together with RC Makati Ayala Triangle where 100 kids ages 1-3 received 2 drops of polio vaccine. Parents as well received loot bags for bringing their kids to be vaccinated. DG Jay Tambunting and DGE Prescy Yulo joined the event hosted by both clubs which culminated with a motorcade within Las Piñas City.",
      images: [polio1, polio2, polio3, polio4, polio5, polio6],
    },
    {
      categoryImage: education,
      title: "PILLAR DISTRICT GRANT",
      details:
        "3 Classroom Renovation, 1000 Books donation, Christmas gift giving & Feeding program at Talon Elementary School, Amadeo Cavite.",
      images: [
        grant1,
        grant2,
        grant3,
        grant4,
        grant5,
        grant6,
        grant7,
        grant8,
        grant9,
        grant10,
        grant11,
        grant12,
      ],
    },
    {
      categoryImage: education,
      title:
        "Donation of FUJIXEROX A3 Mono Multifunction Printer, Blue Digital Duplicator, and 4 Units of Portable Hand Wash Sink",
      details:
        "RCLP participated in DepED’s Brigada Eskwela Program in which stakeholders provide necessary needs of the adopted school in support of the needs of the campus, administration, teachers and of course the students. This year RCLP provided copying machines, portable wash areas and renovation materials to the adopted schools namely Las Piñas NHS – Almanza and Pilar Village ES.",
      images: [
        donation1,
        donation2,
        donation3,
        donation4,
        donation5,
        donation6,
      ],
    },
    {
      categoryImage: community,
      title: "RCLP Signature Project",
      details:
        "Rehabilitation of 1 Classroom and 1 All-Purpose room at Payapa Ibaba Elementary School, Lemery Batangas.",
      images: [rclp1, rclp2],
    },
    {
      categoryImage: disease,
      title: "Medical Mission RI Month Theme: Disease Prevention and Treatment",
      details:
        "A club signature project in partnership with the Bureau of Jail Management and Penology – Las Pinas and the Rotary Club of Makati Premiere District for providing the Breast and Cervical Cancer Mobile Health Bus. The Persons deprive of Liberty (PDLs) from the Male and Female Dorms of BJMP LP were able to avail of free medical check up. The female PDLs were also able to avail of the free breast and cervical cancer screening with a total patient screened of 86 of which 6 were (+) for breast exam and 0 (+) for VIA. The project was led by the two doctors of the club namely MIP Joseph Manapsal, MD and Rtn Joseph Sta Ana, MD.",
      images: [medical1, medical2, medical3, medical4, medical5, medical6],
    },
    {
      categoryImage: water,
      title:
        "Pillar Grant Project RY2022-2023 Batang Mulanayin Pasiglahin at Pag-Aralin Construction of School Canteen and Wash & Brush Area",
      details:
        "A joint project of Rotary Club of Las Pinas, Rotary Club of Makati, Rotary Club of Quiapo Plaza Miranda and The Rotary Foundation for the benefit of the students and teachers of DFARIS. The project is coordinated with the LGU Mulanay and the DFARIS Parent – Teacher Association. Ocular Inspection, Needs Assessment, Project Partnership Agreement and MOA Signing.",
      images: [pillar1, pillar2, pillar3, pillar4, pillar5],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Signature Projects</title>
      </Helmet>

      {/* Header Section */}
      <div className="flex flex-col w-full bg-gray-100 py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#050038] text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4">
          SIGNATURE PROJECTS
        </h1>
      </div>

      {/* Signature Project Image Carousel */}
      <div className="mt-5">
        <SignatureProjectCarousel />
      </div>

      {/* Responsive Centered Border */}
      <div className="flex justify-center my-8">
        <div className="border-b-2 border-slate-200 w-4/5 sm:w-[50%] md:w-[70%] lg:w-[75%] mx-auto"></div>
      </div>

      {/* Signature Project Projects Blog */}
      <div className="container mx-auto px-4 py-8">
        {/* Blog Section with Category Image */}
        {projPosts.map((post, index) => (
          <SigProj
            key={index}
            categoryImage={post.categoryImage}
            title={post.title}
            details={post.details}
            videoUrl={post.videoUrl}
            images={post.images}
          />
        ))}
      </div>
    </>
  );
};

export default SignatureProjects;
