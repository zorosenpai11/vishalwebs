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
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-auto max-w-md ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-xl border border-white/10' 
        : 'bg-black/10 backdrop-blur-md border border-white/5'
    } rounded-full`}>
      <div className="px-6 py-2">
        <div className="flex items-center justify-between h-12">
          <div className="text-xl font-bold text-white">
            Vishal Edits
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Works', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'works' ? 'portfolio' : item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full mt-2 left-0 right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl">
            <nav className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Works', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'works' ? 'portfolio' : item.toLowerCase())}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
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