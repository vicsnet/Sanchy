import React from "react";
import Maps from "../assets/Maps.png";
import Screen from "../assets/Group3.png";
const NewHero = () => {
  return (
    <div className="w-[100%] bg-[#F6F9FF] hero-bg h-[566px] md:h-[800px] lg:h-[1100px] sm:h-[700px]">
      {/* <div className=" bg-[#F6F9FF] absolute h-screen">
        <img src={Maps} alt="" className="w-[100%] " />
      </div> */}
      <div className="w-[90%] mx-auto ">
        <div className="flex pt-[30%] lg:gap-6">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide duration-100 relative w-[60%]"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner relative">
              <div class="carousel-item active relative float-left w-full duration-100">
                <h2 className="text-[28px] text-[#000735] font-black w-[112%] mb-8 xl:w-[90%] lg:text-[60px] lg:leading-[70px] lg:mb-4 md:w-[90%] md:text-[40px] sm:text-[32px] sm:w-[100%]">
                  Re-imagine <span className="text-[#001EDC]">innovation</span>{" "}
                  with forward thinking
                  <span> solutions</span>
                </h2>
                <p className="w-[160%] text-[18px] lg:w-[90%] leading-[22px] md:w-[90%] sm:w-[90%]">
                  We create our own independent products that operate both
                  domestically and internationally under separate brands in
                  various niches of the tech and innovation industry.
                </p>
              </div>
              <div class="carousel-item relative float-left w-full duration-100 ">
                <h2 className="text-[28px] text-[#000735] font-black mb-8 lg:w-[100%] lg:text-[60px] lg:leading-[70px] lg:mb-4 md:w-[80%] md:text-[40px] sm:text-[32px] sm:w-[90%] xl:w-[90%] ">
                  {" "}
                  A company that creates
                  <span className="text-[#001EDC]">
                    {" "}
                    innovative
                  </span> Companies{" "}
                </h2>
                <p className="w-[160%] text-[18px] lg:w-[90%] leading-[22px] md:w-[90%] sm:w-[90%]">
                  We create our own independent products that operate both
                  domestically and internationally under separate brands in
                  various niches of the tech and innovation industry.
                </p>
              </div>
              <div class="carousel-item relative  w-full duration-100 ">
                <h2 className="text-[28px] text-[#000735] font-black w-[112%] mb-8 xl:w-[70%] lg:text-[60px] lg:leading-[70px] lg:mb-4 md:w-[80%] md:text-[40px] sm:text-[32px] sm:w-[100%]">
                  We aim to <span className="text-[#001EDC]">raise</span> the
                  <span className="text-[#001EDC]"> innovation</span> Game
                </h2>
                <p className="w-[160%] text-[18px] lg:w-[90%] leading-[22px] md:w-[90%] sm:w-[90%]">
                  We create our own independent products that operate both
                  domestically and internationally under separate brands in
                  various niches of the tech and innovation industry.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[200px] lg:ml-[5%] md:ml-[7%] sm:ml-[6%]">
            <img
              src={Screen}
              alt=""
              className="w-[30%] h-auto sm:w-[40%] ml-[40%] mt-[15%] md:mt-[80%]  lg:mt-[110%] sm:mt-[60%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
