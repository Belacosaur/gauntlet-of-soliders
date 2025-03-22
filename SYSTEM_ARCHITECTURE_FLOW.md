# Gauntlet of SOLiders - System Architecture & Flow

This document provides a visual representation of how the Gauntlet of SOLiders game system works, including the interaction between frontend components, backend services, and smart contracts on the Solana blockchain.

## System Architecture Overview

```
┌───────────────────────────────────────────────────────────────────────┐
│                        CLIENT APPLICATIONS                             │
│                                                                       │
│  ┌───────────────┐    ┌───────────────────────┐                       │
│  │   Web Client   │    │   Magic Eden          │                       │
│  │   (Next.js)    │    │   (NFT Marketplace)   │                       │
│  └───────┬───────┘    └───────────┬───────────┘                       │
│          │                        │                                   │
└──────────┼────────────────────────┼───────────────────────────────────┘
           │                        │                                    
           ▼                        ▼                                    
┌──────────────────────────────────────────────────────────────────────┐
│                          API LAYER                                    │
│                                                                      │
│  ┌────────────────┐   ┌────────────────┐                             │
│  │  Game Service  │   │  User Service  │                             │
│  │                │   │                │                             │
│  └────────┬───────┘   └────────┬───────┘                             │
│           │                    │                                     │
└───────────┼────────────────────┼─────────────────────────────────────┘
            │                    │                                      
            ▼                    ▼                                      
┌───────────────────────────────────────────────────────────────────────┐
│                     BLOCKCHAIN INTEGRATION                             │
│                                                                       │
│  ┌───────────────────┐   ┌──────────────┐                             │
│  │  Solana Client    │   │  Web3 Auth   │                             │
│  │  Libraries        │   │              │                             │
│  └─────────┬─────────┘   └──────┬───────┘                             │
│            │                    │                                     │
└────────────┼────────────────────┼─────────────────────────────────────┘
             │                    │                                      
             ▼                    ▼                                      
┌───────────────────────────────────────────────────────────────────────┐
│                          SOLANA BLOCKCHAIN                            │
│                                                                       │
│  ┌────────────────────┐   ┌────────────────────┐   ┌────────────────┐│
│  │  NFT Standards     │   │  Battle Program    │   │ Treasury       ││
│  │  (Solana Token)    │   │  (Custom)          │   │ Program        ││
│  └────────────────────┘   └────────────────────┘   └────────────────┘│
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

## Data Flow & Interactions

### 1. NFT Minting & Ownership Flow (via Magic Eden)

```
┌──────────┐     ┌───────────┐     ┌───────────────┐     
│  Player  │────▶│ Web Client│────▶│ Magic Eden    │     
│          │◀────│           │◀────│ Marketplace   │     
└──────────┘     └───────────┘     └───────┬───────┘     
      │                                    │
      │                                    │
      │                                    ▼
      │                             ┌───────────────┐
      └─────────────────────────────│ Player Wallet │
                                    └───────────────┘
```

**Process:**
1. Player connects wallet to Web Client
2. Player is directed to Magic Eden for NFT minting/purchase
3. Magic Eden handles the minting process on Solana
4. NFT appears in Player's wallet
5. Web Client displays owned NFTs to player

### 2. Game Battle Flow

```
┌──────────┐     ┌───────────┐     ┌───────────────┐     ┌───────────────┐
│ Player 1 │────▶│ Web Client│────▶│ Game Service  │────▶│ Battle Program│
│          │     │           │     │               │     │               │
└──────────┘     └───────────┘     └───────┬───────┘     └───────┬───────┘
                                           │                     │
                                           ▼                     ▼
┌──────────┐     ┌───────────┐     ┌───────────────┐     ┌───────────────┐
│ Player 2 │────▶│ Web Client│────▶│ Game Service  │     │  NFT Verifier │
│          │     │           │     │               │     │               │
└──────────┘     └───────────┘     └───────────────┘     └───────────────┘
```

**Process:**
1. Players connect wallets and select their warrior NFTs
2. Game Service verifies NFT ownership through Solana
3. Players make battle moves on the grid (Rock/Paper/Scissors mechanics)
4. Moves are sent to Battle Program for verification and outcome determination
5. Battle Program executes game logic and returns results
6. Game Service updates UI with battle results
7. If tournament mode, Battle Program updates player rankings

### 3. Tournament & Prize Pool Flow

```
┌──────────┐     ┌───────────────┐     ┌───────────────┐
│ Players  │────▶│ Tournament    │────▶│ Battle Program│
│          │     │ Service       │     │               │
└──────────┘     └───────┬───────┘     └───────┬───────┘
                         │                     │
                         ▼                     ▼
┌──────────┐     ┌───────────────┐     ┌───────────────┐
│ Sponsors │────▶│ Treasury      │────▶│ Prize         │
│          │     │ Program       │     │ Distribution  │
└──────────┘     └───────────────┘     └───────────────┘
```

**Process:**
1. Tournament Service creates a new tournament on the Battle Program
2. Players register with entry fees (if applicable)
3. Tournament entry fees flow to Treasury Program
4. Sponsors can add additional funds to prize pool
5. Battle Program tracks wins/losses throughout tournament
6. At tournament conclusion, Prize Distribution smart contract executes
7. Winners receive SOL rewards based on tournament placement

## Smart Contract Architecture

### NFT Integration (using Magic Eden & Solana Token Program)

```
┌───────────────────────────────────────────────────────────┐
│               NFT Integration Architecture                │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Magic Eden     │    │  Solana Token Program     │    │
│  │  (Marketplace)  │    │  (NFT Standard)           │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Wallet         │    │  Game NFT Verification    │    │
│  │  Integration    │    │  (Ownership Check)        │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### Battle Program (Custom)

