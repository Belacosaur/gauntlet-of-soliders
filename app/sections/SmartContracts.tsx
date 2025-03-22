'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaCode, FaServer, FaChartLine, FaExchangeAlt, FaTrophy, FaClock, FaMedal } from 'react-icons/fa';

const SmartContracts: React.FC = () => {
  const contracts = [
    {
      id: 'staking',
      icon: <FaServer className="text-red-700" size={24} />,
      title: 'Staking Contract',
      description: 'Allows players to stake their warrior NFTs to earn $EXP tokens over time. Includes variable earning rates based on warrior class and level, with secure claiming mechanisms.',
      features: [
        'NFT staking & unstaking',
        'Time-based $EXP rewards',
        'Variable class-based rates',
        'Security against exploits',
      ],
    },
    {
      id: 'battle-system',
      icon: <FaExchangeAlt className="text-amber-500" size={24} />,
      title: 'Battle System Contract',
      description: 'Core battle mechanics implementing the enhanced Rock/Paper/Scissors system on a 3x3 grid. Handles move validation, outcome determination, and tournament progression with anti-cheat measures.',
      features: [
        'Strategic combat system',
        'Commit-reveal pattern',
        'Outcome verification',
        'Anti-cheat protection',
      ],
    },
    {
      id: 'token',
      icon: <FaChartLine className="text-green-500" size={24} />,
      title: '$EXP Token Contract',
      description: 'Manages the $EXP token economy which powers the game ecosystem. Includes controlled minting through staking, transfer functions, and burning mechanics for tournament entry fees.',
      features: [
        'SPL token standard',
        'Controlled minting',
        'Tournament fee integration',
        'Secure ownership model',
      ],
    },
    {
      id: 'prize-pool',
      icon: <FaTrophy className="text-red-500" size={24} />,
      title: 'Prize Pool Contract',
      description: 'Manages tournament prize pools and automated distribution to winners. Includes transparency mechanisms, staking of prize pool funds for additional rewards, and secure multi-sig controls.',
      features: [
        'Transparent allocation',
        'Automated distribution',
        'Prize pool staking',
        'Multi-sig security',
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