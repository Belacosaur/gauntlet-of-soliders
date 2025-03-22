'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCode, FaGamepad, FaBullhorn, FaCheck, FaStar, FaChartLine } from 'react-icons/fa';

const PackagesPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Development Packages" 
            subtitle="Flexible Options for Your Blockchain Gaming Project" 
          />

          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-['VT323'] text-gray-300 mb-12 max-w-4xl mx-auto text-center"
            >
              Gauntlet of SOLiders offers flexible development options to meet your needs and budget, with an accelerated 30-60 day development timeline for all packages.
            </motion.p>
          </div>

          {/* Base Package */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Base Package: $20,000</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#121218] p-8 rounded-lg border-l-4 border-red-700 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#0a0a0a] mr-4">
                      <FaCode className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-xl font-['Press_Start_2P'] text-red-400">Core Development Package</h3>
                  </div>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                    Our Base Package delivers all essential gameplay elements and smart contracts needed to launch your blockchain game, with a focus on quality core mechanics and static character artwork.
                  </p>
                  
                  <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-4">Includes:</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Limited art assets (static sprites)',
                      'Core gameplay functions',
                      'Essential smart contracts',
                      'Basic UI/UX',
                      'Magic Eden integration',
                      'Complete battle system',
                      'Tournament structure',
                      'Staking mechanism'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-md font-['VT323'] text-gray-300">
                        <FaCheck className="text-red-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-[#0a0a0a] p-4 rounded-md">
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Cost Breakdown:</h4>
                    <ul className="space-y-2 font-['VT323'] text-gray-300">
                      <li className="flex justify-between">
                        <span>Blockchain Development:</span>
                        <span className="text-white">$10,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Frontend & Backend:</span>
                        <span className="text-white">$7,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Design & Testing:</span>
                        <span className="text-white">$2,000</span>
                      </li>
                      <li className="flex justify-between font-bold border-t border-gray-700 mt-2 pt-2">
                        <span>Total:</span>
                        <span className="text-red-400">$20,000</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-red-500"
                >
                  <h3 className="text-xl font-['Press_Start_2P'] text-red-400 mb-4">Base Package Details</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Smart Contracts:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Battle System Contract with commit-reveal pattern</li>
                      <li>Staking Contract for NFT staking and $EXP earning</li>
                      <li>$EXP Token Contract for in-game economy</li>
                      <li>Prize Pool Contract for tournaments</li>
                      <li>Security measures and optimizations</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Frontend & Backend:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Complete battle UI with wallet integration</li>
                      <li>NFT viewer and collection interface</li>
                      <li>Staking interface for yield management</li>
                      <li>Tournament visualization and brackets</li>
                      <li>Backend services for tournament management</li>
                      <li>API development and indexer service</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Art & Design:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Static pixel art for 8 warrior classes</li>
                      <li>UI elements and game interface design</li>
                      <li>Basic visual effects for game actions</li>
                      <li>Consistent pixel art style throughout</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-red-400 mt-6"
                >
                  <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Development Timeline:</h4>
                  <p className="text-lg font-['VT323'] text-gray-300">
                    Our expert team will deliver the complete Base Package within 30-60 days from project kickoff, with key milestones at days 10, 30, and 50 for review and feedback.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Extended Package */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Extended Package: $28,000</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#121218] p-8 rounded-lg border-l-4 border-red-700 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#0a0a0a] mr-4">
                      <FaGamepad className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-xl font-['Press_Start_2P'] text-red-400">Premium Development Package</h3>
                  </div>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                    The Extended Package includes everything in the Base Package, plus enhanced visual elements and additional gameplay features for a more immersive blockchain gaming experience.
                  </p>
                  
                  <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-4">Includes Everything in Base Package, Plus:</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Animated character sprites',
                      'Explorer mini-game feature',
                      'Enhanced visual effects',
                      'Additional gameplay elements',
                      'Advanced UI animations',
                      'Enhanced battle visual feedback',
                      'More immersive user experience',
                      'Higher-quality art assets'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-md font-['VT323'] text-gray-300">
                        <FaStar className="text-amber-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-[#0a0a0a] p-4 rounded-md">
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Additional Cost:</h4>
                    <ul className="space-y-2 font-['VT323'] text-gray-300">
                      <li className="flex justify-between">
                        <span>Enhanced Art & Animation:</span>
                        <span className="text-white">$4,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Explorer Mini-Game:</span>
                        <span className="text-white">$4,000</span>
                      </li>
                      <li className="flex justify-between font-bold border-t border-gray-700 mt-2 pt-2">
                        <span>Base Package:</span>
                        <span className="text-white">$20,000</span>
                      </li>
                      <li className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span className="text-amber-400">$28,000</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-amber-500"
                >
                  <h3 className="text-xl font-['Press_Start_2P'] text-amber-400 mb-4">Enhanced Art & Animation</h3>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                    The Extended Package elevates the visual quality with animations and enhanced effects, creating a more dynamic and engaging player experience.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Animated Sprites:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Animation frames for all character classes</li>
                      <li>Idle, attack, and victory animations</li>
                      <li>Fluid character movements</li>
                      <li>Enhanced pixel art quality</li>
                      <li>Special move visual feedback</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Visual Effects:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Enhanced battle animations</li>
                      <li>UI transitions and effects</li>
                      <li>Dynamic lighting and particle effects</li>
                      <li>Polish and visual feedback throughout</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-amber-500 mt-6"
                >
                  <h3 className="text-xl font-['Press_Start_2P'] text-amber-400 mb-4">Explorer Mini-Game</h3>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                    The Explorer mini-game adds a whole new dimension to gameplay, giving players additional ways to interact with the game world and earn rewards.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Mini-Game Features:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Exploration gameplay mechanics</li>
                      <li>Environmental hazards and challenges</li>
                      <li>Treasure hunting mechanics</li>
                      <li>Additional rewards and items</li>
                      <li>Seamless integration with main game</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Mini-Game Assets:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Environment and terrain tiles</li>
                      <li>Interactive objects and elements</li>
                      <li>Treasure and reward visuals</li>
                      <li>Additional character animations</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Marketing Package */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Marketing Package: $10,000 (Optional)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#121218] p-8 rounded-lg border-l-4 border-red-700 h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-[#0a0a0a] mr-4">
                      <FaBullhorn className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-xl font-['Press_Start_2P'] text-red-400">Marketing & Community Package</h3>
                  </div>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                    Our Marketing Package is available as an optional add-on to either development package. It provides comprehensive marketing and community building services to maximize your project's visibility and player base.
                  </p>
                  
                  <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-4">Includes:</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Community management',
                      'Content creation',
                      'Social media campaigns',
                      'Influencer outreach',
                      'Launch event coordination',
                      'Discord setup and moderation',
                      'Promotional materials',
                      'Marketing strategy development'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-md font-['VT323'] text-gray-300">
                        <FaChartLine className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-[#0a0a0a] p-4 rounded-md">
                    <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Budget Allocation:</h4>
                    <ul className="space-y-2 font-['VT323'] text-gray-300">
                      <li className="flex justify-between">
                        <span>Discord Moderation:</span>
                        <span className="text-white">$2,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Social Media Management:</span>
                        <span className="text-white">$3,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Content Creation:</span>
                        <span className="text-white">$3,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Influencer Campaign:</span>
                        <span className="text-white">$2,000</span>
                      </li>
                      <li className="flex justify-between font-bold border-t border-gray-700 mt-2 pt-2">
                        <span>Total:</span>
                        <span className="text-green-400">$10,000</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-['Press_Start_2P'] text-green-400 mb-4">Community Management</h3>
                  
                  <p className="text-lg font-['VT323'] text-gray-300 mb-4">
                    Building and maintaining an active, engaged community is crucial for blockchain gaming success.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Discord Setup & Management:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Strategic channel organization</li>
                      <li>Role hierarchy and permission setup</li>
                      <li>Automated verification process</li>
                      <li>24/7 moderation by dedicated team</li>
                      <li>Community events and AMAs</li>
                      <li>Bot integration for moderation tools</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Social Media Management:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Twitter account management</li>
                      <li>Content calendar development</li>
                      <li>Regular posting schedule</li>
                      <li>Community engagement</li>
                      <li>Growth strategies</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#121218] p-6 rounded-lg border-l-4 border-green-500 mt-6"
                >
                  <h3 className="text-xl font-['Press_Start_2P'] text-green-400 mb-4">Content & Promotion</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Content Creation:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Development updates and progress reports</li>
                      <li>Character showcases and spotlights</li>
                      <li>Game mechanics explainers</li>
                      <li>Promotional videos and trailers</li>
                      <li>Consistent pixel art visual style</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-['Press_Start_2P'] text-red-400 mb-3">Launch Campaign:</h4>
                    <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                      <li>Influencer partnerships</li>
                      <li>Twitter Spaces events</li>
                      <li>Community contests</li>
                      <li>Launch event coordination</li>
                      <li>NFT whitelist campaign</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#121218] p-8 rounded-lg border-2 border-dashed border-red-700 text-center mb-12"
          >
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-6">Ready to Launch Your Blockchain Game?</h2>
            <p className="text-xl font-['VT323'] text-gray-300 mb-8">
              Contact us today to discuss which package best suits your project needs and timeline.
            </p>
            <div className="inline-block bg-red-700 hover:bg-red-600 transition-colors px-8 py-4 rounded-md">
              <span className="text-xl font-['Press_Start_2P'] text-white">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PackagesPage; 