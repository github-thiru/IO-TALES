import React from 'react';
import logo from '../assets/logo.png';
import iconSearch from '../assets/search.png';
import iconUser from '../assets/contact.png';
import iconCart from '../assets/cart.png';
import iconMenu from '../assets/menu.png';
import waveBottomm from '../assets/waveVector.png';
// import './nav.css'; 
export default function Navbar() {
  return (
<>


    
      



    
    <div className="relative" style={{backgroundImage:`url(${waveBottomm})`}}>
      
      {/* Navbar Content */}
      <div className="relative z-10 flex flex-wrap justify-between items-center px-6 py-5">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-black">
          BRAND LOGO
        </div>

        {/* Center Menu */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-800">
          <span className="px-4 py-1 border-2 border-gray-400 rounded-full">MENU 01</span>
          <span className="hover:text-black">MENU 02</span>
          <span className="hover:text-black">MENU 03</span>
          <span className="hover:text-black">MENU 04</span>
          <span className="hover:text-black">MENU 05</span>
          <span className="hover:text-black">MENU 06</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <img src={iconSearch} alt="Search" className="h-5 cursor-pointer" />
          <img src={iconUser} alt="User" className="h-5 cursor-pointer" />
          
          {/* Cart with Notification Dot */}
          <div className="relative">
            <img src={iconCart} alt="Cart" className="h-5 cursor-pointer" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <img src={iconMenu} alt="Menu" className="h-5 cursor-pointer" />
        </div>
      </div>

      {/* Wave Background at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-1">
        <img src={waveBottomm} alt="Wave Bottom" className="w-full" />
      </div>
    </div>
    </>
  );
}



