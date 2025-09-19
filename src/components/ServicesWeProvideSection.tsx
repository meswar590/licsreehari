import React from 'react';
import { Card } from '@/components/ui/card';

const ServicesWeProvideSection = () => {
  const services: string[] = [
    'Premium Payment Support',
    'Policy Loan',
    'Nominee Change / Addition',
    'Address Change',
    'Bank Account Change',
    'Duplicate Policy Bond',
    'Policy Revival',
    'Mode of Premium Change',
    'Assignment / Reassignment',
    'Policy Surrender',
    'Maturity Claim Assistance',
    'Death Claim Assistance',
    'Survival Benefit Assistance',
    'Fund Switch / Allocation (ULIP)',
    'Policy Status / Information',
    'E-Services Registration',
    'Grievance Assistance',
    'Change in Date of Birth'
  ];

  return (
    <section id="services-we-provide" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Services <span className="block text-gold">We Provide</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-card">
          <h4 className="mb-6 bg-blue-900 text-white font-bold text-center rounded-lg px-4 py-2">Services We Provide</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="px-4 py-3 rounded-lg bg-transparent border border-blue-900 text-blue-900 text-sm font-bold text-center hover:bg-blue-50 transition-colors"
              >
                {service}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesWeProvideSection;


