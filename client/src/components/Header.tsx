import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-2 md:top-4 left-1/2 transform -translate-x-[60%] z-50 transition-all duration-500 w-fit ${
      isScrolled 
        ? 'bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/10' 
        : 'bg-black/20 backdrop-blur-lg border border-white/10 shadow-xl shadow-purple-500/5'
    } rounded-full animate-on-load animate-smoke-fade animate-delay-400`}>
      <div className="px-6 md:px-8 py-2">
        <div className="flex items-center h-12 gap-6">
          {/* Vishal Logo */}
          <div className="text-xl text-white font-extrabold cursor-pointer transition-all duration-300 hover:scale-110 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] active:scale-95" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
            Vishal
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-full hover:bg-white/10 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 ml-auto"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full mt-2 left-0 right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl">
            <nav className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105 active:scale-95"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;