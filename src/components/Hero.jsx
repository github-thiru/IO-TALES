import React from "react";
import bgHero from "../assets/bg-hero.png";
import textImage from "../assets/txt-lorem.png";
import iconLeft from "../assets/icon-arrow-left.png";
import iconRight from "../assets/RRg.png";
import wavePink from "../assets/wave-bottom-pink.svg";
// import greencloud from "../assets/greencloud-righ.png";
import greencloud from "../assets/gnc.png";
import greencl from "../assets/greencloud.png";
import line from "../assets/line.png";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden" id="col">
        {/* Background Image */}
        <img
          src={bgHero}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* Text Image Centered */}
        <div className="relative z-25 flex flex-col items-center justify-center h-full text-center">
          <img
            src={textImage}
            alt="Hero Text"
            className=" w-[80%] max-w-3xl mb-4 z-20"
          />

          {/* Shop Now Button */}
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all">
            SHOP NOW
          </button>
        </div>

        {/* Left Arrow */}
        <img
          src={iconLeft}
          alt="Left Arrow"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 z-10 cursor-pointer"
        />

        {/* Right Arrow */}
         <img
        src={iconRight}
        alt="Right Arrow"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 z-10 cursor-pointer"
      />
       

        {/* Bottom Wave */}
      </div>

      {/* <div style={{ marginTop: "100px" }}>
       
        
      <img
          src={line}
          alt="Left Arrow"
          className="whiteline"
        />

      </div>  */}

         <img
          src={greencl}
          alt="Pink Wave"
        //   className="absolute  Top-100 bottom-0 left-0 Top-0  z-10 "
        className="absolute top-[700px] left-[10px] z-0"

        /> 
        <div> 
         <img
          src={greencloud}
          alt="cloud"
        //   className="absolute  Top-100 bottom-0 left-0 Top-0  z-10 "
        className="absolute top-[670px] left-[15px] z-5"
        /> 
        </div>
      <div>
        <img
          src={wavePink}
          alt="gn"
          className="absolute  top-[660px] bottom-0 left-0 w-full z-10 "
        /> 
      </div>
    </>
  );
}
