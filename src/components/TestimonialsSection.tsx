import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Chimakurthy",
      image: null,
      rating: 5,
      text: "For the past 15 years, he has been our family's trusted LIC agent. When my father passed away last year, the claim process was smooth and hassle-free. His guidance helped us choose the right policies that truly secured our future.",
      policy: "Term Life Insurance"
    },
    {
      name: "Priya Sharma",
      location: "Ongole",
      image: null,
      rating: 5,
      text: "As a working mother, I was confused about child education plans. His patient explanation and personalized approach helped me choose the perfect plan for my daughter's future. She's now in engineering, thanks to the policy maturity!",
      policy: "Child Education Plan"
    },
    {
      name: "Venkat Rao",
      location: "Bapatla",
      image: null,
      rating: 5,
      text: "I've been his client for over 20 years. What sets him apart is his availability - whether it's a claim, premium payment, or just advice, he's always there. Truly a family friend more than just an agent.",
      policy: "Endowment Policy"
    },
    {
      name: "Lakshmi Devi",
      location: "Chirala",
      image: null,
      rating: 5,
      text: "When my husband retired, we were worried about our monthly expenses. The pension plan he recommended gives us steady income and peace of mind. His expertise in retirement planning is remarkable.",
      policy: "Pension Plan"
    },
    {
      name: "Suresh Reddy",
      location: "Chimakurthy",
      image: null,
      rating: 5,
      text: "During COVID, when my family needed hospitalization, the health insurance claim was processed within days. His proactive follow-up and support during that stressful time meant everything to us.",
      policy: "Health Insurance"
    },
    {
      name: "Anitha Krishnan",
      location: "Kandukur",
      image: null,
      rating: 5,
      text: "I was skeptical about ULIPs initially, but his detailed explanation of market-linked plans helped me understand the benefits. My investment has grown significantly, and I couldn't be happier with the returns.",
      policy: "ULIP Investment"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-gold fill-gold' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What Families
            <span className="block text-gold">Say About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Real stories from real families whose lives have been secured and 
            dreams protected through trusted LIC guidance and support.
          </p>
        </div>

        {/* Testimonials Scrolling Container */}
        <div className="relative overflow-hidden py-8 mb-12">
          <div className="flex animate-scroll-left gap-6" style={{
            width: 'calc(400px * 12)'
          }}>
            {/* Duplicate testimonials for seamless scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-80 p-6 bg-gradient-to-br from-white to-gray-50/50 shadow-lg border border-gray-200 rounded-lg"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-gold/30" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-navy/80 leading-relaxed mb-6 italic text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-navy/60" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{testimonial.name}</div>
                    <div className="text-xs text-navy/60">{testimonial.location}</div>
                    <div className="text-xs text-gold font-medium mt-1">{testimonial.policy}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied families who have secured their future with 
            personalized LIC solutions and dedicated service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey Today
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/919248426946?text=Hello, I would like to know more about LIC policies', '_blank')}
            >
              WhatsApp Me Now
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">2000+</div>
            <div className="text-navy/70">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">₹50Cr+</div>
            <div className="text-navy/70">Claims Settled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">100%</div>
            <div className="text-navy/70">Claim Settlement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">24/7</div>
            <div className="text-navy/70">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;