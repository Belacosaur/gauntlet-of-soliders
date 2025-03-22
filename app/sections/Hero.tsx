'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaArrowRight, FaCalendar, FaRocket } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Trigger completion of initial animation after a delay
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMHYySDJWMGg1OHptMCA1OHYySDJWNThoNTh6TTAgNjBoMi9WMmgtMi9WNjB6TTU4IDYwaDIvVjJoLTIvVjYweiIgZmlsbD0iIzJkMmQzNCIgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTMwIDBWNjBNNjAgMzBIMCIgc3Ryb2tlPSIjMmQyZDM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-700 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Logo with Fire Animation at top of content */}
        <div className="flex justify-start mb-16">
          <div className="relative">
            {/* Fire explosion animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-5 h-20 rounded-full bg-gradient-to-t ${i % 2 === 0 ? 'from-red-600 to-amber-500' : 'from-red-700 to-amber-600'}`}
                  initial={{ opacity: 0, scale: 0, y: 0, rotate: i * 18 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.5, 0.8], 
                    y: [0, -100, -150],
                    rotate: i * 18
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  style={{
                    filter: "blur(8px)",
                    transformOrigin: "bottom"
                  }}
                />
              ))}
            </div>
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: animationComplete ? 1 : [0.5, 1.2, 1],
                y: animationComplete ? 0 : [0, -20, 0]
              }}
              transition={{ 
                duration: animationComplete ? 0.5 : 2, 
                ease: animationComplete ? "easeOut" : [0.175, 0.885, 0.32, 1.275] 
              }}
              className="relative z-10"
            >
              <img src="/images/Glogo.png" alt="Gauntlet of SOLiders Logo" className="w-[550px] max-w-full" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-['VT323'] mb-8">
                A strategic medieval NFT battle game on Solana with exceptional ROI potential. 
                <span className="text-red-400 font-bold"> From concept to launch in just 30-60 days.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  icon={<FaArrowRight />}
                  onClick={() => window.location.href = '/design-tips'}
                >
                  Design Tips
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  icon={<FaArrowRight />}
                  onClick={() => window.location.href = '/whitepaper'}
                >
                  View Whitepaper
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-gray-300 font-['VT323'] text-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>30-60 Day Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span>8 Unique Classes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                  <span>Daily Tournaments</span>
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
              {/* Highlight box for key statistics */}
              <div className="w-full bg-[#1a1025] border-4 border-red-700 flex flex-col items-center justify-center relative overflow-hidden p-8">
                <h3 className="font-['Press_Start_2P'] text-red-400 text-xl mb-6">Game Features</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-6">
                  <div className="bg-[#0a0a0a] p-4 border-b-2 border-red-700">
                    <div className="text-4xl font-['Press_Start_2P'] text-gradient mb-2 text-center">8,192</div>
                    <div className="text-center font-['VT323'] text-2xl text-gray-300">Unique NFTs</div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] p-4 border-b-2 border-red-500">
                    <div className="text-4xl font-['Press_Start_2P'] text-gradient mb-2 text-center">8</div>
                    <div className="text-center font-['VT323'] text-2xl text-gray-300">Warrior Classes</div>
                  </div>
                  
                  <div className="bg-[#0a0a0a] p-4 border-b-2 border-red-600">
                    <div className="text-4xl font-['Press_Start_2P'] text-gradient mb-2 text-center">5,000</div>
                    <div className="text-center font-['VT323'] text-2xl text-gray-300">SOL Prize</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <FaRocket className="text-red-500 mr-2" size={18} />
                  <span className="font-['VT323'] text-xl text-gray-300">Strategic battles with Rock/Paper/Scissors mechanics</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-red-700"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-red-500"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 