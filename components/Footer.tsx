import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy2/50 border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-teal2 gem-logo" />
              <span className="font-syne text-xl font-extrabold tracking-tight text-white">
                GEMS <span className="text-teal">CRM</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Elevating business relationships through precision data and elegant automation.
            </p>
          </div>

          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-widest text-white mb-6">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">Analytics</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">Automations</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-widest text-white mb-6">Newsletter</h4>
            <p className="text-xs text-muted mb-4">Get the latest insights on business growth.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-teal/50 w-full"
              />
              <button className="bg-teal text-navy px-4 py-2 rounded-lg text-xs font-bold hover:bg-teal2 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-xs text-muted">© 2024 Gems CRM. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted hover:text-teal">Privacy Policy</a>
            <a href="#" className="text-xs text-muted hover:text-teal">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
