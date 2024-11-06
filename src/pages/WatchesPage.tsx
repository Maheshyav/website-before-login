import React, { useState, useMemo } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';
import ProductLightbox from '../components/ProductLightbox';
import { Product } from '../types';

interface WatchesPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

const watchesProducts: Product[] = [
  {
    id: 1,
    name: 'Luxury Chronograph',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Premium chronograph watch with Swiss movement.',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Advanced smartwatch with health monitoring features.',
    sizes: ['One Size'],
    inStock: true
  },
  {
    id: 3,
    name: 'Classic Gold Watch',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Timeless gold-plated watch with leather strap.',
    sizes: ['One Size'],
    inStock: false
  },
  {
    id: 4,
    name: 'Minimalist Watch',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    description: 'Clean, minimalist design with premium materials.',
    sizes: ['One Size'],
    inStock: true
  }
];

const categories = ['All', 'Luxury', 'Smart', 'Classic', 'Sport'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

export default function WatchesPage({ onAddToCart, onAddToWaitlist }: WatchesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredProducts = useMemo(() => {
    let filtered = [...watchesProducts];
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    switch (selectedSort) {
      case 'Price: Low to High':
        filtered.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        break;
      case 'Popular':
        // In a real app, you would sort by popularity metrics
        break;
      default: // 'Newest'
        break;
    }
    
    return filtered;
  }, [selectedCategory, selectedSort]);

  const handleQuickView = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? filteredProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedProduct(filteredProducts[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === filteredProducts.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedProduct(filteredProducts[newIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Watches"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Luxury Watches</h1>
            <p className="text-xl">Timeless elegance for every occasion</p>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-gray-50"
          >
            <Sliders className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-white border rounded-full px-4 py-2 pr-8 hover:bg-gray-50 cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
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

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}

      <ProductLightbox
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        showNavigation={filteredProducts.length > 1}
        onAddToCart={onAddToCart}
        onAddToWaitlist={onAddToWaitlist}
      />
    </div>
  );
}