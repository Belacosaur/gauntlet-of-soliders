'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaArrowRight, FaDiscord, FaTwitter } from 'react-icons/fa';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#121218] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMHYySDJWMGg1OHptMCA1OHYySDJWNThoNTh6TTAgNjBoMi9WMmgtMi9WNjB6TTU4IDYwaDIvVjJoLTIvVjYweiIgZmlsbD0iIzJkMmQzNCIgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTMwIDBWNjBNNjAgMzBIMCIgc3Ryb2tlPSIjMmQyZDM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-['Press_Start_2P'] text-gradient leading-tight mb-8">
              Ready to Build Your Blockchain Game?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 font-['VT323'] mb-8 max-w-3xl mx-auto">
              Gauntlet of SOLiders combines NFT technology, game theory, and engaging mechanics to create a unique gaming experience with real financial incentives.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                icon={<FaDiscord />}
              >
                Join Discord
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto"
                icon={<FaTwitter />}
              >
                Follow on Twitter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { label: 'NFTs', value: '8,192' },
                { label: 'Grand Prize', value: '5,000 SOL' },
                { label: 'Total Rounds', value: '13' },
                { label: 'Character Classes', value: '8' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#0a0a0a] p-6 text-center border-b-4 border-purple-700"
                >
                  <div className="text-3xl font-['Press_Start_2P'] text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-['VT323'] text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 p-8 bg-[#0a0a0a] border-2 border-dashed border-cyan-500 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-6">Final Pitch</h3>
            <div className="space-y-4 text-lg font-['VT323'] text-gray-300">
              <p>
                <span className="text-white font-bold">For Players:</span> Mint a pixel-art warrior for 1 SOL, stake to earn $EXP, and duel through 13 rounds using strategic combos. Survive to claim the 5,000 SOL grand prize!
              </p>
              <p>
                <span className="text-white font-bold">For Investors:</span> 8,192 NFTs on Solana battle for a 5,000 SOL prize. $EXP scarcity and NFT burns drive floor prices, with huge upside as the game progresses.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                icon={<FaArrowRight />}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 