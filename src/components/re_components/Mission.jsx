import React from "react";
import Union from '../assets/Union.png'

const Mission = () => {
  return (
    <div className="w-[100%] h-auto">
      <div className="w-[90%] mx-auto flex">
        <div>
          <div className="h-auto flex md:gap-28 ">
            <h1 className="text-[200px] text-center text-[#E1E4FB] absolute w-[90%] md:relative  ">
              01
            </h1>
            <div className=" md:pt-[70px] ">
              <h2 className="text-[24px] text-[#001EDC] text-center md:text-left md:w-[90%]">
                Our Mission
              </h2>
              <p className="w-[100%] text-[18px] text-center md:text-left leading-8 mt-8 relative md:mt-4 text-[#242424] md:w-[90%]">
                To be a successful global information technology company trusted
                by its customers and partners for service excellence, caring for
                its employees and creating and delivering innovative and
                value-driven ICT products and services.
              </p>
            </div>
          </div>
          <div className="h-auto flex md:gap-20 lg:gap-28 mt-11 ">
            <h1 className="text-[200px] text-center text-[#E1E4FB] absolute md:w-[34%] md:relative w-[90%] ">
              02
            </h1>
            <div className=" md:pt-[70px] ">
              <h2 className="text-[24px] text-[#001EDC] text-center md:text-left md:w-[90%] mt-5">
                Our Vision
              </h2>
              <p className="w-[100%] text-[18px] text-center md:text-left leading-8 mt-10 relative md:mt-4 text-[#242424] md:w-[100%]">
                To create innovative products and services to help ease the life
                of customers and partners
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={Union} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
