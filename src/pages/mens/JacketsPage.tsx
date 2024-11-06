import React from 'react';
import ProductGrid from '../../components/ProductGrid';
import { Product } from '../../types';

const jackets: Product[] = [
  {
    id: 1,
    name: 'Leather Bomber Jacket',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets',
    description: 'Classic leather bomber jacket with premium details.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets',
    description: 'Timeless denim jacket with authentic wash.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 3,
    name: 'Wool Blazer',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets',
    description: 'Sophisticated wool blazer for formal occasions.',
    sizes: ['S', 'M', 'L'],
    inStock: true
  },
  {
    id: 4,
    name: 'Raincoat',
    price: '$179',
    image: 'https://images.unsplash.com/photo-1544736779-4ee183d05e51?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets',
    description: 'Waterproof raincoat with modern design.',
    sizes: ['M', 'L', 'XL'],
    inStock: false
  }
];

interface JacketsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

export default function JacketsPage({ onAddToCart, onAddToWaitlist }: JacketsPageProps) {
  return (
    <ProductGrid
      title="Men's Jackets"
      description="Stay stylish in any weather"
      heroImage="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=2000&q=80"
      products={jackets}
      onAddToCart={onAddToCart}
      onAddToWaitlist={onAddToWaitlist}
    />
  );
}