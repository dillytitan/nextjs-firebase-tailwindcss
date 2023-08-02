
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const challenge = [
    { id: 1, name: 'Challenge 1', image: 'https://timelinecovers.pro/facebook-cover/download/anime-my-hero-academia-izuku-midoriya-katsuki-bakugou-boku-no-hero-academia-facebook-cover.jpg' },
    { id: 2, name: 'Challenge 2', image: 'https://pbs.twimg.com/media/Eljq4M_WoAAWHQp?format=webp&name=medium' },
    { id: 3, name: 'Challenge 3', image: 'https://www.showtimeattractions.com.au/wp-content/uploads/Hello-Kitty-banner.jpg' },



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
      <div className={isVertical ? 'w-full h-full ml-4 border-l pl-4' : 'w-full mt-8 border-none'}>
        <Splide
          options={{
            direction: isVertical ? 'ttb' : 'ltr',
            height: isVertical ? '50%' : 'auto',
            perPage: 1
          }}>
          {challenge.map((challenge) => (
            <SplideSlide key={challenge.id}>
              <div className="p-4 text-gray-600">
                <h3>{challenge.name}</h3>
                <img src={challenge.image} alt={challenge.name} className="rounded-3xl" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <button className="hidden font-extrabold bg-black text-white rounded-3xl px-4 py-2 mt-4 sm:mr-4 sm:flex items-center justify-center">View More</button>
      </div>
    );
  };

export default Challenges;
