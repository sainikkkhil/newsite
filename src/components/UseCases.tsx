
import React from 'react';
import { Headphones, TrendingUp, Users, Cog } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      industry: "Customer Support",
      title: "24/7 Intelligent Support",
      description: "AI agents handle customer inquiries, resolve tickets, and escalate complex issues to human agents when needed.",
      benefits: ["Reduce response time by 80%", "Handle 10x more inquiries", "Improve customer satisfaction"],
      icon: <Headphones size={28} className="text-cosmic-accent" />
    },
    {
      industry: "Sales",
      title: "Automated Lead Qualification",
      description: "Intelligent agents qualify leads, schedule meetings, and nurture prospects through personalized conversations.",
      benefits: ["Increase qualified leads by 60%", "Automate follow-ups", "Never miss a hot prospect"],
      icon: <TrendingUp size={28} className="text-cosmic-accent" />
    },
    {
      industry: "HR",
      title: "Smart Recruitment",
      description: "AI agents screen candidates, schedule interviews, and provide consistent candidate experiences at scale.",
      benefits: ["Screen 90% more candidates", "Reduce time-to-hire", "Eliminate scheduling conflicts"],
      icon: <Users size={28} className="text-cosmic-accent" />
    },
    {
      industry: "Operations",
      title: "Process Automation",
      description: "Automate data entry, report generation, and workflow management across multiple systems and departments.",
      benefits: ["Save 20+ hours per week", "Reduce human errors", "Streamline operations"],
      icon: <Cog size={28} className="text-cosmic-accent" />
    }
  ];

  return (
    <section id="use-cases" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Real-World Use Cases
          </h2>
          <p className="text-cosmic-muted text-lg">
            See how NeuroTasks transforms operations across different industries and departments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cosmic-gradient rounded-xl border border-cosmic-light/20 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center flex-shrink-0">
                  {useCase.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-cosmic-accent mb-1">{useCase.industry}</div>
                  <h3 className="text-xl font-medium tracking-tighter">{useCase.title}</h3>
                </div>
              </div>
              
              <p className="text-cosmic-muted mb-6">{useCase.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium mb-3">Key Benefits:</div>
                {useCase.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cosmic-accent"></div>
                    <span className="text-sm text-cosmic-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
