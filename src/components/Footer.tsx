import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Heart,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20">
                <img 
                  src="/lic-logo.jpg" 
                  alt="LIC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Your Trusted LIC Agent</div>
                <div className="text-gold text-sm">30+ Years of Excellence</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              For over three decades, I have been committed to securing the financial future 
              of families across Chimakurthy and beyond. With 2000+ families protected and 
              100+ awards won, I continue to be your dedicated partner in life insurance.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                <span>100+ Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold" />
                <span>2000+ Families</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-gold transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-gold transition-colors">
                  LIC Policies
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-white/80 hover:text-gold transition-colors">
                  Awards & Recognition
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-gold transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div className="text-white/80 text-sm">
                  LIC office by Maddali Sreehari<br />
                  Siddha Complex, Opposite to Police station<br />
                  Main road, Chimakurthy<br />
                  Prakasam District, AP 523226
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+919248426946" className="text-white/80 hover:text-gold transition-colors text-sm">
                  +91 92484 26946
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:eswar.investments@gmail.com" className="text-white/80 hover:text-gold transition-colors text-sm">
                  eswar.investments@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@eswar_maddali?si=NctORLDLkYVBn-V-" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <button
                  onClick={() => window.open('https://wa.me/919248426946', '_blank')}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Best LIC Agent in Chimakurthy. All rights reserved.
          </div>
          <div className="text-white/60 text-sm text-center md:text-right">
            Proudly serving families across Prakasam District since 1990
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <p className="text-xs text-white/60 text-center leading-relaxed">
            <strong>Disclaimer:</strong> All LIC policies are subject to terms and conditions. 
            Past performance is not indicative of future results. Please read policy documents carefully 
            before making any investment decisions. For more information, visit www.licindia.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;