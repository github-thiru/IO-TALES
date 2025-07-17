import React from "react";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import circlee from '../assets/circle.png'
import shadoww from '../assets/Shadowtxt.png'
import Bookk from '../assets/Book.png'
import ctxtt from '../assets/ctxt.png'
import ctxttt from '../assets/ctxt2.png'
import cbtnn from '../assets/cbtn.png'
import shpbtntxtt from '../assets/shpbtntxt.png'
import  cc from '../assets/c2.png'
import starr from '../assets/star.png'
import  starrr from '../assets/star2.png'
import muss from '../assets/mus.png'
import smcc from '../assets/smc.png'
import smctxtt from '../assets/smctxt.png'
import st from '../assets/str3.png'
import pnkdd from "../assets/pnkd.png";
import pnkddd from "../assets/pnkd2.png";
import org from '../assets/org.png';
import './pink.css'

const PinkLoremPage = () => {
  return (
    <>
      {/* <div style={{ marginTop: "60px", paddingTop: "110px" }}></div> */}
      <div
        className="min-h-screen bg-gradient-to-br  flex flex-col items-center justify-center relative overflow-hidden  mb-50 mt-50 pt-20 z-10"
        style={{ background: "rgba(237, 55, 148, 1)" }}
      >
        {/* Background decorative circles */}
        <div className="absolute top-1/4 left-[5%] w-48 h-48 border-2 border-white border-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[5%] w-36 h-36 border-2 border-white border-opacity-10 rounded-full animate-pulse delay-300"></div>

        {/* Floating elements */}
        <div className="absolute top-[10%] right-[20%] w-12 h-12 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-[30%] left-[10%] w-8 h-8 bg-white bg-opacity-10 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-[60%] right-[10%] w-10 h-10 bg-white bg-opacity-10 rounded-full animate-bounce delay-700"></div>

        {/* Main content container */}
        <div className="text-center z-10 max-w-4xl px-6 py-12">
          {/* Title with sparkles */}
          <div className="relative inline-block mb-4">
            <span className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-3xl"></span>
            <h1
              className="text-5xl md:text-6xl font-bold   bg-clip-text text-transparent uppercase tracking-wider"
              style={{ fontFamily: "Agbalumo, cursive", color: "white" }}
            >
              Lorem Ipsum Dolor
            </h1>
            <span className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-3xl"></span>
          </div>

          {/* Dimensions badge */}
          {/* <div className="inline-block bg-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          449 x 64
        </div> */}

          {/* Description text */}
          <p
            className="text-white text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "Schoolbell, cursive" }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit
            aliquam neque odio tortor in sit. Facilisis est rhoncus sed commodo
            nec ipsum.
          </p>

          {/* Yellow divider */}
          <div
            className=" h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8 rounded-full"
            style={{ width: "200px" }}
          ></div>

          <div className="z-25 flex flex-row items-center justify-center h-full text-center gap-4">
            {/* 1st Item: Image on Top, Text Below */}
            <div className="  flex flex-col items-center">
              <img
                src={m1}
                alt="Icon"
                className="w-30 h-7 cursor-pointer mb-1"
              />
              <span
                className=" relative top-[-25px] text-white text-sm"
                style={{ fontFamily: "Supernett Cn" }}
              >
                Menu 01
              </span>
            </div>

            {/* Other Images */}
            <div className="  flex flex-col items-center">
              <img src={m2} alt="Icon" className="w-30 h-7 cursor-pointer" />
              <span
                className=" relative top-[-25px] text-white text-sm"
                style={{ fontFamily: "Supernett Cn" }}
              >
                Menu 02
              </span>
            </div>
            <div className="  flex flex-col items-center">
              <img src={m2} alt="Icon" className="w-30 h-7 cursor-pointer" />
              <span
                className=" relative top-[-25px] text-white text-sm"
                style={{ fontFamily: "Supernett Cn" }}
              >
                Menu 03
              </span>
            </div>

            <div className="  flex flex-col items-center">
              <img src={m2} alt="Icon" className="w-30 h-7 cursor-pointer" />
              <span
                className=" relative top-[-25px] text-white text-sm"
                style={{ fontFamily: "Supernett Cn" }}
              >
                Menu 04
              </span>
            </div>

            <div className="  flex flex-col items-center">
              <img src={m2} alt="Icon" className="w-30 h-7 cursor-pointer" />
              <span
                className=" relative top-[-25px] text-white text-sm"
                style={{ fontFamily: "Supernett Cn" }}
              >
                Menu 05
              </span>
            </div>
          </div>
        </div>


{/* ------------------ */}


        <div className="  w-[1000px] h-[50vh] flex flex-row gap-6 justify-center items-center z-5 " >
  {/* Single Item */}
  <div className="flex flex-col items-center relative " style={{backgroundColor:"rgba(237, 55, 148, 1)"}}>
    
    {/* Circle Image with Shadow */}
    <img
      src={circlee}
      alt="Main Icon"
      className="w-[350px] h-[100px]rounded-full shadow-lg object-cover" 
    />

    {/* Book Icon Overlapping Top */}
    <img
      src={shadoww}
      alt="shadow"
      className="absolute top-[160px] w-[325px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8"
    />

    <img
      src={Bookk}
      alt="Book Icon"
      className="absolute top-[90px] h-[200px] w-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/3"
    />


 <img
      src={ctxtt}
      alt="ctx"
      className="absolute top-[200px] w-[365px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8"
    />
 <img
      src={ctxttt}
      alt="ctx"
      className="absolute top-[250px] w-[325px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8"
    />

 <img
      src={cbtnn}
      alt="ctx"
      className="absolute top-[290px] w-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8"
    />
 <img
      src={ shpbtntxtt }
      alt="ctx"
      className="absolute top-[292px] w-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/3  h-4"
    />




  </div>
 <img
      src={cc}
      alt="ctx"
      className="absolute top-[40vh] w-[40vw] left-0 z-0 "
    />
 <img
      src={starr}
      alt="ctx"
      className="absolute top-[350px] w-[100px] left-[1200px] "
    />
 <img
      src={starrr}
      alt="ctx"
      className="absolute top-[800px] w-[100px] left-[400px] "
    />
 <img
      src={muss}
      alt="ctx"
      className="absolute top-[700px] w-[100px] left-[1250px] z-10"
    />
 <img
      src={smcc}
      alt="ctx"
      className="absolute top-[500px] w-[100px] left-[830px] "
    />
 <img
      src={smctxtt}
      alt="ctx"
      className="absolute top-[515px] w-[100px] left-[830px]"
    />
 <img
      src={st}
      alt="st"
      className="absolute top-[800px] w-[100px] left-[950px]"
    />
  {/* Repeat the above block for more items if needed */}
</div>

{/* --------------- */}

 <button className="w-full h-[100px] max-w-xs sm:max-w-sm md:max-w-md  text-pink-700 font-bold py-3 px-6 rounded-full shadow-md  transition-all duration-300 pb-[10px]">
  
  </button>


      </div>

      {/* <div style={{marginTop:"100px"}}> */}

 {/* <img
          src={pnkdd}
          alt="gn"
          className="absolute  top-[1900px] bottom-0 left-0 w-full z-10 mt-[10px] pt-[20px]"
        /> 
 <img
          src={pnkddd}
          alt="gn"
          className="absolute  top-[1890px] bottom-0 left-0 w-full z-10 mt-[10px] pt-[20px]"
        /> 
 <img
          src={org}
          alt="gn"
          className="absolute  top-[1950px] bottom-0 left-0 w-full z-10 mt-[10px] pt-[20px]"
        />  */}
      {/* </div> */}
    </>
  );
};

export default PinkLoremPage;
