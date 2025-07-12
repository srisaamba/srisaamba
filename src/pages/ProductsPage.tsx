import { useEffect } from 'react';
import CloudinaryImage from '@/components/CloudinaryImage';
import { Check, Heart, Leaf, Zap, Shield, Star } from 'lucide-react';

const frippyProducts = [
  {
    src: "frippy-pineapple_wzeldc",
    name: "Pineapple with Nata de Coco",
    description: "Original Pineapple Juice Concentrate (25%) with chewy Nata de Coco (15%)",
    features: ["Real pineapple juice", "Chewy texture", "Tropical flavor"],
    highlight: "25% Pineapple Concentrate"
  },
  {
    src: "frippy-lychee_rdqw5z", 
    name: "Lychee Delight",
    description: "Real lychee juice with a unique chewable experience",
    features: ["Authentic lychee taste", "Natural sweetness", "Refreshing"],
    highlight: "Real Lychee Juice"
  },
  {
    src: "frippy-mango_lcayvv",
    name: "Mango Bliss", 
    description: "Mango fruit with chewy nata de coco for a delightful experience",
    features: ["Rich mango flavor", "Chewy nata de coco", "Tropical delight"],
    highlight: "Mango + Nata de Coco"
  }
];

const drFiberProducts = [
  {
    src: "drfibre-berry-peach_fnmpyw",
    name: "Berry Peach Prebiotic",
    description: "Prebiotic soda with 5g fiber, infused with Ashwagandha for wellness",
    features: ["5g Fiber per can", "Infused with Ashwagandha", "Berry peach flavor", "Digestive health"],
    highlight: "5g Fiber + Ashwagandha"
  },
  {
    src: "drfibre-ale_mxzohz",
    name: "Ginger Ale Prebiotic", 
    description: "Classic ginger ale with prebiotic benefits for digestive health",
    features: ["Prebiotic formula", "Classic ginger taste", "Digestive support", "Low sugar"],
    highlight: "Prebiotic Formula"
  }
];

const sharedBenefits = [
  { icon: Check, text: "No Artificial Flavors" },
  { icon: Check, text: "No Artificial Colors" }, 
  { icon: Check, text: "No Artificial Sweeteners" },
  { icon: Leaf, text: "Natural Ingredients" }
];

const upcomingProducts = [
  { name: "All-Natural Popcorn", category: "Snacks", description: "Variety of natural flavors" },
  { name: "Fruit Ice Pops", category: "Frozen", description: "Real fruit, no artificial colors" },
  { name: "Baby Instant Cereal", category: "Baby Care", description: "Nutritious and organic" },
  { name: "Herbal Supplements", category: "Wellness", description: "Natural wellness solutions" }
];

export default function ProductsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="frippy-our-mission_yfjbhb"
            alt="Our Products"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 section-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl fade-in" style={{ animationDelay: '0.3s' }}>
            Natural, healthy beverages crafted with passion and care
          </p>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that great taste and health benefits should go hand in hand. 
              Every product is crafted with natural ingredients, free from artificial additives, 
              and designed to nourish your body while delighting your taste buds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
            {sharedBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frippy Products */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Frippy - Taste the Fruit, Feel the Joy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real fruit concentrates with no artificial ingredients. Each 310ml bottle 
              is packed with natural goodness and authentic flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frippyProducts.map((product, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-white rounded-3xl overflow-hidden shadow-soft 
                           hover:shadow-primary transition-smooth product-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <CloudinaryImage
                    src={product.src}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      310ml
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="bg-primary/10 rounded-2xl p-4 mb-6">
                    <p className="text-primary font-semibold text-center">{product.highlight}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <strong>Size:</strong> 310ml bottles
                </div>
                <div>
                  <strong>Packaging:</strong> Pack of 6
                </div>
                <div>
                  <strong>Shelf Life:</strong> 12 months
                </div>
                <div>
                  <strong>Storage:</strong> Cool, dry place
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr Fiber Products */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-secondary-hover/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-6">
              Dr Fiber - Soda that Heals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prebiotic sodas that support digestive health while delivering great taste. 
              Each 250ml can contains beneficial fiber and natural herbs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {drFiberProducts.map((product, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-white rounded-3xl overflow-hidden shadow-soft 
                           hover:shadow-secondary transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <CloudinaryImage
                    src={product.src}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      250ml
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="bg-secondary/10 rounded-2xl p-4 mb-6">
                    <p className="text-secondary font-semibold text-center">{product.highlight}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-secondary" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Digestive Health</h4>
                    <p className="text-gray-600 text-sm">Supports healthy gut microbiome</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Natural Energy</h4>
                    <p className="text-gray-600 text-sm">Herbal ingredients for vitality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-hero mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating to bring you new products that align with our 
              commitment to health, taste, and natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingProducts.map((product, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 
                           shadow-soft hover:shadow-primary transition-smooth border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl mb-6 mx-auto opacity-80" />
                <div className="text-center">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 
                                   rounded-full text-xs font-medium mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}