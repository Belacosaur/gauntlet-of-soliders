'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  icon,
  variant = 'primary',
  className = '',
}) => {
  const variantClasses = {
    primary: 'border-red-700 bg-[#1a0d0d]',
    secondary: 'border-red-500 bg-[#2c0d0d]',
    accent: 'border-amber-500 bg-[#271f0d]',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        p-6
        border-l-4
        ${variantClasses[variant]}
        shadow-xl
        ${className}
      `}
    >
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-2xl">{icon}</div>}
        <h3 className="text-xl font-['Press_Start_2P']">{title}</h3>
      </div>
      <p className="text-lg font-['VT323'] text-gray-300">{content}</p>
    </motion.div>
  );
};

export default Card; 