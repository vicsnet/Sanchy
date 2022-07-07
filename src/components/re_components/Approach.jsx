import React from "react";
import Circle from "../assets/Circle.png";
function Approach() {
  return (
    <div className="w-[100%] bg-[#F6F9FF] h-auto pb-56 pt-32 approach-bg">
      <div className="w-[90%] mx-auto">
        <h1 className=" text-[24px] w-[100%] lg:text-[60px] h-[58px] text-[#000735] leading-8 font-black">
          Our Approach
        </h1>
        <p className="lg:w-[60%] lg:mt-16 text-[18px] leading-8 lg:pb-16 ">
          At Sanchy Kreations, we embrace the power of change to create
          long-lasting value in every direction for the individuals and business
          platforms across the tech communities.
        </p>
        <div className="lg:flex lg:gap-x-6">
          <div className="lg:w-[33%] h-auto bg-[#FFFFFF] approach-shadow">
            <h3 className="w-[100%] text-[18px] text-center text-[#001EDC] mt-[71px] mb-8">
              Technologically driven solutions
            </h3>
            <p className="w-[90%] mx-auto text-center text-[16px] leading-8 ">
              The post-digital age shows no signs of slowing down at any moment.
              And the need for rapid business transformation has never been
              greater. We connect customers and partners wherever they are on
              their paths to change—in every industry or facet of life across
              the globe— we foster partnerships to create lasting values and
              solutions in every direction.
            </p>
          </div>
          <div className="lg:w-[33%] h-auto bg-[#FFFFFF] approach-shadow">
            <h3 className="w-[100%] text-[18px] text-center text-[#001EDC] mt-[71px] mb-8">
              Innovation birthed in creativity
            </h3>
            <p className="w-[90%] mx-auto text-center text-[16px] leading-8 ">
              We continuously seek seasoned Innovative strategies to encourage
              advancements in our services at all times, usually by investing
              heavily in research and development. At Sanchy Kreations, we
              believe that innovation is essential to gain a competitive
              advantage in providing services to our users and partners
            </p>
          </div>
          <div className="lg:w-[33%] h-auto bg-[#FFFFFF] approach-shadow">
            <h3 className="w-[100%] text-[18px] text-center text-[#001EDC] mt-[71px] mb-8">
              Proven strategy
            </h3>
            <p className="w-[90%] mx-auto text-center text-[16px] leading-8 ">
              At Sanchy Kreations, we are dedicated to disruptive technology,
              helping our users and partners improve the way they interact with
              technology and seeking out new ways to change the way they do
              business. We provide a variety of services that let you take
              advantage of new technologies and innovation to help solve
              business problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
