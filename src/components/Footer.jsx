// import React from "react";

// const Footer = () => {
//   return (
//     <>
//     <footer className="bg-[#1F1F1F] text-white w-full px-6 pt-12 pb-6 mt-[1400px]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">

//         {/* Newsletter Section */}
//         <div className="md:col-span-1">
//           <h2 className="font-bold text-lg mb-2 leading-snug">
//             Subscribe to the<br />io Tales Newsletter
//           </h2>
//           <p className="text-sm text-gray-400 mb-4">
//             Latest news, musings, announcements and<br />updates direct to your inbox.
//           </p>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
//             SUBSCRIBE
//           </button>
//         </div>

//         {/* Products */}
//         <div>
//           <h3 className="font-semibold mb-3">Products</h3>
//           <ul className="text-sm text-gray-400 space-y-2">
//             <li>Product 1</li>
//             <li>Product 2</li>
//             <li>Product 3</li>
//             <li>Product 4</li>
//             <li>Product 5</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-semibold mb-3">Company</h3>
//           <ul className="text-sm text-gray-400 space-y-2">
//             <li>Menu 1</li>
//             <li>Menu 2</li>
//             <li>Menu 3</li>
//             <li>Menu 4</li>
//             <li>Menu 5</li>
//             <li>Menu 6</li>
//             <li>Menu 7</li>
//             <li>Menu 8</li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="font-semibold mb-3">Resources</h3>
//           <ul className="text-sm text-gray-400 space-y-2">
//             <li>Menu 1</li>
//             <li>Menu 2</li>
//             <li>Menu 3</li>
//             <li>Menu 4</li>
//             <li>Menu 5</li>
//           </ul>
//         </div>

//         {/* Social */}
//         <div>
//           <h3 className="font-semibold mb-3">Social</h3>
//           <ul className="text-sm text-gray-400 space-y-2">
//             <li>Menu 1</li>
//             <li>Menu 2</li>
//             <li>Menu 3</li>
//             <li>Menu 4</li>
//             <li>Menu 5</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6 text-sm text-gray-500">
//         <p className="mb-4 sm:mb-0">&copy; 2025 Brand Name. All Rights Reserved.</p>
//         <div className="flex flex-wrap gap-2 justify-center">
//           <img src="/icons/visa.svg" alt="Visa" className="h-5" />
//           <img src="/icons/mastercard.svg" alt="MasterCard" className="h-5" />
//           <img src="/icons/paypal.svg" alt="PayPal" className="h-5" />
//           <img src="/icons/skrill.svg" alt="Skrill" className="h-5" />
//           <img src="/icons/discover.svg" alt="Discover" className="h-5" />
//           <img src="/icons/gpay.svg" alt="Google Pay" className="h-5" />
//         </div>
//       </div>
//     </footer>
//     </>
//   );
// };

// export default Footer;


import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Subscribed with email:', email);
      alert('Thank you for subscribing to 10 Tales!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    // <div className="min-h-screen relative top-[1500px] w-full font-sans   z-15" style={{backgroundColor:"rgba(47, 47, 47, 1)"}}>
    <div
  className="min-h-screen relative w-full font-sans z-15 
             top-[2900px] md:top-[1500px]"
  style={{ backgroundColor: "rgba(47, 47, 47, 1)" }}
>

      
      {/* Red top banner with scalloped edge - with proper spacing */}
      <div className="w-full h-24 bg-red-600 relative z-1">
        <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-gray-900 rounded-full bottom-0"
              style={{
                left: `${i * 2}%`,
                transform: 'translateY(50%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        {/* Cloud groups */}
        <div className="absolute top-32 left-12 w-16 h-6 bg-gray-700 rounded-full opacity-60" />
        <div className="absolute top-36 left-8 w-12 h-4 bg-gray-700 rounded-full opacity-40" />

        <div className="absolute top-64 left-32 w-20 h-7 bg-gray-600 rounded-full opacity-50" />
        <div className="absolute top-[280px] left-28 w-16 h-5 bg-gray-600 rounded-full opacity-30" />

        <div className="absolute bottom-48 left-8 w-18 h-6 bg-gray-600 rounded-full opacity-40" />
        <div className="absolute bottom-52 left-4 w-14 h-4 bg-gray-600 rounded-full opacity-30" />

        <div className="absolute bottom-32 right-24 w-22 h-8 bg-gray-600 rounded-full opacity-35" />
        <div className="absolute bottom-36 right-20 w-18 h-6 bg-gray-600 rounded-full opacity-25" />

        <div className="absolute top-48 right-16 w-14 h-5 bg-gray-700 rounded-full opacity-45" />
        <div className="absolute top-52 right-12 w-10 h-3 bg-gray-700 rounded-full opacity-35" />

        {/* Right decorative circle */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 w-0 h-80 border-2 border-gray-600 rounded-full opacity-25" />

        {/* Rainbow arc */}
        <div className="absolute top-56 right-32 w-32 h-16 border-4 border-gray-500 rounded-t-full opacity-30" />
      </div>

      {/* Main content area */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">

        {/* Headline with proper spacing */}
        <div className="text-center mb-20 mt-24">
          <h1 className="text-7xl md:text-9xl font-bold text-gray-500 leading-none mb-2 opacity-70">
            Craft your
          </h1>
          <h2 className="text-7xl md:text-9xl font-bold text-gray-500 leading-none opacity-70">
            tales!
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto w-full px-12 pb-32">
          <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-12">

            {/* Newsletter Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-white text-lg font-normal mb-1">Subscribe to the</h3>
              <h4 className="text-white text-2xl font-bold mb-4">10 Tales Newsletter</h4>
              <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
                Get weekly short stories and<br />
                updates about the next book.
              </p>

             <div className="flex flex-col gap-3 items-center w-full max-w-sm mx-auto px-4">
  <input
    type="email"
    value={email}
    onChange={handleEmailChange}
    onKeyPress={handleKeyPress}
    placeholder="Enter your email"
    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 
               focus:outline-none focus:border-green-500 text-sm transition-colors duration-200"
    disabled={isSubmitting}
  />
  
  <button
    onClick={handleSubmit}
    disabled={isSubmitting || !email.trim()}
    className={`w-full font-semibold py-3 px-6 rounded-md transition-colors duration-200 
                text-sm tracking-wide ${
                  isSubmitting || !email.trim()
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
  >
    {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
  </button>
</div>

            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-16 text-sm">
              {['Products', 'Company', 'Resources', 'Social'].map((section) => (
                <div className="space-y-4" key={section}>
                  <h5 className="text-gray-400 font-semibold text-sm">{section}</h5>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <p key={i} className="text-gray-500 text-xs hover:text-gray-400 cursor-pointer transition-colors">
                        {section} {i}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center z-30">
          <div className="flex space-x-3">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-6 h-6 bg-gray-600 rounded-sm hover:bg-gray-500 cursor-pointer transition-colors duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;