import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, CheckCircle, Phone, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChildPlans = () => {
  const childPlans = [
    {
      name: "LIC's New Children's Money Back Plan",
      description: "Comprehensive child plan with periodic money back for education milestones",
      features: ["Money back at specific ages", "Waiver of premium benefit", "Maturity benefit", "Death benefit"],
      ageRange: "0-12 years",
      policyTerm: "25 years",
      popular: true
    },
    {
      name: "LIC's Jeevan Tarun",
      description: "Unit-linked child plan combining investment growth with insurance protection",
      features: ["Market-linked returns", "Fund switching options", "Partial withdrawal facility", "Waiver of premium"],
      ageRange: "90 days - 12 years", 
      policyTerm: "10-25 years"
    },
    {
      name: "LIC's Single Premium Endowment Plan",
      description: "One-time premium payment plan ideal for education funding",
      features: ["Single premium payment", "Guaranteed returns", "Bonus additions", "Tax benefits"],
      ageRange: "0-60 years",
      policyTerm: "12-35 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex justify-center items-center gap-4 mb-6">
              <GraduationCap className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Child Education Plans
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Secure your child's bright future with education-focused insurance and investment plans. Build a corpus for your child's higher education and secure their dreams.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {childPlans.map((plan, index) => (
              <Card key={index} className={`relative p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30 ${
                plan.popular ? 'ring-2 ring-gold/50' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gold text-navy px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                </div>
                
                <p className="text-navy/70 mb-4 leading-relaxed">
                  {plan.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Child Age:</span>
                    <span className="text-navy font-semibold">{plan.ageRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Policy Term:</span>
                    <span className="text-navy font-semibold">{plan.policyTerm}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-navy text-sm mb-3">Key Benefits:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-navy/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Education Milestones Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Plan for Every Education Milestone
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">School Education</h3>
                <p className="text-sm text-navy/70">Primary & Secondary schooling expenses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Higher Education</h3>
                <p className="text-sm text-navy/70">College & University fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Study Abroad</h3>
                <p className="text-sm text-navy/70">International education funding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Professional Courses</h3>
                <p className="text-sm text-navy/70">Specialization & skill development</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Planning for Your Child's Education Today
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              The earlier you start, the more you can build. Let me help you calculate how much you need to invest monthly to secure your child's education goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919248426946'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Free Education Planning
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => window.location.href = 'https://wa.me/919248426946?text=Hi, I want to plan for my child\'s education'}
              >
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChildPlans;