import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PiggyBank, CheckCircle, Phone, ArrowLeft, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndowmentPlans = () => {
  const endowmentPlans = [
    {
      name: "LIC's Single Premium Endowment Plan",
      description: "One-time premium payment with guaranteed returns and bonus additions",
      features: ["Single premium payment", "Guaranteed maturity benefits", "Bonus participation", "Loan facility available"],
      ageRange: "8-60 years",
      policyTerm: "12-35 years",
      popular: true
    },
    {
      name: "LIC's New Endowment Plan",
      description: "Traditional endowment plan with life cover and guaranteed returns",
      features: ["Life insurance + savings", "Guaranteed sum assured", "Reversionary bonus", "Special bonus eligibility"],
      ageRange: "8-59 years",
      policyTerm: "12-35 years"
    },
    {
      name: "LIC's New Jeevan Anand",
      description: "Whole life endowment plan providing coverage till age 100",
      features: ["Whole life coverage", "Maturity at age 100", "Guaranteed additions", "Loan against policy"],
      ageRange: "18-50 years",
      policyTerm: "15-50 years"
    },
    {
      name: "LIC's Jeevan Lakshya",
      description: "Limited premium endowment plan with income benefit option",
      features: ["Limited premium payment", "Income benefit option", "Maturity benefit", "Death benefit throughout"],
      ageRange: "18-50 years",
      policyTerm: "13-25 years"
    },
    {
      name: "LIC's Jeevan Labh Plan",
      description: "Profit-based endowment plan with attractive bonus rates",
      features: ["High bonus potential", "Limited premium payment", "Guaranteed additions", "Survival benefits"],
      ageRange: "8-59 years",
      policyTerm: "16/21/25 years"
    },
    {
      name: "LIC's Amritbaal",
      description: "Child endowment plan with money back benefits",
      features: ["Child-specific benefits", "Money back at intervals", "Educational support", "Marriage benefit"],
      ageRange: "0-12 years",
      policyTerm: "15-25 years"
    },
    {
      name: "LIC's Bima Jyoti",
      description: "Non-linked participating endowment plan with guaranteed benefits",
      features: ["Guaranteed maturity benefit", "Death benefit", "Bonus participation", "Loan facility"],
      ageRange: "18-50 years",
      policyTerm: "15-20 years"
    },
    {
      name: "LIC's Jeevan Azad",
      description: "Flexible endowment plan with customizable benefits",
      features: ["Flexible premium options", "Customizable benefits", "Guaranteed returns", "Tax benefits"],
      ageRange: "18-55 years",
      policyTerm: "10-30 years"
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
              <PiggyBank className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Endowment Plans
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Perfect blend of protection and savings. Guaranteed returns with life insurance benefits, ideal for disciplined savings and wealth creation.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Why Choose Endowment Plans?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Dual Purpose</h3>
                <p className="text-sm text-navy/70">Life insurance protection + guaranteed savings in one plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Guaranteed Returns</h3>
                <p className="text-sm text-navy/70">Assured maturity benefits with bonus additions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Tax Benefits</h3>
                <p className="text-sm text-navy/70">Tax deductions under Section 80C and 10(10D)</p>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {endowmentPlans.map((plan, index) => (
              <Card key={index} className={`relative p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30 ${
                plan.popular ? 'ring-2 ring-gold/50' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gold text-navy px-3 py-1 text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-gold" />
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
                    <span className="text-navy/60">Policy Term:</span>
                    <span className="text-navy font-semibold">{plan.policyTerm}</span>
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
              Ready to Start Building Wealth with Protection?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Let me help you choose the right endowment plan based on your investment goals, risk appetite, and financial objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919248426946'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call for Investment Planning
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => window.location.href = 'https://wa.me/919248426946?text=Hi, I want to know about Endowment Plans'}
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

export default EndowmentPlans;