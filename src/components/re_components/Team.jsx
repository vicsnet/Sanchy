import React from "react";
import peopleLifestyle from "../assets/people-lifestyle 1.png";
import portrait from "../assets/portrait.png";
import dreamy from "../assets/dreamy.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[90%] mx-auto bg-[#FAFAFA] ">
        <h1 className="text-[24px] lg:text-[40px] w-[100%] text-center font-black pt-36 pb-8 text-[#000735]">
          Our Team
        </h1>
        <p className="text-[18px] w-[100%] text-center pb-10">
          Our highly qualified skilled team
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 ">
          <div className="">
            <img
              src={peopleLifestyle}
              alt=""
              className="  lg:w-[100%] h-auto mx-auto sm:w-[70%] w-[90%] md:w-[80%]"
            />
            <div className=" opacity-0 hover:opacity-100 cursor-pointer h-28 mx-auto bg-white  rounded py-9 w-[70%] mt-[-20%] lg:w-[70%] md:mt-[-12%] lg:mt-[-35%] xl:mt-[-28%] sm:mt-[-16%] md:w-[60%] sm:w-[60%] relative">
              <ul className="flex   gap-4 text-center mx-auto md:w-[30%] sm:w-[40%] w-[50%] lg:w-[50%]">
                <li>
                  <FaFacebook className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  <FaTwitter className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  {" "}
                  <FaInstagram className="text-[32px] text-[#001EDC]" />
                </li>
              </ul>
            </div>
            <div className="bg-[#FFFFFF]">
              <h1 className="pt-8 text-[20px] text-center pb-2">
                Ellen Sanchy
              </h1>
              <p className="text-[#001EDC] text-[14px] text-center mb-8 pb-4">
                ADMIN MANAGER
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={portrait}
              alt=""
              className="  lg:w-[100%] h-auto mx-auto sm:w-[70%] w-[90%] md:w-[80%]"
            />
            <div className=" opacity-0 hover:opacity-100 cursor-pointer h-28 mx-auto bg-white  rounded py-9 w-[70%] mt-[-20%] lg:w-[70%] md:mt-[-12%] lg:mt-[-35%] xl:mt-[-28%] sm:mt-[-16%] md:w-[60%] sm:w-[60%] relative">
              <ul className="flex   gap-4 text-center mx-auto md:w-[30%] sm:w-[40%] w-[50%] lg:w-[50%]">
                <li>
                  <FaFacebook className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  <FaTwitter className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  {" "}
                  <FaInstagram className="text-[32px] text-[#001EDC]" />
                </li>
              </ul>
            </div>
            <div className="bg-[#FFFFFF]">
              <h1 className="pt-8 text-[20px] text-center pb-2">
                Ellen Sanchy
              </h1>
              <p className="text-[#001EDC] text-[14px] text-center mb-8 pb-4">
                ADMIN MANAGER
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={dreamy}
              alt=""
              className="  lg:w-[100%] h-auto mx-auto sm:w-[70%] w-[90%] md:w-[80%]"
            />
            <div className=" opacity-0 hover:opacity-100 cursor-pointer h-28 mx-auto bg-white  rounded py-9 w-[70%] mt-[-20%] lg:w-[70%] md:mt-[-12%] lg:mt-[-35%] xl:mt-[-28%] sm:mt-[-16%] md:w-[60%] sm:w-[60%] relative">
              <ul className="flex   gap-4 text-center mx-auto md:w-[30%] sm:w-[40%] w-[50%] lg:w-[50%]">
                <li>
                  <FaFacebook className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  <FaTwitter className="text-[32px] text-[#001EDC]" />
                </li>
                <li>
                  {" "}
                  <FaInstagram className="text-[32px] text-[#001EDC]" />
                </li>
              </ul>
            </div>
            <div className="bg-[#FFFFFF]">
              <h1 className="pt-8 text-[20px] text-center pb-2">
                Ellen Sanchy
              </h1>
              <p className="text-[#001EDC] text-[14px] text-center mb-8 pb-4">
                ADMIN MANAGER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
