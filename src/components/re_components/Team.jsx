import React from 'react'
import peopleLifestyle from '../assets/people-lifestyle 1.png'
import portrait from "../assets/portrait.png";
import dreamy from "../assets/dreamy.png";

const Team = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[90%] mx-auto bg-[#FAFAFA]">
        <h1 className="text-[24px] lg:text-[40px] w-[100%] text-center font-black pt-36 pb-8">
          Our Team
        </h1>
        <p className="text-[18px] w-[100%] text-center pb-10">
          Our highly qualified skilled team
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="">
            <img
              src={peopleLifestyle}
              alt=""
              className=" w-[40%] lg:w-[100%] h-auto mx-auto"
            />
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
              className=" w-[40%] lg:w-[100%] h-auto mx-auto"
            />
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
              className=" w-[40%] lg:w-[100%] h-auto mx-auto"
            />
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
}

export default Team