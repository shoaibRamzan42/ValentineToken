import React from "react";
import image2 from "../assets/image2.png"
import img from '../assets/logo4-1.png'
import eth from "../assets/Eth.svg"
import uni from "../assets/Uni.svg"
import dext from "../assets/Dext.svg"
import dev from "../assets/Dev.webp"
import Community from "./Coummunity";

const Section3 = () => {
  return (
    <>
    <div id="about" className=" gradient-background flex flex-col justify-center px-4 md:text-left text-center md:pl-8 lg:px-0 items-center gap-20 text-white py-24">
    <div className="flex flex-col justify-center gap-6 items-center">
      <h1 className="text-[45px]  uppercase font-extrabold ">about Valentine Myro</h1>
      <p className="text-[16px] font-semibold ">A global movement of love, care, share. Absolutely!  Let The Love of a Pet Dog - "MYRO" Rule and Conquer The World Till Eternity.</p>
      {/* <img className="rounded-xl" src={image2} alt="pic" /> */}
    </div>
    {/* <Community /> */}
    <div className="flex md:flex-row flex-col items-center gap-28">
      <img className="md:max-w-[35%] h-[315px] max-w-[90%] md:h-[375px]" src={img} alt="pic"/>
      <div className="flex flex-col gap-4">
      <h1 className="text-[45px] font-semibold   ">Tokenomics</h1>
      <p className="text-[16px]"><strong>Total Supply:</strong><span className="ml-2">100M </span> </p>
      <p className="text-[16px]"><strong>Token Name:</strong><span className="ml-2">Valentine Myro </span> </p>
      <p className="text-[16px]"><strong>Ticker:</strong><span className="ml-2">MYVal </span></p>
      <p className="text-[16px]"><strong>Tax:</strong><span className="ml-2">0/0 </span> </p>
      <p className="text-[16px]"><strong>Burnt</strong> </p>
      <p className="text-[16px]"><strong>Renounce</strong> </p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-[45px] font-semibold">Available in</h1>
      <div className="flex justify-center flex-wrap gap-8">
        <img src={eth} className="lg:max-w-[20%] md:max-w-[30%} max-w-[40%]" alt="pic"/>
        <img src={uni} className="lg:max-w-[20%] md:max-w-[30%} max-w-[40%]" alt="pic"/>
        <img src={dext} className="lg:max-w-[20%] md:max-w-[30%} max-w-[40%]" alt="pic"/>
        <img src={dev} className="lg:max-w-[20%] md:max-w-[30%} max-w-[40%]" alt="pic"/>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default Section3;
