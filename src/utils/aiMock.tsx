// Mock AI responses to simulate real AI functionality
export const generateProductContent = (artisanInfo: any) => {
  const titles = [
    `Handcrafted ${artisanInfo.tradition} by ${artisanInfo.name}`,
    `Traditional ${artisanInfo.material} Masterpiece`,
    `Authentic ${artisanInfo.tradition} - Heritage Collection`,
    `${artisanInfo.location} Artisan Special - ${artisanInfo.material} Craft`
  ];

  const descriptions = [
    `This exquisite piece represents the finest traditions of ${artisanInfo.tradition}, meticulously crafted by ${artisanInfo.name} from ${artisanInfo.location}. Using premium ${artisanInfo.material} and time-honored techniques passed down through generations, each item tells a unique story of cultural heritage and artistic mastery. The intricate details showcase the dedication and skill that goes into preserving these ancient crafts for modern appreciation. Perfect for those who value authenticity, sustainability, and the beauty of handmade artistry.`,
    
    `Created with love and expertise by ${artisanInfo.name}, this stunning example of ${artisanInfo.tradition} embodies centuries of cultural wisdom. The careful selection of ${artisanInfo.material} and traditional methods ensures each piece is not just a product, but a work of art that carries the soul of ${artisanInfo.location}'s rich heritage. Every detail reflects the artisan's commitment to excellence and the preservation of indigenous crafts that might otherwise be lost to time.`
  ];

  const stories = [
    `Meet ${artisanInfo.name}, a passionate guardian of ${artisanInfo.tradition} from the culturally rich region of ${artisanInfo.location}. Growing up surrounded by the ancient art of working with ${artisanInfo.material}, ${artisanInfo.name} learned these sacred techniques from master artisans who believed that every creation should carry the spirit of its maker. Today, ${artisanInfo.name} continues this beautiful legacy, transforming raw ${artisanInfo.material} into extraordinary pieces that bridge the gap between traditional craftsmanship and contemporary living. Each creation is not just a product, but a piece of living history, carefully crafted to bring the warmth and authenticity of Indian heritage into your home.`,
    
    `${artisanInfo.name}'s journey began in the workshops of ${artisanInfo.location}, where the art of ${artisanInfo.tradition} has flourished for generations. Learning from elder artisans who treated ${artisanInfo.material} as a sacred medium, ${artisanInfo.name} discovered that true craftsmanship goes beyond technique—it's about infusing each piece with cultural memory and personal devotion. Through patient hands and an artistic soul, ${artisanInfo.name} transforms humble ${artisanInfo.material} into extraordinary creations that tell stories of resilience, beauty, and the enduring power of traditional Indian crafts.`
  ];

  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    story: stories[Math.floor(Math.random() * stories.length)],
    keywords: ['handmade', 'traditional', 'authentic', 'heritage', 'artisan', 'indian-craft', 'sustainable', 'unique'],
    marketing: {
      instagram: `✨ Discover the magic of authentic Indian craftsmanship ✨\n\n${artisanInfo.tradition} by the talented ${artisanInfo.name} from ${artisanInfo.location} 🏺\n\nEach piece tells a story of generations-old traditions and modern artistry. Crafted with love using premium ${artisanInfo.material} 💝\n\n#HandmadeInIndia #AuthenticCrafts #${artisanInfo.tradition.replace(/\s+/g, '')} #ArtisanMade #CulturalHeritage #SustainableLiving #IndianArt #TraditionalCrafts #Heritage #Handcrafted`,
      
      whatsapp: `🌟 *Exclusive Handcrafted Collection* 🌟\n\nDiscover authentic ${artisanInfo.tradition} by master artisan ${artisanInfo.name} from ${artisanInfo.location}\n\n✅ 100% Handmade\n✅ Premium ${artisanInfo.material}\n✅ Traditional Techniques\n✅ Cultural Heritage\n\nBring home a piece of India's rich artistic legacy! 🏺\n\n*Limited quantities available*`
    }
  };
};

export const generateMarketingContent = (platform: string, productId: string) => {
  const platformContent = {
    instagram: {
      caption: `✨ Handcrafted with love and tradition ✨

This stunning piece represents generations of artistic mastery from the heart of India. Each detail tells a story of cultural heritage and passionate craftsmanship.

🏺 Traditional techniques meet modern aesthetics
🌿 Sustainably crafted with natural materials  
💝 Made with love by skilled artisans
🌍 Bringing authentic Indian art to your home`,
      hashtags: ['#HandmadeInIndia', '#AuthenticCrafts', '#ArtisanMade', '#IndianHeritage', '#TraditionalArt', '#SustainableLiving', '#CulturalTreasures', '#HandcraftedBeauty', '#IndigenousArt', '#ArtisanSupport'],
      cta: 'Shop now and support traditional artisans! Link in bio 🛍️'
    },
    facebook: {
      caption: `Discover the Beauty of Authentic Indian Craftsmanship

Step into a world where every piece tells a story of tradition, skill, and cultural pride. Our artisans pour their hearts into creating these magnificent works of art, using techniques that have been passed down through generations.

When you choose handcrafted products, you're not just buying an item – you're supporting:
• Traditional artisan communities
• Sustainable crafting practices  
• Cultural preservation
• Fair trade and ethical commerce

Each purchase helps preserve these beautiful traditions for future generations while bringing authentic Indian artistry into your home.`,
      hashtags: ['#HandmadeIndia', '#ArtisanCrafts', '#CulturalHeritage', '#SustainableShopping', '#TraditionalArt', '#EthicalCommerce'],
      cta: 'Explore our collection and support artisan communities today!'
    },
    whatsapp: {
      caption: `🌟 *EXCLUSIVE ARTISAN COLLECTION* 🌟

✨ Authentic handcrafted treasures from India's master artisans
🏺 Traditional techniques, premium materials
🌿 100% sustainable and ethically made
💝 Each piece tells a unique cultural story

*Special Launch Offer - Limited Time!*

Perfect for:
✅ Home decoration
✅ Thoughtful gifts
✅ Cultural enthusiasts
✅ Sustainable living

*WhatsApp us for exclusive previews and custom orders!*`,
      hashtags: ['#HandmadeIndia', '#ArtisanCrafts', '#AuthenticIndian', '#CulturalArt', '#SustainableLiving'],
      cta: 'Message us for instant catalog and special pricing! 📱'
    }
  };

  return platformContent[platform as keyof typeof platformContent] || platformContent.instagram;
};