import React, { useState, useMemo } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';
import ProductLightbox from '../components/ProductLightbox';
import { Product } from '../types';

interface KidsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
}

const kidsProducts: Product[] = [
  {
    id: 1,
    name: 'Colorful T-Shirt Set',
    price: '$39',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Fun and comfortable t-shirt set perfect for active kids.',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    inStock: true
  },
  {
    id: 2,
    name: 'Kids Denim Collection',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1519238360324-0fc58c85f8de?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Durable denim pieces designed for everyday adventures.',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    inStock: true
  },
  {
    id: 3,
    name: 'Party Dress',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Elegant party dress for special occasions.',
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y'],
    inStock: true
  },
  {
    id: 4,
    name: 'Sports Set',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    description: 'Comfortable sports set for active kids.',
    sizes: ['4-5Y', '5-6Y', '6-7Y', '7-8Y'],
    inStock: true
  }
];

const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Sets', 'Accessories'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

export default function KidsPage({ onAddToCart, onAddToWaitlist }: KidsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredProducts = useMemo(() => {
    let filtered = [...kidsProducts];
    
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
          src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=2000&q=80"
          alt="Kids Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Kids Collection</h1>
            <p className="text-xl">Fun and comfortable styles for little ones</p>
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