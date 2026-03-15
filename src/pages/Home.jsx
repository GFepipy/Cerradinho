import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Differentials from '../components/Differentials';
import AboutUs from '../components/AboutUs';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import Contact from '../components/Contact';

function Home() {
  return (
    <main className="flex-1 w-full mx-auto flex flex-col items-center">
      <Hero />
      <ProductShowcase />
      <Differentials />
      <AboutUs />
      <Clients />
      <Testimonials />
      <News />
      <Contact />
    </main>
  );
}

export default Home;
