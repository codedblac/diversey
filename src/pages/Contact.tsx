import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Simulate successful submission
    setTimeout(() => {
      setStatus({
        success: true,
        message: "Your message has been submitted successfully!",
      });
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setStatus(null);

      // Simulate successful submission without backend
      setTimeout(() => {
        setStatus({
          success: true,
          message: "Your message has been submitted successfully!",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setLoading(false);
      }, 1000);
    };

    // try {
    //   const response = await fetch('https://helbsacco-backend.onrender.com/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   const result = await response.json();

    //   if (result.success) {
    //     setStatus({ success: true, message: 'Your message has been sent successfully!' });
    //     setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    //   } else {
    //     setStatus({ success: true, message: 'Failed to send message. Please try again.' });
    //     setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    //   }
    // } catch (error) {
    //   setStatus({ success: false, message: 'An error occurred. Please try again later.' });
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact HELBSacco"
        description="Get in touch with HELBSacco for inquiries, support, or membership details. We're here to help you with your financial needs."
        keywords="contact HELBSacco, helb sacco contact, sacco support, helb customer care, helbsacco email, helbsacco phone"
        url="https://helbsacco.co.ke/contact"
        image="https://helbsacco.co.ke/logo.png"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift animate-on-scroll">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@helbsacco.co.ke</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-on-scroll">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  HELB REGULATED Non-WDT SACCO SOCIETY LTD P.O. Box 69489 -
                  0400, NAIROBI, ANNIVERSARY TOWERS, 3RD FLOOR, NAIROBI CITY
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-on-scroll">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">Tel +254 711052499/799</p>
              </CardContent>
            </Card>
          </div>

          {/* Help & Support Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-helb-green-700 mb-6">
                Help & Support
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-helb-green-600 mb-2">
                    Call us
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Business hours, 5 days a week.
                  </p>
                  <p className="text-gray-600">Phone: +254 711052499/799</p>
                </div>
                <div>
                  <h3 className="font-semibold text-helb-green-600 mb-2">
                    Write us
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Email: info@helbsacco.co.ke
                  </p>
                  <p className="text-gray-600">
                    memberservices@helbsacco.co.ke
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-helb-green-600 mb-2">
                    Visit us at:
                  </h3>
                  <p className="text-gray-600">
                    Customer Care, HELB Centre, Anniversary Towers, Nairobi
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Write a Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {status && (
                  <p
                    className={`text-sm ${
                      status.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2"
                >
                  {loading ? "Sending..." : "SEND A MESSAGE"}
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-helb-green-700 mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.8197882947998!2d36.8139201!3d-1.2818911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d253a461ab%3A0xf1a32b0dbcf6c646!2sAnniversary%20Towers!5e0!3m2!1sen!2ske!4v1755381332317!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HELB Sacco Location"
                ></iframe>
              </div>
              <div className="p-6 bg-helb-green-700 text-white">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-helb-gold-400" />
                  <div>
                    <h3 className="font-semibold">HELB Centre</h3>
                    <p className="text-sm opacity-90">
                      Anniversary Towers, Nairobi City
                    </p>
                  </div>
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

export default Contact;
