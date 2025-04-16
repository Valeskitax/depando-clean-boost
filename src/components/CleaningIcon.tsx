
import React from "react";

interface CleaningIconProps {
  className?: string;
}

const CleaningIcon: React.FC<CleaningIconProps> = ({ className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
      fill="currentColor"
    >
      <path d="M56.5,24.5h-4v-4a1.5,1.5,0,0,0-3,0v4h-4a1.5,1.5,0,0,0,0,3h4v4a1.5,1.5,0,0,0,3,0v-4h4a1.5,1.5,0,0,0,0-3Z"/>
      <path d="M42.5,40.5A13.86,13.86,0,0,0,44,35a14,14,0,0,0-28,0,13.86,13.86,0,0,0,1.5,5.5,14.48,14.48,0,0,0-9,13v6a3,3,0,0,0,3,3H48.5a3,3,0,0,0,3-3v-6A14.48,14.48,0,0,0,42.5,40.5ZM19,35a11,11,0,0,1,22,0c0,4.34-2.39,10.5-11,10.5S19,39.34,19,35ZM48.5,59.5H11.5v-6a11.5,11.5,0,0,1,10.49-11.43c2.71,3.3,6.61,5.43,12,5.43s9.28-2.13,12-5.43A11.5,11.5,0,0,1,48.5,53.5Z"/>
    </svg>
  );
};

export default CleaningIcon;
