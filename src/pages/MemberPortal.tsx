import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Lock, User, Mail, Phone, Building, Shield } from 'lucide-react';
import leadershipImg from '/img/leadership.jpg';

const MemberPortal = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log('Sign in submitted');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic
    console.log('Sign up submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-helb-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-helb-gold-400">
            Member Portal
          </h1>
          <p className="text-center text-lg mt-4 opacity-90">
            Access your diversey Sacco account and manage your finances securely
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
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-helb-green-700">
                    {isSignIn ? 'Welcome Back' : 'Join DIVERSEY Sacco'}
                  </CardTitle>
                  <CardDescription>
                    {isSignIn 
                      ? 'Sign in to access your account and manage your finances'
                      : 'Create your account to start your financial journey with us'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={isSignIn ? "signin" : "signup"} onValueChange={(value) => setIsSignIn(value === "signin")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="signin" className="space-y-4">
                      <form onSubmit={handleSignIn} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
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
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signupEmail">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupEmail"
                              type="email"
                              placeholder="john.doe@example.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+254 700 000 000"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="memberNumber">Member Number</Label>
                          <div className="relative">
                            <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="memberNumber"
                              placeholder="DIVERSEY000000"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signupPassword">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="signupPassword"
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a strong password"
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

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm your password"
                              className="pl-10 pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-3"
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="terms" className="rounded" required />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the <Button variant="link" className="text-helb-green-600 text-sm p-0 h-auto">Terms of Service</Button> and <Button variant="link" className="text-helb-green-600 text-sm p-0 h-auto">Privacy Policy</Button>
                          </Label>
                        </div>

                        <Button type="submit" className="w-full bg-helb-green-600 hover:bg-helb-green-700">
                          Create Account
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Side Image and Features */}
            <div>
              <div className="relative">
                <img 
                  src={leadershipImg}  
                  alt="DIVERSEY Sacco Member Portal"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-helb-green-700/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Member Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-helb-gold-400" />
                      <span>Secure online banking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-helb-gold-400" />
                      <span>24/7 account access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-helb-gold-400" />
                      <span>Loan applications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lock className="w-5 h-5 text-helb-gold-400" />
                      <span>Transaction history</span>
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

export default MemberPortal; 