import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollingPlansSection = () => {
  const planText = "Top LIC Plans → Jeevan Tarun | Jeevan Utsav (Featured) | Jeevan Anand | Jeevan Amar | Jeevan Labh | Saral Pension | Tech Term | Amritbaal | Bima Jyoti | Jeevan Shanti | Jeevan Akshay VII | New Children's Money Back Plan | Jeevan Lakshya | Jeevan Azad | Saral Jeevan Bima";

  return (
    <section className="py-4 bg-navy text-white overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap" style={{
        width: 'calc(200% + 100px)'
      }}>
        <div className="flex items-center gap-8 text-lg font-medium">
          <span className="text-gold flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            {planText}
          </span>
          <span className="text-gold flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            {planText}
          </span>
          <span className="text-gold flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            {planText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScrollingPlansSection;