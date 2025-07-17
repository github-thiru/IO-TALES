import React from 'react';

function ScrollingBanner() {
  const bannerText = "5% Discount On Your First Purchase Code : FIRST BUY5";
  
  return (
    <div className="w-full z-10">
      <div className="relative w-full h-10 bg-black overflow-hidden z-10">
        <div 
          className="absolute flex items-center h-full whitespace-nowrap animate-scroll"
        >
          {/* First set of items */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center text-white text-xs sm:text-sm font-medium flex-shrink-0 mr-8 sm:mr-12 md:mr-16 lg:mr-20">
              <span className="text-red-500 mr-2 text-sm sm:text-base">❤</span>
              <span className="px-2">{bannerText}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(6)].map((_, i) => (
            <div key={`duplicate-${i}`} className="flex items-center text-white text-xs sm:text-sm font-medium flex-shrink-0 mr-8 sm:mr-12 md:mr-16 lg:mr-20">
              <span className="text-red-500 mr-2 text-sm sm:text-base">❤</span>
              <span className="px-2">{bannerText}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollingBanner;