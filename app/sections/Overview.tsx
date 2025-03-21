'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { FaGem, FaFire, FaGamepad, FaStar } from 'react-icons/fa';

const Overview: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]" id="overview">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Game Overview"
          subtitle="Gauntlets and Greatswords with Web3 Integration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-['Press_Start_2P'] text-cyan-400 mb-6">Title & Platform</h3>
            <div className="space-y-4 text-lg font-['VT323'] text-gray-300">
              <p>
                <span className="text-white font-bold">Title:</span> Gauntlets and Greatswords
              </p>
              <p>
                <span className="text-white font-bold">Platform:</span> Solana blockchain, using smart contracts for NFT minting, staking, duels, and $EXP token management.
              </p>
              <p>
                <span className="text-white font-bold">Tagline:</span> "1 SOL in, 5,000 SOL out—survive the gauntlet with skill and grit."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-['Press_Start_2P'] text-cyan-400 mb-6">Premise</h3>
            <p className="text-lg font-['VT323'] text-gray-300 mb-4">
              A medieval NFT duel game where 8,192 pixel-art warriors enter, and 1 survives after 13 rounds, claiming a 5,000 SOL grand prize.
            </p>
            <p className="text-lg font-['VT323'] text-gray-300">
              Players mint NFTs, stake them to earn $EXP, and fight through rounds using a strategic "Rock/Paper/Scissors" combo mechanic. Losers' NFTs are burned, driving rarity, while winners level up and progress toward the ultimate prize.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="High Stakes"
            content="8,192 NFTs at 1 SOL each, with a 5,000 SOL grand prize. Losers' NFTs are burned, increasing rarity with each round."
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
            title="NFT Classes"
            content="8 character classes (Knight, Monk, Lord, Cleric, Magician, Witch, Thief, Bard) with unique $EXP earning rates."
            icon={<FaStar />}
            variant="accent"
          />
          
          <Card
            title="Token Economy"
            content="Stake NFTs to earn $EXP, pay entry fees for duels, and utilize special options like 'Buy a Bye' for strategic advantages."
            icon={<FaFire />}
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview; 