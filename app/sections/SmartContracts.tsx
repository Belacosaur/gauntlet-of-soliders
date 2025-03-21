'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaCode, FaServer, FaChartLine, FaExchangeAlt, FaTrophy } from 'react-icons/fa';

const SmartContracts: React.FC = () => {
  const contracts = [
    {
      id: 'nft-minting',
      icon: <FaCode className="text-purple-700" size={24} />,
      title: 'NFT Minting Contract',
      description: 'Mints 8,192 NFTs at 1 SOL each (0.9 SOL for presale, 1.1 SOL for public). Assigns each NFT to one of 8 classes with associated metadata (e.g., $EXP multiplier). Distributes revenue: 70% to prize pool, 25% to team, 5% to reserve.',
      features: [
        'Secure minting process',
        'Random class assignment',
        'Metadata generation',
        'Revenue distribution',
      ],
    },
    {
      id: 'staking',
      icon: <FaServer className="text-cyan-500" size={24} />,
      title: 'Staking Contract',
      description: 'Allows players to stake NFTs and earn $EXP based on class and level. Tracks $EXP earnings and updates NFT metadata (e.g., level). Supports variable earning rates based on NFT class (Lords: 2x, Magicians/Witches: 1.5x) and level progression.',
      features: [
        'Secure staking mechanism',
        'Variable $EXP earning rates',
        'Metadata updates',
        'Withdrawal restrictions',
      ],
    },
    {
      id: 'duel',
      icon: <FaExchangeAlt className="text-amber-500" size={24} />,
      title: 'Duel Contract',
      description: 'Manages 1v1 duels by comparing combo grids. Deducts $EXP entry fees and sends them to the team wallet. Burns losing NFTs and updates winner\'s metadata (level up). Handles "Buy a Bye" option for Rounds 1-4. Resolves ties with a 50/50 RNG.',
      features: [
        'Rock/Paper/Scissors battle logic',
        'NFT burning mechanism',
        'Level progression',
        'Randomness for tie-breaking',
      ],
    },
    {
      id: 'exp-token',
      icon: <FaChartLine className="text-green-500" size={24} />,
      title: '$EXP Token Contract',
      description: 'Manages $EXP minting, distribution, and liquidity. Tracks $EXP used for duel entries and stores it in the team wallet for future seasons. Supports $EXP trading on the open market.',
      features: [
        'Token minting and burning',
        'Transfer restrictions',
        'Integration with marketplace',
        'Security features',
      ],
    },
    {
      id: 'prize-pool',
      icon: <FaTrophy className="text-amber-500" size={24} />,
      title: 'Prize Pool Contract',
      description: 'Stakes the prize pool (5,734 SOL) with Pesky Penguins validator. Distributes prizes to winners and runners-up after Round 13. Tracks staking rewards and allocates them to the reserve.',
      features: [
        'Secure prize pool management',
        'Staking mechanism',
        'Automated prize distribution',
        'Reserve allocation',
      ],
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]" id="contracts">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Smart Contract Requirements"
          subtitle="The technical foundation of Gauntlet of SOLiders"
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
              
              <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-3">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {contract.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-md font-['VT323'] text-gray-300">
                    <div className="w-2 h-2 bg-purple-700 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#121218] border-2 border-dashed border-purple-700">
          <h3 className="text-2xl font-['Press_Start_2P'] text-gradient mb-6 text-center">Scalability & Future Development</h3>
          <p className="text-lg font-['VT323'] text-gray-300 mb-4">
            Season 1 will focus on establishing the core mechanics and proof-of-concept, with minimal animations and a 
            focus on core gameplay. This approach keeps overhead low while validating the concept.
          </p>
          <p className="text-lg font-['VT323'] text-gray-300">
            Future seasons will utilize the reserve fund (410 SOL) and accumulated $EXP from Season 1, potentially 
            adding more animations, side quests (e.g., 5-man melees for bonus $EXP), and other gamification elements 
            to enhance the player experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartContracts; 