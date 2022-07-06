import React from "react";
import Logo2 from "../assets/Logo2.png";
import Tel from "../assets/Vectorphone.png";
import mail from "../assets/Vectormail.png";
import loc from "../assets/carbon_location.png";
import fb from "../assets/Group 8288fb.png";
import twitter from "../assets/Group 8289twitter.png";
import li from "../assets/Group 8290li.png";
import insta from "../assets/Group 8291insta.png";

function Footer() {
  return (
    <div className="w-[100%] foot  h-auto text-white mt-[-4rem]">
      <div className="foot-bt-bd">
        <div className="flex w-[90%] mx-auto gap-6 pt-20 ">
          <div className="w-[50%] flex gap-x-3 foot-border">
            <div className="w-[50%] ">
              <img src={Logo2} alt="" className="w-[40%] h-auto" />
            </div>

            <ul className="w-[50%]">
              <li className="flex mb-7">
                <img src={Tel} alt="" className="w-[7%] h-auto mr-2" />
                <p className="mr-2 text-sm foot-col">(+234)</p>
                <p className="text-sm foot-col">906308764</p>
              </li>
              <li className="flex mb-7">
                <img src={mail} alt="" className="w-[7%] h-auto mr-2" />
                <p className="mr-2 text-sm foot-col">
                  Sanchytechnology@gmail.com
                </p>
              </li>
              <li className="flex mb-7">
                <img src={loc} alt="" className="w-[7%] h-auto mr-2" />
                <p className="mr-2 text-sm foot-col">
                  12D Wole Ariyo street, off admiralty way Lekki Phase 1, Lagos.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[50%] flex gap-9">
            <div>
              <ul>
                <li className="text-sm text-[#E3E3E3] mb-7">About</li>
                <li className="text-sm foot-col mb-7">Company</li>
                <li className="text-sm foot-col mb-7">Approach</li>
                <li className="text-sm foot-col mb-7">Core values</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-[#E3E3E3] mb-7">Follow Us</h4>
              <div className="flex gap-3 w-[50%]">
                <div>
                  <img src={insta} alt="" />
                </div>
                <div>
                  <img src={twitter} alt="" />
                </div>
                <div>
                  <img src={fb} alt="" />
                </div>
                <div>
                  <img src={li} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <h4 className="pt-6 text-center pb-6 text-sm foot-col">
          Copyright © 2020. Sanchytechnology. All rights reserved.
        </h4>
      </div>
    </div>
  );
}

export default Footer;
