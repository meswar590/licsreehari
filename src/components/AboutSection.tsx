import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Shield, TrendingUp, Handshake } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-navy" />,
      title: "Trust & Security",
      description: "Building unshakeable trust through transparent advice and reliable service"
    },
    {
      icon: <Heart className="w-8 h-8 text-navy" />,
      title: "Family First",
      description: "Every policy is crafted with your family's unique needs and dreams in mind"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-navy" />,
      title: "Financial Growth",
      description: "Strategies that grow with your life, securing both present and future"
    },
    {
      icon: <Handshake className="w-8 h-8 text-navy" />,
      title: "Personal Touch",
      description: "More than an agent - your dedicated financial partner and family friend"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Your Trusted
            <span className="block text-gold">LIC Partner</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Three decades of dedication, thousands of families secured, and a commitment 
            that goes beyond just selling policies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">The Journey of Trust</h3>
            <div className="space-y-4 text-navy/80 leading-relaxed">
              <p>
                For over three decades, I have walked alongside families in Chimakurthy and beyond, 
                understanding their dreams, fears, and aspirations. What started as a career has 
                evolved into a calling - to protect and secure the financial future of every family 
                I serve.
              </p>
              <p>
                In an industry where products matter, I believe relationships matter more. Every 
                policy I recommend is not just an investment; it's a promise to stand by your 
                family when they need it most. This philosophy has earned me the trust of over 
                2000 families and recognition through 100+ awards.
              </p>
              <p>
                My approach is simple: listen first, understand deeply, and recommend wisely. 
                Whether you're a young professional starting your career or a family planning 
                for retirement, I'm here to guide you through every step of your financial journey.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h4 className="text-xl font-semibold text-navy mb-6 text-center">Why Families Choose Me</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold">30+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Years of Experience</div>
                    <div className="text-sm text-navy/60">Established expertise you can trust</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold">2K+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Families Protected</div>
                    <div className="text-sm text-navy/60">Lives secured across generations</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold">100+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Awards & Recognition</div>
                    <div className="text-sm text-navy/60">Consistent excellence acknowledged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-navy mb-3">{value.title}</h4>
              <p className="text-navy/70 text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;