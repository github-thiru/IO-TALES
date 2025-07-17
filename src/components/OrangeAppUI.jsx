import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Play, Star, Music } from 'lucide-react';
import orgdd from '../assets/orgd.png'
import dd from '../assets/d2.png';

const OrangeAppUI = () => {
  const apps = [
    {
      id: 1,
      title: "Shadow Box Maharajahs",
      price: "₹1499.00",
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=300&fit=crop",

      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400"
    },
    {
      id: 2,
      title: "Shadow Box Maharajahs",
      price: "₹1499.00", 
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=200&h=300&fit=crop",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Cube Tales",
      price: "₹1499.00",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=300&fit=crop",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400"
    },
    {
      id: 4,
      title: "3D Bubbles",
      price: "₹1499.00",
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=200&h=300&fit=crop",


      borderColor: "border-blue-500",
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen bg-gradient-to-br  to-red-500 relative overflow-hidden" style={{backgroundColor:"rgba(255, 100, 27, 1)"}}>
        {/* Background decorative elements */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 border-4 border-yellow-300 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-yellow-300 rounded-full absolute top-2 left-2"></div>
          <div className="w-12 h-12 border-4 border-yellow-300 rounded-full absolute top-4 left-4"></div>
        </div>
        
        {/* Musical notes */}
        <Music className="absolute top-20 right-20 text-white w-8 h-8 animate-bounce" />
        <Music className="absolute bottom-32 right-32 text-green-400 w-6 h-6 animate-bounce delay-500" />
        
        {/* Decorative curves */}
        <div className="absolute top-0 right-0 w-64 h-64 border-4 border-yellow-300 rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-yellow-300 rounded-full opacity-20 transform -translate-x-48 translate-y-48"></div>
        
        {/* Stars */}
        <Star className="absolute top-1/4 left-16 text-yellow-300 w-6 h-6 fill-current animate-pulse" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="text-yellow-300 text-3xl animate-pulse">✨</div>
        </div>
        
        {/* Sparkles */}
        <div className="absolute bottom-16 right-16 text-yellow-300 text-2xl animate-ping">💫</div>
        <div className="absolute bottom-24 right-24 text-green-400 text-xl animate-ping delay-700">💫</div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider" style={{ fontFamily: 'Schoolbell, cursive' }}>
              Lorem Ipsum Dolor Sit Amet
            </h1>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-6" style={{ fontFamily: 'Schoolbell, cursive' }}>
              Lorem ipsum dolor sit amet consectetur. Adipiscing et elementum nullla condimentum fermentum. 
              Semis suspendisse gravida sit sed aliquam volutpat. Luctus senabus est sed rhoncus placerat et 
              ipsum. Velit augue est elementum facilisis molestie eget. Dui metus arcu suscipit sit tristique.
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          {/* App Cards Section */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation arrows */}
           {/* Left Button - Hidden on mobile */}
<button className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg z-20">
  <ChevronLeft className="w-6 h-6" />
</button>

{/* Right Button - Hidden on mobile */}
<button className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg z-20">
  <ChevronRight className="w-6 h-6" />
</button>

            
            {/* App Cards Grid */}
         {/* App Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 lg:px-16">
  {apps.map((app) => (
    <div
      key={app.id}
      className={`${app.bgColor} w-full p-4 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300`}
    >
      <div className="bg-black rounded-2xl p-4 relative overflow-hidden">
        {/* Phone mockup */}
        <div className="bg-gray-900 rounded-xl p-2 w-full">
          <div className="bg-gray-800 rounded-lg h-80 relative overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Heart icon */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
              <Heart className="w-4 h-4 text-white" />
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-500 rounded-full p-4 shadow-lg">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>

            {/* Bottom controls */}
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white text-xs">
              <span>00 / 15:30</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* App info */}
        <div className="mt-4 text-white text-center">
          <h3 className="font-bold text-sm mb-1">{app.title}</h3>
          <p className="text-green-400 font-bold text-lg mb-3">{app.price}</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-colors duration-300 text-sm">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white bg-opacity-50 rounded-full"></div>
            <div className="w-8 h-1 bg-white bg-opacity-50 rounded-full"></div>
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-8">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors duration-300 shadow-lg">
              VIEW MORE
            </button>
          </div>
        </div>

          {/* <img
                   src={orgdd}
                   alt="gn"
                   className="absolute  top-[2555px] bottom-0 left-0 w-full z mt-[10px] "
                 />   */}

        <br></br>
         {/* import dd from '../assets/d2.png';
 */}
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default OrangeAppUI;

// import orgdd from '../assets/orgd.png'
