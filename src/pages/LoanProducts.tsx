import { useEffect } from 'react';
import SEO from "@/components/SEO";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LoanProducts = () => {
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

  const loanProducts = [
  {
    id: 1,
    title: "Super Development Loan",
    description: "Repayment through check off system only.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      "Repayment period of 84 months",
      "Annual interest of 16%",
      "Repayment through check off system only"
    ]
  },
  {
    id: 2,
    title: "Premium Development Loan",
    description: "Repayment through Check off System only.",
    image: "/img/premium-development.webp",
    details: [
      "Repayment period of 72 months",
      "Interest rate 15%",
      "Repayment through Check off System only"
    ]
  },
  {
    id: 3,
    title: "Golden Development Loan",
    description: "Repayment through check off system only.",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      "Repayment period of 60 months",
      "Interest rate 14%",
      "Repayment through check off system only"
    ]
  },
  {
    id: 4,
    title: "Normal Repayment Loan",
    description: "This is our legacy development loan.",
    image: "/img/money-repayment.webp",
    details: [
      "Repayment period of 48 months",
      "Interest rate of 12%",
      "Repayment encouraged through Check off and off payroll",
      "The loan is awarded on the first come basis depending on the availability of funds",
      "Development Loan can be refinanced in Two Ways:",
      "• Top up/ refinancing and continue paying the loan within the remaining period",
      "• Selling the outstanding loan to the SACCO at commission of 1% – It means the Sacco is clearing the loan for you, and then applies for a higher loan; pay the Sacco amount cleared plus commission, and then gets the difference",
      "A member is allowed to have only one development loan at a time",
      "The loan may be paid to a maximum of three (3) depending on the availability of funds"
    ]
  },
  {
    id: 5,
    title: "Emergency Loan",
    description: "This loan is granted to cater for unforeseen circumstances such as sudden hospitalization, funeral expenses, fire, theft and such similar hazards.",
    image: "/img/emergency.webp",
    details: [
      "Repayment period is 12 months",
      "Loan amount is based on ability to repay within 12 months",
      "Interest is 12% p.a"
    ]
  },
  {
    id: 6,
    title: "Education Loan",
    description: "This loan is granted to cater for school/College/University fees.",
    image: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      "Repayment period is 12 months",
      "Loan amount is based on ability to repay within 12 months",
      "Interest is 12% p.a"
    ]
  },
  {
    id: 7,
    title: "Utility Loan",
    description: "This is granted to members who require immediate financing at short term for household items like fridges, cookers, furniture and other household requirements.",
    image: "/img/utility.webp",
    details: [
      "Repayment period is 36 months",
      "Interest is 12% p.a",
      "Maximum loan amount is Kshs. 300,000.00"
    ]
  },
  {
    id: 8,
    title: "Settlement/Karibu Loan",
    description: "On joining, a member qualifies for a settlement/Karibu loan payable during the first contract/probation period.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      "Interest is 12% p.a",
      "Commission of 1% deductible from the approved loan"
    ]
  },
  {
    id: 9,
    title: "Instant/Salary Advance Loan",
    description: "Issued to members who require money urgently.",
    image: "/img/instant.webp",
    details: [
      "Recovered in one installment at the end of the month of award",
      "Interest is 10% per month",
      "Penalty of loan interest plus Ksh. 500 if unpaid after receiving salary; forwarded to next month's payroll"
    ]
  },
  {
    id: 10,
    title: "Jipange Loan",
    description: "Granted to members who have short-term income like acting allowance, special duty, etc.",
    image: "/img/jipange.webp",
    details: [
      "Repayment period is 6 months",
      "Interest is 12% p.a",
      "No loan amount limit if repayment is within 6 months through payroll"
    ]
  },
  {
    id: 11,
    title: "Maisha Bora Loan",
    description: "Helps members acquire products/services from partners with MOUs with DIVERSEY SACCO LTD.",
    image: "/img/maisha-bora.webp",
    details: [
      "No cash payments to members",
      "Payment is made directly to the supplier or service provider",
      "The item or service is delivered to the member at SACCO's",
      "Maximum repayment period is 48 months",
      "Interest rate is 10% p.a on reducing balance",
      "No loan amount limit if repayment is within 48 months through payroll",
      "Loan must be secured by guarantors or self-guarantee",
      "Loan should be within 4x the deposit multiplier factor",
      "Dishonesty reverts loan to normal 12% interest and 5% penalty on initial principal"
    ]
  },
  {
    id: 12,
    title: "Self-Guaranteed Loan",
    description: "For members whose total loans applied are less than or equal to their non-withdrawable deposits.",
    image: "/img/self-guaranteed.webp",
    details: [
      "Repayment period of 48 months",
      "Interest rate is 12% p.a",
      "Repayment through check off and off payroll",
      "Maximum amount up to 90% of non-withdrawable deposits",
      "Not applicable to guarantors of defaulted loans unless repaying via check off"
    ]
  },
  {
    id: 13,
    title: "Senior (Retirees) Scheme/Products",
    description: "For retirees who were members before retirement, joining the senior members club to continue enjoying SACCO benefits.",
    image: "/img/seniour-retirees.webp",
    details: [
      "Rejoining members to pay Kshs 1,000",
      "Minimum monthly contribution is Ksh 1,000",
      "Can withdraw deposits provided remaining amount covers outstanding loans",
      "Monthly contributions can be retained from Kshs 12,000 dividends/interest",
      "Loans repayable within 36 months",
      "Loans guaranteed like regular SACCO loans",
      "Loans awarded to those with consistent income or pension",
      "May require check-off from pension admin, direct debit, or standing order",
      "Retirement letter must be attached",
      "Interest rate is 12% p.a",
      "Loan limit is 3x the member’s deposit",
      "Retirees enjoy full rights and privileges"
    ]
  },
  {
    id: 14,
    title: "Dividend Advance / Diva Advance",
    description: "Allows members to access part of their dividend before official declaration at the AGM.",
    image: "https://images.pexels.com/photos/4386430/pexels-photo-4386430.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      "Applicants' loans and deposit payments must be up-to-date",
      "Application form must be filled",
      "Advance up to 50% of previous year’s net dividend",
      "Subject to member's expected entitlement for the current year",
      "SACCO may defer advance if requirements are unmet",
      "Guarantor is the member's anticipated dividend/interest",
      "Advance available between January and AGM date",
      "5% commission/processing fee charged and deducted from final balance"
    ]
  }
];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
  title="Loan Products - DIVERSEYSacco"
  description="Explore DIVERSEYSacco’s wide range of loan products designed to support your financial goals. Flexible terms, affordable rates, and member-focused solutions."
  keywords="diversey sacco loans, sacco loan products, personal loans, business loans, diverseysacco kenya loans, development loans"
  url="https://diverseysacco.com/loans"
  image="https://diverseysacco.com/logo.png"
