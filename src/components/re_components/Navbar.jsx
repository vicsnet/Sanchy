import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Logo from "../assets/SanchyLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

function Navbar() {
  //  const value = "Contact Us";
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" justify-between items-center  mx-auto h-20 bg-[background: rgba(255, 255, 255, 1)] w-[100%]">
      <div className="flex justify-between mx-auto px-4 w-[90%] h-20">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="/"
              className=" w-[40%] h-auto p-4 cursor-pointer"
            />
          </Link>
        </div>

        <ul className=" hidden cursor-pointer md:flex">
          <Link to="/">
            <li className="p-8 hover:text-[#001EDC]">Home</li>
          </Link>
          <li className="p-8 hover:text-[#001EDC]">About Us</li>
          <Link to="contact">
            <li className="p-4">
              {/* <Button  {`$ {value}`} /> */}
              <Button>{`$ {learn}`}</Button>
            </li>
          </Link>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed right-0 top-0 h-full w-[30%] ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <ul className=" pt-16 capitalise">
            <li className="p-4">Home</li>
            <li className="p-4">About Us</li>
            <li className="p-4">
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
