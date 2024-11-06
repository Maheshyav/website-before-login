import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Package, LogOut } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import ProductEditor from './ProductEditor';
import { Product } from '../types';

export default function AdminDashboard() {
  const { logout } = useAdmin();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductUpdate = (updatedProduct: Product) => {
    // In a real app, this would update the product in the database
    console.log('Product updated:', updatedProduct);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/settings"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Products
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      48
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          {/* Add more overview cards as needed */}
        </div>

        {/* Product Management Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Product Management</h2>
          
          {selectedProduct ? (
            <ProductEditor
              product={selectedProduct}
              onSave={handleProductUpdate}
            />
          ) : (
            <p className="text-gray-500">Select a product to edit its details.</p>
          )}
        </div>
      </div>
    </div>
  );
}