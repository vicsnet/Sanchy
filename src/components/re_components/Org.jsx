import React from "react";
import Rectangle22678 from "../assets/Rectangle22678.png";
import Button from "./Button";

function Org() {
  return (
    <div className="org-im h-auto bg-center bg-cover pb-72">
      <div className="w-[60%] mx-auto px-auto pt-72">
        <h2 className=" text-white w-[100%] text-[60px] text-center mx-auto font-black ">
          What does your <br />
          <span>Organization need to solve</span>
        </h2>
        <p className=" org-text w-[90%] text-[16px] leading-7 text-center mx-auto">
          Fundamentally improve workflow learning in any of these areas by
          delivering real-time, tailored content that automatically populates as
          users move through different software platforms
        </p>
        <div className=" mx-[40.4%] pt-14">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Org;
