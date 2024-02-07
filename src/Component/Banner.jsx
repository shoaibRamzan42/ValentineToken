import React from "react";
import { motion } from 'framer-motion'
import X from "@mui/icons-material/X";
import { Telegram } from "@mui/icons-material";
import image1 from "../assets/image1.jpg";

const Banner = () => {
  return (
    <>
    <div id="home" className="flex lg:flex-row  flex-col-reverse justify-center  lg:items-center pl-4 md:px-8  lg:justify-between lg:gap-7 lg:px-44 pt-32 pb-8">
      <div className=" flex flex-col items-center text-left md:text-center lg:text-left lg:items-start md:mx-0 mx-auto  gap-6  w-fit font-custom">
        <div>
          <h1 className="texts-grade  md:text-[60px] text-[39px]  uppercase font-bold">
          Valentine Myro
          </h1>
          <p className="texts-grade font-semibold text-[16px] md:text-[18px]">
          Valentine Myro is a symbolism representing unconditional love which transcends all boundaries, language, creed and sex. Myro, a Pet Dog owned by solana founder is used as the face of this symbolism to inspire univeral love amongst all mankind and living things<span className="text-red-500">💖</span>

          </p>
          <p className="texts-grade pt-2 font-semibold text-[16px] md:text-[18px]">
          Let The Love of a Pet Dog - "MYRO" Rule and Conquer The World Till Eternity<span  className="text-red-500 animate-pulse ">💖</span>
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <button className="text-white gradient-background py-3 flex px-6 text-lg w-fit rounded-full">
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button className="text-white gradient-background py-3 flex px-6 text-lg w-fit  rounded-full">
            Chart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="gap-1 flex   ">
          <button className="text-white gradient-background py-2 px-2  rounded-md">
            <X className="text-[2rem]" />
          </button>
          <button className="text-white gradient-background py-2 px-2 rounded-md">
            <Telegram className="text-[2rem]" />
          </button>
        </div>
      </div>
      <motion.div
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                viewport={{ once: true }}
                className=''
            >
      <img className="lg:w-[95%] ml-0 md:ml-[130px] lg:ml-0 md:w-[65%]" src={image1} alt="pic" />
      </motion.div>
      </div>

      
    </>
  );
};

export default Banner;
