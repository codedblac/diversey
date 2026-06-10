
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const HelbInvestment = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const investmentProjects = [
    {
      title: "Kangundo Phase 1",
      color: "bg-orange-500",
      status: "Sold Out"
    },
    {
      title: "Kangundo Phase 2", 
      color: "bg-amber-500",
      status: "Available"
    },
    {
      title: "Isinya Kisaju Phase 3",
      color: "bg-teal-500",
      status: "Available"
    },
    {
      title: "Kitengela Rongai Bypass Phase 4",
      color: "bg-purple-500",
      status: "Sold Out"
    },
    {
      title: "Kitengela Rongai Bypass Phase 6",
      color: "bg-gray-800",
      status: "Available"
    },
    {
      title: "Kantafu Kangundo Phase 10",
      color: "bg-gray-500",
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            DIVERSEY Investment
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="animate-on-scroll">
              <img 
                src="img/helb_invest.jpg" 
                alt="DIVERSEY Investment Opportunity"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="animate-on-scroll">
              <h3 className="text-sm font-semibold text-helb-green-600 mb-2">About</h3>
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                DIVERSEY Investment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Secure a valuable asset that appreciates over time. Benefit from the 
                potential for significant returns on your investment. Build your dream 
                home or explore development opportunities. Discover the opportunity 
                of a lifetime with our prime residential plots for sale. We take pride in 
                being the best society in Kenya, offering you the chance to own a 
                valuable asset and become part of a community committed to 
                excellence.
              </p>
            </div>
          </div>

          {/* Plots Section */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-sm font-semibold text-helb-green-600 mb-2">About</h3>
            <h2 className="text-3xl font-bold text-helb-green-700 mb-8">
              Plots /Land Available
            </h2>
            
            <div className="bg-helb-green-700 py-12 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {investmentProjects.map((project, index) => (
                  <Card key={index} className={`${project.color} text-white hover-lift cursor-pointer transition-all duration-300`}>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.status}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Map */}
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198!2d36.8177!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScwMy43IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%" 
                height="384" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
                title="DIVERSEY Centre Building Location"
              ></iframe>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-sm font-semibold text-helb-green-600 mb-2">About</h3>
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Contact Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full"></div>
                  <span className="text-gray-700">Address: DIVERSEY Centre Building | 5th Floor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full"></div>
                  <span className="text-gray-700">Phone: +254 20 2223970 Ext 60</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full"></div>
                  <span className="text-gray-700">Email: investments@diverseysacco.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelbInvestment;
