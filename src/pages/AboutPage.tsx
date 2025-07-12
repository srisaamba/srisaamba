import { useEffect } from 'react';
import CloudinaryImage from '@/components/CloudinaryImage';
import { Target, Users, Award, Leaf, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "Natural Excellence",
    description: "We believe in the power of natural ingredients to create exceptional products that nourish and delight."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Every product is crafted with health benefits in mind, supporting our customers' wellness journey."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "State-of-the-art manufacturing processes ensure consistent quality and safety in every product."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuously developing new products that meet evolving consumer needs and preferences."
  }
];

const focusAreas = [
  "All-natural food and beverage options",
  "Healthy food products",
  "Baby instant cereal",
  "Herbal supplements", 
  "Energy drinks",
  "Consumer products for health and wellness"
];

export default function AboutPage() {
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="frippy-our-mission_yfjbhb"
            alt="About Sri Saamba Parmeshwara Industries"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 section-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 fade-in">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming the food and beverage industry with healthy, natural products
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-display font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To transform the food and beverage industry by creating innovative, healthy, 
                  and natural products that enhance people's lives. We are committed to providing 
                  consumers with premium quality options that are free from artificial ingredients 
                  and packed with natural goodness.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-secondary mr-3" />
                  <h2 className="text-3xl font-display font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become a leading force in the natural food and beverage sector, 
                  recognized globally for our commitment to health, sustainability, 
                  and innovation. We envision a world where healthy choices are 
                  accessible, delicious, and enjoyable for everyone.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                <CloudinaryImage
                  src="frippy-pineapple_wzeldc"
                  alt="Frippy Products"
                  className="rounded-2xl shadow-soft product-hover"
                  width={250}
                  height={350}
                />
                <CloudinaryImage
                  src="drfibre-berry-peach_fnmpyw"
                  alt="Dr Fiber Products"
                  className="rounded-2xl shadow-soft product-hover mt-8"
                  width={250}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-on-scroll bg-white rounded-2xl p-8 shadow-soft hover:shadow-primary 
                           transition-smooth border-l-4 border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-8">
                Our Focus Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sri Saamba Parmeshwara Industries is dedicated to developing products 
                across multiple categories, all united by our commitment to health and natural ingredients.
              </p>
              
              <div className="space-y-3">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Standards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our manufacturing processes adhere to the highest quality standards, 
                    ensuring every product meets our stringent safety and quality requirements.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-secondary/10 to-secondary-hover/10 rounded-2xl p-8 border border-secondary/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    State-of-the-art facilities and cutting-edge technology enable us to 
                    maintain consistency and scale while preserving the natural integrity of our ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gradient-primary">
              Sri Saamba Parmeshwara Industries Private Limited
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">
              <p>CIN: U11049KA2024PTC192614</p>
              <p>
                #1207/343, 9th main, 7th Sector<br />
                HSR Layout, Bangalore, Karnataka – 560102
              </p>
              <p className="text-xl text-white mt-8">
                Building the future of natural food and beverages, one product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}