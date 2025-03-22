'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaExchangeAlt, FaServer, FaTrophy, FaCoins, FaClock, FaMedal } from 'react-icons/fa';

const SmartContracts: React.FC = () => {
  const contracts = [
    {
      id: 'battle-system',
      icon: <FaExchangeAlt className="text-red-700" size={24} />,
      title: 'Battle Contract',
      description: 'The comprehensive battle contract implements the enhanced Rock/Paper/Scissors system, tournament structure, and prize pool management in a single optimized smart contract.',
      features: [
        'Strategic combat system',
        'Tournament management',
        'Prize pool distribution',
        'Commit-reveal battle pattern',
        'Anti-cheat protections',
        'Multiple tournament tiers',
        'Secure randomness generation',
        'Transparent payouts'
      ],
    },
    {
      id: 'staking',
      icon: <FaServer className="text-amber-500" size={24} />,
      title: 'Staking & Economy Contract',
      description: 'This unified smart contract handles NFT staking, $EXP token management, and the entire in-game economy including the Double or Nothing gambling feature in the Extended Package.',
      features: [
        'NFT staking & unstaking',
        '$EXP token implementation',
        'Time-based rewards system',
        'Double or Nothing gambling',
        'Variable earning rates',
        'Token burning mechanics',
        'Security against exploits',
        'Economy balancing tools'
      ],
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]" id="contracts">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Smart Contract Architecture"
          subtitle="Efficient implementation with just two powerful contracts"
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
            <h3 className="text-2xl font-['Press_Start_2P'] text-gradient text-center">Streamlined Contract Architecture</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-['Press_Start_2P'] text-red-400 mb-4">Benefits of Our Approach</h4>
              <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                Our streamlined two-contract architecture delivers significant advantages over traditional multi-contract systems. By consolidating related functionality, we achieve:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Lower Gas Costs:</strong> Fewer cross-contract calls
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Simplified Security:</strong> Reduced attack surface
                </li>
                <li className="flex items-center text-lg font-['VT323'] text-gray-300">
                  <div className="w-2 h-2 bg-red-500 mr-2"></div>
                  <strong className="text-white mr-2">Faster Development:</strong> Streamlined integration testing
                </li>
              </ul>
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