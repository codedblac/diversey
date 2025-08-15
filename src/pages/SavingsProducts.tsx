import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SavingsProducts = () => {
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

  const savingsProducts = [
    {
      id: 1,
      title: "Mdosi Junior Savings Account",
      description: "The objective of Mdosi Junior savings account is to provide a facility for parents to save for their children and is open to all kids below 18years.",
      image: "mdosi.jpeg",
      details: [
        "The account is opened in the child's name; however, the parent has the sole mandate to operate it",
        "Child's birth certificate required during account opening",
        "Opening and minimum operating balance is Kes.1,000",
        "Minimum monthly contribution amount is Kes.1,000.",
        "This account earns interest on a monthly basis at 10% p.a. Minimum interest earning deposit is Kes.5,000.00",
        "Withdrawal will be capped at four times a year",
        "On attainment of 18 years the account can be converted to normal, share capital, deposits and withdrawable savings for the child to become a bonafide SACCO member."
      ]
    },
    {
      id: 2,
      title: "Share Capital Savings",
      description: "These are savings in the SACCO required by law for every member to have a specified minimum share capital. These cannot be withdrawn. Shares have to be sold to another member if a member exits the Sacco.",
      image: "https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Deposits",
      description: "These are normal Sacco savings on which award of loans are based, which currently for HELB Sacco is three (4) the savings. These are the savings on which the interest on deposits (normally known as dividends) are paid",
      image: "img/deposit.jpg"    },
    {
      id: 4,
      title: "Withdrawable Savings",
      description: "These are voluntary savings a member can save with the SACCO for general purposes or specified purposes and is allowed to withdraw on notice.",
      image: "img/savings.jpg",
      details: [
        "The savings can done for investment, fees, holiday, birthdays, wedding, anniversaries, Children/Minor (below 18years) etc.",
        "All savings will receive an interest return at the same rate as that of Return on deposits (normally known as dividends) declared and approved during AGM."
      ]
    }
  ];

  const savingsFeatures = [
    "No monthly charges",
    "Interest calculated monthly but paid annually",
    "Quick access of salaries",
    "All Loans, Rebates, Dividends granted channeled through the ordinary savings account",
    "Easy access of cash: ATM and M+ banking services Transaction via mobile phone upon registration at our FOSA's or via USSD or Mobile App"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Savings Products
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
                src="img/helb2.jpg" 
                alt="Savings with HELB Sacco"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Comprehensive Savings Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                HELB Sacco Society Limited offers a wide range of savings products designed to meet the diverse financial needs of our members. From junior accounts for children to specialized savings for adults, we provide competitive interest rates and flexible terms.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-helb-green-600 mb-4">
                  Salary/FOSA Ordinary Savings Account Features
                </h3>
                <ul className="space-y-3">
                  {savingsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Savings Products */}
          <div className="space-y-12">
            {savingsProducts.map((product, index) => (
              <div key={product.id} className="animate-on-scroll bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="text-2xl font-bold text-helb-green-700 mb-4">
                          {product.id}. {product.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        {product.details && (
                          <div className="space-y-3">
                            {product.details.map((detail, detailIndex) => (
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
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-helb-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">{product.id}</span>
                              </div>
                              <h4 className="text-white font-semibold text-lg">{product.title}</h4>
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
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-helb-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">{product.id}</span>
                              </div>
                              <h4 className="text-white font-semibold text-lg">{product.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-helb-green-700 mb-4">
                          {product.id}. {product.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        {product.details && (
                          <div className="space-y-3">
                            {product.details.map((detail, detailIndex) => (
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
              <h3 className="text-2xl font-bold mb-4">Start Saving Today!</h3>
              <p className="text-lg mb-6">
                Contact us to learn more about our savings products and start building your financial future.
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

export default SavingsProducts;
