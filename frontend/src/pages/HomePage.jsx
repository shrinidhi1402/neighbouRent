import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import CategorySection from '../components/landing/CategorySection';
import HowItWorks from '../components/landing/HowItWorks';
import SustainabilityCTA from '../components/landing/SustainabilityCTA';
import Footer from '../components/landing/Footer';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="categories">
          <CategorySection />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="about">
          <SustainabilityCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
