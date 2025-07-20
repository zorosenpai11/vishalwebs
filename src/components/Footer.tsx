import React from 'react';
import { Heart, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Vishal Edits</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Crafting Visual Stories That Convert. Professional video editing services for creators and brands worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vishaledits25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-pink-500/20 transition-colors"
              >
                <Instagram className="text-pink-400" size={18} />
              </a>
              <a
                href="https://youtube.com/@vishaleditss25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Youtube className="text-red-400" size={18} />
              </a>
              <a
                href="mailto:vishaledits@example.com"
                className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <Mail className="text-blue-400" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Vishal Edits. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Made with</span>
            <Heart className="text-red-400 fill-current" size={16} />
            <span>for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;