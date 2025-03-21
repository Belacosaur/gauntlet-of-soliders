import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Mechanics from './sections/Mechanics';
import PrizePool from './sections/PrizePool';
import Visuals from './sections/Visuals';
import SmartContracts from './sections/SmartContracts';
import CTA from './sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Mechanics />
        <PrizePool />
        <Visuals />
        <SmartContracts />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
