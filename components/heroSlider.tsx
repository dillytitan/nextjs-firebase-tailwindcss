/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

type HeroImageCarouselProps = {
  images: string[];
};

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({ images }) => (
  <Splide options={{ type: 'loop', autoplay: true, interval: 3000, perPage: 1 }}>
    {images.map((image, index) => (
      <SplideSlide key={index}>
        <img src={image} alt={`Hero ${index}`} className="rounded-3xl" />
      </SplideSlide>
    ))}
  </Splide>
);

export default HeroImageCarousel;

