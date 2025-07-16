import React, { useState, useEffect } from 'react';
import { MousePointer ,ThumbsUp} from 'lucide-react';

import bgg from '../assets/viobgg.svg';
import v from '../assets/v.png';
import vv from '../assets/vv.png';
import skyblue from '../assets/skyblue.svg'
import { 
  Lightbulb, 
  Palette, 
  Rocket, 
  Target, 
  Sparkles, 
  Send,
  Music,
  Gamepad2,
  Diamond,
  Star,
  Flame,
  ChevronDown,
  ChevronUp,
  Smile,
  Plus,
  Heart,
  Zap
} from 'lucide-react';

const Headingpage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`relative group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 
          transition-all duration-500 ease-out cursor-pointer hover:scale-105 hover:-translate-y-3 
          hover:shadow-2xl hover:shadow-pink-500/25 ${delay}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 
            mb-6 transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">{description}</p>
          
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent 
          transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </div>
    );
  };

const FloatingShape = ({ className, children, animationDelay = 0 }) => (
  <div 
    className={`absolute animate-bounce opacity-20 ${className}`}
    style={{ 
      animationDelay: `${animationDelay}s`,
      animationDuration: '6s'
    }}
  >
    {children}
  </div>
);

const BackgroundIcon = ({ icon: Icon, className, animationDelay = 0 }) => (
  <div 
    className={`absolute text-white/10 animate-pulse ${className}`}
    style={{ 
      animationDelay: `${animationDelay}s`,
      animationDuration: '4s'
    }}
  >
    <Icon className="w-16 h-16" />
  </div>
);


  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quam voluptates. Distinctio, exercitationem! Nesciunt, tempore. Consectetur adipisicing elit sed do eiusmod tempor."
    },
    {
      question: "Sed ut perspiciatis unde omnis iste natus?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    },
    {
      question: "At vero eos et accusamus et iusto odio?",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
    },
    {
      question: "Ut enim ad minima veniam quis nostrum?",
      answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
    },
    {
      question: "Quis autem vel eum iure reprehenderit?",
      answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum et dolore magna aliqua."
    }
  ];

  const scrollToSection = () => {
    document.getElementById('second-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  overflow-hidden font-sans   pt-10" style={{background:"rgba(245, 166, 29, 1)"}}>
      {/* Custom cursor */}
      <div 
        className="fixed w-4 h-4 bg-white/30 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Shapes */}
        <FloatingShape className="top-20 left-20" animationDelay={0}>
          <div className="w-20 h-20 bg-white/20 rounded-full"></div>
        </FloatingShape>
        <FloatingShape className="top-32 right-32" animationDelay={2}>
          <div className="w-32 h-32 bg-pink-500/20 rounded-full"></div>
        </FloatingShape>
        <FloatingShape className="bottom-40 left-40" animationDelay={4}>
          <div className="w-16 h-16 bg-purple-500/20 rounded-full"></div>
        </FloatingShape>

        {/* Curved Lines */}
        <div className="absolute top-0 left-0 w-80 h-80 border-4 border-pink-500/30 rounded-full -translate-x-40 -translate-y-40 animate-spin" 
          style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 border-4 border-purple-500/30 rounded-full translate-x-30 translate-y-30 animate-spin" 
          style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
             
                  <div className="flex items-center justify-center">
    <ThumbsUp className="w-20 h-[150px] text-white -400" />
  </div>

          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight" style={{fontFamily:'Schoolbell'}}>
              <span className="inline-block animate-pulse">
                <Sparkles className="inline w-12 h-12 md:w-16 md:h-16 text-yellow-300 mx-4" />
              </span>
              HEADING GOES HERE
              <span className="inline-block animate-pulse">
                <Sparkles className="inline w-12 h-12 md:w-16 md:h-16 text-yellow-300 mx-4" />
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.3s',fontFamily:'Schoolbell'}}>
            Create stunning experiences that captivate and inspire your audience with our innovative solutions
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}>
            <FeatureCard 
              icon={Lightbulb}
              title="Innovation"
              description="Cutting-edge solutions that push boundaries and deliver exceptional results"
              delay="hover:delay-0"
            />
            <FeatureCard 
              icon={Palette}
              title="Design"
              description="Beautiful, user-centered designs that create memorable experiences"
              delay="hover:delay-75"
            />
            <FeatureCard 
              icon={Rocket}
              title="Performance"
              description="Lightning-fast solutions optimized for the best user experience"
              delay="hover:delay-150"
            />
            <FeatureCard 
              icon={Target}
              title="Results"
              description="Proven track record of delivering measurable business outcomes"
              delay="hover:delay-225"
            />
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToSection}
            className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white 
              font-bold text-lg rounded-full transition-all duration-300 ease-out hover:scale-105 
              hover:shadow-2xl hover:shadow-pink-500/30 animate-fadeInUp"
            style={{ animationDelay: '0.9s' }}
          >
            <span className="relative z-10 flex items-center">
              EXPLORE
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-20 right-20 animate-bounce text-yellow-300" style={{ animationDelay: '1s' }}>
          <Smile className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-40 animate-bounce text-white" style={{ animationDelay: '0.5s' }}>
          <Send className="w-6 h-6" />
        </div>
      </section>

      {/* Second Section */}
      <section
  id="second-section"
  className="relative min-h-screen py-20 overflow-hidden"
  style={{
    backgroundImage: `url(${bgg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "transparent"
  }}
