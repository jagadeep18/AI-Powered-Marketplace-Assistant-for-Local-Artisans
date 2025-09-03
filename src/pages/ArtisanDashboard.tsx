import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Eye, TrendingUp, Users, DollarSign, BarChart3, Sparkles } from 'lucide-react';

const ArtisanDashboard = () => {
  const [artisan] = useState({
    name: 'Priya Sharma',
    location: 'Jaipur, Rajasthan',
    specialty: 'Block Print Textiles',
    products: 12,
    views: 2847,
    sales: 156,
    revenue: 45280
  });

  const recentProducts = [
    {
      id: 1,
      name: 'Traditional Rajasthani Block Print Saree',
      image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 245,
      status: 'Active',
      aiGenerated: true
    },
    {
      id: 2,
      name: 'Handwoven Cotton Table Runner',
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 189,
      status: 'Active',
      aiGenerated: true
    },
    {
      id: 3,
      name: 'Embroidered Cushion Cover Set',
      image: 'https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 167,
      status: 'Draft',
      aiGenerated: false
    }
  ];

  const stats = [
    { label: 'Total Products', value: artisan.products, icon: BarChart3, color: 'blue' },
    { label: 'Product Views', value: artisan.views.toLocaleString(), icon: Eye, color: 'green' },
    { label: 'Happy Customers', value: artisan.sales, icon: Users, color: 'purple' },
    { label: 'Revenue (₹)', value: artisan.revenue.toLocaleString(), icon: DollarSign, color: 'orange' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {artisan.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {artisan.name}!</h1>
              <p className="text-gray-600">{artisan.specialty} • {artisan.location}</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Link
              to="/upload"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Product
            </Link>
            <Link
              to="/marketing"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Marketing Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-50 text-blue-600',
            green: 'bg-green-50 text-green-600',
            purple: 'bg-purple-50 text-purple-600',
            orange: 'bg-orange-50 text-orange-600'
          };
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Products */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Products</h2>
          <Link
            to="/upload"
            className="text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            Add New Product
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProducts.map((product) => (
            <div key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    product.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
                  </span>
                  {product.aiGenerated && (
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI Enhanced
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {product.views} views
                  </span>
                  <button className="text-orange-600 hover:text-orange-700 font-medium">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboard;