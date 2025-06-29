import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, Users, Clock } from 'lucide-react';

const BookCall = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/sainikhil172/30min', '_blank');
  };

  const benefits = [
    "Free consultation with AI automation experts",
    "Custom solution design for your business",
    "ROI analysis and implementation roadmap",
    "No commitment required"
  ];

  return (
    <section id="book-call" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="cosmic-gradient rounded-2xl border border-cosmic-light/20 p-8 md:p-12 text-center">
          <div className="space-y-6">
            <div className="h-20 w-20 rounded-full bg-cosmic-light/10 flex items-center justify-center mx-auto">
              <Calendar size={32} className="text-cosmic-accent" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                Ready to Get Started?
              </h2>
              <p className="text-cosmic-muted text-lg max-w-2xl mx-auto">
                Book a free consultation call with our AI automation experts to discover how NeuroTasks can transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle size={20} className="text-cosmic-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-cosmic-muted text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>30-minute session</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>1-on-1 expert consultation</span>
              </div>
            </div>
            
            <Button 
              onClick={handleBookCall}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border hover:border-cosmic-accent text-lg px-8 py-3"
            >
              <Calendar size={20} className="mr-2" />
              Book Your Free Call
            </Button>
            
            <p className="text-xs text-cosmic-muted mt-4">
              No sales pressure • Actionable insights guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
