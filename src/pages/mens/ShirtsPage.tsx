import React from 'react';
import ProductGrid from '../../components/ProductGrid';
import { Product } from '../../types';

const shirts: Product[] = [
  {
    id: 1,
    name: 'Classic Oxford Shirt',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts',
    description: 'A timeless Oxford shirt crafted from premium cotton, perfect for both casual and formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Linen Summer Shirt',
    price: '$69',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts',
    description: 'Breathable linen shirt perfect for summer days.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 3,
    name: 'Denim Work Shirt',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts',
    description: 'Rugged denim work shirt with authentic details.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 4,
    name: 'Striped Cotton Shirt',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts',
    description: 'Classic striped cotton shirt for a refined casual look.',
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: false
  }
];

interface ShirtsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

export default function ShirtsPage({ onAddToCart, onAddToWaitlist }: ShirtsPageProps) {
  return (
    <ProductGrid
      title="Men's Shirts"
      description="Classic and contemporary shirts for every occasion"
      heroImage="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=2000&q=80"
      products={shirts}
      onAddToCart={onAddToCart}
      onAddToWaitlist={onAddToWaitlist}
    />
  );
}