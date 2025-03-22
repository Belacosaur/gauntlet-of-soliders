'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DesignTipsPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Design Guidelines" 
            subtitle="Artwork & Style Guide for Gauntlet of SOLiders" 
          />

          {/* Logo Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Game Logo Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Gauntlet of SOLiders Logo" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Logo Guidelines</h3>
                <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                  The Gauntlet of SOLiders logo embodies our game's core identity: a medieval fantasy battle game with pixel art aesthetics. The bold, rugged typography evokes the brutal warrior atmosphere while maintaining readability.
                </p>
                <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                  The logo features a rich, blood-red gradient that suggests combat and competition, with subtle texturing that gives it a battle-worn appearance.
                </p>
                <h4 className="text-lg font-['Press_Start_2P'] text-purple-400 mb-2">Key Design Elements:</h4>
                <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                  <li>Strong, readable typography for easy recognition</li>
                  <li>Medieval fantasy styling with rugged edges</li>
                  <li>Blood-red color palette signifying combat and competition</li>
                  <li>Subtle texture adding depth and weathered appearance</li>
                  <li>Balanced proportions for flexible use across platforms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Character Sprites Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Character Sprites</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Client Reference Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/fullsprites.png" 
                    alt="Full Character Sprites Reference" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Full Character Sprite Sheet Example</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/examplesprites.jpg" 
                    alt="Example Sprites" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Detailed Character Class Variations</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Artist Implementation Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/Artsitsprite.jpg" 
                    alt="Artist Sprite Example 1" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Artist Sprite Implementation 1</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/artistsprite1.jpg" 
                    alt="Artist Sprite Example 2" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Artist Sprite Implementation 2</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-[#121218] p-6 rounded-lg border-l-4 border-purple-700 mb-8">
              <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-4">Sprite Technical Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Character Specifications:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>32x32 pixel base character size</li>
                    <li>Single static pose per character</li>
                    <li>Transparent background for smooth integration</li>
                    <li>16-bit style pixel art with enhanced detail</li>
                    <li>Clean, readable silhouettes for gameplay clarity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Design Focus:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Static character representations</li>
                    <li>No animations required for Season 1</li>
                    <li>Emphasis on distinctive character classes</li>
                    <li>Clear visual hierarchy between trait rarities</li>
                    <li>Optimized for both NFT display and gameplay</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg font-['VT323'] text-gray-300">
                  For Season 1, all character sprites will be static images with no animations. Each character will be represented by a single image in a neutral pose that best captures their class identity and equipped items. This streamlined approach allows us to focus on character diversity and trait quality while maintaining our accelerated development timeline.
                </p>
              </div>
            </div>
          </section>

          {/* NFT Design Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">NFT Design Approach</h2>
            
            <div className="mb-6">
              <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                The NFT design strategy implements a dual-view approach: 
                the NFT icon is a zoomed-in, cropped portrait version of the character for collection display, 
                while the full character model is used during gameplay. This creates a cohesive visual identity between 
                the collectible aspect and the battle gameplay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/wizard_NFT.jpg" 
                  alt="Wizard NFT Portrait" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">NFT Portrait View (Collection Display)</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/wizard_combat_model.jpg" 
                  alt="Wizard Combat Model" 
                  width={500} 
                  height={500} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Full Character Model (Battle View)</p>
                </div>
              </motion.div>
            </div>

            <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Artist Implementation Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/Artist1.jpg" 
                  alt="Artist NFT Example 1" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Artist NFT Implementation 1</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/Artist2.jpg" 
                  alt="Artist NFT Example 2" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Artist NFT Implementation 2</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-[#121218] p-6 rounded-lg border-l-4 border-cyan-500 mb-8">
              <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-4">NFT Collection Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Collection Details:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Total Collection Size: 8,192 unique warriors</li>
                    <li>8 warrior classes with equal distribution</li>
                    <li>4-tier rarity system (Common to Legendary)</li>
                    <li>Magic Eden marketplace integration</li>
                    <li>Game utility tied to NFT attributes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Trait Variations:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>3-4 weapon types per class</li>
                    <li>4 armor styles per class</li>
                    <li>5 helmet/headgear variations per class</li>
                    <li>8 color schemes per class</li>
                    <li>3 special effects per class</li>
                    <li>5 background variations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Game UI Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Game UI Design</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Battle UI Concept</h3>
              <div className="grid grid-cols-1 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/drawnui.jpg" 
                    alt="Battle UI Concept" 
                    width={800} 
                    height={400} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Battle Screen, Combo Select, and Character Sheet UI Concepts</p>
                  </div>
                </motion.div>
                
                <div className="p-6 bg-[#121218] rounded-lg">
                  <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                    The UI design incorporates nostalgic pixel art aesthetics with modern usability. 
                    Battle screens feature health and status indicators, with character models displayed in static poses
                    that represent their class and equipped items. Background elements will be kept minimal
                    to maintain focus on the gameplay.
                  </p>
                  <p className="text-lg font-['VT323'] text-gray-300">
                    For Season 1, the focus is on core functionality with static character representation. 
                    No character animations will be included in the initial release, allowing for a streamlined development
                    process while maintaining high-quality visual assets. Any animation features may be considered for
                    future seasons based on player feedback and game performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Combo Selection Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative rounded-lg overflow-hidden border-2 border-purple-700"
                >
                  <Image 
                    src="/images/combo.jpg" 
                    alt="Combo Selection Grid Inspiration" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                    <p className="font-['VT323'] text-white">Inventory UI Inspiration from Baldur's Gate</p>
                  </div>
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-purple-400 mb-2">Combo Grid Design:</h4>
                  <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                    The combo selection grid draws inspiration from classic RPG inventory systems like Baldur's Gate. 
                    This nostalgic design approach uses clearly defined slots with pixel art icons representing 
                    different move options.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>3x3 grid layout mirroring the battlefield positions</li>
                    <li>Clear visual distinction between move types</li>
                    <li>Minimalist slot design for easy recognition</li>
                    <li>Highlight effects for selected moves</li>
                    <li>Tooltip system for move details on hover</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Background Art Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Background Art</h2>
            
            <div className="mb-6">
              <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                The background art maintains our pixel art aesthetic while creating atmospheric battle environments. 
                Inspiration comes from games like Darkest Dungeon, with moody, atmospheric scenes that establish 
                the medieval fantasy setting without distracting from gameplay.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/bg1.jpg" 
                  alt="Background Art Example 1" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Sunken Ruins Environment</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/bg2.jpg" 
                  alt="Background Art Example 2" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Candlelit Crypt Environment</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/bg3.jpg" 
                  alt="Background Art Example 3" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Haunted Forest Environment</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative rounded-lg overflow-hidden border-2 border-purple-700"
              >
                <Image 
                  src="/images/bg4.jpg" 
                  alt="Background Art Example 4" 
                  width={800} 
                  height={400} 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3">
                  <p className="font-['VT323'] text-white">Ruined Cathedral Environment</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-[#121218] p-6 rounded-lg border-l-4 border-purple-700">
              <h3 className="text-xl font-['Press_Start_2P'] text-gradient mb-4">Environment Themes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Battle Arena Themes:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Castle Courtyard</li>
                    <li>Forest Clearing</li>
                    <li>Mountain Pass</li>
                    <li>Desert Ruins</li>
                    <li>Volcanic Cavern</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-['Press_Start_2P'] text-cyan-400 mb-2">Design Elements:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Atmospheric lighting effects</li>
                    <li>Environmental storytelling through details</li>
                    <li>Medieval fantasy with dark undertones</li>
                    <li>Clear visual distinction between arenas</li>
                    <li>Minimal but effective animation (torches, water, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DesignTipsPage; 