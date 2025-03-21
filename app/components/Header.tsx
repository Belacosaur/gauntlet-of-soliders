'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Game Overview', href: '#overview' },
    { name: 'Core Mechanics', href: '#mechanics' },
    { name: 'Prize Pool', href: '#prize-pool' },
    { name: 'Visuals', href: '#visuals' },
    { name: 'Smart Contracts', href: '#contracts' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        py-4 px-6 md:px-12
        ${scrolled ? 'bg-[#0a0a0a] shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-xl md:text-2xl font-['Press_Start_2P'] text-gradient">
            G.o.S
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-cyan-400 transition-colors font-['VT323'] text-xl"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#121212] absolute left-0 right-0 p-6 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-cyan-400 transition-colors font-['VT323'] text-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 