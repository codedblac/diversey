import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Award,
  Target,
  Heart,
  Building2,
  Handshake,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Mail,
  CheckCircle,
  Star,
  ThumbsUp,
  Eye,
  Zap,
  Globe,
  Lock,
  Lightbulb,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Savings Products",
      description:
        "Flexible savings accounts with competitive interest rates to help you build wealth.",
      image: "img/helb2.jpg",
      link: "/savings",
      features: [
        "Share capital Savings ",
        "Deposits ",
        "Withdrawable Savings ",
        "Mdosi Junior Savings Account ",
      ],
    },
    {
      title: "Loan Products",
      description:
        "Affordable loans with flexible repayment terms for all your financial needs.",
      image: "img/helb3.jpg",
      link: "/loans",
      features: [
        "Super Development Loan",
        "Premium Development Loan",
        "Golden Development Loan",
        "Normal Repayment Loan",
      ],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our dealings.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description:
        "We operate in a clear, open, and honest manner with all stakeholders.",
    },
    {
      icon: TrendingUp,
      title: "Reliability",
      description:
        "We are dependable and consistent in delivering on our promises.",
    },
    {
      icon: Handshake,
      title: "Professionalism",
      description:
        "We conduct ourselves with skill, good judgment, and polite behavior.",
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We take full responsibility for our actions and decisions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="DIVERSEYSacco - Home"
        description="Welcome to DIVERSEYSacco, your trusted partner in financial solutions."
        keywords="sacco, diversey, loans, savings, kenya"
        url="https://diverseysacco.com/"
        image="https://diverseysacco.com/logo.png"
      />
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Vision, Mission & Core Values Section - Refactored */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title - Centered */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-helb-green-800">
              Vision, Mission & Core Values
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our guiding principles that drive everything we do for our members
            </p>
          </div>

          {/* Vision and Mission Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-r from-helb-green-600 to-helb-green-700 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Star className="w-6 h-6 mr-3" />
                Vision
              </h3>
              <p className="leading-relaxed text-lg">
                To be the preferred financial solutions and benefits provider
                for the stake holders
              </p>
            </div>

            <div className="bg-gradient-to-r from-helb-gold-500 to-helb-gold-600 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3" />
                Mission
              </h3>
              <p className="leading-relaxed text-lg">
                Socio-economic empowerment of members through mobilization of
                savings and provision of superior financial products and
                services by use of appropriate technology while adhering to
                cooperative principles
              </p>
            </div>
          </div>

          {/* Image and Core Values Side by Side */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="animate-on-scroll slide-in-left">
              <img
                src="/img/helb5.jpg"
                alt="DIVERSEY Sacco Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            {/* Core Values */}
            <div className="space-y-6 animate-on-scroll slide-in-right">
              <h3 className="text-2xl font-semibold text-helb-green-800 mb-6">
                Our Core Values
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    icon: Smile,
                    title: "Courtesy",
                    description:
                      "We treat everyone with respect, kindness, and a commitment to excellent service.",
                  },
                  {
                    icon: Shield,
                    title: "Integrity",
                    description:
                      "We act with honesty, uphold strong moral principles, and always do what’s right.",
                  },
                  {
                    icon: Users,
                    title: "Professionalism",
                    description:
                      "We deliver with competence, reliability, and a strong sense of responsibility.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation",
                    description:
                      "We embrace creativity and forward thinking to continuously improve and evolve.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-helb-green-50 transition-colors"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-helb-green-100 to-helb-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-7 h-7 text-helb-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Motto - Centered */}
          <div className="text-center mt-16">
            <p className="text-2xl text-helb-green-800 font-bold italic">
              “Together for Prosperity.”
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl font-bold text-helb-green-800 mb-6">
              Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover our comprehensive range of financial products designed to
              meet your needs and help you achieve your financial goals.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-lift animate-on-scroll group border-0 shadow-xl"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-helb-green-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-helb-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to={service.link}>
                      <Button className="w-full bg-helb-gold-500 hover:bg-helb-green-700 text-white group-hover:bg-helb-green-700 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-in-left">
              <img
                src="img/leadership.jpg"
                alt="Leadership Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-5xl font-bold text-helb-green-800 mb-8">
                Leadership & Governance
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our experienced leadership team and robust governance structure
                ensure transparency, accountability, and strategic direction in
                all our operations.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <Building2 className="w-8 h-8 text-helb-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Board of Directors
                    </h4>
                    <p className="text-gray-600">
                      Strategic oversight and governance
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-helb-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Management Team
                    </h4>
                    <p className="text-gray-600">
                      Operational excellence and execution
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <Shield className="w-8 h-8 text-helb-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Supervisory Committee
                    </h4>
                    <p className="text-gray-600">
                      Compliance and risk management
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/leadership">
                <Button className="mt-8 bg-helb-green-600 hover:bg-helb-green-700 text-white px-8 py-4 text-lg">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="animate-on-scroll slide-in-left">
              <img
                src="/img/helb5.jpg"
                alt="DIVERSEY REGULATED Non-WDT Sacco Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-4xl font-bold text-helb-green-800 mb-6">
                Why Join Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover why thousands trust DIVERSEY REGULATED Non-WDT Sacco for
                secure and flexible financial solutions.
              </p>
              <ul className="space-y-5">
                {[
                  "Well managed Sacco",
                  "Secure Savings",
                  "Good returns on savings/Investments",
                  "Various savings and Loan products",
                  "Flexibility in service delivery to members",
                  "Opportunity to save for education/fees, holidays, Birthday, Wedding, Anniversary etc.",
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 mt-1 text-helb-green-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-helb-green-700 to-helb-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-on-scroll">
            <h2 className="text-5xl font-bold mb-8">
              Join DIVERSEY REGULATED Non-WDT Sacco Today
            </h2>
            <p className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto">
              Become part of our growing family and enjoy exclusive benefits,
              competitive rates, and personalized financial services designed
              just for you. Start your journey towards financial success with
              us.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/membership">
                <Button
                  size="lg"
                  className="bg-helb-gold-500 hover:bg-helb-gold-600 text-white px-10 py-6 text-lg"
                >
                  Become a Member
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-helb-green-700 px-10 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-helb-green-800 to-helb-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-in-left">
              <p className="text-sm text-helb-gold-400 font-medium mb-2">
                Get In Touch
              </p>
              <h2 className="text-5xl font-bold mb-8">Help & Support</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-helb-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call us</h3>
                    <p className="mb-1 text-gray-200">
                      Business Hours: Monday - Friday, 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-lg font-semibold">
                      Phone: +254 711052499/799
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-helb-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Write us</h3>
                    <p className="mb-1 text-gray-200">Email us at:</p>
                    <p className="text-lg">memberservices@diverseysacco.com</p>
                    {/* <p className="text-lg">customercare@diverseysacco.com</p>
                    <p className="text-lg">publicrelations@diverseysacco.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-helb-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit us</h3>
                    <p className="text-lg">
                      Customer Care, DIVERSEY Centre, Anniversary Towers, Nairobi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8197882968157!2d36.81392007404914!3d-1.2818910987059178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d253a461ab%3A0xf1a32b0dbcf6c646!2sAnniversary%20Towers!5e0!3m2!1sen!2ske!4v1755370874923!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DIVERSEY REGULATED Non-WDT Sacco Location"
                  ></iframe>
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

export default Index;
