import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CloudinaryImage from "./CloudinaryImage";

const carouselImages = [
  {
    src: "frippy-our-mission_yfjbhb",
    alt: "Sri Saamba Parmeshwara Industries - Premium Beverages",
    title: "Premium Natural Beverages",
    subtitle: "Crafted with passion, served with pride",
  },
  {
    src: "frippy-pineapple_wzeldc",
    alt: "Frippy Pineapple Drink",
    title: "Frippy - Taste the Fruit, Feel the Joy",
    subtitle: "No artificial flavors, colors, or sweeteners",
  },
  {
    src: "drfibre-berry-peach_fnmpyw",
    alt: "Dr Fiber Berry Peach Prebiotic Soda",
    title: "Dr Fiber - Soda that Heals",
    subtitle: "Supports digestive health with prebiotics",
  },
  {
    src: "frippy-our-mission_yfjbhb",
    alt: "Production Facility",
    title: "State-of-the-Art Manufacturing",
    subtitle: "Quality assured at every step",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-screen overflow-hidden group">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <CloudinaryImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 section-overlay" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 fade-in">
                {image.title}
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {image.subtitle}
              </p>
              {/* <div className="space-x-4 fade-in" style={{ animationDelay: '0.6s' }}>
                <button className="btn-hero">
                  Explore Products
                </button>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 
                   backdrop-blur-sm rounded-full p-3 text-white transition-smooth opacity-0 
                   group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 
                   backdrop-blur-sm rounded-full p-3 text-white transition-smooth opacity-0 
                   group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? "bg-primary shadow-glow"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
