import React, { useState } from "react";

const Navbar = () => {
  const [profile, setProfile] = useState("Personal");
  const [lang, setLang] = useState("EN");

  return (
    <div className="containter w-full flex flex-row p-3 items-center lg:gap-4 gap-3 justify-around absolute top-0">
      <div className="flex flex-row gap-6 p-2">
        <div className="flex text-2xl">
          <span className="font-bold text-white">BRISK</span>
          <span className="font-light text-white">PAY</span>
        </div>
        <div className="flex rounded-full text-[12px] gap-1 border-1 border-white items-center w-auto h-[45px] py-1 px-0.5">
          <span
            className={`cursor-pointer rounded-4xl font-medium px-[10px] py-[10px] transition-all duration-300 ${
              profile === "Personal"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
            onClick={() => setProfile("Personal")}
          >
            Personal
          </span>
          <span
            className={`cursor-pointer rounded-4xl px-[10px] py-[10px] transition-all duration-300 ${
              profile === "Business"
                ? "bg-white text-black font-medium"
                : "bg-transparent text-white"
            }`}
            onClick={() => setProfile("Business")}
          >
            Business
          </span>
        </div>
      </div>
      <div className="boxi hidden lg:flex flex-row gap-5 p-2 text-white lg:relative lg:right-[50px]">
        <span className="cursor-pointer transition-all duration-300 hover:text-sky-400 hover:scale-110">
          Company
        </span>
        <span className="cursor-pointer transition-all duration-300 hover:text-sky-400 hover:scale-110">
          Feature
        </span>
        <span className="cursor-pointer transition-all duration-300 hover:text-sky-400 hover:scale-110">
          Career
        </span>
        <span className="cursor-pointer transition-all duration-300 hover:text-sky-400 hover:scale-110">
          News & Media
        </span>
      </div>
      <div className="flex lg:flex-row gap-2 flex-col lg:p-2 items-center justify-center ">
        <div className="flex py-1 rounded-full px-3 lg:text-[12px] text-[7px] gap-1 border-1 border-white items-center lg:w-auto w-[50px] lg:h-[45px] lg:py-1 lg:px-0.5">
          <span
            className={`cursor-pointer rounded-4xl px-1.5 py-1 transition-all duration-300 ${
              lang === "DE"
                ? "bg-white text-black font-medium"
                : "bg-transparent text-white"
            }`}
            onClick={() => setLang("DE")}
          >
            DE
          </span>
          <span
            className={`cursor-pointer rounded-4xl px-1.5 py-1 transition-all duration-300 ${
              lang === "EN"
                ? "bg-white text-black font-medium"
                : "bg-transparent text-white"
            }`}
            onClick={() => setLang("EN")}
          >
            EN
          </span>
        </div>
        <div className="rounded-full py-1 text-center md:text-[16px] text-[8px] gap-1 border-1 border-white items-center w-[50px] lg:w-auto lg:h-[45px] text-white lg:px-5 lg:py-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-md hover:shadow-lg">
          Sign in
        </div>
      </div>
    </div>
  );
};

export default Navbar;
