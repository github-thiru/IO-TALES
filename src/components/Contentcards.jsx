import React, { useState, useEffect } from 'react';
import rc from '../assets/rc.png';
import rcc from '../assets/rc2.png';
import bc from '../assets/bc.svg';
import { 
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Star,
  Heart,
  Zap,
  Sparkles,
  TrendingUp,
  Target,
  Globe
} from 'lucide-react';

const Contentcards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      title: "Team Collaboration",
      description: "How to build effective teams and foster collaboration in remote work environments",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Leadership"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Design Thinking",
      description: "Innovative approaches to problem-solving through human-centered design",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      title: "Business Strategy",
      description: "Strategic planning and execution for sustainable business growth",
      author: "Emily Davis",
      date: "March 10, 2024",
      category: "Business"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Digital Innovation",
      description: "Embracing digital transformation and emerging technologies",
      author: "Alex Rodriguez",
      date: "March 8, 2024",
      category: "Technology"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, blogPosts.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, blogPosts.length - 3)) % Math.max(1, blogPosts.length - 3));
  };

  const BlogCard = ({ post, index }) => (

    
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden 
      border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 
      hover:-translate-y-2 hover:shadow-2xl min-w-[300px] mx-2">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
          {post.title}
        </h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-yellow-400" />
            <span className="text-white/70 text-xs">{post.author}</span>
          </div>
          <span className="text-white/60 text-xs">{post.date}</span>
        </div>
        
        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
          text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-600 
          transition-all duration-300 hover:scale-105 group-hover:shadow-lg">
          Read More
        </button>
      </div>
    </div>
  );

 const FloatingShape = ({ className, size = "w-16 h-16", color = "bg-white/10" }) => (
  <div className={`absolute ${size} ${color} rounded-full animate-pulse ${className}`}></div>
);

const DecorativeRibbon = ({ className }) => (
  <div className={`absolute w-32 h-32 ${className}`}>
    <div
      className="w-full h-full border-4 border-yellow-400 rounded-full animate-spin opacity-30"
      style={{ animationDuration: '20s' }}
    ></div>
  </div>
);


  return (
<div className="min-h-[100vh] absolute w-full left-0 right-0 font-sans" style={{ backgroundColor: "rgba(8, 186, 173, 1)" }}>
      {/* Custom Cursor */}
      <div 
        className="fixed w-3 h-3 bg-white/40 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Top Section - Teal */}

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
  {/* Floating Shapes */}
  <FloatingShape className="top-20 left-20 animate-bounce" size="w-12 h-12" />
  <FloatingShape className="top-40 right-32 animate-bounce" size="w-8 h-8" />
  <FloatingShape className="bottom-40 left-40 animate-bounce" size="w-6 h-6" />
  
  {/* Decorative Ribbons */}
  <DecorativeRibbon className="top-10 right-10" />
  <DecorativeRibbon className="bottom-20 left-20" />

  {/* ✅ Wrapper with max width */}
  <div className="relative z-10 px-6 w-full max-w-[1200px] mx-auto text-center">
    {/* Sparkles */}
    <div className="flex justify-center items-center mb-8">
      <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse mx-2" />
      <Sparkles className="w-6 h-6 text-white animate-pulse mx-1" />
      <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse mx-1" />
    </div>

    <h1 className="text-7xl md:text-7xl font-black text-white mb-6 tracking-tight animate-fadeInUp" style={{fontFamily:'Schoolbell'}}>
      LOREM IPSUM DOLOR SIT
    </h1>

    <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{fontFamily:'Schoolbell'}}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </p>

    {/* ✅ Proper Centered Brand Showcase */}
    {/* ✅ Responsive Brand Showcase */}
