import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermLifePlans = () => {
  const termPlans = [
    {
      name: "LIC's Digi Term",
      description: "Digital term insurance plan with high coverage and affordable premiums",
      features: ["Online application process", "High sum assured", "Flexible premium payment terms", "Terminal illness benefit"],
      ageRange: "18-60 years",
      minSumAssured: "₹25 Lakhs"
    },
    {
      name: "LIC's Digi Credit Life",
      description: "Designed to cover outstanding loan amounts with decreasing sum assured",
      features: ["Decreasing sum assured", "Covers loan liability", "Affordable premiums", "Simple application"],
      ageRange: "18-60 years",
      minSumAssured: "₹5 Lakhs"
    },
    {
      name: "LIC's Yuva Credit Life",
      description: "Term insurance for young professionals with loan coverage",
      features: ["Youth-focused benefits", "Loan protection", "Competitive rates", "Online servicing"],
      ageRange: "18-35 years",
      minSumAssured: "₹10 Lakhs"
    },
    {
      name: "LIC's Yuva Term",
      description: "Pure term insurance plan specially designed for young individuals",
      features: ["Low premium rates", "High coverage", "Flexible policy terms", "Online premium payment"],
      ageRange: "18-35 years",
      minSumAssured: "₹25 Lakhs"
    },
    {
      name: "LIC's New Tech-Term",
      description: "Technology-enabled term insurance with modern features",
      features: ["Online policy management", "Instant policy issuance", "Flexible sum assured options", "Premium waiver benefit"],
      ageRange: "18-65 years",
      minSumAssured: "₹50 Lakhs"
    },
    {
      name: "LIC's New Jeevan Amar",
      description: "Level term assurance plan with return of premium option",
      features: ["Level sum assured", "Premium return option", "Accidental death benefit", "Terminal illness benefit"],
      ageRange: "18-60 years",
      minSumAssured: "₹25 Lakhs"
    },
    {
      name: "LIC's Saral Jeevan Bima",
      description: "Simple and standardized term insurance plan across all insurers",
      features: ["Standardized features", "Simple terms", "Affordable premiums", "45-day free look period"],
      ageRange: "18-65 years",
      minSumAssured: "₹5 Lakhs"
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
              <Shield className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Term Life Insurance Plans
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Maximum protection at minimum cost. Pure life insurance coverage designed to secure your family's financial future with high coverage amounts and affordable premiums.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {termPlans.map((plan, index) => (
              <Card key={index} className="p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                </div>
                
                <p className="text-navy/70 mb-4 leading-relaxed">
                  {plan.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Entry Age:</span>
                    <span className="text-navy font-semibold">{plan.ageRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Min Sum Assured:</span>
                    <span className="text-navy font-semibold">{plan.minSumAssured}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-navy text-sm mb-3">Key Features:</h4>
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

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Choosing the Right Term Plan?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Let me analyze your needs and recommend the most suitable term insurance plan based on your age, income, and family requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919248426946'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now for Free Consultation
              </Button>
              <Button 
                size="lg"
                className="bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy hover:scale-105 transition-all duration-200"
                onClick={() => window.location.href = 'https://wa.me/919248426946?text=Hi, I want to know more about Term Insurance plans'}
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

export default TermLifePlans;