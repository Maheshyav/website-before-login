import React from 'react';
import ProductGrid from '../../components/ProductGrid';
import { Product } from '../../types';

const pants: Product[] = [
  {
    id: 1,
    name: 'Premium Denim Jeans',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    category: 'Pants',
    description: 'Premium selvedge denim jeans with perfect fit.',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 2,
    name: 'Chino Trousers',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    category: 'Pants',
    description: 'Classic chino trousers for versatile style.',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 3,
    name: 'Slim Fit Dress Pants',
    price: '$119',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=800&q=80',
    category: 'Pants',
    description: 'Modern slim fit dress pants for formal occasions.',
    sizes: ['30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 4,
    name: 'Cargo Pants',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80',
    category: 'Pants',
    description: 'Functional cargo pants with multiple pockets.',
    sizes: ['30', '32', '34'],
    inStock: false
  }
];

interface PantsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

export default function PantsPage({ onAddToCart, onAddToWaitlist }: PantsPageProps) {
  return (
    <ProductGrid
      title="Men's Pants"
      description="From casual to formal, find your perfect fit"
      heroImage="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2000&q=80"
      products={pants}
      onAddToCart={onAddToCart}
      onAddToWaitlist={onAddToWaitlist}
    />
  );
}