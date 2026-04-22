import React from 'react';

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-center animate-fade-up">
      {/* Pill Badge */}
      <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
        <span className="w-2 h-2 rounded-full bg-teal mr-2 animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-teal uppercase">Next-Gen CRM is Here</span>
      </div>

      {/* Main Heading */}
      <h1 className="font-syne text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
        Polish Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal2">Business</span> into a <br />
        <span className="text-gold">Brilliant Gem</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed">
        The all-in-one CRM designed to maximize clarity, automate the mundane, and reveal the hidden facets of your growth data.
      </p>

      {/* Stat Blocks */}
      <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
        <div className="flex flex-col">
          <span className="font-syne text-3xl font-bold text-white mb-1">98%</span>
          <span className="text-xs uppercase tracking-widest text-muted">Success Rate</span>
        </div>
        <div className="flex flex-col">
          <span className="font-syne text-3xl font-bold text-teal mb-1">10k+</span>
          <span className="text-xs uppercase tracking-widest text-muted">Active Users</span>
        </div>
        <div className="flex flex-col">
          <span className="font-syne text-3xl font-bold text-gold mb-1">24/7</span>
          <span className="text-xs uppercase tracking-widest text-muted">Live Support</span>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
