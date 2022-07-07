import React from "react";
import Inspire11 from "../assets/Inspire11.png";
import people11 from "../assets/people11.png";
import Group8 from "../assets/Group 8352double .png";
import Group83 from "../assets/Group 8377.png";
function What() {
  return (
    <div className="w-[100%] h-auto  pb-36">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[24px]w-[80%] lg:text-[60px] h-[58px] leading-8 font-black  lg:text-left lg:w-[45%] lg:ml-[55%]   ">
          {" "}
          What we do
        </h1>
        <p className="w-[100%] text-[18px] h-auto leading-8 font-normal lg:w-[45%] lg:ml-[55%]">
          We follow a consultative approach to understand your requirements
          first and then we put forward a suitable set of solutions accordingly.
        </p>
        <div className="w-[50%] md:relative ">
          <img
            src={Inspire11}
            alt="/"
            className="hidden  lg:block lg:pt-[12%]  lg:ml-[7%] w-[48%]xl:w-[48%] h-auto  xl:ml-[5%] xl:relative xl:pt-[2%]"
          />
        </div>
        <div className="lg:hidden">
          <img src={Group8} alt="" className="w-[90%] h-auto mx-auto mt-[27px] mb-14" />
        </div>

        <div>
          <div>
            <div className=" w-[100%] pb:8 lg:pb-14 lg:mt-[-60%] lg:ml-[55%] lg:w-[45%]  xl:mt-[-57.2%] xl:ml-[55%] xl:relative xl:pb-44">
              <h3 className="text-[#001EDC] text-[24px] w-[100%] h-auto leading-8 font-normal mb-4">
                We invest in the future of technology mobility and data
                optimization.
              </h3>

              <p className="w-[100%] text-[18px]  h-auto leading-8 font-normal">
                We know the fuel that drives tech is the need for innovations
                and services that constantly beats and exceeds expectations. We
                do not shy away from investing deeply in tech trends, new
                technologies, and software that transcends and paves a new path
                for the future of digital services.
              </p>
              {/*  */}

              <h3 className="text-[#001EDC] text-[24px] w-[100%] h-auto leading-8 font-normal mt-6 mb-4">
                Inspire and be inspired
              </h3>

              <p className="w-[100%] text-[18px]  h-auto leading-8 font-normal">
                We're result-oriented, result-driven, passionate, collaborative
                Leading by example. We aim to create an environment where
                everyone is thriving, happy, and enjoys their work. When giving
                feedback, we strive to inspire and balance encouragement with
                constructive criticism. We take the interests in each other’s
                growth, We are open-minded, flexible, and appreciate each
                other’s strengths.
              </p>
            </div>
          </div>
          <div>
            <img
              src={people11}
              alt="/"
              className="w-[48%] h-auto lg:ml-[46%] lg:mt-[-8%]  xl:ml-[46%] hidden  lg:block "
            />
            <div className="w-[100%] lg:w-[45%]  ">
              <div className="ml-[0%] xl:mt-[-80%] lg:mt-[-100%]">
                <h3 className="text-[#001EDC] text-[24px] w-[100%] h-auto leading-8 font-normal mb-4 mt-4">
                  {" "}
                  Add to the culture
                </h3>

                <p className="w-[100%] text-[18px] h-auto leading-8 font-normal">
                  We're accountable, transparent, empathetic, selfless. Our team
                  strives to add to the growth culture in our own unique ways.
                  We seek out a diversity of views and acknowledge that
                  sometimes we’ll have to challenge our assumptions.
                </p>
                {/*  */}

                <h3 className="text-[#001EDC] text-[24px] w-[100%] h-auto leading-8 font-normal mt-6 mb-4">
                  Trustworthy
                </h3>

                <p className="w-[100%] text-[18px]  h-auto leading-8 font-normal ">
                  We're trustworthy, ethical, candid. We meet on common ground
                  in appreciation of our different perspectives and the
                  expertise of our team. We trust each other because we know
                  that we are all putting our hearts into our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
