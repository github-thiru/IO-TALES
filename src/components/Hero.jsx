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
import side from '../assets/side2.png';
import sidee from '../assets/side.png';
import linew from '../assets/linew.png';
import lineg from '../assets/lineg.png';
import pr from '../assets/pr.png';
import sc from '../assets/sc.png';
import ppc from '../assets/ppc.png';
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden pt-[50px]" id="col" >
        {/* Background Image */}
        <img
          src={bgHero}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* Text Image Centered */}
        <div className="relative z-25 flex flex-col items-center justify-center h-full text-center">
          {/* <img
            src={textImage}
            alt="Hero Text"
            className=" w-[80%] max-w-3xl mb-4 z-20"
          /> */}
<h1
  className="text-center text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl w-full z-10 px-4"
  style={{ fontFamily: 'Schoolbell, cursive' }}
>
  Lorem ipsum dolor sit <br /> amet consectetur?
</h1>

          {/* Shop Now Button */}
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all z-10">
            SHOP NOW
          </button>
        </div>  



<img
  src={linew}
  alt="Center Line"
  className="absolute top-[600px] w-[75px] z-10 cursor-pointer 
             left-[30%] sm:left-[35%] md:left-[40%] lg:left-[45%] 
             transform -translate-x-1/2 -translate-y-1/2"
/>

<img
  src={linew}
  alt="Center Line"
  className="absolute top-[600px] w-[70px] z-10 cursor-pointer 
             left-1/2 transform -translate-x-1/2 -translate-y-1/2"
/>

<img
  src={lineg}
  alt="Center Line"
  className="absolute top-[600px] w-[70px] z-10 cursor-pointer 
             left-[70%] sm:left-[65%] md:left-[60%] lg:left-[55%] 
             transform -translate-x-1/2 -translate-y-1/2"
/>



        {/* Left Arrow */}
  {/* iconLeft image */}
<img
  src={iconLeft}
  alt="Left Arrow"
  className="absolute left-20 top-1/2 transform -translate-y-1/2 w-6 sm:w-10 z-20 cursor-pointer"
/>

{/* ppc image */}
<img
  src={ppc}
  alt="PPC Icon"
  className="absolute left-24 top-1/2 transform -translate-y-1/2 w-6 sm:w-10 z-10 cursor-pointer"
/>

{/* sidee image */}
<img
  src={sidee}
  alt="Side Icon"
  className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 w-6 sm:w-10 z-20 cursor-pointer"
/>

{/* pr image */}
<img
  src={pr}
  alt="PR Icon"
  className="absolute left-2 sm:left-0 top-[80px] sm:top-[120px] h-[20vh] sm:h-[39vh] w-[30vw] sm:w-[20vw] transform -translate-y-1/2 z-10 cursor-pointer"
/>


        {/* Right Arrow */}
         {/* <img
        src={iconRight}
        alt="Right Arrow"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 w-10 z-9 cursor-pointer"
       />  */}
         <img
        src={iconRight}
        alt="Right Arrow"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 w-10 z-10 cursor-pointer"
       /> 
         <img
        src={ppc}
        alt="Right Arrow"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 w-10 z-9 cursor-pointer"
       /> 
       
        <img
          src={side}
          alt="Left Arrow"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 z-10 cursor-pointer"
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
{/* 
         <img
          src={greencl}
          alt="Pink Wave"
        //   className="absolute  Top-100 bottom-0 left-0 Top-0  z-10 "
        className="absolute top-[700px] left-[10px] z-0"

        />  */}
        {/* <div> 
         <img
          src={greencloud}
          alt="cloud"
        //   className="absolute  Top-100 bottom-0 left-0 Top-0  z-10 "
        className="absolute top-[670px] left-[15px] z-5"
        /> 
        </div> */}
      {/* <div>
        <img
          src={wavePink}
          alt="gn"
          className="absolute  top-[660px] bottom-0 left-0 w-full z-10 "
        /> 
      </div> */}
    </>
  );
}
