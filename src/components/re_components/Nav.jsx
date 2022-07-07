import React, { useState } from "react";
import Logo from "../assets/SanchyLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

function Nav() {
    const [nav, setNav] = useState(false);
    
    const handleClick =()=> setNav(!nav)

  return (
    <div className=" justify-between fixed z-30 items-center  mx-auto h-20 bg-[#FFFFFF] w-[100%]">
      <div className="flex justify-between mx-auto px-4 w-[90%] h-20">
        <div>
          <img
            src={Logo}
            alt="/"
            className=" w-[40%] h-auto p-4 cursor-pointer"
          />
        </div>

        <ul className=" hidden  cursor-pointer md:flex">
          <li className="p-8 hover:text-[#001EDC]">Home</li>
          <li className="p-8 hover:text-[#001EDC]">About Us</li>
          <li className="p-4">
            {/* <Button  {`$ {value}`} /> */}
            <Button>{`$ {learn}`}</Button>
          </li>
        </ul>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu size={20} className=" text-[#001EDC] mt-[90%]" />
          ) : (
            <AiOutlineClose size={20} className=" text-[#7C7B7B] mt-[90%]" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute cursor-pointer w-[30%] bg-[#F5F5F5] left-[70%] "
        }
      >
        <li className="p-8 text-[#001EDC] menu-bt menu-bb">Home</li>
        <li className="p-8 text-[#001EDC] ">About Us</li>
        <li className="p-8 text-[#001EDC] menu-bb">Contact Us</li>
      </ul>
    </div>
  );
}

export default Nav;
