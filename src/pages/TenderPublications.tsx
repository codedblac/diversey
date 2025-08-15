
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Clock, Download } from 'lucide-react';

const TenderPublications = () => {
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

  const tenders = [
    {
      title: "Supply and Installation of Office Furniture",
      reference: "HELB/SACCO/TENDER/2024/001",
      publishDate: "January 15, 2024",
      closingDate: "February 15, 2024",
      status: "Closed",
      category: "Supplies"
    },
    {
      title: "ICT Equipment Procurement",
      reference: "HELB/SACCO/TENDER/2024/002",
      publishDate: "February 1, 2024",
      closingDate: "March 1, 2024",
      status: "Closed",
      category: "ICT"
    },
    {
      title: "Security Services Contract",
      reference: "HELB/SACCO/TENDER/2024/003",
      publishDate: "March 10, 2024",
      closingDate: "April 10, 2024",
      status: "Closed",
      category: "Services"
    },
    {
      title: "Cleaning and Maintenance Services",
      reference: "HELB/SACCO/TENDER/2024/004",
      publishDate: "December 1, 2024",
      closingDate: "January 15, 2025",
      status: "Open",
      category: "Services"
    },
    {
      title: "Audit Services for Financial Year 2024",
      reference: "HELB/SACCO/TENDER/2024/005",
      publishDate: "December 10, 2024",
      closingDate: "January 20, 2025",
      status: "Open",
      category: "Professional Services"
    },
    {
      title: "Construction of New Branch Office",
      reference: "HELB/SACCO/TENDER/2024/006",
      publishDate: "December 15, 2024",
      closingDate: "February 1, 2025",
      status: "Open",
      category: "Construction"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Tender Publications
          </h1>
          <p className="text-center text-lg mt-4 opacity-90 max-w-2xl mx-auto">
            Explore current and past tender opportunities with HELB Sacco. We believe in transparent and fair procurement processes.
          </p>
        </div>
      </section>

      {/* Tender Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/1461749280684-dccba630e2f6?auto=compress&cs=tinysrgb&w=800" 
                alt="Tender Process"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Tender Guidelines
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">All tenders must be submitted before the specified closing date and time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Tender documents must be complete and properly signed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Only registered suppliers/contractors are eligible to participate</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">HELB Sacco reserves the right to accept or reject any tender</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Tender evaluation will be based on technical and financial criteria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Tenders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-4">
              Current & Recent Tenders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our current tender opportunities and recent publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenders.map((tender, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-helb-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-helb-green-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tender.status)}`}>
                      {tender.status}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-helb-green-800">
                    {tender.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Ref:</strong> {tender.reference}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {tender.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Closes: {tender.closingDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tender.category}
                    </span>
                    <Button size="sm" variant="outline" className="text-helb-green-600 border-helb-green-600 hover:bg-helb-green-50">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-4">
              Tender Inquiries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For any questions regarding tender processes or requirements, please contact our procurement department.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-helb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-helb-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Procurement Office</h3>
                <p className="text-gray-600">HELB Centre, Tom Mboya Street</p>
                <p className="text-gray-600">5th Floor, Procurement Department</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-helb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-helb-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">procurement@helbsacco.com</p>
                <p className="text-gray-600">tenders@helbsacco.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-helb-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-helb-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">+254 20 2223970</p>
                <p className="text-gray-600">Ext: 205, 206</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenderPublications;
