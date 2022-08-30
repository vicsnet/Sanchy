import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// var http = require("http");

const Message = () => {
  const url = "https://contact.sanchytech.com/";
  // const url = "https://reqres.in/api/users";
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var FormData = require("form-data");

    var data = new FormData();

    data.append("fname", fname);
    data.append("email", email);
    data.append("phone", phone);
    data.append("message", message);

    if (fname && phone && email && message) {
      axios.post(url, data).then((res) => {
        console.log(res);
        toast.success("Message sent you will receive a mail shortly");
        setFname("");
        setPhone("");
        setEmail("");
        setMessage("");
      });
    } else {
      // console.log("message not submitted");
      toast.error("filled can not be empty");
    }

    // try {
    //   const resp = axios.post(url, data);
    //   console.log(resp.data);
    // } catch (error) {
    //   console.log(error.response);
    // }
  };

  return (
    <div className="w-[100%] bg-[#F5F5F5] pb-16 md:pb-32">
      <div className="w-[100%] mx-auto bg-[#FFFFFF] sm:w-[70%] sm:shadow-xl">
        <h1 className="text-center text-[24px] pt-16 pb-8 font-black sm:text-left md:text-[60px] sm:w-[90%] sm:mx-auto text-[#000735]">
          Send a message
        </h1>
        <ToastContainer />
        <div className="w-[90%] mx-auto">
          <form onSubmit={handleSubmit}>
            <p className="text-[16px] pb-2 ">Full name</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              id="fname"
              name="fname"
              value={fname}
              placeholder="Enter full name"
              onChange={(e) => setFname(e.target.value)}
            />
            <p className="text-[16px] pb-2 pt-[24px]">Phone number</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter company name"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-[16px] pb-2 pt-[24px]">Email</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              placeholder="Enter email address"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="text-[16px] pb-2 pt-[24px]">Message</p>
            <textarea
              cols="30"
              rows="10"
              className="h w-[100%] bg-[#F6F4FF] pt-4 border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              placeholder="Type a message..."
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="h-[60px] bg-[#001EDC] text-center w-[100%] mt-[25px] sm:mt-16 mb-16 rounded text-[#FFFFFF] text-[13px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
