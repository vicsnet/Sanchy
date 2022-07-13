import React from 'react'

const Message = () => {
  return (
    <div className="w-[100%] bg-[#F5F5F5] mb-16 md:mb-32">
      <div className="w-[100%] mx-auto bg-[#FFFFFF] sm:w-[70%] sm:shadow-xl">
        <h1 className="text-center text-[24px] pt-16 pb-8 font-black sm:text-left md:text-[60px] sm:w-[90%] sm:mx-auto">
          Send a message
        </h1>
        <div className="w-[90%] mx-auto">
          <form action="">
            <p className="text-[16px] pb-2 ">Full name</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              placeholder="Enter full name"
            />
            <p className="text-[16px] pb-2 pt-[24px]">Company name</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              placeholder="Enter company name"
            />
            <p className="text-[16px] pb-2 pt-[24px]">Email</p>
            <input
              className="h-14 w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text"
              placeholder="Enter email address"
            />

            <p className="text-[16px] pb-2 pt-[24px]">Message</p>
            <input
              className="h-[181px] w-[100%] bg-[#F6F4FF] border-none rounded pl-2 text-[#999999] text-[16px] focus:outline-none"
              type="text-area"
              placeholder="Type a message..."
            />

            <button className="h-[60px] bg-[#001EDC] text-center w-[100%] mt-[25px] sm:mt-16 mb-16 rounded text-[#FFFFFF] text-[13px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Message