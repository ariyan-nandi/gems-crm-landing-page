import React from 'react';

const features = [
  {
    title: "Crystal Clarity",
    description: "Deep dive into your sales pipeline with multi-faceted analytics that reveal every hidden detail.",
    icon: "💎"
  },
  {
    title: "Precision Sync",
    description: "Automated data flow between your favorite tools, ensuring a seamless single source of truth.",
    icon: "⚡"
  },
  {
    title: "Adaptive Growth",
    description: "Our AI-driven insights predict customer behavior before they even make a move.",
    icon: "📈"
  },
  {
    title: "Secure Vault",
    description: "Bank-grade encryption for all your client communications and internal documents.",
    icon: "🛡️"
  },
  {
    title: "Fluid Workflow",
    description: "Design custom task flows that match your team's unique rhythm and velocity.",
    icon: "🌊"
  },
  {
    title: "Global Reach",
    description: "Localized support and currency handling for businesses operating in over 150 countries.",
    icon: "🌍"
  }
];

const Features = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="font-syne text-4xl font-extrabold mb-4 text-white">Advanced Features</h2>
        <p className="text-muted max-w-2xl mx-auto">Everything you need to turn raw leads into polished, long-term relationships.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/50 hover:bg-white/10 transition-all group cursor-pointer hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-teal group-hover:text-navy transition-colors">
              {feature.icon}
            </div>
            <h3 className="font-syne text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
