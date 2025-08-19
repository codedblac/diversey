import { useEffect } from 'react';
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
      title: "Development Loan",
      description: "This loan is granted for development expenditure such as buying plots, house building, and business capital amongst others.",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Repayment period can be 48 months (interest 12%p.a), 60 months (interest 14% p.a) or 72 months (interest 16% p.a).",
        "The loan amount is calculated at 4 times the member's deposits or Kopa-Plus where member boosts deposits through the loan applied.",
        "The Kopa-Plus loan has the following conditions:",
        "• Maximum deposit boosting is kes 500,000, although subject review from time to time",
        "• A commission of 2% is on the boosted deposits",
        "• Deposits boosted through a loan do not earn Dividends/interest on deposits until the loan is completely repaid.",
        "The loan is awarded on the first come basis depending on the availability of funds.",
        "Development Loan can refinanced in Two Ways:",
        "• Top up/ refinancing and continue paying the loan within the remaining period",
        "• Selling the outstanding loan to the SACCO at commission of 1%-It means the Sacco is clearing the loan for you, and then applies for a higher loan; pay the Sacco amount cleared plus commission, and then gets the difference.",
        "A member is allowed to have only one development at a time.",
        "The loan may be paid to a maximum of three (3) depending on the availability of funds."
      ]
    },
    {
      id: 2,
      title: "Emergency Loan",
      description: "This loan is granted to cater for unforeseen circumstances such as sudden hospitalization, funeral expenses, fire, theft and such similar hazards.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Repayment period is 12 (twelve) months",
        "The loan amount is calculated dependent on the loan request and ability to pay within 12 months",
        "Interest is 12% p.a"
      ]
    },
    {
      id: 3,
      title: "Education Loan",
      description: "This loan is granted to cater for school/College/University fees.",
      image: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Repayment period is 12 (twelve) months",
        "The loan amount is calculated dependent on the loan request and ability to pay within 12 months",
        "Interest is 12% p.a"
      ]
    },
    {
      id: 4,
      title: "Utility Loan",
      description: "This is granted to members who require immediate financing at short term for household like fridge, cookers, furniture and other household requires.",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Repayment period is 36 months",
        "Interest is 12% p.a",
        "The maximum loan amount is Kshs.300, 000.00"
      ]
    },
    {
      id: 5,
      title: "Settlement/Karibu Loan",
      description: "On joining a member qualifies for a settlement/Karibu loan payable during the first contract period/Probation period at an interest 12% p. a, with a commission of 1% deductible from the approved loan.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Instant/Salary Advance Loan",
      description: "Issued to members who require money urgently",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Recovered in one installment at the end of the month of award",
        "Interest for instant loan is 10% per month.",
        "Since the amount may be advanced when the payroll is processed, if one fails to repay after receiving salary a penalty equivalent to the loan interest plus Ksh. 500, will be charged and the same will be forwarded to the next month's payroll."
      ]
    },
    {
      id: 7,
      title: "Jipange Loan",
      description: "This is granted to members who has short income eg acting allowance, special duty etc.",
      image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "Repayment period is 6 months",
        "Interest is 12% p.a",
        "No limit to loan amount provided member can pay through payroll within 6months"
      ]
    },
    {
      id: 8,
      title: "Maisha Bora Loan",
      description: "The product will help members to acquire/access water tanks, solar items, fridges, cookers, washing machines, Boda Boda, Gym , travel and medical insurance and related products or services from suppliers or providers who have signed MOUs with HELB SACCO LTD.",
      image: "https://images.pexels.com/photos/5905711/pexels-photo-5905711.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "No cash payments to members.",
        "Payment is made direct to the supplier or service provider",
        "The item or service is delivered to the member at SACCOs.",
        "Maximum repayment period to be 48 Months",
        "Interest rate is 10% p.a on reducing balance",
        "No limit on loan amount provided the member can pay through payroll within 48 months",
        "The loan must be secured either by guarantors or self-guarantee",
        "The loan should be within the 4 times of the deposit multiplier factor",
        "In the event of dishonesty on the part of the member the loan will revert to normal interest rate of 12% and a penalty of 5% charged on the initial principal loan"
      ]
    },
  
    {
      id: 9,
      title: "Self-Guaranteed Loan",
      description: "The product target those members who need to get loan facility less than or equal to their deposits",
      image: "https://images.pexels.com/photos/5905712/pexels-photo-5905712.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: [
        "The loan should be within share deposit",
        "Interest rate to be at 12% p.a.",
        "Maximum period to be 48 Months",
        "Maximum amount to be the available share deposit balance",
        "Member will keep his/her total loans within the deposits during the repayment of the loan."
      ]
    },

    {
  id: 10,
  title: "Senior (Retirees) Scheme/Products",
  description: "This scheme is aimed at retaining the retired members of the SACCO. Eligible for retirees who had been members before retirement, allowing them to continue enjoying SACCO benefits under the senior members club.",
  image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
  details: [
    "Member will keep his/her total loans within the deposits during repayment.",
    "Rejoining members to pay Kshs 1,000 (for those who exited and want to rejoin).",
    "Minimum monthly contribution: Ksh 1,000.",
    "Can withdraw share deposits provided remaining amount covers outstanding loans.",
    "Monthly contributions may be retained from Kshs 12,000 interest/dividends.",
    "Loans repayable within a maximum of 36 months (3 years).",
    "Loans will be guaranteed like any other SACCO loans.",
    "Eligible members must have a consistent income or pension.",
    "May require check-off from pension administrator, direct debit, or standing order.",
    "A copy of the retirement letter should be attached.",
    "Interest rate: 12% p.a.",
    "Loan limit is 3x the member's deposit.",
    "Retirees enjoy full privileges and rights like all other members."
  ]
},
{
  id: 11,
  title: "Dividend Advance / Diva Advance",
  description: "This product allows members to access part of their dividend in advance, before official declaration at the AGM.",
  image: "https://images.pexels.com/photos/4386430/pexels-photo-4386430.jpeg?auto=compress&cs=tinysrgb&w=800",
  details: [
    "Applicant’s loans and deposit payments must be up-to-date (no default).",
    "Application form must be filled.",
    "Advance amount is up to 50% of net dividend from the previous year.",
    "Subject to the member's expected entitlement for the current year.",
    "SACCO may defer the advance if funds or other requirements are not met.",
    "Guarantors: Member's anticipated dividend/interest.",
    "Advance is available only between January and the AGM date.",
    "A 5% commission/processing fee is charged and deducted from the final balance."
  ]
}
// {
//   id: 12,
//   title: "Mdosi Junior Savings Account",
//   description: "Designed for children under 18, this savings account allows parents to save on behalf of their children and teach them the value of financial planning early.",
//   image: "https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=800",
//   details: [
//     "Account is in the child’s name; operated by the parent.",
//     "Child’s birth certificate required for account opening.",
//     "Opening and minimum operating balance: Kshs 1,000.",
//     "Minimum monthly contribution: Kshs 1,000.",
//     "Interest: 10% p.a. on deposits above Kshs 5,000.",
//     "Withdrawals limited to four times a year.",
//     "At age 18, account can be converted to normal SACCO membership."
//   ]
// }



  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                alt="HELB Sacco Loans"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Comprehensive Loan Portfolio
              </h2>
              <p className="text-gray-600 mb-4">
                HELB Sacco Society Limited offers a wide range of loan products designed to meet the diverse financial needs of our members. From development loans to emergency assistance, we provide competitive rates and flexible terms to help you achieve your financial goals.
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
