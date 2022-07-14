import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Logo from "../assets/SanchyLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const Element = Link;

  return (
    <div className=" justify-between fixed z-30 items-center  mx-auto h-20 bg-[#FFFFFF] w-[100%]">
      <div className="flex justify-between mx-auto  w-[90%] h-20">
        <div>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={Logo}
              alt="/"
              className=" w-[40%] h-auto p-4 cursor-pointer"
            />
          </Link>
        </div>

        <ul className=" hidden  cursor-pointer lg:flex ">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <li className="p-8 hover:text-[#001EDC] text-[16px]">Home</li>
          </Link>
          <Link to="/" onClick={() => window.scrollTo(800, 800)}>
            <li className="p-8 hover:text-[#001EDC] text-[16px] ">
              About Us
            </li>
          </Link>

          <li className="p-4">
            {/* <Button  {`$ {value}`} /> */}
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button>{`$ {learn}`}</Button>
            </Link>
          </li>
        </ul>

        <div className="lg:hidden" onClick={handleClick}>
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
            : "absolute cursor-pointer w-[45%] bg-[#F5F5F5] sm:left-[70%] sm:w-[30%] left-[60%]"
        }
      >
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <li className="p-8 text-[#001EDC] menu-bt menu-bb text-[16px]">
            Home
          </li>
        </Link>

        <Link to="/" onClick={() => window.scrollTo(800, 800)}>
          <li className="p-8 text-[#001EDC] text-[16px] ">About Us</li>
        </Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <li className="p-8 text-[#001EDC] menu-bb text-[16px]">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
