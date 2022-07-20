import React from 'react'
import Union from '../assets/Union.png'
import Group from "../assets/Group8355.png";
import elipse from "../assets/elipse.png";

const About_us = () => {
  return (
    <div className="w-[100%] pb-10 pt-8">
      <div className="w-[90%] mx-auto">
        <div className=" flex center">
          <div>
            <img
              src={Union}
              alt=""
              className="hidden sm:block w-[60%] h-auto mx-auto py-auto"
            />
          </div>
          <h1 className="text-[24px] md:text-[60px] font-black text-center w-[100%] text-[#000735]">
            About Us
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-col">
          <div>
            <p className="text-[18px] text-center leading-8 text-[#242424] mt-4 w-[100%]">
              We employ modern-day technology to solve both complex problems
              using a very simple approach, As an emerging tech company, we pave
              new grounds for innovations, developing products and services that
              thrive in providing an array of strategic solutions for our
              product users and intending consumers, using data analysis and
              research gateways, we make sure to facilitate true and easy user
              bill payment journey, logistics problems, everyday online
              experiences and so much more.
            </p>
            <p className="text-[18px] text-center leading-8 text-[#242424] mt-4 w-[100%]">
              Our mission from day one has been to cultivate an understanding of
              the everyday problems faced by the and not limited to the growing
              fintech community, we then carefully develop products tailored to
              provide effective and reliable tech-centric solutions for the
              final user’s immediate and diverse needs. The team at Sanchy
              Technology is vast with years of solution-driven approach to
              problems coupled with a highly developed skill set cultivated over
              years of experience not only in research and information
              technology but; also, in business integration processes and
              research across a range of industrial sectors.
            </p>
            <p className="text-[18px] text-center leading-8 text-[#242424] mt-4 w-[100%]">
              Established as a core tech-driven company, we currently pride
              ourselves in providing comprehensive arrays of solutions
              comprising digital and virtual card payment platforms across any
              e-commerce website as a stress-free routine, and also making
              payment integration purposes less strenuous and much more reliable
              and seamless than ever. Our team consistently delivers first-hand
              solutions at various arrays of digital experiences at all levels.
            </p>
          </div>
          <div className="lg: mt-28 mb-16">
            <img
              src={elipse}
              alt=""
              className="absolute hidden md:block ml-[87%] w-[8%] h-auto"
            />
            <img src={Group} alt="" className="w-[100%] h-auto mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us