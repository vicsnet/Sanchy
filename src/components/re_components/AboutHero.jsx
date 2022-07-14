import React from 'react'
import Screen from "../assets/Group3.png";
const AboutHero = () => {
  return (
      <div className="w-[100%] bg-[#F6F9FF] hero-bg h-[566px] md:h-[800px] lg:h-[1100px] sm:h-[700px]">
     
      <div className="w-[90%] mx-auto ">
        <div className="flex pt-[30%] lg:gap-6">
        
            
              
              <div class="relative w-[60%] ">
                <h2 className="text-[28px] font-black mb-8  lg:w-[70%] xl:w-[60%] lg:text-[60px] lg:leading-[70px] lg:mb-4 md:w-[70%] md:text-[40px] sm:text-[32px] sm:w-[70%]">
                  {" "}
                  A company that <span className="text-[#001EDC]">
                    creates
                  </span>{" "}
                  Companies{" "}
                </h2>
                <p className="w-[160%] text-[18px] lg:w-[90%] leading-[22px] md:w-[90%] sm:w-[90%]">
                  We create our own independent products that operate both
                  domestically and internationally under separate brands in
                  various niches of the tech and innovation industry.
                </p>
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
     
  )
}

export default AboutHero