```
┌───────────────────────────────────────────────────────────┐
│                    Battle Program                         │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Game Logic     │    │  Matchmaking              │    │
│  │  (RPS Mechanic) │    │  (Player Pairing)         │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Battle Grid    │    │  Tournament Logic         │    │
│  │  (3x3 System)   │    │  (Brackets & Rankings)    │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Anti-Cheat     │    │  Class/Trait Bonuses      │    │
│  │  (Verification) │    │  (NFT Attributes)         │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### Treasury Program

```
┌───────────────────────────────────────────────────────────┐
│                   Treasury Program                        │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Escrow Logic   │    │  Prize Distribution       │    │
│  │  (Hold Funds)   │    │  (Winner Payments)        │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
│  ┌─────────────────┐    ┌───────────────────────────┐    │
│  │  Fee Collection │    │  Revenue Sharing          │    │
│  │  (Entry Fees)   │    │  (Protocol/DAO Split)     │    │
│  └─────────────────┘    └───────────────────────────┘    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

## Battle Mechanics Implementation

### Rock/Paper/Scissors Grid System

```
┌───────────────────────────────────────────┐
│             BATTLE GRID (3x3)              │
│                                           │
│   ┌─────────┬─────────┬─────────┐         │
│   │ Player 1│ Neutral │ Player 2│         │
│   │ Back    │ Back    │ Back    │         │
│   └─────────┼─────────┼─────────┘         │
│   ┌─────────┬─────────┬─────────┐         │
│   │ Player 1│ Neutral │ Player 2│         │
│   │ Middle  │ Middle  │ Middle  │         │
│   └─────────┼─────────┼─────────┘         │
│   ┌─────────┬─────────┬─────────┐         │
│   │ Player 1│ Neutral │ Player 2│         │
│   │ Front   │ Front   │ Front   │         │
│   └─────────┴─────────┴─────────┘         │
│                                           │
└───────────────────────────────────────────┘

┌───────────────────────────────────────────┐
│          MOVE VERIFICATION FLOW           │
│                                           │
│   1. Player submits move (R/P/S + Grid)   │
│   2. Move is encrypted on client          │
│   3. Both player moves submitted          │
│   4. Smart contract reveals & compares    │
│   5. Outcome determined by:               │
│      - R/P/S rules                        │
│      - Position bonuses                   │
│      - Character class modifiers          │
│   6. Damage calculated & applied          │
│   7. Grid position updated                │
│   8. Next round begins                    │
│                                           │
└───────────────────────────────────────────┘
```

## NFT-to-Game Attribute Mapping

```
┌──────────────────────────────────────────────────────────────────────┐
│                  NFT TRAIT TO GAME ATTRIBUTE MAPPING                  │
│                                                                      │
│  ┌────────────────┐   ┌────────────────────────────────────────┐    │
│  │  NFT Trait     │   │  Game Effect                           │    │
│  ├────────────────┼───┼────────────────────────────────────────┤    │
│  │  Class         │   │  Base stats & special ability          │    │
│  │  Weapon        │   │  Attack modifier & special effects     │    │
│  │  Armor         │   │  Defense rating & damage reduction     │    │
│  │  Helmet        │   │  Special ability modifier              │    │
│  │  Color Scheme  │   │  Cosmetic + minor faction bonus        │    │
│  │  Special Effect│   │  Unique battle perk                    │    │
│  │  Rarity Tier   │   │  Overall stat multiplier               │    │
│  └────────────────┘   └────────────────────────────────────────┘    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## Security Implementation

```
┌──────────────────────────────────────────────────────────────────────┐
│                       SECURITY MEASURES                              │
│                                                                      │
│  ┌────────────────┐   ┌────────────────────────────────────────┐    │
│  │  Challenge     │   │  Implementation                        │    │
│  ├────────────────┼───┼────────────────────────────────────────┤    │
│  │  Move Sniping  │   │  Encrypted submission with time locks  │    │
│  │  Ownership     │   │  On-chain verification of NFT owner    │    │
│  │  Verification  │   │  before battle participation           │    │
│  │  Result        │   │  Deterministic algorithm with seed     │    │
│  │  Manipulation  │   │  visible only after both moves locked  │    │
│  │  Bot Detection │   │  Rate limiting + captcha on client     │    │
│  │  Reward        │   │  Multi-signature approval for large    │    │
│  │  Distribution  │   │  tournament prize distributions        │    │
│  └────────────────┘   └────────────────────────────────────────┘    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

This document provides a visual representation of how the different components of the Gauntlet of SOLiders game system interact with each other and with the Solana blockchain. The architecture is designed to be scalable, secure, and efficient, leveraging the strengths of the Solana blockchain for NFT ownership verification, battle mechanics, and prize distribution. 