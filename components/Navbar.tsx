import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/75 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center group cursor-pointer">
          <img 
            src="/gal_logo.png" 
            alt="Gems CRM Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
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