>

      {/* <section id="second-section" className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 py-20 overflow-hidden"> */}
        {/* Background Icons */}
        <BackgroundIcon icon={Music} className="top-20 left-20" animationDelay={0} />
        <BackgroundIcon icon={Gamepad2} className="top-40 right-32" animationDelay={1} />
        <BackgroundIcon icon={Diamond} className="bottom-60 left-32" animationDelay={2} />
        <BackgroundIcon icon={Star} className="top-80 right-20" animationDelay={3} />
        <BackgroundIcon icon={Flame} className="bottom-20 right-20" animationDelay={4} />

        {/* Curved Accents */}
        <div className="absolute top-20 right-20 w-48 h-48 border-2 border-green-400/30 rounded-full animate-spin" 
          style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-green-400/20 rounded-full animate-spin" 
          style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
           <div className=" flex items-center justify-center ">
  <MousePointer className="w-20 h-20 text-white" />
</div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="text-white-400 font-mono">{'{'}</span>
              <span className=" ext-5xl text-white-400 mx-4 font-mono" style={{fontFamily:'Schoolbell'}}>HEADING GOES HERE</span>
              <span className="text-white-400 font-mono">{'}'}</span>
            </h2>
            <p className="text-5xl md:text-3xl text-purple-200 font-light tracking-wide" style={{fontFamily:'Schoolbell'}}>
              LOREM IPSUM DOLOR SIT AMET
            </p>
            
            {/* <div className="my-12 animate-bounce">
              <div className="text-8xl md:text-9xl text-green-400 font-bold">?</div>
            </div> */}
          </div>

          {/* FAQ Container */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-white/20 pb-6 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 bg-pink-500/80 hover:bg-pink-500 
                      rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-white font-semibold text-left">{faq.question}</span>
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-4 bg-white/5 rounded-lg border-l-4 border-green-400 ml-4">
                      <p className="text-purple-200 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <button className="group relative px-16 py-5 bg-gradient-to-r from-pink-500 to-purple-600 
              text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 
              hover:shadow-2xl hover:shadow-pink-500/40">
              <span className="relative z-10 flex items-center">
                <Heart className="mr-3 z-15 w-6 h-6 group-hover:animate-pulse " />
                GET STARTED
                <Zap className="ml-3 w-6 h-6 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      <div>
              <img
                src={v}
                alt="gn"
                className="absolute  top-[1185px] bottom-0 left-0 w-full  "
              /> 
            </div>
      <div>
              <img
                src={vv}
                alt="gn"
                className="absolute  top-[1185px] bottom-0 left-0 w-full  "
              /> 
            </div>
      <div>
              <img
                src={skyblue}
                alt="gn"
                className="absolute  top-[1150px] bottom-0 left-0 w-full  "
              /> 
            </div>
      </section>


              {/* <div className="  flex flex-col items-center">
                          <img src={m2} alt="Icon" className="w-30 h-7 cursor-pointer" />
                          </div> */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Headingpage;


// import React, { useState } from 'react';

// export default function FantasyNewsletter() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     if (email.trim()) {
//       console.log('Subscribed with email:', email);
//       alert('Thank you for subscribing to 10 Tales!');
//       setEmail('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 relative overflow-hidden">
//       {/* Red dramatic sky with scalloped edge */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-red-600 relative">
//         {/* Scalloped bottom edge */}
//         <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
//           {Array.from({ length: 50 }).map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-6 h-6 bg-gray-900 rounded-full bottom-0"
//               style={{
//                 left: ${i * 2}%,
//                 transform: 'translateY(50%)',
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="absolute inset-0">
//         {/* Clouds scattered around */}
//         <div className="absolute top-32 left-12 w-16 h-6 bg-gray-700 rounded-full opacity-60"></div>
//         <div className="absolute top-36 left-8 w-12 h-4 bg-gray-700 rounded-full opacity-40"></div>
        
//         <div className="absolute top-64 left-32 w-20 h-7 bg-gray-600 rounded-full opacity-50"></div>
//         <div className="absolute top-68 left-28 w-16 h-5 bg-gray-600 rounded-full opacity-30"></div>
        
//         <div className="absolute bottom-48 left-8 w-18 h-6 bg-gray-600 rounded-full opacity-40"></div>
//         <div className="absolute bottom-52 left-4 w-14 h-4 bg-gray-600 rounded-full opacity-30"></div>
        
//         <div className="absolute bottom-32 right-24 w-22 h-8 bg-gray-600 rounded-full opacity-35"></div>
//         <div className="absolute bottom-36 right-20 w-18 h-6 bg-gray-600 rounded-full opacity-25"></div>
        
//         <div className="absolute top-48 right-16 w-14 h-5 bg-gray-700 rounded-full opacity-45"></div>
//         <div className="absolute top-52 right-12 w-10 h-3 bg-gray-700 rounded-full opacity-35"></div>
        
//         {/* Large decorative circle on right */}
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 w-80 h-80 border-2 border-gray-600 rounded-full opacity-25"></div>
        
//         {/* Rainbow arc */}
//         <div className="absolute top-56 right-32 w-32 h-16 border-4 border-gray-500 rounded-t-full opacity-30"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
//         {/* Main headline */}
//         <div className="text-center mb-20 mt-16">
//           <h1 className="text-7xl md:text-9xl font-bold text-gray-500 leading-none mb-2 opacity-70">
//             Craft your
//           </h1>
//           <h2 className="text-7xl md:text-9xl font-bold text-gray-500 leading-none opacity-70">
//             tales!
//           </h2>
//         </div>

//         {/* Bottom section */}
//         <div className="absolute bottom-20 left-0 right-0 px-12">
//           <div className="flex justify-between items-start max-w-6xl mx-auto">
//             {/* Left side - Newsletter signup */}
//             <div className="flex flex-col items-start">
//               <h3 className="text-white text-lg font-normal mb-1">Subscribe to the</h3>
//               <h4 className="text-white text-2xl font-bold mb-4">10 Tales Newsletter</h4>
//               <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
//                 Get weekly short stories and<br />
//                 updates about the next book.
//               </p>
              
//               <div className="flex flex-col gap-3">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:border-green-500 w-72 text-sm"
//                 />
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 text-sm tracking-wide"
//                 >
//                   SUBSCRIBE
//                 </button>
//               </div>
//             </div>

//             {/* Right side - Links grid */}
//             <div className="grid grid-cols-4 gap-16 text-sm">
//               <div className="space-y-4">
//                 <h5 className="text-gray-400 font-semibold text-sm">Products</h5>
//                 <div className="space-y-2">
//                   <p className="text-gray-500 text-xs">Product 1</p>
//                   <p className="text-gray-500 text-xs">Product 2</p>
//                   <p className="text-gray-500 text-xs">Product 3</p>
//                   <p className="text-gray-500 text-xs">Product 4</p>
//                   <p className="text-gray-500 text-xs">Product 5</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <h5 className="text-gray-400 font-semibold text-sm">Company</h5>
//                 <div className="space-y-2">
//                   <p className="text-gray-500 text-xs">About</p>
//                   <p className="text-gray-500 text-xs">Team</p>
//                   <p className="text-gray-500 text-xs">Careers</p>
//                   <p className="text-gray-500 text-xs">News</p>
//                   <p className="text-gray-500 text-xs">Blog</p>
//                   <p className="text-gray-500 text-xs">Press</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <h5 className="text-gray-400 font-semibold text-sm">Resources</h5>
//                 <div className="space-y-2">
//                   <p className="text-gray-500 text-xs">Help 1</p>
//                   <p className="text-gray-500 text-xs">Help 2</p>
//                   <p className="text-gray-500 text-xs">Help 3</p>
//                   <p className="text-gray-500 text-xs">Help 4</p>
//                   <p className="text-gray-500 text-xs">Help 5</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <h5 className="text-gray-400 font-semibold text-sm">Social</h5>
//                 <div className="space-y-2">
//                   <p className="text-gray-500 text-xs">Platform 1</p>
//                   <p className="text-gray-500 text-xs">Platform 2</p>
//                   <p className="text-gray-500 text-xs">Platform 3</p>
//                   <p className="text-gray-500 text-xs">Platform 4</p>
//                   <p className="text-gray-500 text-xs">Platform 5</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer social icons */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
//           <div className="flex space-x-3">
//             <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
//             <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
//             <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
//             <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
//             <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }