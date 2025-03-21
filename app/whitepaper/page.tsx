'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaDownload, FaBookOpen, FaBars } from 'react-icons/fa';

const WhitepaperPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showTOC, setShowTOC] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Navigation sections
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'game-mechanics', title: 'Game Mechanics' },
    { id: 'technology', title: 'Technology' },
    { id: 'tokenomics', title: 'Tokenomics' },
    { id: 'prize-pool', title: 'Prize Pool' },
    { id: 'roadmap', title: 'Roadmap' },
    { id: 'team', title: 'Team' },
    { id: 'faq', title: 'FAQ' },
  ];

  // Handle scrolling and active section updates
  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current) return;
      
      const scrollPosition = window.scrollY + 100;
      
      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-purple-900 shadow-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-['Press_Start_2P'] text-purple-500">
              <FaHome className="mr-2" />
              <span className="hidden md:inline">Back to Home</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setShowTOC(!showTOC)}
              className="p-2 text-purple-500"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar / TOC */}
        <aside className={`md:w-1/4 md:pr-8 md:block ${showTOC ? 'block' : 'hidden'} md:sticky top-24 self-start`}>
          <div className="bg-[#121218] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-['Press_Start_2P'] text-purple-500 mb-6 flex items-center">
              <FaBookOpen className="mr-2" /> 
              Contents
            </h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block py-2 px-3 rounded transition-colors font-['VT323'] text-lg ${
                      activeSection === section.id
                        ? 'bg-purple-900 text-white'
                        : 'text-gray-300 hover:bg-[#1a1a24]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                      setShowTOC(false);
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        {/* Main Content */}
        <main ref={mainContentRef} className="md:w-3/4 prose prose-invert max-w-none prose-headings:font-['Press_Start_2P'] prose-p:font-['VT323'] prose-p:text-lg">
          {/* Content will be added in separate sections */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-['Press_Start_2P'] text-gradient mb-4">
              Gauntlet of SOLiders
            </h1>
            <p className="text-2xl font-['VT323'] text-gray-300">
              Official Whitepaper v1.0
            </p>
          </div>
          
          {/* Content will be filled in subsequent edits */}
          <div className="bg-[#0f0f18] p-0.5">
            <div className="bg-[#0a0a0a] p-8">
              {/* Overview Section */}
              <section id="overview" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">Overview</h2>
                  
                  <div className="p-6 bg-[#121218] rounded-lg mb-8">
                    <p className="text-xl mb-4">
                      <strong className="text-purple-400">Gauntlet of SOLiders</strong> is a medieval 
                      NFT duel game built on the Solana blockchain where 8,192 pixel-art warriors 
                      enter a tournament, and after 13 rounds of combat, only one warrior remains to 
                      claim a 5,000 SOL grand prize.
                    </p>

                    <p className="mb-4">
                      The game combines NFT technology, on-chain battles with a Rock/Paper/Scissors combo 
                      system, and tokenomics through an $EXP system. Players collect unique warrior NFTs 
                      and compete in strategic battles using positioning elements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#121218] p-6 rounded-lg border-l-4 border-purple-700">
                      <h3 className="text-xl font-['Press_Start_2P'] text-purple-400 mb-4">Key Highlights</h3>
                      <ul className="space-y-2 list-disc pl-5 font-['VT323'] text-lg">
                        <li>Development Timeline: <span className="text-purple-400 font-bold">30-60 days</span></li>
                        <li>Development Budget: <span className="text-amber-400 font-bold">$20,000</span></li>
                        <li>Player Engagement: <span className="text-green-400 font-bold">Daily tournaments & battles</span></li>
                        <li>NFT Collection: <span className="text-cyan-400 font-bold">8,192 unique warriors</span> across 8 classes</li>
                        <li>Battle System: <span className="text-green-400 font-bold">Strategic Rock/Paper/Scissors</span> with positioning</li>
                      </ul>
                    </div>

                    <div className="bg-[#121218] p-6 rounded-lg border-l-4 border-cyan-500">
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Core Components</h3>
                      <ul className="space-y-2 list-disc pl-5 font-['VT323'] text-lg">
                        <li>Solana blockchain integration for NFTs, tokens, and smart contracts</li>
                        <li>Web-based frontend for user interface</li>
                        <li>On-chain battle mechanics with randomness solutions</li>
                        <li>Staking system for NFTs</li>
                        <li>Tokenomics with $EXP</li>
                        <li>Metadata management for NFT progression</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#121218] p-6 rounded-lg">
                    <h3 className="text-xl font-['Press_Start_2P'] text-amber-400 mb-4">The Problem & Our Solution</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-['Press_Start_2P'] text-gray-300 mb-3">Traditional blockchain games face:</h4>
                        <ul className="space-y-2 list-disc pl-5 font-['VT323'] text-lg">
                          <li>High transaction fees making gameplay expensive</li>
                          <li>Slow transaction finality disrupting real-time gameplay</li>
                          <li>Complex mechanics creating barriers to entry</li>
                          <li>Excessive focus on speculation over enjoyable gameplay</li>
                          <li>Lack of strategic depth in current NFT battle games</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-['Press_Start_2P'] text-gray-300 mb-3">Gauntlet of SOLiders offers:</h4>
                        <ul className="space-y-2 list-disc pl-5 font-['VT323'] text-lg">
                          <li><strong>Solana Blockchain:</strong> Sub-second transaction finality with minimal fees</li>
                          <li><strong>Accessible Combat System:</strong> Easy-to-understand Rock/Paper/Scissors core with strategic depth</li>
                          <li><strong>NFT Ownership:</strong> True ownership of unique warrior characters</li>
                          <li><strong>Tournament Structure:</strong> Regular competitions with prize pools</li>
                          <li><strong>Token Economy:</strong> $EXP rewards for participation and victories</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
              
              {/* Additional sections will be added here */}
              
              {/* Game Mechanics Section */}
              <section id="game-mechanics" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">Game Mechanics</h2>
                  
                  <div className="p-6 bg-[#121218] rounded-lg mb-8">
                    <p className="text-xl mb-4">
                      At the core of Gauntlet of SOLiders is a strategic battle system that combines 
                      familiar Rock/Paper/Scissors mechanics with positional strategy, class abilities, 
                      and tournament progression.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Battle System</h3>
                      <div className="bg-[#121218] p-6 rounded-lg h-full">
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">3x3 Grid Arena</h4>
                        <p className="mb-4">
                          Battles take place on a 3x3 grid where positioning affects attack strength and defensive capabilities.
                          Strategic positioning becomes key to victory.
                        </p>
                        
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Enhanced Rock/Paper/Scissors</h4>
                        <p className="mb-4">
                          The classic mechanic is expanded with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Position-based modifiers that affect move strength</li>
                          <li>Class-specific abilities that can override standard outcomes</li>
                          <li>Combo system that rewards strategic move sequences</li>
                          <li>Counter mechanics that create depth and mindgames</li>
                        </ul>
                        
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Technical Implementation</h4>
                        <p>
                          The battle system combines on-chain and off-chain components:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Players submit sealed moves using a commit-reveal scheme</li>
                          <li>Move validity is verified cryptographically</li>
                          <li>Results are verified and recorded on-chain</li>
                          <li>Deterministic battle resolution that can be independently verified</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Warrior Classes</h3>
                      <div className="bg-[#121218] p-6 rounded-lg">
                        <p className="mb-4">
                          The game features 8 distinct warrior classes, each with unique abilities and playstyles:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-purple-700">
                            <h5 className="font-['Press_Start_2P'] text-purple-400 text-sm mb-1">Knight</h5>
                            <p className="text-sm">Defensive specialist with shield bash ability</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-cyan-500">
                            <h5 className="font-['Press_Start_2P'] text-cyan-400 text-sm mb-1">Monk</h5>
                            <p className="text-sm">Agile fighter with counter attacks</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-amber-500">
                            <h5 className="font-['Press_Start_2P'] text-amber-400 text-sm mb-1">Lord</h5>
                            <p className="text-sm">Commanding presence with area control</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-green-500">
                            <h5 className="font-['Press_Start_2P'] text-green-400 text-sm mb-1">Cleric</h5>
                            <p className="text-sm">Support abilities and healing capabilities</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-blue-500">
                            <h5 className="font-['Press_Start_2P'] text-blue-400 text-sm mb-1">Magician</h5>
                            <p className="text-sm">Powerful ranged attacks with elemental damage</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-pink-500">
                            <h5 className="font-['Press_Start_2P'] text-pink-400 text-sm mb-1">Witch</h5>
                            <p className="text-sm">Status effects and unpredictable spells</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-indigo-500">
                            <h5 className="font-['Press_Start_2P'] text-indigo-400 text-sm mb-1">Thief</h5>
                            <p className="text-sm">Evasive with ability to steal opponent's moves</p>
                          </div>
                          <div className="bg-[#1a1025] p-3 rounded border-l-2 border-yellow-500">
                            <h5 className="font-['Press_Start_2P'] text-yellow-400 text-sm mb-1">Bard</h5>
                            <p className="text-sm">Buff/debuff specialist with combo potential</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#121218] p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Tournament Structure</h3>
                        <p className="mb-4">
                          The main tournament consists of 13 rounds of elimination battles:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>8,192 NFTs enter the tournament</li>
                          <li>Each round eliminates half of the remaining warriors</li>
                          <li>Final round decides the single champion who claims the 5,000 SOL prize</li>
                          <li>Eliminated warriors remain owned by players and can participate in future events</li>
                          <li>Secondary tournaments with smaller prize pools run concurrently</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#121218] p-6 rounded-lg">
                    <h3 className="text-xl font-['Press_Start_2P'] text-purple-400 mb-4">Anti-Cheating Mechanisms</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">
                          Multiple strategies are employed to ensure fair play:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Commit-reveal pattern prevents players from seeing opponent's moves before committing</li>
                          <li>Server-side verification of all battle actions and outcomes</li>
                          <li>Deterministic battle resolution that can be independently verified</li>
                          <li>Cryptographic signatures required for all player actions</li>
                          <li>Rate limiting to prevent exploitation of timing attacks</li>
                          <li>Automated flagging of suspicious patterns for review</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Randomness Generation</h4>
                        <p className="mb-4">
                          A hybrid approach to randomness ensures fairness:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Chainlink VRF provides verifiable on-chain randomness for critical elements</li>
                          <li>Client-side pseudo-random generation for non-economic visual effects</li>
                          <li>Cryptographic commit-reveal schemes for player interactions</li>
                          <li>Entropy pooling from multiple blockchain sources</li>
                          <li>Transparent randomness verification tools available to players</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Technology Section */}
              <section id="technology" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">Technology</h2>
                  
                  <div className="p-6 bg-[#121218] rounded-lg mb-8">
                    <p className="text-xl mb-4">
                      Gauntlet of SOLiders leverages cutting-edge blockchain technologies and optimized 
                      architecture to deliver a seamless gaming experience with true ownership and 
                      verifiable gameplay.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">System Architecture</h3>
                      
                      <p className="mb-4">
                        The system is designed with a Web3 architecture pattern, consisting of:
                      </p>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Smart Contracts Layer</h4>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>NFT minting and metadata management</li>
                        <li>Staking mechanism</li>
                        <li>Duel system</li>
                        <li>$EXP token management</li>
                        <li>Prize pool management</li>
                      </ul>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Frontend Layer</h4>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Web application (React/Next.js)</li>
                        <li>Wallet integration</li>
                        <li>Battle UI</li>
                        <li>NFT display and management</li>
                        <li>User dashboard</li>
                      </ul>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Off-Chain Services</h4>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Indexers for blockchain data</li>
                        <li>Notification service</li>
                        <li>Analytics and reporting</li>
                        <li>Tournament management</li>
                      </ul>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Data Storage</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>On-chain: NFT metadata, battle results, $EXP balances</li>
                        <li>Off-chain: Enhanced metadata, user preferences, battle history</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Blockchain Implementation</h3>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Why Solana?</h4>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Sub-second transaction finality enables real-time gameplay interactions</li>
                        <li>Low transaction fees make frequent game actions economically viable</li>
                        <li>High throughput capacity supports a large player base and tournament activity</li>
                        <li>Robust NFT infrastructure through Metaplex provides reliable standards</li>
                        <li>Energy-efficient Proof-of-Stake consensus aligns with sustainability goals</li>
                      </ul>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">NFT Standard</h4>
                      <p className="mb-4">
                        We use Metaplex's Token Metadata standard on Solana, which provides:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Comprehensive metadata support for warrior attributes and properties</li>
                        <li>Compatibility with major Solana marketplaces for seamless trading</li>
                        <li>Efficient storage with on-chain minimal data and off-chain attribute storage</li>
                        <li>Update authority capabilities for potential future enhancements</li>
                      </ul>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Smart Contract Security</h4>
                      <p>Our multilayered security approach includes:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Multiple independent security audits from reputable firms</li>
                        <li>Formal verification for critical smart contract components</li>
                        <li>Comprehensive testing with both unit and integration test coverage</li>
                        <li>Bug bounty program to incentivize responsible disclosure</li>
                        <li>Emergency pause functionality for critical vulnerabilities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">NFT Architecture</h3>
                      
                      <p className="mb-4">
                        The NFT structure includes:
                      </p>
                      
                      <div className="bg-[#1a1025] p-4 rounded-md mb-4 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-300">
{`struct WarriorMetadata {
    class: WarriorClass,
    level: u8,
    exp_multiplier: f32,
    win_count: u8,
    total_battles: u8,
    is_active: bool,
}

enum WarriorClass {
    Knight,
    Monk,
    Lord,
    Cleric,
    Magician,
    Witch,
    Thief,
    Bard,
}`}
                        </pre>
                      </div>
                      
                      <p className="mb-4">
                        Key technical considerations:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Metaplex integration for NFT standards</li>
                        <li>Randomness for class assignment</li>
                        <li>Secure metadata storage</li>
                        <li>Gas optimization for bulk minting</li>
                      </ul>
                    </div>

                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Tech Stack</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3 text-sm">Blockchain</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Solana</li>
                            <li>Anchor Framework</li>
                            <li>Metaplex</li>
                            <li>Chainlink VRF</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3 text-sm">Programming</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Rust (contracts)</li>
                            <li>TypeScript</li>
                            <li>Solidity</li>
                            <li>WebAssembly</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3 text-sm">Frontend</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>WebGL/Three.js</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3 text-sm">Backend</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Node.js</li>
                            <li>Rust services</li>
                            <li>Redis</li>
                            <li>PostgreSQL</li>
                          </ul>
                        </div>
                      </div>
                      
                      <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Development Expertise</h4>
                      <p>
                        Our elite team combines expertise in:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Blockchain development with Solana experience</li>
                        <li>Game design specializing in competitive mechanics</li>
                        <li>Smart contract security and auditing</li>
                        <li>Frontend development with Web3 integration</li>
                        <li>Pixel art creation and animation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#121218] p-6 rounded-lg">
                    <h3 className="text-xl font-['Press_Start_2P'] text-cyan-400 mb-4">Infrastructure & Scalability</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Backend Infrastructure</h4>
                        <p className="mb-4">
                          Our scalable backend employs:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Kubernetes-orchestrated microservices architecture</li>
                          <li>Autoscaling container deployments based on demand</li>
                          <li>Regional deployment for reduced latency across geographies</li>
                          <li>Load balancing across multiple availability zones</li>
                          <li>Database sharding for horizontal scaling of player data</li>
                          <li>Caching layers to reduce blockchain query load</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Resilience & Reliability</h4>
                        <p className="mb-4">
                          We implement several resilience strategies:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Transaction retry mechanisms with exponential backoff</li>
                          <li>State channel architecture for critical gameplay during chain congestion</li>
                          <li>Local state maintenance with deferred on-chain reconciliation</li>
                          <li>Priority fee adjustment algorithm for transaction inclusion</li>
                          <li>Graceful degradation modes that maintain core gameplay</li>
                          <li>Multiple RPC endpoint providers with automatic failover</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Prize Pool Section */}
              <section id="prize-pool" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">Prize Pool</h2>
                  
                  <div className="p-6 bg-[#121218] rounded-lg mb-8">
                    <p className="text-xl mb-4">
                      A total of 5,000 SOL will be distributed to winners in the main tournament, with additional rewards
                      available through staking mechanisms and secondary tournaments.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">Prize Distribution</h3>
                      <div className="bg-[#121218] p-6 rounded-lg h-full">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between bg-[#17171f] p-4 border-l-4 border-amber-500">
                            <div className="font-['VT323'] text-xl text-gray-300">1st Place</div>
                            <div className="font-['Press_Start_2P'] text-xl text-white">5,000 SOL</div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-[#17171f] p-4 border-l-4 border-gray-400">
                            <div className="font-['VT323'] text-xl text-gray-300">2nd Place</div>
                            <div className="font-['Press_Start_2P'] text-xl text-white">250 SOL</div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-[#17171f] p-4 border-l-4 border-amber-700">
                            <div className="font-['VT323'] text-xl text-gray-300">3rd-4th Place</div>
                            <div className="font-['Press_Start_2P'] text-xl text-white">150 SOL each</div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-[#17171f] p-4 border-l-4 border-purple-700">
                            <div className="font-['VT323'] text-xl text-gray-300">5th-8th Place</div>
                            <div className="font-['Press_Start_2P'] text-xl text-white">40 SOL each</div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-[#17171f] p-4 border-l-4 border-cyan-500">
                            <div className="font-['VT323'] text-xl text-gray-300">9th-16th Place</div>
                            <div className="font-['Press_Start_2P'] text-xl text-white">2.5 SOL each</div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-[#17171f] border-2 border-dashed border-amber-500">
                          <p className="text-lg font-['VT323'] text-gray-300">
                            The prize pool will be staked with Pesky Penguins validator to accrue 
                            additional rewards, potentially increasing the final prize amounts. 
                            Secondary marketplace royalties go to the team, potentially used to buy 
                            floor NFTs for additional prizes or burns.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-cyan-500 mb-4">Revenue Allocation</h3>
                      <div className="bg-[#121218] p-6 rounded-lg h-full">
                        <div className="flex items-center mb-6">
                          <svg className="w-6 h-6 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                          </svg>
                          <span className="font-['Press_Start_2P'] text-xl text-amber-500">Total Revenue: 8,192 SOL</span>
                        </div>
                        
                        <p className="text-lg font-['VT323'] text-gray-300 mb-6">
                          Total mint revenue comes from 8,192 NFTs at 1 SOL each, with some slight 
                          variations for presale discounts and public sale adjustments.
                        </p>

                        <div className="w-full bg-gray-800 h-10 mb-8 rounded overflow-hidden">
                          <div className="flex h-full">
                            <div className="bg-amber-500 h-full w-[61%]"></div>
                            <div className="bg-purple-600 h-full w-[33%]"></div>
                            <div className="bg-cyan-500 h-full w-[6%]"></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-[#17171f] p-4 text-center">
                            <div className="w-4 h-4 bg-amber-500 mx-auto mb-2"></div>
                            <div className="font-['VT323'] text-lg">Prize Pool</div>
                            <div className="font-['Press_Start_2P'] text-amber-500 text-sm mt-1">5,000 SOL</div>
                            <div className="text-gray-400 text-sm">61%</div>
                          </div>
                          
                          <div className="bg-[#17171f] p-4 text-center">
                            <div className="w-4 h-4 bg-purple-600 mx-auto mb-2"></div>
                            <div className="font-['VT323'] text-lg">Team/Dev/Art</div>
                            <div className="font-['Press_Start_2P'] text-purple-500 text-sm mt-1">2,700 SOL</div>
                            <div className="text-gray-400 text-sm">33%</div>
                          </div>
                          
                          <div className="bg-[#17171f] p-4 text-center">
                            <div className="w-4 h-4 bg-cyan-500 mx-auto mb-2"></div>
                            <div className="font-['VT323'] text-lg">Reserve</div>
                            <div className="font-['Press_Start_2P'] text-cyan-500 text-sm mt-1">492 SOL</div>
                            <div className="text-gray-400 text-sm">6%</div>
                          </div>
                        </div>

                        <div className="p-6 bg-[#17171f] border-2 border-dashed border-cyan-500">
                          <h4 className="text-xl font-['Press_Start_2P'] mb-3 text-cyan-500">Scalability</h4>
                          <p className="text-lg font-['VT323'] text-gray-300">
                            The reserve fund (492 SOL) and accumulated $EXP from Season 1 will be used 
                            to fund future seasons. As the game progresses, increased floor prices 
                            (potentially 5-10 SOL for late-game NFTs) will fuel reinvestment and 
                            expansion of the game.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#121218] p-6 rounded-lg">
                    <h3 className="text-xl font-['Press_Start_2P'] text-purple-400 mb-4">Future Prize Pools</h3>
                    
                    <p className="mb-4 text-lg font-['VT323'] text-gray-300">
                      Beyond the initial tournament, Gauntlet of SOLiders will implement several 
                      mechanisms to create sustainable prize pools:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Secondary Markets</h4>
                        <p className="text-gray-300 font-['VT323']">
                          5% royalty on all secondary marketplace transactions will be 
                          allocated to future prize pools, creating sustainable funding.
                        </p>
                      </div>
                      
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Seasonal Tournaments</h4>
                        <p className="text-gray-300 font-['VT323']">
                          Quarterly tournaments with entry fees contributing to prize pools, 
                          with 80-90% of all entry fees returning to players as prizes.
                        </p>
                      </div>
                      
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Staking Rewards</h4>
                        <p className="text-gray-300 font-['VT323']">
                          Validator staking returns on reserve funds contribute to prize 
                          pool growth, creating passive growth of player rewards.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Tokenomics Section */}
              <section id="tokenomics" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">Tokenomics</h2>
                  
                  <div className="p-6 bg-[#121218] rounded-lg mb-8">
                    <p className="text-xl mb-4">
                      The economic system of Gauntlet of SOLiders is designed to create sustainable 
                      value and engagement through a dual token economy: NFT warriors and $EXP tokens.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">NFT Economics</h3>
                      <div className="bg-[#121218] p-6 rounded-lg">
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Initial Mint</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                          <li>8,192 unique warrior NFTs</li>
                          <li>Mint price: 1 SOL each</li>
                          <li>Mint allocation: 70% public, 20% whitelist, 10% team</li>
                          <li>Estimated mint out: 5-7 days</li>
                        </ul>
                        
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">NFT Utility</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                          <li>Tournament participation</li>
                          <li>$EXP earning through staking</li>
                          <li>Governance rights</li>
                          <li>Future game access</li>
                        </ul>
                        
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Secondary Market</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>5% royalties on all trades</li>
                          <li>Projected floor: 5-10 SOL after 90 days</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-['Press_Start_2P'] text-purple-500 mb-4">$EXP Token</h3>
                      <div className="bg-[#121218] p-6 rounded-lg">
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Implementation</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                          <li>SPL Token standard on Solana</li>
                          <li>Fixed supply model</li>
                          <li>Automated distribution via staking contracts</li>
                        </ul>
                        
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Token Utility</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                          <li>Leveling up warriors</li>
                          <li>Entry fees for premium tournaments</li>
                          <li>Purchase of in-game items and power-ups</li>
                          <li>Governance votes for protocol decisions</li>
                        </ul>
                        
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Acquisition Methods</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Staking NFT warriors</li>
                          <li>Winning tournament matches</li>
                          <li>Completing quests and achievements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#121218] p-6 rounded-lg">
                    <h3 className="text-xl font-['Press_Start_2P'] text-cyan-500 mb-4">Token Allocation</h3>
                    
                    <div className="w-full bg-gray-800 h-16 mb-8 rounded-lg overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-amber-500 h-full w-[40%] flex items-center justify-center">
                          <span className="font-['VT323'] text-sm">Players</span>
                        </div>
                        <div className="bg-purple-600 h-full w-[25%] flex items-center justify-center">
                          <span className="font-['VT323'] text-sm">Staking</span>
                        </div>
                        <div className="bg-cyan-500 h-full w-[15%] flex items-center justify-center">
                          <span className="font-['VT323'] text-sm">Team</span>
                        </div>
                        <div className="bg-green-500 h-full w-[10%] flex items-center justify-center">
                          <span className="font-['VT323'] text-sm">Marketing</span>
                        </div>
                        <div className="bg-pink-500 h-full w-[10%] flex items-center justify-center">
                          <span className="font-['VT323'] text-sm">Reserve</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-amber-400 mb-3">Players: 40%</h4>
                        <p className="text-gray-300 font-['VT323']">
                          Tournament rewards, battle victories, achievement milestones
                        </p>
                      </div>
                      
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-purple-400 mb-3">Staking: 25%</h4>
                        <p className="text-gray-300 font-['VT323']">
                          Rewards for NFT stakers and liquidity providers
                        </p>
                      </div>
                      
                      <div className="bg-[#17171f] p-6 rounded">
                        <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-3">Team & Reserve: 35%</h4>
                        <p className="text-gray-300 font-['VT323']">
                          Development (15%), Marketing (10%), Reserve fund (10%)
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl text-purple-500 mb-6">FAQ</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">Game & Gameplay</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">Why did you choose Solana for Gauntlet of SOLiders?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Solana was selected for several key advantages: sub-second transaction finality, 
                            low transaction fees, high throughput capacity, robust NFT infrastructure through 
                            Metaplex, and energy-efficient Proof-of-Stake consensus.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How does the battle system work technically?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            The battle system combines on-chain and off-chain components: players submit 
                            sealed moves using a commit-reveal scheme, move validity is verified cryptographically, 
                            and results are verified and recorded on-chain using a deterministic battle resolution 
                            that can be independently verified.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How do you prevent cheating in battles?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Multiple anti-cheating mechanisms are implemented: commit-reveal pattern prevents 
                            players from seeing opponent's moves before committing, server-side verification of 
                            all battle actions, deterministic battle resolution, cryptographic signatures for 
                            all player actions, and rate limiting to prevent exploitation of timing attacks.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">Technology & Security</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How do you ensure smart contract security?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Our multilayered security approach includes: multiple independent security audits 
                            from reputable firms, formal verification for critical components, comprehensive testing, 
                            bug bounty program, and emergency pause functionality for critical vulnerabilities.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">Can the smart contracts be upgraded if needed?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Yes, we implement upgradability with strict governance: program upgradability is 
                            managed through Solana's upgradable BPF loader, multisig approval process required 
                            for modifications, transparent upgrade process with community notification, and 
                            defined limits to protect user assets.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How do you handle chain congestion or outages?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            We implement several resilience strategies: transaction retry mechanisms with 
                            exponential backoff, state channel architecture for critical gameplay during chain 
                            congestion, local state maintenance with deferred on-chain reconciliation, and 
                            multiple RPC endpoint providers with automatic failover.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">Economics & Tokenomics</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How is the $EXP token technically implemented?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            The $EXP token implementation includes: SPL Token standard on Solana for maximum 
                            compatibility, fixed supply model with no mint authority after initial creation, 
                            automated distribution via on-chain staking contracts, and configurable emission 
                            schedules based on protocol parameters.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">What prevents token inflation or devaluation?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Multiple economic balancing mechanisms are employed: fixed total supply, token 
                            burning from gameplay activities, utility-driven demand, balanced release schedule, 
                            and governance-controlled emission rates that can adapt to market conditions.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How will NFT values be maintained long-term?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            NFT value is preserved through: continued utility in gameplay, strategic burning 
                            mechanisms, evolving attributes and abilities, integration with future games and 
                            experiences, governance rights, and status within the community ecosystem.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#121218] p-6 rounded-lg">
                      <h3 className="text-xl font-['Press_Start_2P'] text-amber-500 mb-4">Development & Timeline</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How can you deliver in just 30-60 days?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Our accelerated timeline is possible through: an elite team of blockchain and 
                            gaming veterans, reuse of battle-tested components, streamlined design process 
                            with clear scope limitations, parallel development workflows, and continuous 
                            integration methodologies.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">What happens after the initial launch?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Post-launch plans include: regular tournaments with escalating prize pools, 
                            seasonal content updates, expanded gameplay mechanics, community-driven feature 
                            development, and evolving tokenomics to sustain the ecosystem.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Press_Start_2P'] text-cyan-400 mb-2">How will you handle game balance and meta evolution?</h4>
                          <p className="text-gray-300 font-['VT323'] text-lg">
                            Game balance is maintained through: data-driven analytics of match outcomes, 
                            seasonal rebalancing of class abilities, community feedback channels, 
                            professional playtesting, and gradual introduction of new mechanics to 
                            avoid disruption.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WhitepaperPage; 