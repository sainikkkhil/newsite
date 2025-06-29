import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import TaskBoard from './TaskBoard';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBookCall = () => {
    window.open('https://calendly.com/sainikhil172/30min', '_blank');
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="https://github.com/sainikkkhil/neurotasks/raw/main/lemni%20video%20background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Powered by Advanced AI
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          AI-powered workflow automation for <span className="text-primary">intelligent</span> businesses
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Transform your operations with NeuroTasks' cutting-edge AI solutions. From intelligent voice agents to custom workflow automation, we help businesses scale smarter and faster.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Get Started
          </Button>
          <Button variant="outline" onClick={scrollToBookCall} className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Schedule Demo
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          Custom AI solutions • Enterprise-ready • 24/7 support
        </div>
      </div>
      
      {/* AI Workflow Dashboard integrated in hero section with glassmorphic effect */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                </div>
                <span className="text-foreground font-medium">AI Workflow Automation</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/80 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/60 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/40 border-2 border-card flex items-center justify-center text-xs text-foreground">+5</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-muted flex items-center justify-center text-foreground text-sm">
                  Share
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">AI Modules</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground">
                      <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                      <span>Voice Agents</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Workflows</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Custom Agents</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Integrations</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/60"></div>
                      <span>CRM Systems</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/50"></div>
                      <span>Communication</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/40"></div>
                      <span>Data Sources</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4 bg-background overflow-hidden">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">AI Tasks</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">18</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Create Agent
                    </div>
                  </div>
                </div>
                
                {/* Kanban Board */}
                <div className="overflow-hidden">
                  <TaskBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
