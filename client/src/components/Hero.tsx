
import { Play, MessageCircle } from 'lucide-react';
import heroImage from '@assets/image_1753002189465.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Cyberpunk Glow Effects on Top of Image */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse cyber-glow-purple"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000 cyber-glow-purple"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-400/12 rounded-full blur-2xl animate-pulse delay-500 cyber-glow-purple"></div>
      </div>

      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight float-animation animate-on-load animate-fade-in-scale" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
          <span className="cyber-gradient-text">
            Vishal Edits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-purple-300 mb-4 font-medium animate-on-load animate-fade-in-up animate-delay-200" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
          🎬 Video Editor | Short & Long Form Specialist
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-on-load animate-fade-in-up animate-delay-400">
          Crafting Visual Stories That Convert
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-load animate-fade-in-up animate-delay-600">
          <a 
            href="https://instagram.com/vishaledits25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-purple-500/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Watch Reel
          </a>
          
          <button 
            onClick={scrollToContact}
            className="group bg-purple-600/80 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-600 hover:scale-105 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-600/20"
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