import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Heart, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Descriptions',
      description: 'Transform simple product photos into compelling, culturally-rich stories that connect with buyers.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Reach customers worldwide with multilingual content and cross-cultural storytelling.'
    },
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Preserve and celebrate traditional crafts while adapting to modern digital marketplaces.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Marketing',
      description: 'Generate social media content, ad copy, and promotional materials that drive sales.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 pt-16 pb-32 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors">
                  Empower
                  <span className="text-orange-600"> Artisans</span>
                  <br />
                  with AI Magic
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Transform traditional crafts into compelling digital stories. Our AI creates 
                  beautiful product descriptions, marketing content, and personalized storefronts 
                  that honor cultural heritage while driving modern sales.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/upload"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/marketing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-semibold rounded-lg border-2 border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 hover:bg-orange-50 dark:hover:bg-gray-700"
                >
                  Marketing Tools
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <video
                  src="/AI_Generates_Product_Video_Content.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">AI Generated</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">In seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Bridging Tradition with Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Our AI understands the cultural significance of traditional crafts and helps 
              artisans tell their stories in ways that resonate with modern buyers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange-100 dark:hover:border-orange-800"
                >
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Craft Business?
          </h2>
          <p className="text-xl text-orange-100 dark:text-orange-200 mb-8 leading-relaxed">
            Join thousands of artisans who are already using AI to create compelling 
            product stories and reach customers worldwide.
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;