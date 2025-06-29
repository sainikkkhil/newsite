
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, Home, Settings, Users, Star, Rocket, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items with their corresponding section IDs
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'features', label: 'Solutions', icon: Settings },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'book-call', label: 'Connect', icon: CircleDot },
  ];

  // Intersection Observer to track active section (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (page === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(page);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 100);
    } else {
      // If on home page, scroll directly
      if (page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <ToggleGroupItem
                    key={item.id}
                    value={item.id}
                    className={cn(
                      "px-4 py-2 rounded-full transition-colors relative text-sm",
                      activePage === item.id 
                        ? 'text-accent-foreground bg-accent' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    onClick={handleNavClick(item.id)}
                  >
                    <Icon size={14} className="inline-block mr-1.5" />
                    {item.label}
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "px-3 py-2 text-sm rounded-md transition-colors flex items-center",
                      activePage === item.id 
                        ? 'bg-accent text-accent-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    onClick={handleNavClick(item.id)}
                  >
                    <Icon size={16} className="inline-block mr-2" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          <div className="rounded-2xl">
            {/* Reserved for future actions */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
