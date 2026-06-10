import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Lock, User, Mail, Building, Shield, Settings, Handshake, Globe, FileText } from 'lucide-react';
import leadershipImg from '/img/leadership.jpg';

const ServicePortal = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle service provider sign in logic
    console.log('Service provider sign in submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Service Portal
          </h1>
          <p className="text-center text-lg mt-4 opacity-90">
            Access DIVERSEY Sacco's partner and service provider management system
          </p>
        </div>
      </section>

      {/* Portal Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portal Form */}
            <div>
              <Card className="w-full max-w-md mx-auto">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-helb-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-helb-green-700">
                    Service Provider Login
                  </CardTitle>
                  <CardDescription>
                    Access partner management and service coordination tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="providerId">Provider ID</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="providerId"
                          type="text"
                          placeholder="Enter your provider ID"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="companyName"
                          type="text"
                          placeholder="Your company name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="contact@yourcompany.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <Button variant="link" className="text-helb-green-600 text-sm">
                        Forgot password?
                      </Button>
                    </div>

                    <Button type="submit" className="w-full bg-helb-green-600 hover:bg-helb-green-700">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Image and Features */}
            <div>
              <div className="relative">
                <img 
                  src={leadershipImg} 
                  alt="DIVERSEY Sacco Service Portal"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-helb-green-700/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Service Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Handshake className="w-5 h-5 text-helb-gold-400" />
                      <span>Partner management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-helb-gold-400" />
                      <span>Service coordination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-helb-gold-400" />
                      <span>Contract management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-helb-gold-400" />
                      <span>Network integration</span>
                    </li>
                  </ul>
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

export default ServicePortal; 