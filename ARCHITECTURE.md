# Gauntlet of SOLiders - Technical Architecture Document

## Table of Contents
1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [Smart Contract Architecture](#smart-contract-architecture)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Services](#backend-services)
6. [Database Design](#database-design)
7. [Security Considerations](#security-considerations)
8. [Development Roadmap](#development-roadmap)
9. [Technical Requirements](#technical-requirements)
10. [Integration Points](#integration-points)
11. [Testing Strategy](#testing-strategy)
12. [Deployment Strategy](#deployment-strategy)
13. [Scaling Considerations](#scaling-considerations)

---

## Overview

Gauntlet of SOLiders is a medieval NFT duel game built on the Solana blockchain where 8,192 pixel-art warriors enter a tournament, and after 13 rounds of combat, only one warrior remains to claim a 5,000 SOL grand prize. The game combines NFT technology, on-chain battles with a Rock/Paper/Scissors combo system, and tokenomics through an $EXP system.

### Core Technical Components:
- Solana blockchain integration for NFTs, tokens, and smart contracts
- Web-based frontend for user interface
- On-chain battle mechanics with randomness solutions
- Staking system for NFTs
- Tokenomics with $EXP
- Metadata management for NFT progression

---

## System Architecture

The system is designed with a Web3 architecture pattern, consisting of:

### High-Level Components

1. **Smart Contracts Layer** (Solana Programs)
   - Battle Contract (tournament logistics, battle mechanics, prize pool)
   - Staking Contract (NFT management, $EXP token economy, Double or Nothing gambling)

2. **Frontend Layer**
   - Web application (React/Next.js)
   - Wallet integration
   - Battle UI
   - NFT display and management
   - User dashboard

3. **Off-Chain Services**
   - Indexers for blockchain data
   - Notification service
   - Analytics and reporting
   - Tournament management

4. **Data Storage**
   - On-chain: NFT metadata, battle results, $EXP balances
   - Off-chain: Enhanced metadata, user preferences, battle history

### System Interaction Diagram

```
┌─────────────────┐          ┌───────────────────┐
│                 │          │                   │
│  Web Frontend   │◄────────►│  Solana Wallet    │
│  (React/Next.js)│          │  (Phantom, etc.)  │
│                 │          │                   │
└────────┬────────┘          └───────────────────┘
         │
         │
         ▼
┌─────────────────┐          ┌───────────────────┐
│                 │          │                   │
│  API Gateway    │◄────────►│  Off-chain        │
│  & Middleware   │          │  Services         │
│                 │          │                   │
└────────┬────────┘          └───────────────────┘
         │
         │
         ▼
┌──────────────────────────────────────────────┐
│                                              │
│             Solana Blockchain                │
│                                              │
│  ┌────────────────────┐ ┌─────────────────┐  │
│  │                    │ │                 │  │
│  │ Battle Contract    │ │ Staking Contract│  │
│  │ - Tournament       │ │ - NFT Staking   │  │
│  │ - Battle Logic     │ │ - $EXP Token    │  │
│  │ - Prize Pool       │ │ - Double or     │  │
│  │                    │ │   Nothing       │  │
│  └────────────────────┘ └─────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Smart Contract Architecture

The Solana programs (smart contracts) form the foundation of Gauntlet of SOLiders. Each program is designed to handle specific functionality:

### 1. NFT Minting Program

**Purpose**: Manages the creation and metadata of 8,192 warrior NFTs.

**Key Functions**:
- `mint_nft`: Creates a new warrior NFT with randomized class assignment
- `get_nft_metadata`: Retrieves warrior metadata
- `update_nft_level`: Updates warrior level after winning a duel
- `burn_nft`: Burns a losing warrior NFT

**Data Structures**:
```rust
struct WarriorMetadata {
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
}
```

**Technical Considerations**:
- Magic Eden integration for NFT marketplace
- Randomness for class assignment
- Secure metadata storage
- Gas optimization for bulk minting

### 2. Staking Program

**Purpose**: Manages the staking of NFTs to earn $EXP tokens.

**Key Functions**:
- `stake_nft`: Stakes a warrior NFT to earn $EXP
- `unstake_nft`: Unstakes a warrior NFT
- `claim_exp`: Claims earned $EXP tokens
- `get_staking_info`: Retrieves staking information for a warrior

**Data Structures**:
```rust
struct StakingInfo {
    owner: Pubkey,
    nft_mint: Pubkey,
    start_time: i64,
    last_claim_time: i64,
    exp_earned: u64,
    is_active: bool,
}
```

**Technical Considerations**:
- Variable earning rates based on class and level
- Time-based calculations for $EXP accrual
- Security against exploits (double spending, front-running)
- Gas optimization for mass claiming

### 3. Duel Program

**Purpose**: Manages the 1v1 duels between warriors.

**Key Functions**:
- `create_duel`: Creates a new duel between two warriors
- `submit_combo`: Submits a player's 3x3 combo grid
- `resolve_duel`: Compares combos and determines the winner
- `buy_bye`: Allows a player to skip a duel (rounds 1-4 only)

**Data Structures**:
```rust
struct Duel {
    id: u64,
    round: u8,
    warrior1: Pubkey,
    warrior2: Pubkey,
    warrior1_combo: Option<ComboGrid>,
    warrior2_combo: Option<ComboGrid>,
    winner: Option<Pubkey>,
    status: DuelStatus,
    created_at: i64,
    resolved_at: Option<i64>,
}

struct ComboGrid {
    grid: [[Move; 3]; 3],
}

enum Move {
    Sword,  // Scissors
    Sorcery, // Paper
    Shield,  // Rock
}

enum DuelStatus {
    Created,
    InProgress,
    Resolved,
    Bye,
}
```

**Technical Considerations**:
- Secure on-chain randomness for tie-breaking
- Gas optimization for battle resolution
- Timeout handling for inactive players
- Security against manipulation

### 4. $EXP Token Program

**Purpose**: Manages the $EXP token economy.

**Key Functions**:
- `mint_exp`: Mints new $EXP tokens (restricted to staking program)
- `transfer_exp`: Transfers $EXP between accounts
- `burn_exp`: Burns $EXP tokens (for entry fees)
- `get_exp_balance`: Retrieves $EXP balance for an account

**Data Structures**:
```rust
struct ExpToken {
    supply: u64,
    decimals: u8,
    authority: Pubkey,
}

struct ExpAccount {
    owner: Pubkey,
    balance: u64,
}
```

**Technical Considerations**:
- SPL Token integration
- Security for minting authority
- Fee management
- Transaction optimization

### 5. Prize Pool Program

**Purpose**: Manages the prize pool and distribution.

**Key Functions**:
- `initialize_pool`: Creates the prize pool from mint proceeds
- `stake_pool`: Stakes the prize pool for additional rewards
- `distribute_prizes`: Distributes prizes to winners after tournament
- `get_pool_info`: Retrieves information about the prize pool

**Data Structures**:
```rust
struct PrizePool {
    total_amount: u64,
    staked_amount: u64,
    staking_rewards: u64,
    is_distributed: bool,
    authority: Pubkey,
}

struct PrizeDistribution {
    rank: u8,
    amount: u64,
    recipient: Option<Pubkey>,
    is_claimed: bool,
}
```

**Technical Considerations**:
- Secure multi-signature control
- Time-locked funds
- Transparent distribution
- Integration with Pesky Penguins validator

---

## Frontend Architecture

The frontend application provides the user interface for players to interact with the game.

### Technology Stack

- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API + SWR for data fetching
- **Web3 Integration**: Solana Web3.js, Wallet Adapter
- **Animation**: Framer Motion
- **Asset Loading**: NextJS Image Optimization

### Key Components

#### 1. Core Components

- **WalletConnector**: Manages wallet connection and authentication
- **NFTViewer**: Displays owned NFTs with metadata
- **StakingInterface**: UI for staking/unstaking NFTs
- **BattleArena**: Interface for battles and combo selection
- **ExpManager**: Displays and manages $EXP tokens
- **TournamentBracket**: Visual representation of tournament progress

#### 2. User Flows

**NFT Minting Flow**:
1. Connect wallet
2. Select mint quantity
3. Approve transaction
4. View minted NFTs

**Staking Flow**:
1. Select NFT to stake
2. Approve staking transaction
3. Monitor $EXP accrual
4. Claim $EXP or unstake

**Battle Flow**:
1. Enter tournament round
2. Pay $EXP entry fee
3. Select combo moves on 3x3 grid (or automate)
4. Submit combo
5. Wait for opponent and battle resolution
6. View results (win/loss)
7. If victorious, option to enter Double or Nothing gambling system

**Double or Nothing Gambling Flow**:
1. After battle victory, presented with gambling option
2. Choose risk level (25%, 50%, 75%, or 100% of winnings)
3. Confirm gambling transaction
4. Animated outcome sequence reveals double winnings or loss
5. Updated $EXP balance reflected in account

#### 3. UI Design

- Pixel art style consistent with game theme
- Responsive design for mobile and desktop
- Accessible interface with proper contrast and readability
- Loading states and error handling

---

## Backend Services

While most functionality exists on-chain, several off-chain services enhance the user experience:

### 1. Indexer Service

**Purpose**: Indexes blockchain data for faster queries.

**Components**:
- Solana RPC listener
- Event processor
- Database storage
- GraphQL API

**Technical Stack**:
- Node.js
- GraphQL
- PostgreSQL
- Redis for caching

### 2. Notification Service

**Purpose**: Alerts users about game events.

**Features**:
- Battle reminders
- Tournament round start notifications
- Results announcements
- Staking rewards updates

**Technical Stack**:
- WebSockets for real-time updates
- Push notifications (web/mobile)
- Email service integration

### 3. Tournament Management Service

**Purpose**: Manages tournament rounds and matchmaking.

**Features**:
- Round scheduling
- Matchmaking algorithm
- Timeout handling
- Statistical reporting

**Technical Stack**:
- Node.js
- Scheduled jobs (cron)
- State machine for tournament progression

---

## Database Design

The system uses a hybrid data storage approach:

### On-Chain Data

Stored directly on the Solana blockchain:
- NFT ownership and metadata
- $EXP balances
- Staking records
- Battle results
- Prize distribution

### Off-Chain Data

Stored in PostgreSQL:
- Enhanced NFT metadata (for faster rendering)
- User preferences
- Historical battle details
- Analytics data
- Tournament statistics

### Database Schema

**NFT Table**:
```sql
CREATE TABLE nfts (
    mint_address TEXT PRIMARY KEY,
    owner_address TEXT NOT NULL,
    class TEXT NOT NULL,
    level INTEGER NOT NULL,
    exp_multiplier NUMERIC(3,2) NOT NULL,
    win_count INTEGER NOT NULL DEFAULT 0,
    total_battles INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    metadata JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Battles Table**:
```sql
CREATE TABLE battles (
    id SERIAL PRIMARY KEY,
    round INTEGER NOT NULL,
    warrior1_mint TEXT NOT NULL REFERENCES nfts(mint_address),
    warrior2_mint TEXT NOT NULL REFERENCES nfts(mint_address),
    warrior1_combo JSONB,
    warrior2_combo JSONB,
    winner_mint TEXT REFERENCES nfts(mint_address),
    status TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE
);
```

**Staking Table**:
```sql
CREATE TABLE staking (
    id SERIAL PRIMARY KEY,
    nft_mint TEXT NOT NULL REFERENCES nfts(mint_address),
    owner_address TEXT NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    last_claim_time TIMESTAMP WITH TIME ZONE NOT NULL,
    exp_earned BIGINT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);
```

---

## Security Considerations

Security is paramount for blockchain applications. Key security considerations include:

### 1. Smart Contract Security

- **Audit Requirements**: Professional audit of both Battle and Staking Contracts by reputable firms (e.g., CertiK, Halborn)
- **Simplified Attack Surface**: Reduced complexity with just two contracts minimizes potential security vulnerabilities
- **Secure Randomness**: Verified secure randomness for battle outcomes and Double or Nothing gambling system
- **Access Control**: Proper permission management with role-based controls for tournament and prize functions
- **Transaction Guards**: Protection against transaction manipulation in high-value operations
- **Economic Analysis**: Thorough testing of the Double or Nothing gambling mechanics to prevent economic exploits

### 2. Frontend Security

- **Wallet Connection**: Secure wallet connection protocols
- **Transaction Signing**: Clear transaction previews before signing
- **API Security**: Rate limiting, input validation
- **Authentication**: Secure session management
- **XSS Protection**: Content Security Policy, input sanitization

### 3. Data Security

- **Private Keys**: Never store private keys
- **Sensitive Data**: Minimize on-chain storage of sensitive data
- **PII Handling**: Comply with data protection regulations
- **Backup Strategy**: Regular backups of off-chain data

### 4. Operational Security

- **Deployment Keys**: Secure management of deployment keys
- **Monitoring**: Continuous monitoring for suspicious activities
- **Incident Response**: Documented incident response procedures
- **Updates**: Secure update mechanism for smart contracts

---

## Development Roadmap

The development is structured in phases:

### Phase 1: Foundation (2-3 months)
- Smart contract architecture design
- Core contract development (NFT, $EXP token)
- Frontend wallet integration
- Basic NFT rendering

### Phase 2: Core Mechanics (2-3 months)
- Staking system implementation
- Duel mechanics
- Battle UI development
- Testing environment

### Phase 3: Tournament System (1-2 months)
- Round management
- Matchmaking system
- Tournament UI
- Prize distribution logic

### Phase 4: Polish & Testing (1-2 months)
- UI/UX refinement
- Performance optimization
- Security audits
- Community testing

### Phase 5: Launch & Maintenance (Ongoing)
- Public launch
- Bug fixes
- Tournament management
- Community support

---

## Technical Requirements

### Development Environment

- **Solana Development**:
  - Rust 1.62+
  - Solana CLI 1.14+
  - Anchor Framework 0.25+
  - Solana development cluster

- **Frontend Development**:
  - Node.js 18+
  - TypeScript 4.8+
  - Next.js 15+
  - Tailwind CSS 3+

- **Backend Development**:
  - Node.js 18+
  - PostgreSQL 14+
  - Redis 6+

### Production Environment

- **Blockchain**:
  - Solana Mainnet
  - RPC node providers (e.g., Quicknode, Alchemy)
  - Magic Eden for NFT trading and minting

- **Hosting**:
  - Frontend: Vercel/Netlify
  - Backend: AWS/GCP
  - Database: Managed PostgreSQL service

- **Infrastructure**:
  - CI/CD pipelines
  - Monitoring tools
  - Backup solutions

---

## Integration Points

### 1. Wallet Integration

- Phantom Wallet
- Solflare
- Other Solana wallets via Wallet Adapter

### 2. Blockchain RPC Providers

- Quicknode
- Alchemy
- Triton

### 3. NFT Marketplaces

- Magic Eden
- OpenSea
- Tensor

### 4. External Services

- Discord (community, notifications)
- Twitter (announcements)
- Analytics platforms

---

## Testing Strategy

A comprehensive testing strategy ensures the game functions correctly:

### 1. Smart Contract Testing

- **Unit Tests**: Test individual functions
- **Integration Tests**: Test contract interactions
- **Security Tests**: Test for vulnerabilities
- **Stress Tests**: Test under high load

**Tools**:
- Rust test framework
- Anchor test framework
- Fuzzing tools

### 2. Frontend Testing

- **Unit Tests**: Test UI components
- **Integration Tests**: Test user flows
- **E2E Tests**: Test complete scenarios

**Tools**:
- Jest
- React Testing Library
- Cypress

### 3. System Testing

- **Performance Testing**: Ensure system handles expected load
- **Scalability Testing**: Test system under growing load
- **Security Testing**: Penetration testing

### 4. User Testing

- **Alpha Testing**: Internal team testing
- **Beta Testing**: Limited external user testing
- **Usability Testing**: Test user experience

---

## Deployment Strategy

### 1. Smart Contract Deployment

1. **Testnet Deployment**:
   - Deploy to Solana Devnet
   - Comprehensive testing
   - Security audit

2. **Mainnet Deployment**:
   - Controlled deployment with monitoring
   - Multi-signature authority
   - Emergency procedures in place

### 2. Frontend Deployment

1. **Staging Environment**:
   - Connected to Testnet
   - QA and testing

2. **Production Environment**:
   - Connected to Mainnet
   - Blue-green deployment
   - CDN distribution

### 3. Upgrade Strategy

- **Smart Contracts**: Upgradable program design
- **Frontend**: Continuous deployment with version control
- **Database**: Migration scripts for schema changes

---

## Scaling Considerations

As user base grows, scaling becomes important:

### 1. Blockchain Scaling

- **RPC Load Balancing**: Multiple RPC providers
- **Transaction Optimization**: Batching where possible
- **State Compression**: Efficient on-chain data storage

### 2. Frontend Scaling

- **CDN**: Global content delivery
- **Static Generation**: Pre-rendered content
- **Caching**: Aggressive caching strategies

### 3. Backend Scaling

- **Horizontal Scaling**: Multiple service instances
- **Database Sharding**: For growing data
- **Caching Layer**: Redis/Memcached

### 4. Monitoring & Alerting

- **Performance Metrics**: Track system performance
- **Error Tracking**: Monitor and alert on errors
- **User Metrics**: Track user engagement

---

This architecture document provides a comprehensive technical blueprint for the development of Gauntlet of SOLiders. It covers all aspects of the system from smart contracts to frontend design, ensuring a cohesive development approach.

The implementation should follow this architecture while allowing for adjustments based on technical discoveries during development. Regular reviews of this document should be conducted to keep it aligned with the evolving project requirements.

### NFT Architecture

#### Smart Contract Integration

- Solana Token Program for NFT implementation
- Magic Eden marketplace integration for minting and trading
- NFT metadata stored on Arweave for permanence
- Token-controlled access to game features
- Asset validation for gameplay mechanics

### Third-Party Integrations

#### Blockchain Ecosystem

- Solana RPC providers for network access
- Magic Eden for NFT marketplace integration
- Phantom/Solflare wallet integration
- Arweave for decentralized storage 