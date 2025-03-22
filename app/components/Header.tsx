'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaScroll, FaCode } from 'react-icons/fa';
import Button from './Button';

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
    { name: 'Investment', href: '#prize-pool' },
    { name: 'Visuals', href: '#visuals' },
    { name: 'Technical', href: '#contracts' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img src="/images/Glogo.png" alt="Gauntlet of SOLiders" className="h-12 mr-3" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={link.href} className="text-gray-300 hover:text-cyan-400 font-['VT323'] text-lg px-1 py-2 transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            >
              <Link href="/design-tips">
                <Button size="sm" variant="secondary" icon={<FaCode />}>
                  Design Tips
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.1 }}
            >
              <Link href="/whitepaper">
                <Button size="sm" icon={<FaScroll />}>
                  Whitepaper
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col space-y-4 pt-4 pb-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 font-['VT323'] text-xl px-2 py-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Link href="/design-tips" onClick={() => setIsOpen(false)}>
                <Button size="sm" variant="secondary" className="w-full" icon={<FaCode />}>
                  Design Tips
                </Button>
              </Link>
              <Link href="/whitepaper" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full" icon={<FaScroll />}>
                  Whitepaper
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 