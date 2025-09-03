import React from 'react';
import { MapPin, Star, Heart, Share2, ShoppingBag } from 'lucide-react';

const Storefront = () => {
  const artisan = {
    name: 'Priya Sharma',
    location: 'Jaipur, Rajasthan',
    specialty: 'Block Print Textiles',
    rating: 4.9,
    reviews: 127,
    story: 'Third-generation artisan preserving the ancient art of Rajasthani block printing. Each piece tells a story of heritage, crafted with natural dyes and traditional wooden blocks passed down through generations.',
    image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const products = [
    {
      id: 1,
      name: 'Traditional Rajasthani Block Print Saree',
      price: 4500,
      image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Exquisite handwoven saree featuring traditional Rajasthani motifs',
      inStock: true
    },
    {
      id: 2,
      name: 'Handwoven Cotton Table Runner',
      price: 1200,
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beautiful table runner with intricate geometric patterns',
      inStock: true
    },
    {
      id: 3,
      name: 'Embroidered Cushion Cover Set',
      price: 2800,
      image: 'https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Set of 4 cushion covers with traditional mirror work',
      inStock: false
    },
    {
      id: 4,
      name: 'Handmade Pottery Vase',
      price: 1800,
      image: 'https://images.pexels.com/photos/1124725/pexels-photo-1124725.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant terracotta vase with traditional Bengali designs',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-orange-600">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{artisan.location}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {artisan.name}
              </h1>
              
              <p className="text-xl text-gray-600 font-medium">
                {artisan.specialty}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{artisan.rating}</span>
                  <span className="text-gray-600">({artisan.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {artisan.story}
              </p>
              
              <div className="flex space-x-4">
                <button className="flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                  <Heart className="h-5 w-5 mr-2" />
                  Follow Artisan
                </button>
                <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Store
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">{products.length}</p>
                  <p className="text-sm text-gray-600">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Handcrafted Collection</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-900">
                      Out of Stock
                    </span>
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  </div>
                  <button
                    disabled={!product.inStock}
                    className="flex items-center px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Notify Me'}
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

export default Storefront;