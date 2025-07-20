import { useState, FormEvent, ChangeEvent } from 'react';
import { Instagram, Youtube, Send, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Redirect to Instagram DM with pre-filled info
    const message = `Hi! I'm ${formData.name} (${formData.email}). ${formData.message}`;
    const instagramUrl = `https://instagram.com/direct/new/`;
    window.open(instagramUrl, '_blank');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="cyber-gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 mx-auto rounded-full mb-8 cyber-glow-purple"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <Clock className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Response Time</h4>
                    <p className="text-white/70 text-sm">Usually within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-white/70 text-sm">Available worldwide (Remote)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow My Work</h3>
              
              <div className="space-y-4">
                <a
                  href="https://instagram.com/vishaledits25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center">
                    <Instagram className="text-pink-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Instagram</h4>
                    <p className="text-white/70 text-sm">@vishaledits25</p>
                  </div>
                  <div className="text-white/50 group-hover:text-white transition-colors">→</div>
                </a>

                <a
                  href="https://youtube.com/@vishaleditss25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                    <Youtube className="text-red-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">YouTube</h4>
                    <p className="text-white/70 text-sm">@vishaleditss25</p>
                  </div>
                  <div className="text-white/50 group-hover:text-white transition-colors">→</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;