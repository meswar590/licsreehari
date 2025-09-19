import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, CheckCircle, Phone, ArrowLeft, BarChart3, Target, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentPlans = () => {
  const investmentBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Market-Linked Returns",
      description: "Potential for higher returns linked to equity and debt markets",
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Flexible Investment",
      description: "Choose from various fund options based on your risk appetite",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-gold" />,
      title: "Fund Switching",
      description: "Switch between different funds based on market conditions",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gold" />,
      title: "Life Insurance Cover",
      description: "Investment growth with life insurance protection",
    }
  ];

  const investmentStrategies = [
    {
      name: "Aggressive Growth Strategy",
      description: "High equity allocation for maximum growth potential",
      riskLevel: "High",
      expectedReturn: "12-15%",
      timeHorizon: "10+ years",
      suitableFor: "Young investors with high risk tolerance"
    },
    {
      name: "Balanced Growth Strategy", 
      description: "Mix of equity and debt for balanced risk-return",
      riskLevel: "Moderate",
      expectedReturn: "8-12%", 
      timeHorizon: "5-10 years",
      suitableFor: "Middle-aged investors seeking balance"
    },
    {
      name: "Conservative Strategy",
      description: "Debt-heavy allocation for capital protection",
      riskLevel: "Low",
      expectedReturn: "6-9%",
      timeHorizon: "3-7 years", 
      suitableFor: "Risk-averse investors near retirement"
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
              <TrendingUp className="w-12 h-12 text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-navy">
                Investment Plans (ULIPs)
              </h1>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Market-linked insurance plans (ULIPs) offering investment growth with insurance protection. Build wealth while securing your family's future.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Investment Advisory</h3>
                <p className="text-amber-700 mb-3">
                  ULIPs are market-linked products where returns depend on the performance of underlying funds. Past performance is not indicative of future results.
                </p>
                <p className="text-amber-700 text-sm">
                  Let me help you understand the risks and choose the right investment strategy for your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {investmentBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Investment Strategies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Investment Strategies for Different Goals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {investmentStrategies.map((strategy, index) => (
                <Card key={index} className="p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-gold/30">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{strategy.name}</h3>
                    <p className="text-navy/70 text-sm leading-relaxed">{strategy.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-navy/60 text-sm">Risk Level:</span>
                      <span className={`text-sm font-semibold ${
                        strategy.riskLevel === 'High' ? 'text-red-600' :
                        strategy.riskLevel === 'Moderate' ? 'text-yellow-600' : 'text-green-600'
                      }`}>{strategy.riskLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/60 text-sm">Expected Return:</span>
                      <span className="text-navy font-semibold text-sm">{strategy.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/60 text-sm">Time Horizon:</span>
                      <span className="text-navy font-semibold text-sm">{strategy.timeHorizon}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy text-sm mb-2">Suitable For:</h4>
                    <p className="text-sm text-navy/70">{strategy.suitableFor}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* ULIP Features */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Key ULIP Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Investment Features</h3>
                <ul className="space-y-2 text-navy/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Multiple fund options (Equity, Debt, Hybrid)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Free fund switches (limited per year)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Partial withdrawal after lock-in period
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Top-up premium facility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Systematic withdrawal plans (SWP)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Insurance Benefits</h3>
                <ul className="space-y-2 text-navy/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Life insurance coverage throughout policy term
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Death benefit guaranteed to nominees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Accidental death benefit riders available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Waiver of premium on disability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    Tax benefits under Section 80C and 10(10D)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Investment Planning Process */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Our Investment Planning Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-navy">1</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Goal Assessment</h3>
                <p className="text-sm text-navy/70">Understanding your financial goals and risk appetite</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-navy">2</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Risk Profiling</h3>
                <p className="text-sm text-navy/70">Determining your investment risk tolerance level</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-navy">3</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Strategy Design</h3>
                <p className="text-sm text-navy/70">Creating customized investment strategy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-navy">4</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">Ongoing Review</h3>
                <p className="text-sm text-navy/70">Regular portfolio monitoring and rebalancing</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Investment Journey with Expert Guidance
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Don't let market volatility confuse you. Let me help you choose the right ULIP strategy based on your age, goals, and risk capacity for optimal wealth creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919248426946'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Free Investment Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                onClick={() => window.location.href = 'https://wa.me/919248426946?text=Hi, I want to learn about ULIP investment plans'}
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

export default InvestmentPlans;