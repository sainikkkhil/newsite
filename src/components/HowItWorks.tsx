
import React from 'react';
import { ArrowRight, Zap, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Connect Your Tools",
      description: "Seamlessly integrate NeuroTasks with your existing CRM, databases, and business applications in minutes.",
      icon: <Settings size={32} className="text-cosmic-accent" />
    }, 
    {
      step: 2,
      title: "Configure AI Agents",
      description: "Customize your AI agents to understand your business processes and handle tasks exactly how you want them done.",
      icon: <Zap size={32} className="text-cosmic-accent" />
    }, 
    {
      step: 3,
      title: "Automate & Scale",
      description: "Watch as your AI agents handle repetitive tasks 24/7, freeing your team to focus on strategic work that drives growth.",
      icon: <Rocket size={32} className="text-cosmic-accent" />
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with NeuroTasks in three simple steps and transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center space-y-6">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                {step.icon}
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-medium text-primary">Step {step.step}</div>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-12 -translate-x-6">
                  <ArrowRight size={20} className="text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
