import React from "react";
import { Link } from "react-router-dom";
import Rectangle22678 from "../assets/Rectangle22678.png";

import Button from "./Button";

function Org() {
  return (
    <div className="h-screen ">
      <div className=" bg-[#000000] absolute w-[100%] ">
        <img
          src={Rectangle22678}
          alt=""
          className=" h-cover h-screen w-[100%] "
        />
      </div>
      <div className=" lg:w-[70%] mx-auto  relative">
        <h2 className=" text-[24px] w-[70%] text-white sm:w-[60%] lg:w-[85%] sm:text-[40px] lg:text-[60px] text-center mx-auto font-black h-auto sm:pt-[20%] pt-[40%]">
          What does your Organization need to solve
        </h2>
        <p className=" org-text w-[90%] text-[16px] leading-7 text-center mx-auto">
          Fundamentally improve workflow learning in any of these areas by
          delivering real-time, tailored content that automatically populates as
          users move through different software platforms
        </p>
        <div className=" pt-4 sm:mx-[40.4%] lg:pt-14 mx-[30%]">
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Org;
