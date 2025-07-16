import React from "react";
import { Music, Home, Star } from "lucide-react";
import orgdd from "../assets/orgd.png";
import dd from "../assets/d2.png";
import bd from "../assets/bd.png";
import bdd from "../assets/bd2.png";
import yell from "../assets/yellow.svg";
const AboutIJoTales = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Schoolbell&family=Comic+Neue:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <div style={{}}></div>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-16 left-16 text-yellow-400 text-4xl ">
          ✱
        </div>
        <div className="absolute bottom-20 right-20 text-white text-3xl ">
          ✱
        </div>
        <div className="absolute top-1/2 right-16 text-white text-2xl animate-bounce">
          ✦
        </div>

        {/* Musical note */}
        <Music className="absolute top-20 right-32 text-white w-8 h-8  delay-300" />

        {/* House icon */}
        <Home className="absolute top-20 right-16 text-white w-8 h-8 animate-pulse" />

        {/* Yellow curved line decorations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            width="600"
            height="400"
            viewBox="0 0 600 400"
            className="opacity-80"
          >
            <path
              d="M100 300 Q200 200 300 250 T500 200"
              stroke="#FDE047"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M400 100 Q500 150 600 120"
              stroke="#FDE047"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Smiley face */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-6xl text-yellow-400 animate-pulse">
          😊
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Header */}

          <img
            src={orgdd}
            alt="gn"
            className="absolute top-[-120px] left-[110px] w-full z-10 mt-[10px] pt-[20px]"
          />

          <img
            src={dd}
            alt="gn"
            className="absolute top-[-150px] left-[-120px]   "
          />

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-yellow-400 text-2xl">✨</span>
              <h2
                className="text-white text-2xl font-bold uppercase tracking-wider"
                style={{ fontFamily: "Comic Neue, cursive" }}
              >
                About
              </h2>
              <span className="text-yellow-400 text-2xl">✨</span>
            </div>

            <h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "Comic Neue, cursive" }}
            >
              <span className="text-yellow-400">i </span>
              <span className="text-green-400">jo tales</span>
            </h1>

            <p
              className="text-white text-xl mb-8"
              style={{ fontFamily: "Comic Neue, cursive" }}
            >
              Small team, big tales, endless play.
            </p>
          </div>

          {/* Main content card */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Content */}
              <div className="text-white relative z-10">
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "Comic Neue, cursive" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Quam adipiscing lectus
                  egestas punar est ultricies quam quis mollis. Egestas nibh
                  nibh molestie dignissim porttitor in diam sodales. Dui tellus
                  non condimentum placerat elementum tellus mauris vitas purus.
                  Commodo aliquam rhoncus et interdum. Molestie interdum
                  eleifend nam tellus sodales egestas consectetur lorem. Ut
                  ipsum tellus purus ultricies et vel.
                </p>

                <p
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: "Comic Neue, cursive" }}
                >
                  Nisi sapibus urna etiam egestas le. At aliquam sed diam
                  adipiscing mauris in. Eu sed euismod leo urna et blandit.
                  Lorem tortor gravida sit eget egestas placerat urna. Massa
                  magna tempor ut sed mauris orci placerat elit. Pretium viverra
                  dictumst vitae adipiscing arcu.
                </p>
              </div>

              {/* Card decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white border-opacity-30 rounded-full animate-spin"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-yellow-300 bg-opacity-40 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Additional floating elements */}
          <div className="absolute top-32 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-32 w-3 h-3 bg-white rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-500/20 pointer-events-none"></div>

        <div>
          <div className=""></div>
          <div className=""></div>
        </div>

        <img
          src={bd}
          alt="gn"
          className="absolute  top-[550px] bottom-0 left-0 w-full z mt-[10px] pt-[20px]"
        />
        <img
          src={bdd}
          alt="gn"
          className="absolute  top-[550px] bottom-0 left-0 w-full z mt-[10px] pt-[20px]"
        />

        <div className="absolute bottom-0 left-0 w-full z-5 top-[580px]">
          <img src={yell} alt="Wave Bottom" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutIJoTales;
