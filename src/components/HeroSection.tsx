import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Award, Users, Calendar, Crown, Target } from 'lucide-react';
import postalStampAward from '@/assets/postal-stamp-award.jpg';
import chairmanAward from '@/assets/chairman-award.jpg';
import zonalManagerAward from '@/assets/zonal-manager-award.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lifetimeAchievements = [
    {
      icon: <Crown className="w-16 h-16 text-gold" />,
      title: "Featured on Indian Postal Stamp",
      subtitle: "A Rare National Honor",
      description: "Celebrating the rare honor of being featured on an Indian Postal Stamp.",
      badge: "Lifetime Achievement",
      image: postalStampAward,
      alt: "Indian Postal Stamp Honor - Lifetime Achievement",
      gradient: "from-gold/20 via-white/95 to-navy/10",
      borderColor: "border-gold/30"
    },
    {
      icon: <Award className="w-16 h-16 text-navy" />,
      title: "Honored by LIC Chairman",
      subtitle: "Personal Recognition",
      description: "A proud moment as Maddali Sreehari was honored and personally recognized by LIC Chairman Shri M. R. Kumar for his remarkable achievements.",
      badge: "Chairman's Honor",
      image: chairmanAward,
      alt: "LIC Chairman Recognition - Maddali Sreehari with Shri M. R. Kumar",
      gradient: "from-navy/20 via-white/95 to-gold/10",
      borderColor: "border-navy/30"
    },
    {
      icon: <Target className="w-16 h-16 text-gold" />,
      title: "Zonal Manager Recognition",
      subtitle: "10× MDRT Achievement",
      description: "Honored by Zonal Manager Shri Jagannatham for achieving 10× MDRT – a milestone of excellence in the insurance industry.",
      badge: "Excellence Milestone",
      image: zonalManagerAward,
      alt: "Zonal Manager Recognition - Honored by Shri Jagannatham for 10× MDRT achievement",
      gradient: "from-gold/15 via-white/95 to-navy/15",
      borderColor: "border-gold/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifetimeAchievements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [lifetimeAchievements.length]);

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">100+ Awards Winner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              30+ Years of
              <span className="block text-gold">Securing Lives</span>
              <span className="block text-lg md:text-xl font-normal text-white/90 mt-2">
                2000+ Families Protected
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your trusted LIC agent in Chimakurthy, dedicated to building secure financial futures 
              for families across Andhra Pradesh.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">30+</span>
                </div>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">2000+</span>
                </div>
                <p className="text-white/80">Families Secured</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-gold" />
                  <span className="text-3xl font-bold">100+</span>
                </div>
                <p className="text-white/80">Awards Won</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <div className="bg-white rounded-lg px-6 py-3 shadow-lg">
                <a 
                  href="tel:+919248426946" 
                  className="text-navy font-bold text-lg hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +91 92484 26946
                </a>
              </div>
            </div>
          </div>
          
          {/* Achievements Carousel */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Lifetime Achievements</h3>
                <div className="w-16 h-1 bg-gold mx-auto"></div>
              </div>
              
              {/* Slideshow Container - Fixed Height */}
              <div className="relative overflow-hidden rounded-2xl h-[600px]">
                {lifetimeAchievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className={`relative overflow-hidden bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm shadow-hero border-2 ${achievement.borderColor} transition-all duration-700 ease-in-out h-full ${
                      index === currentSlide 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentSlide 
                          ? 'opacity-0 -translate-x-full absolute inset-0' 
                          : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"></div>
                    <div className="relative p-6 h-full flex flex-col">
                      <div className="flex flex-col items-center gap-4 text-center flex-1">
                        <div className="relative group flex-shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient.replace('via-white/95', 'via-transparent')} rounded-2xl transform ${index % 2 === 0 ? 'rotate-1 group-hover:rotate-2' : '-rotate-1 group-hover:-rotate-2'} transition-transform duration-300`}></div>
                          <div className="relative bg-white p-3 rounded-2xl shadow-hero">
                            <img 
                              src={achievement.image}
                              alt={achievement.alt}
                              className="w-full h-64 object-cover rounded-xl"
                            />
                          </div>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center mx-auto flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <h4 className="text-xl font-bold text-navy flex-shrink-0">{achievement.title}</h4>
                        <p className="text-lg font-semibold text-gold flex-shrink-0">{achievement.subtitle}</p>
                        <p className="text-navy/80 text-sm leading-relaxed flex-1 flex items-center">
                          {achievement.description}
                        </p>
                        <div className="inline-block bg-gradient-to-r from-gold to-navy text-white px-4 py-1 rounded-full text-xs font-semibold flex-shrink-0">
                          {achievement.badge}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {lifetimeAchievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gold scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;