import React from "react";
import Rectangle22678 from "../assets/Rectangle22678.png";
import Button from "./Button";

function Org() {
  return (
    <div className="org-im  bg-center bg-cover lg:pb-72 h-auto">
      <div className=" lg:w-[70%] mx-auto h-[520px]">
        <h2 className=" text-[24px] w-[55%] text-white lg:w-[85%] lg:text-[60px] text-center mx-auto font-black h-auto lg:pt-[20%]">
          What does your Organization need to solve
        </h2>
        <p className=" org-text w-[90%] text-[16px] leading-7 text-center mx-auto">
          Fundamentally improve workflow learning in any of these areas by
          delivering real-time, tailored content that automatically populates as
          users move through different software platforms
        </p>
        <div className=" pt-4 mx-[40.4%] lg:pt-14">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Org;
