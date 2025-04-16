
import React from "react";

interface LandingIconProps {
  className?: string;
}

const LandingIcon: React.FC<LandingIconProps> = ({ className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 400" 
      className={className}
    >
      {/* Simple placeholder SVG, replace with a more detailed icon if needed */}
      <circle cx="200" cy="200" r="180" fill="#000000" />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="#FEF7CD" 
        fontSize="100"
      >
        D
      </text>
    </svg>
  );
};

export default LandingIcon;
