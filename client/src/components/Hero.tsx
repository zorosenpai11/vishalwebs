
import { Play, MessageCircle } from 'lucide-react';
import heroVideo from '@assets/953d6b22c46147f9e0eaa3bfbdf0f70d_1753000928013.mp4';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Cyberpunk Glow Effects on Top of Video */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse cyber-glow-blue"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-1000 cyber-glow-pink"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/8 rounded-full blur-2xl animate-pulse delay-500 cyber-glow-purple"></div>
      </div>

      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight float-animation">
          <span className="cyber-gradient-text">
            Vishal Edits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-cyan-300 mb-4 font-medium">
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
            className="group bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105 flex items-center justify-center gap-3 cyber-glow-blue neon-border"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            Watch Reel
          </a>
          
          <button 
            onClick={scrollToContact}
            className="group bg-pink-600/80 backdrop-blur-md border border-pink-500/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-pink-600 hover:scale-105 flex items-center justify-center gap-3 cyber-glow-pink"
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