
import { User, Award, Zap } from 'lucide-react';

const About = () => {
  const tools = [
    'Premiere Pro',
    'After Effects', 
    'DaVinci Resolve'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <User className="text-blue-400" size={24} />
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
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-white/70">Videos Edited</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Tools I Use</h3>
              </div>
              
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={tool} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium text-lg">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Specialties</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Short Form Content', 'YouTube Editing', 'Brand Videos', 'Social Media'].map((specialty) => (
                  <span key={specialty} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
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