'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaCode, FaServer, FaChartLine, FaExchangeAlt, FaTrophy, FaClock, FaMedal } from 'react-icons/fa';

const SmartContracts: React.FC = () => {
  const contracts = [
    {
      id: 'nft-minting',
      icon: <FaCode className="text-red-700" size={24} />,
      title: 'NFT Minting Contract',
      description: 'Secure and efficient NFT minting contract for the 8,192 unique warriors across 8 character classes. Implements Magic Eden standards with proper metadata handling and provenance verification.',
      features: [
        'Efficient mint process',
        'Metadata management',
        'Proper royalty distribution',
        'Collection verification',
      ],
    },
    {
      id: 'battle-system',
      icon: <FaExchangeAlt className="text-amber-500" size={24} />,
      title: 'Battle System Contract',
      description: 'Core battle mechanics implementing the enhanced Rock/Paper/Scissors system on a 3x3 grid. Handles move validation, outcome determination, and tournament progression with anti-cheat measures.',
      features: [
        'Strategic combat system',
        'Move validation',
        'Outcome verification',
        'Tournament integration',
      ],
    },
    {
      id: 'tournament',
      icon: <FaTrophy className="text-red-500" size={24} />,
      title: 'Tournament Contract',
      description: 'Tournament management system that handles brackets, progression, and prize distribution. Includes scheduling, registration, and automated prize payments with transparent verifiability.',
      features: [
        'Bracket management',
        'Entry fee handling',
        'Automated progression',
        'Prize distribution',
      ],
    },
    {
      id: 'marketplace',
      icon: <FaChartLine className="text-green-500" size={24} />,
      title: 'Marketplace Integration',
      description: 'Seamless integration with popular Solana marketplaces for secondary trading of warrior NFTs. Handles royalty enforcement and enables trading activity tracking for community rewards.',
      features: [
        'Royalty enforcement',
        'Trading analytics',
        'Marketplace API integration',
        'Collection verification',
      ],
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]" id="contracts">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Technical Implementation"
          subtitle="Efficient development with proven technologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contracts.map((contract, index) => (
            <motion.div
              key={contract.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121218] rounded p-6 border-l-4"
              style={{ borderLeftColor: `var(--${index % 2 === 0 ? 'primary' : 'secondary'})` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-[#08080c]">
                  {contract.icon}
                </div>
                <h3 className="text-xl font-['Press_Start_2P'] text-gradient">{contract.title}</h3>
              </div>
              
              <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                {contract.description}
              </p>
              
              <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {contract.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-md font-['VT323'] text-gray-300">
                    <div className="w-2 h-2 bg-red-700 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-[#121218] border-2 border-dashed border-red-700"
        >
          <div className="flex items-center mb-6 justify-center">
            <FaClock className="text-red-500 mr-4" size={30} />
            <h3 className="text-2xl font-['Press_Start_2P'] text-gradient text-center">Accelerated Development Approach</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-['Press_Start_2P'] text-red-400 mb-4">Efficient Development</h4>
              <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                Our elite blockchain development team can deliver the complete technical implementation in just 30-60 days 
                by leveraging pre-built frameworks, streamlined workflows, and specialized expertise.
              </p>
              <p className="text-lg font-['VT323'] text-gray-300">
                The accelerated approach focuses on robust core features first, with additional enhancements 
                planned for post-launch updates based on community feedback and gameplay data.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-['Press_Start_2P'] text-red-400 mb-4">Technology Stack</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Blockchain:</strong> Solana (high-speed, low-cost transactions)
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Smart Contracts:</strong> Rust with Anchor framework
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Frontend:</strong> React.js with TypeScript
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Game Engine:</strong> Custom WebGL with PixiJS
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">DevOps:</strong> CI/CD pipeline for rapid iteration
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartContracts; 