import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjB0b3dlciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYzNjI4NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nigeria's Premier Telecommunications Provider",
      subtitle: "Delivering high-speed broadband, voice services, and cutting-edge infrastructure solutions across Nigeria.",
      cta: "Explore Our Services"
    },
    {
      image: "https://images.unsplash.com/photo-1761507321147-c21f673f9f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjg2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "World-Class Network Infrastructure",
      subtitle: "99.9% uptime guarantee with state-of-the-art fiber optic networks and advanced telecommunications technology.",
      cta: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VydmVyJTIwcm9vbSUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzYzNjI4NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Secure Data Center & Colocation Services",
      subtitle: "Enterprise-grade infrastructure with uninterrupted power, advanced cooling, and 24/7 security for your critical systems.",
      cta: "View Services"
    },
    {
      image: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzU0Nzc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Empowering Nigerian Businesses",
      subtitle: "100% Nigerian-owned and NCC-licensed. Scalable solutions that grow with your business needs.",
      cta: "Get Started"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-900/50 z-10"></div>
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  <h2 className="mb-6">{slide.title}</h2>
                  <p className="mb-8 text-blue-100">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="#services">
                        {slide.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                      asChild
                    >
                      <a href="#contact">Contact Us</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