<div className="animate-fadeInUp flex justify-center px-4" style={{ animationDelay: '0.6s' }}>
  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/30 
    hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-5xl">
    
    {/* Brand Logos – Responsive Flex Wrap */}
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-12 text-white">
      
      {/* Amazon */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
        <span className="text-lg sm:text-2xl font-bold">amazonin</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 sm:h-12 bg-white/30"></div>

      {/* FirstCry */}
      <div className="flex items-center gap-2 sm:gap-3">
        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
        <span className="text-lg sm:text-2xl font-bold italic">firstcry</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 sm:h-12 bg-white/30"></div>

      {/* Hostkeys */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Target className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
        <span className="text-lg sm:text-2xl font-bold italic">Hostkeys</span>
      </div>
    </div>
  </div>
</div>


  </div>
</section>




      {/* Blog Section - Red */}
<section className="relative w-full min-h-[100dvh]  border border-white bg-gradient-to-br from-red-500 via-red-600 to-red-700 py-20 overflow-hidden">
        {/* Decorative Yellow Ribbon */}
        <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 border-8 border-yellow-400 rounded-full 
            animate-spin opacity-30" style={{ animationDuration: '25s' }}></div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-full h-32 overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-48 h-48 border-6 border-yellow-400 rounded-full 
            animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Blog Header */}
          <div className="text-center mb-16">
           <h6 className="text-3xl md:text-8xl font-black text-white " style={{ fontFamily: 'Schoolbell' }}>
  our
</h6>

            <h2 className="text-8xl md:text-8xl  font-black text-yellow-400 mb-4" style={{fontFamily:'Schoolbell'}}>
              Blogs
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed" style={{fontFamily:'Schoolbell'}}>
              Find out what happen in the world of STREAM play
            </p>
          </div>


          {/* Blog Cards Slider */}
     <div className="relative w-full">
  {/* Navigation Buttons – only visible on md and up */}
  <button 
    onClick={prevSlide}
    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 
      backdrop-blur-md rounded-full items-center justify-center hover:bg-white/30 
      transition-all duration-300 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>

  <button 
    onClick={nextSlide}
    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 
      backdrop-blur-md rounded-full items-center justify-center hover:bg-white/30 
      transition-all duration-300 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>

  {/* Blog Cards Container */}
  <div className="px-4 md:px-12 pb-6">
    {/* Mobile: vertical layout | Desktop: horizontal slider */}
    <div
      className={`flex flex-col md:flex-row md:gap-6 md:transition-transform md:duration-500 md:ease-in-out`}
      style={{ transform: `translateX(-${currentSlide * 320}px)` }}
    >
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className="w-full md:min-w-[300px] md:max-w-[320px] mb-6 md:mb-0"
        >
          <BlogCard post={post} index={index} />
        </div>
      ))}
    </div>
  </div>
</div>


          {/* View More Button */}
          <div className="text-center mt-16">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 
              hover:shadow-2xl hover:from-yellow-500 hover:to-orange-600">
              <span className="relative z-10 flex items-center">
                VIEW MORE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="top-40 left-20 animate-bounce text-yellow-300" style={{ animationDelay: '1s' }}>
          <BookOpen className="w-8 h-8" />
        </div>
        <div className=" bottom-40 right-20 animate-bounce text-yellow-300" style={{ animationDelay: '2s' }}>
          <Award className="w-8 h-8" />
        </div>
      </section>
{/* 
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}</style> */}

{/* 
       <div className="absolute bottom-0 left-0 w-full top-[1400px] z-5">
              <img src={rc} alt="Wave Bottom" className="w-full" />
            </div>
       <div className="absolute bottom-0 left-0 w-full    top-[1420px] bottom-0 left-[2px] w-full z-5">
              <img src={rcc} alt="Wave Bottom" className="w-full" />
            </div>
       <div className="absolute bottom-0 left-0 w-full   top-[1420px] bottom-0 left-[] w-full z-10  ">
              <img src={bc} alt="Wave Bottom" className="w-full" />
            </div> */}
    </div >
   
  

  );
};

export default Contentcards;