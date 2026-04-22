import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/75 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-teal to-teal2 gem-logo animate-gem-pulse" />
          <span className="font-syne text-2xl font-extrabold tracking-tight text-white">
            GEMS <span className="text-teal">CRM</span>
          </span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium text-muted hover:text-teal transition-colors">Platform</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-teal transition-colors">Solutions</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-teal transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-teal transition-colors">Resources</a>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-white hover:text-teal transition-colors">Login</button>
          <button className="px-6 py-2.5 bg-teal hover:bg-teal2 text-navy font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,180,216,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