/>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            LOAN PRODUCTS AND SERVICES
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
                src="img/loan.jpg" 
                alt="DIVERSEY Sacco Loans"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Comprehensive Loan Portfolio
              </h2>
              <p className="text-gray-600 mb-4">
                DIVERSEY Sacco Society Limited offers a wide range of loan products designed to meet the diverse financial needs of our members. From development loans to emergency assistance, we provide competitive rates and flexible terms to help you achieve your financial goals.
              </p>
            </div>
          </div>

          {/* Loan Products */}
          <div className="space-y-12">
            {loanProducts.map((product, index) => (
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



          {/* Methods of Payment & Charges */}
<div className="animate-on-scroll bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-yellow-700 mb-4">
    Methods of Payment of Loans and Charges
  </h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Payments can be made via Cash, Mpesa, Cheque, or Bank Transfer. Payment mode may attract a fee.</li>
    <li>Instant, Emergency, and Education/School Fees loans are prioritized for processing.</li>
  </ul>
  <div className="mt-4 text-sm text-red-700 font-medium">
    <p>Note: Total member loans should not at any point exceed <strong>4 times</strong> their deposits.</p>
    <p>All members’ information is shared with the <strong>Credit Reference Bureau (CRB)</strong>.</p>
  </div>
</div>



          {/* Call to Action */}
          <div className="mt-16 text-center animate-on-scroll">
  <div className="bg-gradient-to-r from-helb-green-600 to-helb-green-700 rounded-lg p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">Ready to Apply for a Loan?</h3>
    <p className="text-lg mb-6">
      Contact us today to learn more about our loan products and start your application process.
    </p>
    <Link to="/contact">
      <button className="bg-helb-gold-500 hover:bg-helb-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
        Contact Us
      </button>
    </Link>
  </div>
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanProducts;
