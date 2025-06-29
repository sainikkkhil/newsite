
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div 
      className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleLogoClick}
    >
      <div className="h-20 w-20 rounded-md flex items-center justify-center">
        <img 
          alt="NeuroTasks Logo" 
          className="h-16 w-16 object-contain filter brightness-100" 
          src="https://raw.githubusercontent.com/sainikkkhil/neurotasks/main/logo_file.png" 
        />
      </div>
      <span className="text-2xl font-bold text-foreground">NeuroTasks</span>
    </div>
  );
};

export default Logo;
