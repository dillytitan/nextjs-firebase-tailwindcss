/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


type HeroImageCarouselProps = {
  images: string[];
};

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({ images }) => (
  <div className="hero-carousel-container">
    <div className="flex-grow">
    <Splide
      options={{
        type: 'loop',
        direction: 'ttb',
        autoplay: true,
        interval: 3000,
        pagination: true,
        height: '21rem',
        perPage: 1,

        arrows: true, // Enable arrows
      }}
      
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <img src={image} alt={`Hero ${index}`} className="rounded-3xl" />
        </SplideSlide>
      ))}
    </Splide>
    </div>
  </div>
);

export default HeroImageCarousel;
