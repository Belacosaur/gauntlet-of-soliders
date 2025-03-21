import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-['Press_Start_2P'] text-gradient mb-4">G.o.S</h2>
            <p className="text-gray-400 text-lg font-['VT323']">
              Gauntlet of SOLiders - A medieval NFT duel game on Solana with a "last warrior standing" premise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-['Press_Start_2P'] mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-lg font-['VT323']">
              <li>
                <Link href="#overview" className="hover:text-white transition-colors">
                  Game Overview
                </Link>
              </li>
              <li>
                <Link href="#mechanics" className="hover:text-white transition-colors">
                  Core Mechanics
                </Link>
              </li>
              <li>
                <Link href="#prize-pool" className="hover:text-white transition-colors">
                  Prize Pool
                </Link>
              </li>
              <li>
                <Link href="#visuals" className="hover:text-white transition-colors">
                  Visuals
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-['Press_Start_2P'] mb-4 text-cyan-400">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-lg font-['VT323']">
              Join our community and stay updated with the latest news.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 font-['VT323'] text-lg">
          <p>© {new Date().getFullYear()} Gauntlet of SOLiders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 