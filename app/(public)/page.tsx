import About from '@/section/About';
import Contact from '@/section/Contact';
import Faq from '@/section/Faq';
import Hero from '@/section/Hero';
import ProductsProcess from '@/section/ProductsProcess';
import React from 'react';

function page() {
  return (
    <div className="w-full ">
      <Hero />
      <About />
      <ProductsProcess />
      <Faq />
      <Contact />
    </div>
  );
}

export default page;
