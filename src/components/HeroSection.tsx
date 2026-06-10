import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "img/helb1.jpg",
      title: "DIVERSEY Regulated Non-WDT Sacco Society Limited",
      subtitle: "Your Trusted Financial Partner",
      description: "Empowering DIVERSEY employees and their families with affordable financial services and innovative solutions for a better tomorrow.",
      buttonText: "JOIN TODAY",
      buttonLink: "/membership",
      features: ["20+ Years of Excellence", "300+ Active Members", "Nationwide Presence"]
    },
    {
      image: "img/loan.jpg",
      title: "Affordable Loans & Savings",
      subtitle: "Achieve Your Financial Dreams",
      description: "Access competitive loan products and savings accounts designed to help you build wealth and secure your future.",
      buttonText: "GET STARTED",
      buttonLink: "/membership",
      features: ["Competitive Interest Rates", "Flexible Repayment Terms", "Quick Approval Process"]
    },
    {
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000",
  title: "Empowering Dreams, Enriching Lives",
  subtitle: "Join DIVERSEY REGULATED Non-WDT SACCO – Your Partner in Financial Growth",
  description: "Plan your life, live without stress. Save, Borrow, Invest, Repay with ease.",
  buttonText: "Join Us Now",
  buttonLink: "/membership",
  features: [
    "Flexible Savings & Loan Options",
    "Member-Centric Financial Services",
    "Secure & Transparent Operations"
  ]
}

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-6 h-6 text-helb-gold-400" />
                  <span className="text-helb-gold-400 font-semibold text-lg">Together for Prosperity</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-helb-gold-400 mb-6 font-semibold">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                {slides[currentSlide].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Shield className="w-4 h-4 text-helb-gold-400" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                size="lg" 
                onClick={() => navigate(slides[currentSlide].buttonLink)} // 👈 Dynamic navigation
                className="bg-gradient-to-r from-helb-green-600 to-helb-green-700 hover:from-helb-green-700 hover:to-helb-green-800 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                >
                {slides[currentSlide].buttonText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button 
                  size="lg" 
                  onClick={() => navigate('/about')}
                  className="border-white bg-helb-gold-500 text-white hover:bg-white hover:text-helb-green-700 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
<div className="absolute bottom-12 left-12 z-20 flex space-x-4">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      aria-label={`Go to slide ${index + 1}`}  // <-- Add this for accessibility
      className={`w-4 h-4 rounded-full transition-all duration-300 ${
        index === currentSlide
          ? 'bg-helb-gold-400 scale-125'
          : 'bg-white/50 hover:bg-white/70'
      }`}
    />
  ))}
</div>

    </section>
  );
};

export default HeroSection;
