import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import ProductLightbox from './ProductLightbox';
import { Product } from '../types';

interface TrendingProductsProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Oxford Shirt',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    description: 'A timeless Oxford shirt crafted from premium cotton, perfect for both casual and formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Floral Summer Dress',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    description: 'Light and airy floral dress, ideal for summer days and special occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 3,
    name: 'Kids Denim Collection',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Durable and stylish denim pieces designed for active kids.',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    inStock: true
  },
  {
    id: 4,
    name: 'Luxury Chronograph Watch',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Premium chronograph watch featuring Swiss movement and sapphire crystal.',
    sizes: ['One Size'],
    inStock: false
  },
  {
    id: 5,
    name: 'Designer Handbag',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    description: 'Elegant designer handbag made from genuine leather with gold-tone hardware.',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 6,
    name: 'Premium Denim Jeans',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    category: 'Men',
    description: 'Premium selvedge denim jeans with a perfect slim fit and exceptional durability.',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true
  },
  {
    id: 7,
    name: 'Kids Party Dress',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Charming party dress for special occasions, featuring delicate details and comfortable fit.',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    inStock: true
  },
  {
    id: 8,
    name: 'Smart Watch Pro',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Advanced smartwatch with health monitoring features and premium build quality.',
    sizes: ['One Size'],
    inStock: true
  }
];

export default function TrendingProducts({ onAddToCart, onAddToWaitlist }: TrendingProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleQuickView = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedProduct(products[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedProduct(products[newIndex]);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleQuickView(product, index)}
                    className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductLightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={true}
        onAddToCart={onAddToCart}
        onAddToWaitlist={onAddToWaitlist}
      />
    </section>
  );
}