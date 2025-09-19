import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  GraduationCap, 
  PiggyBank, 
  TrendingUp, 
  Users,
  ArrowRight,
  Calculator
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Term Life Insurance",
      description: "Maximum protection at minimum cost. Pure life insurance coverage for your family's security.",
      features: ["High coverage amount", "Affordable premiums", "Tax benefits under 80C", "Flexible payment options"],
      popular: true,
      link: "/term-life-plans"
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-gold" />,
      title: "Endowment Plans",
      description: "Perfect blend of protection and savings. Guaranteed returns with life insurance benefits.",
      features: ["Life cover + savings", "Guaranteed maturity benefits", "Bonus additions", "Loan facility"],
      link: "/endowment-plans"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-gold" />,
      title: "Child Education Plans",
      description: "Secure your child's bright future with education-focused insurance and investment plans.",
      features: ["Education fund creation", "Waiver of premium benefit", "Flexible payout options", "Market-linked returns"],
      link: "/child-plans"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Retirement Planning",
      description: "Build a comfortable retirement corpus with annuity and pension plans designed for golden years.",
      features: ["Regular income post-retirement", "Inflation-beating returns", "Spouse pension options", "Tax-efficient growth"],
      link: "/retirement-plans"
    },
    {
      icon: <Calculator className="w-8 h-8 text-gold" />,
      title: "Premium Calculator",
      description: "Quickly estimate premiums for various LIC policies using the official calculator.",
      features: ["Official LIC tool", "Fast and accurate estimates", "Opens in new tab"],
      link: "https://ebiz.licindia.in/D2CPM/?&_ga=2.2502002.312893476.1677125883-1841437327.1677125883#qni/basicinfo",
      highlightYellow: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Investment Plans",
      description: "Market-linked insurance plans (ULIPs) offering investment growth with insurance protection.",
      features: ["Market-linked returns", "Fund switching facility", "Partial withdrawals", "Top-up premium options"],
      link: "/investment-plans"
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive LIC
            <span className="block text-gold">Insurance Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From life protection to wealth creation, discover the perfect LIC policy 
            tailored to your family's unique needs and financial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative p-6 hover:shadow-hero transition-all duration-300 hover:-translate-y-2 ${
                (service as any).highlightYellow ? 'bg-yellow-100' : 'bg-white'
              } border-2 border-yellow-500 shadow-lg hover:border-yellow-600 ${
                service.popular ? 'ring-2 ring-gold/50' : ''
              } flex flex-col`}
              id={(service as any).title === 'Premium Calculator' ? 'premium-calculator-card' : undefined}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold text-navy px-3 py-1 text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              </div>
              
              <p className="text-navy/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <span className="text-navy/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                {service.link.startsWith('http') ? (
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 group"
                    >
                      Open Calculator
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Link to={service.link}>
                    <Button 
                      variant="outline" 
                      className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-yellow-100 to-white rounded-2xl p-8 md:p-12 text-navy">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
            Not Sure Which Policy is Right for You?
          </h3>
          <p className="text-lg text-navy/80 mb-6 max-w-2xl mx-auto">
            Let me help you choose the perfect LIC policy based on your age, income, 
            family situation, and financial goals. Free consultation and personalized recommendations.
          </p>
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3 rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;