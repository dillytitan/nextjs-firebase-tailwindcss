
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const challenge = [
    { id: 1, name: 'MHA Ultra Rare', image: 'https://timelinecovers.pro/facebook-cover/download/anime-my-hero-academia-izuku-midoriya-katsuki-bakugou-boku-no-hero-academia-facebook-cover.jpg' },
    { id: 2, name: 'HK Ultra Rare', image: 'https://www.showtimeattractions.com.au/wp-content/uploads/Hello-Kitty-banner.jpg' },
    { id: 3, name: 'JJK Ultra Rare', image: 'https://pbs.twimg.com/media/Eljq4M_WoAAWHQp?format=webp&name=medium' },




  ];

  type ChallengesSliderProps = {
    challenges: { id: number; name: string; image: string }[];
  };
  
  const Challenges: React.FC<ChallengesSliderProps> = ({ challenges }) => {
    const [isVertical, setIsVertical] = useState(true);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        setIsVertical(window.innerWidth >= 640);
      }
  
      const handleResize = () => {
        setIsVertical(window.innerWidth >= 640);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className={isVertical ? 'w-full h-full border-l ml-2' : 'w-full border-none'}>
        <Splide
          options={{
            direction: isVertical ? 'ttb' : 'ltr',
            height: isVertical ? '50%' : 'auto',
            perPage: 2,
            breakpoints: {
                640: { 
                  perPage: 2,
                },
              },
          }}>
          {challenge.map((challenge) => (
          <SplideSlide key={challenge.id}>
            <div className="px-2 text-gray-600">

              <img src={challenge.image} alt={challenge.name} className="rounded-3xl" />
              <div className="relative p-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      {challenge.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-teal-600">
                    🏆 65% 
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
                  <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <button className="hidden font-extrabold bg-black text-white rounded-3xl px-4 py-2 mt-4 sm:mr-4 sm:flex items-center justify-center">View More</button>
    </div>
  );
};


export default Challenges;
