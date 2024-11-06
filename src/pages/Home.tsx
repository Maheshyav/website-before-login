import React from 'react';
import ProductSlider from '../components/ProductSlider';
import ParallaxSection from '../components/ParallaxSection';
import FeaturedCollections from '../components/FeaturedCollections';
import TrendingProducts from '../components/TrendingProducts';
import FeatureHighlights from '../components/FeatureHighlights';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

export default function Home({ onAddToCart, onAddToWaitlist }: HomeProps) {
  return (
    <>
      <ProductSlider />
      <FeaturedCollections />
      <ParallaxSection />
      <TrendingProducts 
        onAddToCart={onAddToCart}
        onAddToWaitlist={onAddToWaitlist}
      />
      <FeatureHighlights />
    </>
  );
}