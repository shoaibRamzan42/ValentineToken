import React from "react";
import logo1 from "../assets/logo1.jpg"
import X from "@mui/icons-material/X";
import { Telegram } from "@mui/icons-material";


const Footer = () => {
  return (
    <>
   <div className="flex btn justify-center gap-9 flex-col items-center pt-12">
   <div className="flex flex-col justify-center items-center">
    <h1 className="texts-white font-Bold text-[45px] ">Join us</h1>
    <img className="max-w-[45%]" src={logo1} alt="pic"/>
    </div>
    <div className="gap-1 flex   ">
          <button className="bg-white py-2 px-2  rounded-md">
            <X className="text-[2rem] text-[#6900b5]" />
          </button>
          <button className="bg-white py-2 px-2 rounded-md">
            <Telegram className="text-[2rem] text-[#6900b5]" />
          </button>
        </div>
    <hr />
    <div className="flex flex-col gap-3 justify-center items-center">
    <p className="text-[16px]  font-medium texts-white">team@codevertex.com</p>
    <p className="text-[16px]  font-medium texts-white">© 2024 • All Rights Reserved</p>
</div>
   </div>
    </>
  );
};

export default Footer;
