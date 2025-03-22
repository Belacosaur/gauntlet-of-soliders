'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaArrowRight, FaDiscord, FaTwitter, FaCalendar, FaDollarSign, FaUsers } from 'react-icons/fa';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#121218] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMHYySDJWMGg1OHptMCA1OHYySDJWNThoNTh6TTAgNjBoMi9WMmgtMi9WNjB6TTU4IDYwaDIvVjJoLTIvVjYweiIgZmlsbD0iIzJkMmQzNCIgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTMwIDBWNjBNNjAgMzBIMCIgc3Ryb2tlPSIjMmQyZDM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              Ready to Launch Your Blockchain Game?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 font-['VT323'] mb-8">
              Gauntlet of SOLiders delivers an accelerated 30-60 day development timeline with flexible package options starting at $20,000.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: 'Development Timeline', value: '30-60 Days', icon: <FaCalendar className="text-red-500" /> },
                { label: 'Base Package', value: '$20,000', icon: <FaDollarSign className="text-red-500" /> },
                { label: 'Collection Size', value: '8,192 NFTs', icon: <FaUsers className="text-red-500" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#0a0a0a] p-6 text-center border-b-4 border-red-700"
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-['Press_Start_2P'] text-red-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-['VT323'] text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 p-8 bg-[#0a0a0a] border-2 border-dashed border-red-500 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-6">Why Partner With Us</h3>
            <div className="space-y-4 text-lg font-['VT323'] text-gray-300">
              <p>
                <span className="text-white font-bold">Efficient Development:</span> Our elite team delivers complete projects in 30-60 days, leveraging expertise in blockchain gaming and pre-built components.
              </p>
              <p>
                <span className="text-white font-bold">Strategic Design:</span> Gameplay mechanics focused on community engagement, skill-based competition, and long-term sustainability.
              </p>
              <p>
                <span className="text-white font-bold">Sustainable Growth:</span> Multiple revenue streams from NFT sales, marketplace royalties, and tournament fees create long-term value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 