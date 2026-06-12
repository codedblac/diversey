import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      title: "Membership Application Form",
      description: "Complete form for new membership registration",
      type: "PDF",
      icon: <FileText className="w-6 h-6" />,
      // file: "/downloads/MEMBERSHIP-APPLICATION-FORM.pdf", 
    },
    {
      title: "Nominee Forms",
      description: "Form to nominate a beneficiary",
      type: "PDF",
      icon: <FileText className="w-6 h-6" />,
      // file: "/downloads/NOMINNEE-FORM.pdf", 
    },
    {
    title: "Service Charter",
    description: "Outlines our service standards and commitments to members.",
    type: "PDF",
    icon: <FileText className="w-6 h-6" />,
    // file: "/downloads/service-charter.pdf", 
  },
  ];

  const features = [
    "Broad selection of products customized to meet your needs",
    "Access to affordable credit products with ease",
    "Easily accessible, for consultation and advice",
    "Low interest rates on loans",
    "Competitive annual dividends and interest on deposits",
    "Deposit insurance",
    "Affordable property with HELB investment",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Resources - DIVERSEYSacco"
        description="Access helpful resources from DIVERSEYSacco including downloadable forms, policy documents, guides, and financial education materials."
        keywords="diverseysacco resources, sacco forms, diversey sacco documents, sacco guides, financial education, diverseysacco downloads"
        url="https://diverseysacco.com/resources"
        image="https://diverseysacco.com/logo.png"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Resources
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
                src="img/resources.jpg"
                alt="DIVERSEY Sacco Resources"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>

            {/* Features */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Why Choose DIVERSEY REGULATED Non-WDT Sacco?
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-helb-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
              Download Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.file}
                  download
                  className="block hover-lift transition-all duration-300"
                >
                  <Card className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-helb-green-100 rounded-lg flex items-center justify-center text-helb-green-600">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {resource.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {resource.type}
                            </span>
                            <Download className="w-4 h-4 text-helb-green-600" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
