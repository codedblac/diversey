
import Header from '@/components/Header';
import SEO from "@/components/SEO";
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, FileText, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const individualRequirements = [
    "Complete and submit the Individual Membership Application Form",
    "Attach a copy of your Kenyan National Identity Card or a valid Kenyan Passport",
    "Attach colored passport size photograph",
    "Attach a copy of your KRA PIN Certificate"
  ];

const navigate = useNavigate();


  const jointRequirements = [
    "Complete and submit the Joint Membership Application Form",
    "Attach copies of Kenyan National Identity Cards or valid Kenyan Passports for all parties",
    "Attach colored passport size photographs for all parties",
    "Attach copies of KRA PIN Certificates for all parties"
  ];

  const groupRequirements = [
    "Complete and submit the Joint Membership Application Form",
    "Attach copy of Kenyan National Identity Card or a valid Kenyan Passport for all applicants (SHG) or Elected Officials in case of Chamas",
    "General members resolution authorizing account opening in HELB SACCO",
    "Attach colored passport size photographs for all applicants",
    "Attach a copy of the Group Registration Certificate",
    "Attach copies of KRA PIN Certificates for officials"
  ];

  const institutionalRequirements = [
    "Complete and submit the Company Membership Application Form",
    "Attach a certified copy of Registration Certificate",
    "General meeting/board resolution authorizing account opening at HELB SACCO",
    "Attach the memorandum and articles of association for the company",
    "Attach colored passport size photographs of authorized signatories and copies of their national ID/Passport",
    "Attach signature specimens of the signatories",
    "Attach copies of the KRA PIN Certificates of the directors",
    "Attach a copy of the company's KRA PIN Certificate"
  ];

  const benefits = [
    "Opportunity to accumulate savings through a variety of loan products",
    "Broad selection of products customized to meet your needs",
    "Access to affordable credit products with ease",
    "Easily accessible for consultation and advice",
    "Low interest rates on loans",
    "Competitive annual dividends and interest on deposits",
    "Deposit insurance",
    "Affordable property with HELB Investment"
  ];

  return (
    <div className="min-h-screen">
      <SEO
  title="Become a Member - HELBSacco"
  description="Join HELBSacco today and enjoy personalized financial solutions, competitive returns, secure savings, and exclusive member benefits."
  keywords="join HELBSacco, sacco membership, helb sacco registration, become a member, sacco kenya membership, helbsacco benefits"
  url="https://helbsacco.co.ke/membership"
  image="https://helbsacco.co.ke/logo.png"
/>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our growing family and become part of a trusted financial cooperative
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="img/members_benefits.jpg"
                alt="Membership Benefits"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-helb-green-800">Become a Member</h2>
              <p className="text-gray-700 leading-relaxed">
                HELB REGULATED Non-WDT SACCO is a member-based organization whose membership is open to all 
                Kenyans anywhere in the world. Sacco admits eligible individuals, groups, and 
                institutions/companies for membership of the Society upon fulfillment of 
                membership opening requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Membership is voluntary and open to all within the accepted common bond of 
                association that can make use of its services and are willing to abide by the 
                SACCO by-laws. Upon admission a member is issued with a membership number for 
                reference purposes and three mandatory accounts are automatically opened for the member.
              </p>
            </div>
          </div>

          {/* Membership Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-helb-green-800 text-center mb-12">
              Requirements for Joining HELB SACCO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Individual Membership */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-helb-green-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-helb-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-helb-green-800">Individual Membership</h3>
                  </div>
                  <p className="text-gray-600 mb-4">To join the SACCO as an individual, one needs to:</p>
                  <ul className="space-y-3">
                    {individualRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-helb-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Joint Membership */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-helb-green-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-helb-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-helb-green-800">Joint Membership</h3>
                  </div>
                  <p className="text-gray-600 mb-4">To join the SACCO jointly, you need to:</p>
                  <ul className="space-y-3">
                    {jointRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-helb-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Group Membership */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-helb-green-100 rounded-full flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6 text-helb-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-helb-green-800">Group Membership</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    This includes chamas, self-help groups (SHG) etc. To join the SACCO, they need to:
                  </p>
                  <ul className="space-y-3">
                    {groupRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-helb-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Institutional/Company Membership */}
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-helb-green-100 rounded-full flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-helb-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-helb-green-800">Institutional/Company Membership</h3>
                  </div>
                  <p className="text-gray-600 mb-4">To join the SACCO as corporate, one needs to:</p>
                  <ul className="space-y-3">
                    {institutionalRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-helb-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-helb-green-50 rounded-lg p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-helb-green-800 mb-6">Benefits of Membership</h3>
                <p className="text-gray-700 mb-6">
                  We offer you an opportunity to accumulate savings through a variety of loan products.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-helb-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="img/memebers.jpg"
                  alt="Happy Members"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    size="lg"
    className="bg-helb-green-600 hover:bg-helb-green-700"
    onClick={() => navigate('/resources')} //  redirects to /resources
  >
    Apply for Membership
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="border-helb-green-600 text-helb-green-600"
    onClick={() => navigate('/contact')} //  redirects to /contact
  >
    Contact Us
  </Button>
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
