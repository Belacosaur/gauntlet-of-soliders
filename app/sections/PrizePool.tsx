'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaTrophy, FaCoins, FaChartPie } from 'react-icons/fa';

const PrizePool: React.FC = () => {
  const prizeDistribution = [
    { position: '1st Place', prize: '4,000 SOL' },
    { position: '2nd Place', prize: '500 SOL' },
    { position: '3rd Place', prize: '250 SOL' },
    { position: '4th Place', prize: '125 SOL' },
    { position: '5th-8th Place', prize: '25 SOL each' },
    { position: '9th-16th Place', prize: '3.125 SOL each' },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]" id="prize-pool">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Prize Pool"
          subtitle="A total of 5,000 SOL distributed to winners"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column - Prize Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center">
              <FaTrophy className="text-amber-500 mr-4" size={30} />
              <h3 className="text-2xl font-['Press_Start_2P'] text-red-600">Prize Distribution</h3>
            </div>

            <div className="space-y-4">
              {prizeDistribution.map((prize, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between bg-[#121218] p-4 border-l-4 border-red-700"
                >
                  <div className="font-['VT323'] text-xl text-gray-300">{prize.position}</div>
                  <div className="font-['Press_Start_2P'] text-xl text-white">{prize.prize}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 p-6 bg-[#121218] border-2 border-dashed border-red-700"
            >
              <p className="text-lg font-['VT323'] text-gray-300">
                The prize pool will be staked with Pesky Penguins validator to accrue additional rewards, 
                potentially increasing the final prize amounts. Secondary marketplace royalties go to the 
                team, potentially used to buy floor NFTs for additional prizes or burns.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Revenue Allocation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <FaChartPie className="text-red-500 mr-4" size={30} />
              <h3 className="text-2xl font-['Press_Start_2P'] text-red-500">Revenue Allocation</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-8 bg-[#121218] p-6"
            >
              <div className="flex items-center mb-4">
                <FaCoins className="text-amber-500 mr-3" size={24} />
                <span className="font-['Press_Start_2P'] text-xl text-amber-500">Total Revenue: 8,192 SOL</span>
              </div>
              <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                Total mint revenue comes from 8,192 NFTs at 1 SOL each, with some slight variations for presale
                discounts and public sale adjustments.
              </p>

              <div className="w-full bg-gray-800 h-8 mb-8 rounded-sm overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-amber-500 h-full w-[61%]"></div>
                  <div className="bg-red-600 h-full w-[33%]"></div>
                  <div className="bg-red-500 h-full w-[6%]"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#17171f] p-4 text-center">
                  <div className="w-4 h-4 bg-amber-500 mx-auto mb-2"></div>
                  <div className="font-['VT323'] text-lg">Prize Pool</div>
                  <div className="font-['Press_Start_2P'] text-amber-500 text-sm mt-1">5,000 SOL</div>
                  <div className="text-gray-400 text-sm">61%</div>
                </div>
                
                <div className="bg-[#17171f] p-4 text-center">
                  <div className="w-4 h-4 bg-red-600 mx-auto mb-2"></div>
                  <div className="font-['VT323'] text-lg">Team/Dev/Art</div>
                  <div className="font-['Press_Start_2P'] text-red-500 text-sm mt-1">2,700 SOL</div>
                  <div className="text-gray-400 text-sm">33%</div>
                </div>
                
                <div className="bg-[#17171f] p-4 text-center">
                  <div className="w-4 h-4 bg-red-500 mx-auto mb-2"></div>
                  <div className="font-['VT323'] text-lg">Reserve</div>
                  <div className="font-['Press_Start_2P'] text-red-500 text-sm mt-1">492 SOL</div>
                  <div className="text-gray-400 text-sm">6%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-[#121218] border-2 border-dashed border-red-500"
            >
              <h4 className="text-xl font-['Press_Start_2P'] mb-3 text-red-500">Scalability</h4>
              <p className="text-lg font-['VT323'] text-gray-300">
                The reserve fund (492 SOL) and accumulated $EXP from Season 1 will be used to fund future
                seasons. As the game progresses, increased floor prices (potentially 5-10 SOL for late-game
                NFTs) will fuel reinvestment and expansion of the game.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool; 