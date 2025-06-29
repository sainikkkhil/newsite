import React from 'react';
import { Clock, Wrench, Zap, Shield, BarChart3, Globe } from 'lucide-react';
const WhyNeuroTasks = () => {
  const advantages = [{
    title: "24/7 Availability",
    description: "Your AI agents never sleep, ensuring round-the-clock operations and customer support.",
    icon: <Clock size={24} className="text-cosmic-accent" />
  }, {
    title: "Fully Customizable",
    description: "Tailor AI agents to your specific business needs, industry requirements, and brand voice.",
    icon: <Wrench size={24} className="text-cosmic-accent" />
  }, {
    title: "Rapid Deployment",
    description: "Get your AI agents up and running in days, not months, with our streamlined setup process.",
    icon: <Zap size={24} className="text-cosmic-accent" />
  }, {
    title: "Enterprise Security",
    description: "Bank-level security with data encryption, compliance standards, and privacy protection.",
    icon: <Shield size={24} className="text-cosmic-accent" />
  }, {
    title: "Performance Analytics",
    description: "Track agent performance, business impact, and ROI with comprehensive dashboards.",
    icon: <BarChart3 size={24} className="text-cosmic-accent" />
  }, {
    title: "Scalable Architecture",
    description: "Grow from handling hundreds to millions of interactions without infrastructure concerns.",
    icon: <Globe size={24} className="text-cosmic-accent" />
  }];
  return <section id="why-neurotasks" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Why Choose NeuroTasks?
          </h2>
          <p className="text-cosmic-muted text-lg">
            Experience the unique advantages that set NeuroTasks apart from traditional automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => <div key={index} className="cosmic-gradient rounded-xl border border-cosmic-light/20 p-6 text-center">
              <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mx-auto mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-medium tracking-tighter mb-3">{advantage.title}</h3>
              <p className="text-cosmic-muted">{advantage.description}</p>
            </div>)}
        </div>
        
        <div className="text-center">
          <div className="cosmic-gradient rounded-xl border border-cosmic-light/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium tracking-tighter mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-cosmic-muted mb-6">Join the next generation of teams automating work with NeuroTasks AI</p>
            <div className="text-sm text-cosmic-accent">Average ROI: 200% • Customer Satisfaction: 98%</div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyNeuroTasks;