'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMHYySDJWMGg1OHptMCA1OHYySDJWNThoNTh6TTAgNjBoMi9WMmgtMi9WNjB6TTU4IDYwaDIvVjJoLTIvVjYweiIgZmlsbD0iIzJkMmQzNCIgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTMwIDBWNjBNNjAgMzBIMCIgc3Ryb2tlPSIjMmQyZDM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-6xl font-['Press_Start_2P'] leading-tight mb-6">
                <span className="text-gradient">Gauntlet </span>
                <span className="block mt-2">of SOLiders</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-['VT323'] mb-8">
                A medieval NFT duel game on Solana with a "last warrior standing" premise.
                8,192 NFTs enter, 1 survives with a 5,000 SOL grand prize.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto" 
                  icon={<FaArrowRight />}
                >
                  Explore
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>

              <div className="mt-8 flex items-center space-x-4 text-gray-400 font-['VT323'] text-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>8,192 NFTs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  <span>5,000 SOL prize</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <span>13 rounds</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Pixel art character placeholder - replace with actual game art */}
              <div className="w-full h-96 bg-[#1a1025] border-4 border-purple-700 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for character art - simulated pixel art */}
                <div className="w-48 h-48 bg-gradient-to-br from-purple-700 to-cyan-500 relative">
                  {/* Simulated pixel character outline */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCA0YzEuNSAwIDMgMS41IDMgMy41IDAgMS0xLjUgMS41LTMgMS41cy0zLS41LTMtMS41QzUgNS41IDYuNSA0IDggNHptMCA2YzMgMCA1IDEuNSA1IDR2Mkgzdi0yYzAtMi41IDItNCA1LTR6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#000] to-transparent"></div>
                <div className="absolute top-4 left-4 font-['Press_Start_2P'] text-xs">KNIGHT LVL 13</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-purple-700"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-cyan-500"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 