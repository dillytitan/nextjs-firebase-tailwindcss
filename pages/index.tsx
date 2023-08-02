/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState } from 'react';
import Challenges from "../components/challenge";
import ProductSlider from "../components/productSlider";
import HeroImageCarousel from "../components/heroSlider";

  const images = [
    'https://figpin.com/cdn/shop/files/GIFT_CARDS_COLOR_GENERIC_2048x.jpg?v=1683044828',
    'https://figpin.com/cdn/shop/files/GIFT_CARDS_COLOR_GENERIC_2048x.jpg?v=1683044828',
    'https://figpin.com/cdn/shop/files/GIFT_CARDS_COLOR_GENERIC_2048x.jpg?v=1683044828',
    
  ];

  const products = [
    { id: 1, name: 'Product 1', image: '/S1.png' },
    { id: 2, name: 'Product 2', image: '/S2.png' },
    { id: 3, name: 'Product 3', image: '/S3.png' },
    { id: 3, name: 'Product 3', image: '/S4.png' },
  ];

  const challenges = [
    { id: 1, name: 'Challenge 1', image: 'https://timelinecovers.pro/facebook-cover/download/anime-my-hero-academia-izuku-midoriya-katsuki-bakugou-boku-no-hero-academia-facebook-cover.jpg' },
    { id: 2, name: 'Challenge 2', image: 'https://pbs.twimg.com/media/Eljq4M_WoAAWHQp?format=webp&name=medium' },
    { id: 3, name: 'Challenge 3', image: 'https://www.showtimeattractions.com.au/wp-content/uploads/Hello-Kitty-banner.jpg' },



  ];


const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState('Products'); 
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col sm:flex-row max-h-3/4 mt-8 items-center justify-center">
        <div className="w-full sm:w-3/4 flex flex-col h-full space-y-2 overflow-hidden">
          {/* Hero Image Carousel Slider */}
          <div className="flex-grow">
            <HeroImageCarousel images={images} />
          </div>
          <div className="flex justify-evenly space-x-4 p-4  mt-2 mb-4 border-b uppercase">
            <button onClick={() => setActiveTab('Series')} className={activeTab === 'Series' ? 'text-blue-600 font-extrabold' : ''}>Series</button>
            <button onClick={() => setActiveTab('Products')} className={activeTab === 'Products' ? 'text-blue-600 font-extrabold' : ''}>Products</button>
            <button onClick={() => setActiveTab('Most Redeemed')} className={activeTab === 'Most Redeemed' ? 'text-blue-600' : ''}>Most Redeemed</button>
            <button onClick={() => setActiveTab('Most Redeemed')} className={activeTab === 'Most Redeemed' ? 'text-blue-600' : ''}>Challenges</button>
          </div>
          {/* Horizontal Product Slider */}
          <div className="h-1/4 sm:h-auto">
            <div className="flex justify-evenly space-x-4 p-4mb-4uppercase">
            </div>
            <ProductSlider products={products} />
          </div>
        </div>

        <div className="w-full sm:w-1/4 h-1/2 sm:h-auto sm:ml-4 sm:pl-4">
          <Challenges challenges={challenges} />
          
        </div>
      </div>
    </>
  );
};

export default Home;