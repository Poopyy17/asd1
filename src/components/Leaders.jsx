import React from "react";
import prescy from "../assets/prescy2.png";
import ronald from "../assets/ronald1.png";

const Leaders = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-full text-center px-5">
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-black font-dinnext font-black">
          OUR LEADERS
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 pt-5 gap-8">
        {/* Prescy */}
        <div className="bg-white rounded-lg shadow-[0px_0px_4px_1px_#e2e8f0] p-4 flex flex-col items-center relative">
          <img
            className="w-[400px] rounded-lg mb-4"
            src={prescy}
            alt="President"
          />
          <div className="flex flex-col items-center">
            <p className="md:text-4xl sm:text-3xl text-2xl text-orange-500 font-coolvetica tracking-wider leading-tight text-center">
              <span style={{ fontFamily: "inherit" }}>“</span>
              PRECIOUS IRRESISTIBLE
              <span style={{ fontFamily: "inherit" }}>”</span>
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-coolvetica tracking-wider leading-tight py-2 text-center">
              Governor <br /> Prescy Yulo
            </h1>
            <p className="italic pt-2 text-center">
              <span style={{ fontFamily: "inherit" }}>“</span>
              As District Governor, I am committed to leading with an inclusive
              heart and a relentless spirit. Together, we will strengthen
              District 3830 where every voice is heard, every talent is valued,
              and every member is empowered to serve our communities. With
              unwavering principles of Rotary at the core of all we do, we will
              embark on ambitious projects, forge lasting partnerships, and
              leave a legacy of impact that transcends generations.”
              <span style={{ fontFamily: "inherit" }}></span>
            </p>
            <button className="w-[120px] border border-gray-600 text-gray-600 bg-transparent hover:bg-gray-100 mx-auto md:mx-0 my-6 py-3 rounded-full">
              Learn more
            </button>
          </div>
        </div>

        {/* Ronald */}

        <div className="bg-white rounded-lg shadow-[0px_0px_4px_1px_#e2e8f0] p-4 flex flex-col items-center relative">
          <img
            className="w-[400px] rounded-lg mb-4"
            src={ronald}
            alt="President"
          />
          <div className="flex flex-col items-center">
            <p className="md:text-4xl sm:text-3xl text-2xl text-orange-500 font-coolvetica tracking-wider leading-tight text-center">
              <span style={{ fontFamily: "inherit" }}>“</span>
              PRECIOUS IRRESISTIBLE
              <span style={{ fontFamily: "inherit" }}>”</span>
            </p>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-coolvetica tracking-wider leading-tight py-2 text-center">
              Governor <br /> Ronald Vilchez
            </h1>
            <p className="italic pt-2 text-center">
              Joined Rotary Club of Las Piñas in the Rotary Year 2021-2022 with
              the theme,{" "}
              <strong>
                <em>SERVE TO CHANGE LIVES.</em>
              </strong>{" "}
              Since then, he actively participated in the signature projects of
              RCLP especially Medical Mission that benefited the target
              community. His Classification as
              <strong>
                <em>Office Printing and IT Products Dealership</em>
              </strong>{" "}
              contributes to the Service projects of RCLP especially during
              Brigada Eskwela which is one of the signature projects of the
              club,{" "}
              <strong>
                <em>Adopt a School Program.</em>
              </strong>{" "}
              PIP Ron as fondly called by his classmates is Married to
              <strong>
                <em> ANGELICA A. VILCHEZ</em>
              </strong>{" "}
              and they are blessed with three (3) children, ROGEL JOHN, RON
              JAMES & ROAN JOY. He is currently the President/CEO of{" "}
              <strong>
                <em>RONGELVIL TRADING INC.</em>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
