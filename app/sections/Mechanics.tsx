'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaCoins, FaFistRaised, FaGraduationCap } from 'react-icons/fa';

const Mechanics: React.FC = () => {
  const mechanicDetails = [
    {
      id: 'nft',
      icon: <FaCoins className="text-amber-500" size={32} />,
      title: 'NFT Minting & Classes',
      description: [
        'Total NFTs: 8,192, minted at 1 SOL each (total revenue: 8,192 SOL).',
        'Classes: 8 classes (Knight, Monk, Lord, Cleric, Magician, Witch, Thief, Bard—1,024 NFTs per class).',
        'Rarity Bonuses: Lords (2x $EXP), Magicians/Witches (1.5x $EXP).',
        'Presale Option: Existing OG NFT project holders can mint at 0.9 SOL; public mint price adjusted to 1.1 SOL to balance revenue.',
        'Art Style: Classic pixel-art, with full-body sprites for battles and cropped versions for NFT icons.'
      ]
    },
    {
      id: 'staking',
      icon: <FaGraduationCap className="text-red-500" size={32} />,
      title: 'Staking & $EXP Token Economy',
      description: [
        'Staking Platform: Players stake NFTs to earn $EXP at base rate of 2 $EXP/day (Lords: 4 $EXP/day, Magicians/Witches: 3 $EXP/day).',
        'Scaling: Rate scales with level (at Level 13: 8 $EXP/day base, 16 $EXP/day for Lords, 12 $EXP/day for Magicians/Witches).',
        'Duel Entry Fees: Players pay $EXP to enter each round, starting at 50 $EXP for Round 1 up to 500 $EXP for Round 13, totaling 2,550 $EXP across all rounds.',
        '$EXP Management: $EXP paid as entry fees is sent to a team wallet for reuse in future seasons, not burned.',
        '$EXP can be purchased on the open market for latecomers or sold by players exiting early.'
      ]
    },
    {
      id: 'duels',
      icon: <FaFistRaised className="text-red-500" size={32} />,
      title: 'Duel Mechanics',
      description: [
        'Structure: 13 rounds of 1v1 duels (8,192 → 4,096 → … → 1) over 6-9 months (approximately 1 round per month).',
        'Combo Mechanic: Players input a 3x3 grid of moves: Sword (Scissors), Sorcery (Paper), Shield (Rock).',
        'Battle Logic: Grids are compared for "Rock/Paper/Scissors" wins, with ties resolved by 50/50 RNG.',
        'Automation Option: Players can choose to automate their combo string for a "set-and-forget" experience.',
        'Outcome: Winner\'s NFT levels up (Level 1 to Level 13), loser\'s NFT is burned, reducing supply and increasing rarity.',
        'Buy a Bye Option: Players can pay a premium in $EXP to skip a duel (available for Rounds 1-4 only).'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#08080c]" id="mechanics">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Core Mechanics"
          subtitle="The fundamental systems driving Gauntlet of SOLiders"
        />

        <div className="space-y-16">
          {mechanicDetails.map((mechanic, index) => (
            <motion.div
              key={mechanic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10`}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-[#121218] p-8 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-red-700 m-4 opacity-30"></div>
                  <div className="text-center">
                    {mechanic.icon}
                    <h3 className="text-2xl font-['Press_Start_2P'] mt-6 mb-3 text-gradient">{mechanic.title}</h3>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <ul className="space-y-3 text-lg font-['VT323'] text-gray-300">
                  {mechanic.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-3 h-3 bg-red-700 mt-1.5 mr-3 flex-shrink-0"></div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanics; 