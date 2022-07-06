import React from "react";

function Button() {
  const value = "Contact us";
  const learn = "learn More";
  return (
    <div>
      <button className="w-[154px] h-[60px] bg-[#001EDC] text-[#FFFFFF] text-[13px] text-center rounded hover:bg-[#F6F9FF] hover:text-[#001EDC]">
        {`${value}`}
      </button>
    </div>
  );
}

export default Button;
