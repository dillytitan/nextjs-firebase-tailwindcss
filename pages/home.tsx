/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState } from 'react';

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


const Home2: NextPage = () => {
  const [activeTab, setActiveTab] = useState('Products'); 
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex max-h-3/4 mt-8 items-center justify-center">
      <div className="w-3/4 flex flex-col h-full space-y-4 overflow-hidden mr-4">
          {/* Hero Image Carousel Slider */}
          <div className="flex-grow">
            <Splide options={{ type: 'loop', autoplay: true, interval: 3000, perPage: 1 }}>
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <img src={image} alt={`Hero ${index}`} className="rounded-3xl" />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Horizontal Product Slider */}
          <div className="h-1/4">
            
          <div className="flex justify-evenly space-x-4 p-4  mt-2 mb-4 border-b uppercase">
            <button onClick={() => setActiveTab('Series')} className={activeTab === 'Series' ? 'text-blue-600 font-extrabold' : ''}>Series</button>
            <button onClick={() => setActiveTab('Products')} className={activeTab === 'Products' ? 'text-blue-600 font-extrabold' : ''}>Products</button>
            <button onClick={() => setActiveTab('Most Redeemed')} className={activeTab === 'Most Redeemed' ? 'text-blue-600' : ''}>Most Redeemed</button>
            <button onClick={() => setActiveTab('Most Redeemed')} className={activeTab === 'Most Redeemed' ? 'text-blue-600' : ''}>Challenges</button>
          </div>
            <Splide options={{ type: 'loop', perPage: 4 }}>
              {products.map((product) => (
                <SplideSlide key={product.id}>
                  <div className="p-2 space-x-4">
                    <img src={product.image} alt={product.name} className="rounded-3xl space-x-4" />
                    <h3 className="text-gray-600">{product.name}</h3>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        

        {/* Vertical Slider for Challenges */}
        <div className="w-1/4 h-1/2 ml-4 border-l pl-4">
          {/* <h2 className="text-gray-600 font-extrabold text-2xl">Challenges</h2> */}
          <Splide options={{ direction: 'ttb', height: '50%', perPage: 1 }}>
            {challenges.map((challenge) => (
              <SplideSlide key={challenge.id}>
                <div className="p-4 text-gray-600">
                  <h3>{challenge.name}</h3>
                  <img src={challenge.image} alt={challenge.name} className="rounded-3xl" />

                </div>
              </SplideSlide>
            ))}
          </Splide>
          <button className="font-extrabold bg-black text-white rounded-3xl px-4 py-2 mt-4 mr-4 flex items-center justify-center">View More</button>
        </div>
      </div>
    </>
  );
};

export default Home2;