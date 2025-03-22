'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { FaGem, FaFire, FaGamepad, FaStar, FaRocket, FaTrophy } from 'react-icons/fa';

const Overview: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]" id="overview">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Game Overview"
          subtitle="Strategic Medieval Battles on Solana"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-['Press_Start_2P'] text-red-400 mb-6">Game & Investment</h3>
            <div className="space-y-4 text-lg font-['VT323'] text-gray-300">
              <p>
                <span className="text-white font-bold">Development:</span> 30-60 day accelerated timeline
              </p>
              <p>
                <span className="text-white font-bold">Package Options:</span>
              </p>
              <ul className="ml-5 space-y-2">
                <li>• Base Package: <span className="text-amber-400">$20,000</span> (Limited art, core functions)</li>
                <li>• Extended Package: <span className="text-amber-400">$28,000</span> (Animations, music, Double or Nothing)</li>
                <li>• Marketing Package: <span className="text-amber-400">$10,000</span> (Optional)</li>
              </ul>
              <p>
                <span className="text-white font-bold">Platform:</span> Solana blockchain, using smart contracts for NFT minting, battles, and tournament systems
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-['Press_Start_2P'] text-red-400 mb-6">Premise</h3>
            <p className="text-lg font-['VT323'] text-gray-300 mb-4">
              A medieval NFT battle game where players collect unique warrior NFTs and compete in strategic duels, tournaments, and special events.
            </p>
            <p className="text-lg font-['VT323'] text-gray-300">
              Players mint NFTs, compete in tournaments using a strategic "Rock/Paper/Scissors" combo mechanic on a 3x3 grid, and earn rewards based on skill and strategy. Our unique approach balances accessibility with depth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card
            title="Collectible NFTs"
            content="8,192 unique warrior NFTs across 8 distinct character classes, each with strategic advantages in battle."
            icon={<FaGem />}
            variant="primary"
          />
          
          <Card
            title="Strategic Combat"
            content="Players use a 3x3 grid of moves (Sword/Shield/Sorcery) in a Rock/Paper/Scissors style combo system for duels."
            icon={<FaGamepad />}
            variant="secondary"
          />
          
          <Card
            title="Competitive Tournaments"
            content="Regular competitions with prize pools for skilled players that create ongoing engagement and revenue."
            icon={<FaTrophy />}
            variant="accent"
          />
          
          <Card
            title="Token Economy"
            content="Sustainable economic model with multiple revenue streams including NFT sales, tournament fees, and marketplace royalties."
            icon={<FaFire />}
            variant="primary"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121218] p-6 border-2 border-dashed border-red-500 rounded-md"
        >
          <div className="flex items-center mb-4">
            <FaRocket className="text-red-400 mr-4" size={24} />
            <h3 className="text-xl font-['Press_Start_2P'] text-gradient">Accelerated Development</h3>
          </div>
          <p className="text-lg font-['VT323'] text-gray-300">
            Our elite development team leverages pre-built frameworks and extensive blockchain gaming experience to deliver this complete project in just 30-60 days. This compressed timeline becomes a market advantage, allowing for rapid deployment and quick iteration while maintaining excellent quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview; 