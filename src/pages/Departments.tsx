
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Departments = () => {
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

  const departments = [
    "Human Resources",
    "Operations and Procurement",
    "Information Technology",
    "Members Personal Accounts",
    "Internal Audit",
    "FOSA Operations",
    "Marketing",
    "Personal Loans",
    "Public Relations",
    "Finance",
    "Loans",
    "Data",
    "Risk & Compliance",
    "Customer Care",
    "Investments and Holdings",
    "General Accounts",
    "Registry",
    "AMCA"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Departments
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-on-scroll">
              <img 
                src="img/departments.jpg" 
                alt="HELB Sacco Office"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Departments
              </h2>
              <div className="space-y-3">
                {departments.map((department, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-helb-green-600 rounded-full"></div>
                    <span className="text-gray-700">{department}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;
