import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  CreditCard, 
  Star, 
  CheckCircle,
  ArrowRight,
  Calculator,
  Phone
} from 'lucide-react';

const FeaturedPlanSection = () => {
  const keyBenefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Guaranteed Additions",
      description: "Fixed additions to your sum assured"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Whole Life Cover up to age 100",
      description: "Protection for your entire lifetime"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Choose Regular or Flexi Income",
      description: "Income options that suit your needs"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Loan Facility",
      description: "Easy loan against policy value"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-2xl p-8 mx-4">
          <Badge variant="secondary" className="mb-4 bg-gold/30 text-gold hover:bg-gold/40 shadow-md">
            <Star className="w-4 h-4 mr-2" />
            Most Popular Plan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured Plan: <span className="text-gold">LIC Jeevan Utsav</span>
          </h2>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto font-medium">
            Lifetime Income + Whole Life Cover — Pay for only up to 16 years, enjoy income for life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-navy to-navy/90 text-white shadow-2xl border-0">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-white">
                    LIC Jeevan Utsav Plan
                  </CardTitle>
                  <Badge className="bg-gold text-navy font-semibold">
                    Bestseller
                  </Badge>
                </div>
                <p className="text-white/90 text-lg">
                  The perfect blend of life insurance and guaranteed income for your family's financial security
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-white/80 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sample Illustration */}
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Sample Illustration
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gold">₹10,00,000</div>
                      <div className="text-white/80 text-sm mt-1">Sum Assured</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gold">10 Years</div>
                      <div className="text-white/80 text-sm mt-1">Premium Payment</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gold">₹1,00,000</div>
                      <div className="text-white/80 text-sm mt-1">Annual Income</div>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs mt-4 text-center">
                    10% of the sum assured will be paid as annual income.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-gold text-navy hover:bg-gold/90 font-semibold"
                    onClick={scrollToContact}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Plan Details
                  </Button>
                  <Button 
                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700 border-0 font-semibold transition-colors"
                    onClick={() => window.open('https://liccalculators.net/lic-jeevan-utsav-plan-771/', '_blank')}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Income
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose This Plan */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-navy flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  Why Choose Jeevan Utsav?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Short Premium Period</p>
                      <p className="text-sm text-navy/70">Pay premiums for limited years only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Lifelong Income</p>
                      <p className="text-sm text-navy/70">Receive guaranteed income for life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Tax Benefits</p>
                      <p className="text-sm text-navy/70">Under Section 80C & 10(10D)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Loan Facility</p>
                      <p className="text-sm text-navy/70">Easy loan against policy value</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Card */}
            <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
              <CardHeader>
                <CardTitle className="text-lg text-navy">Plan Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gold/20">
                    <span className="text-sm text-navy">Premium Payment Period</span>
                    <Badge variant="secondary" className="bg-gold/20 text-navy">
                      Limited Years
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gold/20">
                    <span className="text-sm text-navy">Income Period</span>
                    <Badge variant="secondary" className="bg-gold/20 text-navy">
                      Lifetime
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gold/20">
                    <span className="text-sm text-navy">Death Benefit</span>
                    <Badge variant="secondary" className="bg-gold/20 text-navy">
                      Up to Age 100
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-navy">Guaranteed Additions</span>
                    <Badge variant="secondary" className="bg-gold/20 text-navy">
                      Yes
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlanSection;