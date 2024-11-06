import React, { useState } from 'react';
import ProductLightbox from './ProductLightbox';
import { Product } from '../types';

interface ProductGridProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

export default function ProductGrid({ 
  title, 
  description, 
  heroImage, 
  products,
  onAddToCart,
  onAddToWaitlist
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const handleQuickView = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleQuickView(product, index)}
                  className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Quick View
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <ProductLightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={products.length > 1}
        onAddToCart={onAddToCart}
        onAddToWaitlist={onAddToWaitlist}
      />
    </div>
  );
}