
import { User, Award, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const tools = [
    'CapCut',
    'Adobe Premiere Pro',
    'After Effects', 
    'Photoshop'
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="cyber-gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 mx-auto rounded-full cyber-glow-blue"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Vishal - Video Editor"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-600/20 via-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <User className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Story</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                Hi, I'm Vishal — a freelance video editor helping creators and brands grow through powerful edits. 
                I specialize in reels, YouTube content, and brand storytelling that captures attention and drives results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-white/70">Videos Edited</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Tools & Specialties Section - Full width and bigger */}
          <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8">
            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="text-pink-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Tools I Use</h3>
              </div>
              
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={tool} className="flex items-center gap-4 p-4 md:p-5 bg-white/5 rounded-2xl hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium text-lg md:text-xl">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Award className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Specialties</h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {['Short Form Content', 'YouTube Editing', 'Brand Videos', 'Social Media'].map((specialty) => (
                  <span key={specialty} className="px-5 md:px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-base md:text-lg font-medium hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;