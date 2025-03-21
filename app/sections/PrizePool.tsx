'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaTrophy, FaCoins, FaChartPie } from 'react-icons/fa';

const PrizePool: React.FC = () => {
  const prizeDistribution = [
    { position: '1st Place', prize: '5,000 SOL', color: 'bg-amber-500' },
    { position: '2nd Place', prize: '250 SOL', color: 'bg-gray-400' },
    { position: '3rd-4th Place', prize: '150 SOL each', color: 'bg-amber-700' },
    { position: '5th-8th Place', prize: '40 SOL each', color: 'bg-purple-700' },
    { position: '9th-16th Place', prize: '2.5 SOL each', color: 'bg-cyan-500' },
  ];

  const revenueAllocation = [
    { name: 'Prize Pool', percentage: 70, color: 'bg-amber-500', value: '5,734 SOL' },
    { name: 'Team/Dev/Art', percentage: 25, color: 'bg-purple-700', value: '2,048 SOL' },
    { name: 'Reserve', percentage: 5, color: 'bg-cyan-500', value: '410 SOL' },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]" id="prize-pool">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Prize Pool"
          subtitle="A total of 5,734 SOL distributed to winners"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Prize distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center">
              <FaTrophy className="text-amber-500 mr-4" size={30} />
              <h3 className="text-2xl font-['Press_Start_2P'] text-gradient">Prize Distribution</h3>
            </div>

            <div className="space-y-6">
              {prizeDistribution.map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#121218] p-6 border-l-4 border-r-4 border-r-transparent flex justify-between items-center"
                  style={{ borderLeftColor: prize.color }}
                >
                  <div className="text-xl font-['VT323']">{prize.position}</div>
                  <div className="text-xl font-['Press_Start_2P'] text-white">{prize.prize}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#121218] border-2 border-dashed border-purple-700">
              <p className="text-lg font-['VT323'] text-gray-300">
                The prize pool will be staked with Pesky Penguins validator to accrue additional rewards, 
                potentially increasing the final prize amounts. Secondary marketplace royalties go to the team, 
                potentially used to buy floor NFTs for additional prizes or burns.
              </p>
            </div>
          </motion.div>

          {/* Right column - Revenue allocation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <FaChartPie className="text-cyan-500 mr-4" size={30} />
              <h3 className="text-2xl font-['Press_Start_2P'] text-gradient">Revenue Allocation</h3>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaCoins className="text-amber-500 mr-4" size={24} />
                <div className="text-xl font-['VT323']">Total Revenue: <span className="text-white font-bold">8,192 SOL</span></div>
              </div>
              <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                Total mint revenue comes from 8,192 NFTs at 1 SOL each, with some slight variations for presale discounts 
                and public sale adjustments.
              </p>

              <div className="w-full h-8 flex rounded-full overflow-hidden">
                {revenueAllocation.map((item, index) => (
                  <div 
                    key={index} 
                    className={`${item.color} flex items-center justify-center text-xs font-bold text-white`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    {item.percentage}%
                  </div>
                ))}
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                {revenueAllocation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="bg-[#121218] p-4 text-center"
                  >
                    <div className={`w-4 h-4 ${item.color} mx-auto mb-2`}></div>
                    <div className="font-['VT323'] text-lg">{item.name}</div>
                    <div className="font-['Press_Start_2P'] text-sm mt-1">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.percentage}%</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#121218] border-2 border-dashed border-cyan-500">
              <h4 className="text-xl font-['Press_Start_2P'] mb-3 text-cyan-400">Scalability</h4>
              <p className="text-lg font-['VT323'] text-gray-300">
                The reserve fund (410 SOL) and accumulated $EXP from Season 1 will be used to fund future seasons. 
                As the game progresses, increased floor prices (potentially 5-10 SOL for late-game NFTs) 
                will fuel reinvestment and expansion of the game.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool; 