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
              Sanchy Technology is a modern-day digital company, We champion the
              innovative development of products and that thrives in providing
              information technology solutions for its customers, small and
              medium-sized businesses. Our mission from the very first day has
              been to cultivate professional relationships with our clients to
              provide effective and reliable information technology solutions
              for their immediate and diverse needs. The team at Sanchy
              Kreations is equipped with a highly developed skill set cultivated
              over years of experience not only in information technology but;
              also in business processes across a range of industry sectors.
            </p>
            <p className="text-[18px] text-center leading-8 text-[#242424] mt-4 w-[100%]">
              Established as a technology-driven company, we pride ourselves on
              providing comprehensive arrays of solutions comprising digital and
              virtual card payment platforms across any e-commerce website as a
              stress-free routine, making relevant memories last longer for
              generations through wall portraits and also making information
              available for B2B purposes and so much more. Our team consistently
              delivers first-hand solutions at various arrays of digital
              experiences including, but not limited to, marketing, recruitment,
              communication, and network management services.
            </p>
            <p className="text-[18px] text-center leading-8 text-[#242424] mt-4 w-[100%]">
              At Sanchy Kreations, we embrace the power of change to create
              long-lasting value in every direction for our clients, people, and
              communities and we strive to continuously equip ourselves with the
              latest digital and technical know-how paving the way for our
              clients and partners to navigate the technology landscape most
              effectively in this ever-changing world.
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