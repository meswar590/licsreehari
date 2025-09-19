import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import licLogo from '@/assets/lic-logo.jpg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (sectionId === 'premium-calculator-card') {
        el.classList.add('ring-4', 'ring-yellow-300', 'transition-shadow');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-yellow-300', 'transition-shadow');
        }, 1000);
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services-we-provide' },
    { label: 'Calculator', id: 'premium-calculator-card' },
    { label: 'Achievements', id: 'gallery' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16">
              <img src={licLogo} alt="LIC Logo" className="w-full h-full object-contain" />
            </div>
            <div className={`font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
              <div className="text-lg">Trusted LIC Agent</div>
              <div className="text-xs opacity-80">30+ Years Experience</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open('tel:+919248426946', '_self')}
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-navy hover:bg-navy/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-card">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-navy font-medium text-left py-2 hover:text-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open('tel:+919248426946', '_self')}
                className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;