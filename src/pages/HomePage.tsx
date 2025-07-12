import { useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import CloudinaryImage from "@/components/CloudinaryImage";
import { Check, Heart, Leaf, Shield } from "lucide-react";

const products = [
  {
    src: "frippy-pineapple_wzeldc",
    alt: "Frippy Pineapple Drink with Nata de Coco",
    name: "Pineapple with Nata de Coco",
  },
  {
    src: "frippy-lychee_rdqw5z",
    alt: "Frippy Lychee Drink",
    name: "Lychee Delight",
  },
  {
    src: "frippy-mango_lcayvv",
    alt: "Frippy Mango Drink",
    name: "Mango Bliss",
  },
  {
    src: "drfibre-berry-peach_fnmpyw",
    alt: "Dr Fiber Berry Peach Prebiotic Soda",
    name: "Berry Peach Prebiotic",
  },
  {
    src: "drfibre-ale_mxzohz",
    alt: "Dr Fiber Ginger Ale Prebiotic Soda",
    name: "Ginger Ale Prebiotic",
  },
];

const upcomingProducts = [
  {
    name: "All-Natural Popcorn",
    description: "Variety of natural flavors",
    img: "https://srisaamba.com/wp-content/uploads/2024/09/Caramel-scaled.jpg",
  },
  {
    name: "Fruit Ice Pops",
    description: "Real fruit, no artificial colors",
    img: "https://srisaamba.com/wp-content/uploads/2024/09/54467e58-5b44-46a4-95c1-1cb1300536e9.jpg",
  },
  // { name: "Baby Instant Cereal", description: "Nutritious and organic" },
  // { name: "Herbal Supplements", description: "Natural wellness solutions" },
];

export default function HomePage() {
  const productRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of natural, healthy beverages crafted with the
              finest ingredients
            </p>
          </div>

          <div
            ref={productRef}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="animate-on-scroll product-hover bg-white rounded-2xl p-6 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <CloudinaryImage
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <h3 className="font-semibold text-center text-gray-800">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={() => {
            if (videoRef.current) {
              videoRef.current.style.display = "none";
            }
          }}
        >
          <source
            src="https://res.cloudinary.com/ddhfjoo0u/video/upload/v1752315391/frippy_production_video_z6v9b7.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Image */}
        <div className="absolute inset-0 z-0">
          <CloudinaryImage
            src="frippy-our-mission_yfjbhb"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>

        <div className="absolute inset-0 section-overlay z-20" />

        <div className="relative z-30 text-center text-white max-w-4xl px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-on-scroll">
            Crafted with Excellence
          </h2>
          <p
            className="text-xl md:text-2xl animate-on-scroll"
            style={{ animationDelay: "0.3s" }}
          >
            State-of-the-art manufacturing ensures quality at every step
          </p>
        </div>
      </section>

      {/* Frippy Showcase */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* <CloudinaryImage
            src="frippy-our-mission_yfjbhb"
            alt="Frippy Mission"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Taste the Fruit, Feel the Joy
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Frippy brings you the authentic taste of real fruits with no
                compromises
              </p>

              <div className="space-y-4">
                {[
                  "No Artificial Flavors",
                  "No Artificial Colors",
                  "No Artificial Sweeteners",
                  "Real Fruit Concentrates",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-white bg-white/20 rounded-full p-1" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 animate-on-scroll">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={index}
                  className="float-animation"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <CloudinaryImage
                    src={product.src}
                    alt={product.alt}
                    className="w-full rounded-2xl shadow-glow"
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dr Fiber Showcase */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center space-x-6 animate-on-scroll">
              {products.slice(3).map((product, index) => (
                <div key={index} className="glow-pulse">
                  <CloudinaryImage
                    src={product.src}
                    alt={product.alt}
                    className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-soft"
                    width={250}
                    height={350}
                  />
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Soda that Heals
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Dr Fiber combines great taste with digestive health benefits
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Heart, text: "5g Fiber per can" },
                  { icon: Leaf, text: "Infused with herbs" },
                  { icon: Shield, text: "Low Sugar" },
                  { icon: Check, text: "No Artificial Sweeteners" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 rounded-lg p-3"
                  >
                    <feature.icon className="h-6 w-6" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-hero mb-6">
              Coming Soon...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new products are in development to expand our healthy
              lifestyle range
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
              {upcomingProducts.map((product, index) => (
                <div
                  key={index}
                  className="animate-on-scroll bg-white rounded-2xl p-8 shadow-soft hover:shadow-primary 
                             transition-smooth border-2 border-gray-100 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {product.img ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-xl mb-6 mx-auto opacity-90 border border-gray-200 shadow"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl mb-6 mx-auto opacity-80" />
                  )}
                  <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
