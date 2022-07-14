import React from "react";
import { Link } from "react-router-dom";
import About21 from "../assets/21.png";
import Button from "./Button";
function About() {
  return (
    <div className="w-[100%] h-auto  " id="aboutme">
      <div className="w-[90%] md:flex lg:space-between mx-auto mt-[10%] mb-auto ">
        <div className=" w-[50%] h-auto">
          <img
            src={About21}
            alt=""
            className=" hidden md:block  h-auto mx-auto lg:mt-[30%] md:mt-[68%] "
          />
        </div>
        <div className="md:w-[50%] ">
          <h1 className=" text-[24px] w-[100%] md:text-[60px] h-[58px] leading-8 font-black text-[#000735] ">
            {" "}
            About Us
          </h1>
          <div>
            <h3 className=" text-[24px] h-auto lg:w-[50%] text-[#001EDC] mt-[24px] mb-4 ">
              Company
            </h3>
            <p className="  lg:w-[80%] text-[18px]  h-auto leading-8 font-normal">
              At Sanchy Kreations, we embrace the power of change to create
              long-lasting value in every direction for our clients, people, and
              communities and we strive to continuously equip ourselves with the
              latest digital and technical know-how paving the way for our
              clients and partners to navigate the technology landscape most
              effectively in this ever-changing world.
            </p>

            <h3 className=" text-[24px] h-auto lg:w-[50%] text-[#001EDC] mt-[24px] mb-4">
              {" "}
              Our Mission
            </h3>
            <p className="lg:w-[80%] text-[18px] h-auto leading-8 font-normal">
              To be a successful global information technology company trusted
              by its customers and partners for service excellence, caring for
              its employees and creating and delivering innovative and
              value-driven ICT products and services.
            </p>
            <h3 className=" text-[24px] h-auto lg:w-[50%] text-[#001EDC] mt-[24px] mb-4">
              Our Vision
            </h3>
            <p className="lg:w-[80%] text-[18px] h-auto leading-8 font-normal">
              To create innovative products and services to help ease the life
              of customers and partners
            </p>
            <div className="mt-[66px] lg:mt-[88px] ">
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <button className="w-[154px] h-[60px] bg-[#001EDC] text-[#FFFFFF] text-[13px] text-center rounded hover:bg-[#F6F9FF] hover:text-[#001EDC]">
                  learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
