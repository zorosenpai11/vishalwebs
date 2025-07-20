
import { Play, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-950/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Vishal Edits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-blue-200 mb-4 font-medium">
          🎬 Video Editor | Short & Long Form Specialist
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting Visual Stories That Convert
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://instagram.com/vishaledits25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-3"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Watch Reel
          </a>
          
          <button 
            onClick={scrollToContact}
            className="group bg-blue-600/80 backdrop-blur-md border border-blue-500/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105 flex items-center gap-3"
          >
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;