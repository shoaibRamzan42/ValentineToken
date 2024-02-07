import React from "react";
import logo1 from "../assets/logo3.png"
import X from "@mui/icons-material/X";
import { Telegram } from "@mui/icons-material";


const Footer = () => {
  return (
    <>
   <div className="flex gradient-background justify-center gap-9 flex-col items-center pt-12">
   <div className="flex flex-col justify-center items-center">
    <h1 className="text-white font-Bold text-[45px] ">Join us</h1>
    <img className="max-w-[45%]" src={logo1} alt="pic"/>
    </div>
    <div className="gap-1 flex   ">
          <button  className="bg-white py-2 px-2  rounded-md">
           <a href="https://www.t.me/ValentineMyro
"> <X className="text-[2rem] text-[#32C3AE] " /></a>
          </button>
          <button className="bg-white py-2 px-2 rounded-md">
            <a href="https://twitter.com/ValentineMyro"><Telegram className="text-[2rem] text-[#32C3AE] " /></a>
          </button>
        </div>
    <hr />
    <div className="flex flex-col gap-3 text-white justify-center items-center">
    
    <p className="text-[16px]  font-medium texts-white">© 2024 • All Rights Reserved</p>
</div>
   </div>
    </>
  );
};

export default Footer;
