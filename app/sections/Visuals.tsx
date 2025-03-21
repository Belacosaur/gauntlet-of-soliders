'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaPalette, FaDesktop, FaTh } from 'react-icons/fa';

const Visuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'style' | 'characters' | 'ui'>('style');
  
  const tabs = [
    { id: 'style', label: 'Art Style', icon: <FaPalette /> },
    { id: 'characters', label: 'Characters', icon: <FaTh /> },
    { id: 'ui', label: 'UI Screens', icon: <FaDesktop /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'style':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-4">Pixel Art Style</h3>
              <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                Gauntlets and Greatswords features a classic pixel-art style inspired by iconic games like Octopath Traveler,
                Baldur's Gate, and Darkest Dungeon.
              </p>
              <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                The art direction focuses on creating atmospheric backgrounds and detailed character sprites
                that evoke nostalgia while still feeling fresh and engaging.
              </p>
              <p className="text-lg font-['VT323'] text-gray-300">
                For Season 1, animations will be kept minimal (e.g., "waiting bounce" for characters, small
                background elements) to keep costs low, with potential for more elaborate animations in future seasons.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-[#121218] border-2 border-purple-700 p-4 flex items-center justify-center">
                {/* Placeholder for art style showcase */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a1025] to-[#08080c] relative overflow-hidden">
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xIDFoMXYxOEgxeiIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0xOSAxaDF2MThIMTl6IiBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTEgMWgxOHYxSDEeiIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIuMyIvPjxwYXRoIGQ9Ik0xIDE5aDE4djFIMXoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjMiLz48L3N2Zz4=')] opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg font-['Press_Start_2P'] text-white text-center">
                      Pixel Art Style
                      <div className="text-sm mt-2 font-['VT323'] text-gray-400">Art showcase placeholder</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-cyan-500"></div>
            </div>
          </div>
        );
      case 'characters':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Knight', 'Magician', 'Lord'].map((character, index) => (
              <motion.div
                key={character}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121218] border-2 border-purple-700 p-4"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a1025] to-[#08080c] mb-4 flex items-center justify-center">
                  {/* Placeholder for character sprite */}
                  <div className="w-16 h-32 bg-purple-700 relative">
                    {/* Simple pixel art character silhouette */}
                    <div className="w-8 h-8 rounded-full bg-[#08080c] absolute top-0 left-4"></div>
                    <div className="w-12 h-16 bg-[#08080c] absolute top-8 left-2"></div>
                    <div className="w-4 h-8 bg-[#08080c] absolute top-20 left-2"></div>
                    <div className="w-4 h-8 bg-[#08080c] absolute top-20 left-10"></div>
                  </div>
                </div>
                <h4 className="text-center font-['Press_Start_2P'] text-lg">{character}</h4>
                <p className="text-center font-['VT323'] text-gray-300 mt-2">
                  {index === 0 && "Standard class with balanced stats"}
                  {index === 1 && "1.5x $EXP earning bonus"}
                  {index === 2 && "2x $EXP earning bonus"}
                </p>
              </motion.div>
            ))}
          </div>
        );
      case 'ui':
        return (
          <div className="space-y-12">
            {[
              { name: 'Battle Screen', description: 'Displays round number, character sprites, and buttons for "Automate" or "Enter Combo."' },
              { name: 'Combo Select Screen', description: '3x3 grid styled like Baldur\'s Gate inventory slots with buttons for "Randomise" and "Confirm".' },
              { name: 'Character Sheet', description: 'Shows NFT icon, level, $EXP balance, and match history (wins/losses per round).' },
            ].map((screen, index) => (
              <motion.div
                key={screen.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/2">
                  <div className="aspect-video bg-[#121218] border-2 border-cyan-500 p-4 flex items-center justify-center">
                    {/* Placeholder for UI screen */}
                    <div className="w-full h-full bg-[#08080c] relative p-4">
                      <div className="border-2 border-cyan-500 p-2 mb-2">
                        <div className="text-sm font-['Press_Start_2P'] text-cyan-500">Round 3</div>
                      </div>
                      {screen.name === 'Battle Screen' && (
                        <div className="flex justify-around items-center h-32">
                          <div className="w-12 h-24 bg-purple-700"></div>
                          <div className="text-xl font-['Press_Start_2P'] text-white">VS</div>
                          <div className="w-12 h-24 bg-amber-500"></div>
                        </div>
                      )}
                      {screen.name === 'Combo Select Screen' && (
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="aspect-square border border-gray-600 bg-[#121218]"></div>
                          ))}
                        </div>
                      )}
                      {screen.name === 'Character Sheet' && (
                        <div className="flex mt-4">
                          <div className="w-16 h-16 bg-purple-700 mr-4"></div>
                          <div>
                            <div className="text-sm font-['Press_Start_2P'] text-white">Knight</div>
                            <div className="text-sm font-['VT323'] text-gray-300">LVL 5 • 240 $EXP</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-4">{screen.name}</h3>
                  <p className="text-lg font-['VT323'] text-gray-300">
                    {screen.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#08080c]" id="visuals">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Visuals & UI"
          subtitle="Aesthetic direction and user interface design"
        />

        <div className="flex flex-wrap mb-12 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'style' | 'characters' | 'ui')}
              className={`
                flex items-center px-6 py-4 font-['VT323'] text-lg
                ${activeTab === tab.id ? 'text-white border-b-2 border-cyan-500' : 'text-gray-400 hover:text-gray-300'}
              `}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Visuals; 