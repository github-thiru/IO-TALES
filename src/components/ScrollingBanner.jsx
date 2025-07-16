import React from 'react';

function ScrollingBanner() {
  const bannerText = "5% Discount On Your First Purchase Code : FIRST BUY5";
  
  return (
    <div className="w-full z-10">
      <div className="relative w-full h-10 bg-black overflow-hidden z-10">
        <div 
          className="absolute flex items-center h-full whitespace-nowrap"
          style={{
            animation: 'scroll 30s linear infinite'
          }}
        >
          {/* First set of items */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center text-white text-sm font-medium flex-shrink-0 mr-20">
              <span className="text-red-500 mr-2 text-base">❤</span>
              <span>{bannerText}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(8)].map((_, i) => (
            <div key={`duplicate-${i}`} className="flex items-center text-white text-sm font-medium flex-shrink-0 mr-20">
              <span className="text-red-500 mr-2 text-base">❤</span>
              <span>{bannerText}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style> */}
    </div>
  );
}

export default ScrollingBanner;