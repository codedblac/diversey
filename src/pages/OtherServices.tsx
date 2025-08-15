import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OtherServices = () => {
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

  const services = [
    {
      id: 1,
      title: "Senior (Retirees) Scheme/Products",
      description: "The Scheme and products are aimed at retaining the retired members of the SACCO. The scheme or products are eligible for retirees who had been members of the SACCO before retirement. Instead of retiring them as members they join the senior members club (retiree's scheme)",
      image: "https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Rejoining Members to pay Kshs1,000 (Members who exited and willing to rejoin)",
        "Minimum Monthly Contribution would be Ksh 1,000",
        "Can withdraw any amount of share deposits provided remaining amount covers the retiree's outstanding loans as per Sacco By-laws or regulations",
        "Monthly contributions may be done by retaining Kshs 12,000 from interest on deposits or dividends",
        "Loans will be paid within a maximum of three (3) years i.e. 36months",
        "Loan will be guaranteed like any other loans",
        "Loans will be awarded to those with consistent monthly income or pension",
        "A check off may be required from pension administrator, direct debit or a bank standing order",
        "A copy of the retirement letter should be attached",
        "Interest rate to be 12% p.a",
        "Deposit multiplier for loans to be three times the deposit.",
        "Members will have previlleges and rights like all others members"
      ]
    },
    {
      id: 2,
      title: "Dividend Advance/Diva Advance",
      description: "The product is aimed at advancing dividend to member before the actual declaration and approval of payment of dividend for the year by Annual general meeting (AGM)",
      image: "https://images.pexels.com/photos/5905714/pexels-photo-5905714.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "The Applicants' loan and deposits payments must be up-to-date to be eligible (not a defaulter)",
        "The member will be required to fill the appropriate application form",
        "The member can only access up to 50% of the net interest on deposit/dividend for the preceding year.",
        "The Society reserves the right to defer the advance if funds are not adequate, or other requirements are not met.",
        "Guarantors for the advance shall be the member's anticipated interest in deposit/dividend entitlement for the current year.",
        "The advance will only be paid between January and the Annual general meeting( AGM) date.",
        "A 5% commission/ processing fee will be charged and deducted from the remaining balance at the time of payment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Other Services
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <img 
                src="img/msme.jpg" 
                alt="HELB Sacco Other Services"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Specialized Financial Services
              </h2>
              <p className="text-gray-600 mb-4">
                HELB Sacco Society Limited offers specialized services designed to meet the unique needs of our diverse membership. From retirement schemes to dividend advances, we provide comprehensive financial solutions that support our members throughout their financial journey.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.id} className="animate-on-scroll bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="text-2xl font-bold text-helb-green-700 mb-4">
                          {service.id}. {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        {service.details && (
                          <div className="space-y-3">
                            {service.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700 leading-relaxed">
                                {detail}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-64 rounded-lg overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-helb-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">{service.id}</span>
                              </div>
                              <h4 className="text-white font-semibold text-lg">{service.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-64 rounded-lg overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-helb-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">{service.id}</span>
                              </div>
                              <h4 className="text-white font-semibold text-lg">{service.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-helb-green-700 mb-4">
                          {service.id}. {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        {service.details && (
                          <div className="space-y-3">
                            {service.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700 leading-relaxed">
                                {detail}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-helb-green-600 to-helb-green-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Our Specialized Services?</h3>
              <p className="text-lg mb-6">
                Contact us today to learn more about our specialized services and how they can benefit you.
              </p>
              <button className="bg-helb-gold-500 hover:bg-helb-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherServices; 