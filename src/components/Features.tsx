
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Brain, Mic, Zap, Settings, MessageSquare, BarChart3 } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Intelligent Voice Agents",
      description: "Deploy AI-powered voice agents that understand context and handle complex conversations naturally.",
      expandedDescription: "Create sophisticated voice agents that can handle customer service, sales calls, and internal communications. Our AI understands nuance, maintains context across conversations, and integrates seamlessly with your existing systems. Support for multiple languages and customizable personality traits.",
      icon: (
        <Mic size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI that learns and adapts to your operations.",
      expandedDescription: "Build intelligent workflows that go beyond simple automation. Our AI agents can make decisions, handle exceptions, and continuously optimize processes based on performance data. Connect multiple systems, trigger actions based on complex conditions, and scale operations effortlessly.",
      icon: (
        <Zap size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Custom AI Agents",
      description: "Develop specialized AI agents tailored to your specific business needs and industry requirements.",
      expandedDescription: "Create AI agents that understand your business domain, terminology, and processes. Whether you need specialized customer support, data analysis, or process optimization, our custom agents are trained on your data and configured to your exact specifications.",
      icon: (
        <Brain size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Smart Integrations",
      description: "Connect AI agents with your existing tools and systems for seamless operation.",
      expandedDescription: "Integrate with CRM systems, databases, APIs, and third-party tools. Our AI agents can read from and write to multiple data sources, trigger actions across platforms, and maintain data consistency across your entire tech stack.",
      icon: (
        <Settings size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Conversational AI",
      description: "Build natural, context-aware conversations that feel human and drive real business results.",
      expandedDescription: "Deploy conversational AI that understands intent, maintains context, and provides personalized responses. Perfect for customer support, lead qualification, and internal assistance. Supports multi-turn conversations with memory and learning capabilities.",
      icon: (
        <MessageSquare size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Performance Analytics",
      description: "Monitor and optimize AI agent performance with comprehensive analytics and insights.",
      expandedDescription: "Track conversation quality, automation efficiency, and business impact with detailed analytics. Identify optimization opportunities, monitor agent performance, and get actionable insights to continuously improve your AI operations.",
      icon: (
        <BarChart3 size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Intelligent AI solutions for every business need
          </h2>
          <p className="text-cosmic-muted text-lg">
            Comprehensive AI-powered tools to automate workflows, enhance customer interactions, and drive business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
