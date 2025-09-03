export interface Artisan {
  id: string;
  name: string;
  location: string;
  specialty: string;
  story: string;
  rating: number;
  reviews: number;
  image: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  artisanId: string;
  category: string;
  materials: string[];
  inStock: boolean;
  featured: boolean;
  aiGenerated: {
    title: boolean;
    description: boolean;
    story: boolean;
    marketing: boolean;
  };
}

export interface MarketingContent {
  platform: string;
  caption: string;
  hashtags: string[];
  cta: string;
  generatedAt: Date;
}

export interface AIGeneratedContent {
  title: string;
  description: string;
  story: string;
  keywords: string[];
  marketing: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
}