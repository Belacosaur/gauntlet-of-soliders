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

          {/* Base and Extended Packages Side by Side */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Base Package */}
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
                  <h3 className="text-xl font-['Press_Start_2P'] text-red-400">Base Package: $20,000</h3>
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

                <div className="mt-6">
                  <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Smart Contracts:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li><span className="text-red-400">Battle Contract:</span> Tournament logistics, battle mechanics, prize pool distribution, and commit-reveal pattern</li>
                    <li><span className="text-red-400">Staking Contract:</span> NFT management, $EXP token economy, and staking rewards</li>
                  </ul>
                </div>
                
                <div className="bg-[#0a0a0a] p-4 rounded-md mt-6">
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
              
              {/* Extended Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#121218] p-8 rounded-lg border-l-4 border-amber-500 h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-[#0a0a0a] mr-4">
                    <FaGamepad className="text-amber-500" size={24} />
                  </div>
                  <h3 className="text-xl font-['Press_Start_2P'] text-amber-400">Extended Package: $28,000</h3>
                </div>
                
                <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                  The Extended Package includes everything in the Base Package, plus a "Double or Nothing" gambling system that allows players to risk their EXP winnings for a chance to double them.
                </p>
                
                <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-4">Includes Everything in Base Package, Plus:</h4>
                <ul className="space-y-3 mb-6">
                  {[
                    'Double or Nothing gambling system',
                    'Risk/reward gameplay mechanics',
                    'Enhanced gambling UI',
                    'Double-up UI animations',
                    'Gambling sound effects',
                    'Multiple risk tier options',
                    'Animated result reveals',
                    'EXP multiplier system'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-md font-['VT323'] text-gray-300">
                      <FaStar className="text-amber-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Gambling System:</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Secure randomness generation for gambling outcomes</li>
                    <li>Integrated within the Staking Contract for EXP management</li>
                    <li>Dynamic gambling interface with animations</li>
                    <li>Win/loss animations and visual feedback</li>
                    <li>Multiple risk tiers for different player preferences</li>
                  </ul>
                </div>
                
                <div className="bg-[#0a0a0a] p-4 rounded-md mt-6">
                  <h4 className="text-lg font-['Press_Start_2P'] text-amber-400 mb-3">Additional Cost:</h4>
                  <ul className="space-y-2 font-['VT323'] text-gray-300">
                    <li className="flex justify-between">
                      <span>Double or Nothing System:</span>
                      <span className="text-white">$8,000</span>
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
          </section>

          {/* Marketing Package */}
          <section className="mb-20">
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-8">Marketing Package: $10,000 (Optional)</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#121218] p-8 rounded-lg border-l-4 border-green-500"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#0a0a0a] mr-4">
                  <FaBullhorn className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-['Press_Start_2P'] text-green-400">Marketing & Community Package</h3>
              </div>
              
              <p className="text-lg font-['VT323'] text-gray-300 mb-8">
                Our Marketing Package is available as an optional add-on to either development package. It provides comprehensive marketing and community building services to maximize your project's visibility and player base.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0a0a0a] p-6 rounded-md">
                  <h4 className="text-lg font-['Press_Start_2P'] text-green-400 mb-4">Community Building</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Discord server setup and moderation</li>
                    <li>Community event planning</li>
                    <li>User feedback management</li>
                    <li>Regular AMAs and updates</li>
                    <li>Player engagement strategies</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-6 rounded-md">
                  <h4 className="text-lg font-['Press_Start_2P'] text-green-400 mb-4">Content Strategy</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Content calendar development</li>
                    <li>Regular social media posting</li>
                    <li>Media kit and press releases</li>
                    <li>Development updates</li>
                    <li>Promotional videos and graphics</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-6 rounded-md">
                  <h4 className="text-lg font-['Press_Start_2P'] text-green-400 mb-4">Launch Campaign</h4>
                  <ul className="list-disc pl-5 space-y-2 font-['VT323'] text-gray-300">
                    <li>Influencer partnerships</li>
                    <li>Twitter Spaces events</li>
                    <li>Launch event coordination</li>
                    <li>NFT whitelist campaign</li>
                    <li>Cross-promotion with partners</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0a] p-6 rounded-md">
                  <h4 className="text-lg font-['Press_Start_2P'] text-green-400 mb-4">Package Highlights:</h4>
                  <ul className="space-y-3">
                    {[
                      'Dedicated community manager',
                      'Full social media coverage',
                      'Premium content creation',
                      'Strategic influencer outreach',
                      'Discord growth strategies',
                      'Twitter community building',
                      'Regular analytics reporting',
                      'Adaptable marketing tactics'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-md font-['VT323'] text-gray-300">
                        <FaChartLine className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-6 rounded-md">
                  <h4 className="text-lg font-['Press_Start_2P'] text-green-400 mb-4">Budget Allocation:</h4>
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
              </div>
            </motion.div>
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