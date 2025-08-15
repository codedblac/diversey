
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';

const NewsMedia = () => {
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

  const newsItems = [
    {
      title: "HELB Sacco Launches New Mobile Banking App",
      excerpt: "Experience seamless banking with our new mobile application designed for convenience and security.",
      date: "December 15, 2024",
      author: "Communications Team",
      image: "img/gallery3.jpg"
    },
    {
      title: "Annual General Meeting 2024 - Record Attendance",
      excerpt: "HELB Sacco's AGM 2024 witnessed unprecedented member participation with exciting announcements for the future.",
      date: "November 28, 2024",
      author: "Corporate Affairs",
      image: "img/gallery9.jpg"
    },
    {
      title: "New Investment Opportunities in Kangundo Phase 3",
      excerpt: "Secure your future with our latest real estate investment opportunities in the prime Kangundo location.",
      date: "November 10, 2024",
      author: "Investment Team",
      image: "img/gallery4.jpg"
    },
    {
      title: "HELB Sacco Wins Excellence Award",
      excerpt: "Recognition for outstanding performance in the cooperative sector and member service delivery.",
      date: "October 22, 2024",
      author: "Management",
      image: "img/gallery10.jpg"
    },
    {
      title: "Digital Transformation Initiative Launch",
      excerpt: "Embracing technology to enhance member experience and operational efficiency across all HELB Sacco services.",
      date: "October 5, 2024",
      author: "IT Department",
      image: "img/gallery2.jpg"
    },
    {
      title: "Financial Literacy Program for Members",
      excerpt: "Empowering our members with financial knowledge and skills for better money management and investment decisions.",
      date: "September 18, 2024",
      author: "Education Team",
      image: "img/gallery6.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            News & Media
          </h1>
          <p className="text-center text-lg mt-4 opacity-90">
            Stay updated with the latest news and developments from HELB Sacco
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover-lift cursor-pointer transition-all duration-300 animate-on-scroll">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-helb-green-800 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-4">
              Media Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of photos and videos from recent events, activities, and milestones at HELB Sacco.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
            {[
              "img/gallery1.jpg",
              "img/gallery8.jpg",
              "img/gallery7.jpg",
              "img/gallery5.jpg",
            ].map((imageUrl, index) => (
             
              <div key={index} className="relative overflow-hidden rounded-lg hover-lift cursor-pointer">
                <img 
                  src={imageUrl}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-helb-green-600/0 hover:bg-helb-green-600/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsMedia;
