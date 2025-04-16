
import React from "react";

interface LandingIconProps {
  className?: string;
}

const LandingIcon: React.FC<LandingIconProps> = ({ className = "" }) => {
  return (
    <img 
      src="/lovable-uploads/387019ee-e71f-4669-a4d7-5a9588216c23.png" 
      alt="Professional cleaner with cleaning supplies" 
      className={className}
    />
  );
};

export default LandingIcon;
