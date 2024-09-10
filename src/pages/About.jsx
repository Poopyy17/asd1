import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import RotaryLogo from "../assets/logo png 2.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div>
        <div className="bg-[#0F1923] w-full h-auto flex items-center justify-center relative p-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Text */}
            <div className="text-[#ECE8E1] font-dinnext font-black text-4xl sm:text-4xl md:text-6xl">
              ABOUT US
            </div>
            {/* Image beside the text */}
            <div className="px-5">
              <img
                src={RotaryLogo}
                alt="Rotary Logo"
                className="w-[100px] h-auto md:w-[200px] lg:w-[250px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-4 md:px-40 lg:px-80 py-6 bg-[#ECE8E1]">
          {/* Container for Long Description */}
          <div className="lg:w-[1500px] h-auto lg:h-auto">
            <h1 className="text-[#0F1923] font-dinnext font-black text-xl sm:text-2xl md:text-4xl pt-4 pb-5 uppercase">
              The Rotary Club of Las Piñas, <br />
              How it was organized?
            </h1>
            <div className="h-auto">
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-regular font-dinnext">
                The organization of the provisional Rotary Club of Las Piñas was
                conceived by the Rotary Club of Parañaque under its 5th
                President Cesar Jota. Then the District Governor, later RI
                Director for 1996-1998 Paing Hechanova, assigned RCP Vice
                President-Elect Rene Ocampo as District Governor Special
                Representative. He was the most logical choice being the most
                experienced Parañaque Rotarian residing in Las Piñas.
                Spearheading its formation, Rene called for its initial meeting
                on February 29, 1980 at the Kalantiao Room at Tropical Place
                Resort Hotel A total of 16 persons attended, a number which
                steadily grew until its 8th meeting on May 8, 1980.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext">
                <br /> On May 14 of the same year, Rotary International, under
                President Jim Bomar, granted the charter to the Rotary Club of
                Las Piñas, exactly 18 days after pertinent documents were
                mailed. It was a record of swift approval in Philippine Rotary
                history, thanks to the efforts of DG Paing and District Chairman
                for Extension Cesar Yaico, also Charter President of RC
                Parañaque.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext">
                <br /> Fourteen more meetings and the club held its charter
                presentation and induction of charter officers and members on
                August 28, 1980. Fittingly, DSGR Rene Ocampo, once a young man
                in search of a Rotary Club in Las Piñas with which to apply for
                the Rotary Foundation Group Study Exchange Award, was elected
                Charter President.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext">
                <br /> Aside from Charter President Rene Ocampo, the other
                officers and directors were: Sandy Sadoval, Vice President and
                President Elect; Buddy Funcion, Secretary, Eli Encarnacion,
                Treasurer.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext">
                <br /> Directors were Maxy Abad, Club Service A; Art Gacutan,
                Club Service B; Joe Tabora, Club Services C Larry Argente,
                Vocational and Community Services, and Art Higgins,
                International Service.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext">
                <br /> On the fourth quarter, Art Higgins who resigned was
                replaced by Adolf Azcuna. The first year of the club was easily
                a banner year!
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext sm:leading-loose">
                <br /> Hitherto unknown, the newly chartered obscure little club
                attracted international attention when it cosponsored with the
                Rotary Club of Encino, California the transport and medical
                treatment of Victor Edward Leyson who suffered from a rare
                congenital anomaly known as “first bronchial arch syndrome”.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext sm:leading-loose">
                <br /> Also, the club arranged for the airlifting, free of
                charge of six-year-old boy Chong Yoong Chew and his mother
                Madame Ho Sin Yew from Kuala Lumpur to Manila and back for an
                open-heart surgery in cooperation with the Rotary Club of
                Kajang, Malaysia.
              </p>
              <p className="text-[#0F1923] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-dinnext sm:leading-loose">
                <br /> In the words of PDG Pepot Barredo, “The Rotary Club of
                Las Piñas achieved in one year what other clubs would normally
                take years”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
