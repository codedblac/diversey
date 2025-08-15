
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  return (
    <div className="min-h-screen bg-gray-50">
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
                <p className="text-gray-600">info@helbsacco.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-on-scroll">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  HELB SACCO SOCIETY LTD P.O. Box 11607 - 0400,
                  NAIROBI STAREHE, HELB CENTRE, TOM MBOYA ST,
                  NAIROBI CITY
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-on-scroll">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">Tel +254 2223970</p>
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
                  <h3 className="font-semibold text-helb-green-600 mb-2">Call us</h3>
                  <p className="text-gray-600 mb-1">Business Hrs a day, 5 Days a week.</p>
                  <p className="text-gray-600">Phone: 020 2223970</p>
                </div>
                <div>
                  <h3 className="font-semibold text-helb-green-600 mb-2">Write us</h3>
                  <p className="text-gray-600 mb-1">Email: info@helbsacco.com, customercare@helbsacco.com,</p>
                  <p className="text-gray-600">publicrelations@helbsacco.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-helb-green-600 mb-2">Visit us or Find us at:</h3>
                  <p className="text-gray-600">Customer Care, HELB Centre, Tom Mboya St, Nairobi</p>
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
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2">
                  SEND A MESSAGE
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8174449559437!2d36.82496131475397!3d-1.2829084990626947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22c4e4a31%3A0x8a5e6b8e8b8b8b8b!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1635494400000!5m2!1sen!2ske"
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
                    <p className="text-sm opacity-90">Tom Mboya Street, Nairobi City</p>
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
