/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

type ProductSliderProps = {
  products: { id: number; name: string; image: string }[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => (
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
);

export default ProductSlider;