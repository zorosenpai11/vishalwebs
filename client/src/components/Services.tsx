
import { Video, Youtube, Megaphone, Mic, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Video,
      title: 'Reels & Shorts Editing',
      description: 'Engaging short-form content that captures attention and drives engagement on Instagram, TikTok, and YouTube Shorts.',
      features: ['Quick turnaround', 'Trending effects', 'Hook optimization', 'Mobile-first editing'],
      price: 'Starting at $25'
    },
    {
      icon: Youtube,
      title: 'YouTube Video Editing',
      description: 'Professional long-form content editing with seamless storytelling, color grading, and audience retention optimization.',
      features: ['Full post-production', 'Thumbnail design', 'SEO optimization', 'Custom graphics'],
      price: 'Starting at $75'
    },
    {
      icon: Megaphone,
      title: 'Brand Promo Videos',
      description: 'High-impact promotional content that showcases your brand story and converts viewers into customers.',
      features: ['Brand guidelines', 'Motion graphics', 'Call-to-action focus', 'Multi-platform formats'],
      price: 'Starting at $150'
    },
    {
      icon: Mic,
      title: 'Podcast Video Edits',
      description: 'Transform your audio podcasts into engaging video content with dynamic visuals and professional editing.',
      features: ['Audio sync', 'Visual elements', 'Highlight clips', 'Social media cuts'],
      price: 'Starting at $50'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="cyber-gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 mx-auto rounded-full mb-8 cyber-glow-pink"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional video editing services tailored to your content needs and brand goals
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 hover:border-pink-400/40 cyber-glow-pink neon-border"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/30 transition-colors cyber-glow-pink">
                    <IconComponent className="text-pink-400" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-pink-400 font-semibold text-sm">{service.price}</span>
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored solution that brings your vision to life.
          </p>
          <a 
            href="https://instagram.com/vishaledits25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <Megaphone size={20} />
            DM for Custom Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;