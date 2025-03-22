import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  id
}) => {
  return (
    <div 
      id={id} 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-['Press_Start_2P'] text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-300 font-['VT323']">
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-red-700 w-24 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle; 