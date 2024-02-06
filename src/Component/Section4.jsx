import React from "react";
import Csec4 from "./Csec4";
import image4 from "../assets/image4.png"




const Section4 = () => {
  return (
    <><div id="buy" className="flex py-12 gap-8 flex-col items-center">
     <h1 className="texts-grade font-Bold text-[45px] ">How to Buy</h1>
    <div className=" flex flex-col lg:flex-row items-center justify-center ">
    <img className="lg:max-w-full  md:max-w-[75%]" src={image4} alt="pic" />
    <Csec4 />
    </div>
    </div> 
    </>
  );
};

export default Section4;
