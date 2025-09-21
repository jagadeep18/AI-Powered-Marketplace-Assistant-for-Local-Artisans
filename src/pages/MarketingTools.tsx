import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle, Copy, Download, Sparkles } from 'lucide-react';
import { generateMarketingContent } from '../utils/aiMock';

const MarketingTools = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const products = [
    { id: '1', name: 'Traditional Rajasthani Block Print Saree', image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: '2', name: 'Handwoven Cotton Table Runner', image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: '3', name: 'Embroidered Cushion Cover Set', image: 'https://images.pexels.com/photos/6585610/pexels-photo-6585610.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'pink' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'blue' },
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, color: 'green' }
  ];

  const handleGenerate = async () => {
    if (!selectedProduct) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const content = generateMarketingContent(platform, selectedProduct);
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Marketing Content Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors">
          Create compelling social media content and promotional materials with the power of AI.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors">Generate Content</h2>
          
          <div className="space-y-6">
            {/* Product Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                Select Product
              </label>
              <div className="grid grid-cols-1 gap-3">
                {products.map((product) => (
                  <label key={product.id} className="cursor-pointer">
                    <input
                      type="radio"
                      name="product"
                      value={product.id}
                      checked={selectedProduct === product.id}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                      selectedProduct === product.id 
                        ? 'border-orange-600 bg-orange-50' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <span className="font-medium text-gray-900 dark:text-white flex-1 transition-colors">
                        {product.name}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors">
                Platform
              </label>
              <div className="grid grid-cols-3 gap-3">
                {platforms.map((platformOption) => {
                  const Icon = platformOption.icon;
                  const colorClasses = {
                    pink: 'border-pink-600 bg-pink-50 text-pink-600',
                    blue: 'border-blue-600 bg-blue-50 text-blue-600',
                    green: 'border-green-600 bg-green-50 text-green-600'
                  };
                  
                  return (
                    <label key={platformOption.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="platform"
                        value={platformOption.id}
                        checked={platform === platformOption.id}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`flex flex-col items-center space-y-2 p-4 rounded-lg border-2 transition-all ${
                        platform === platformOption.id 
                          ? colorClasses[platformOption.color as keyof typeof colorClasses]
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}>
                        <Icon className="h-6 w-6" />
                        <span className="text-sm font-medium">{platformOption.name}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!selectedProduct || isGenerating}
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate Content
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generated Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors">Generated Content</h2>
          
          {!generatedContent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">Select a product and platform to generate content</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Caption */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">Caption</label>
                  <button
                    onClick={() => copyToClipboard(generatedContent.caption)}
                    className="flex items-center text-sm text-orange-600 hover:text-orange-700 dark:hover:text-orange-500"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line transition-colors">
                    {generatedContent.caption}
                  </p>
                </div>
              </div>

              {/* Hashtags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors">Hashtags</label>
                <div className="flex flex-wrap gap-2">
                  {generatedContent.hashtags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">Call to Action</label>
                  <button
                    onClick={() => copyToClipboard(generatedContent.cta)}
                    className="flex items-center text-sm text-orange-600 hover:text-orange-700 dark:hover:text-orange-500"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </button>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800 transition-colors">
                  <p className="text-orange-800 dark:text-orange-300 font-medium transition-colors">
                    {generatedContent.cta}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Save Content
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketingTools;