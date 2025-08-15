import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Login = () => {
  const [view, setView] = useState<'login' | 'register'>('login');
  const [idNumber, setIdNumber] = useState('');
  const [form, setForm] = useState({
    id: '',
    email: '',
    countryCode: '+254',
    phone: '',
    terms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleLogin = () => {
    if (!idNumber || idNumber.trim().length < 4) {
      alert('Please enter a valid ID number');
      return;
    }
    window.location.href = 'https://members.helbsacco.co.ke/site/login';
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!form.id || form.id.trim().length < 4) newErrors.id = 'Valid ID is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone || form.phone.length < 7) newErrors.phone = 'Valid phone number is required';
    if (!form.terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      alert('Registration submitted successfully!');
      // Optional: send form to backend
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-helb-green-800 text-yellow-300 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">HELB SACCO Portal</h1>
        <p className="text-lg">Secure login and member registration</p>
      </section>

      {/* Main Form Card */}
      <section className="container mx-auto px-4 py-16 max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          {view === 'login' ? (
            <>
              <h2 className="text-2xl font-semibold text-helb-green-800 mb-6">Login</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="loginId" className="block text-gray-700 font-medium mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="loginId"
                    type="text"
                    placeholder="Enter your ID number"
                    title="ID Number"
                    required
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>

                <Button type="submit" className="w-full bg-helb-green-600 text-white hover:bg-helb-green-700">
                  Proceed to Login
                </Button>

                <p className="text-sm text-center text-gray-600 mt-4">
                  New here?{' '}
                  <button
                    type="button"
                    className="text-helb-green-700 underline"
                    onClick={() => setView('register')}
                  >
                    Become a Member
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-helb-green-800 mb-6">Become a Member</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
                className="space-y-5"
              >
                {/* ID Number */}
                <div>
                  <label htmlFor="newId" className="block text-gray-700 font-medium mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="newId"
                    type="text"
                    placeholder="Enter your ID number"
                    title="ID Number"
                    required
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  {errors.id && <p className="text-red-600 text-sm mt-1">{errors.id}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    title="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number with Country Code */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <label htmlFor="countryCode" className="sr-only">Country Code</label>
                      <select
                        id="countryCode"
                        name="countryCode"
                        title="Country Code"
                        value={form.countryCode}
                        onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                        className="border border-gray-300 rounded-md px-2 py-2 bg-white"
                        required
                      >
                        <option value="+254">🇰🇪 +254</option>
                        <option value="+255">🇹🇿 +255</option>
                        <option value="+256">🇺🇬 +256</option>
                        <option value="+250">🇷🇼 +250</option>
                      </select>
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="7xxxxxxxx"
                      title="Phone Number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="flex-1 border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="/terms" className="underline text-helb-green-700">
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                {errors.terms && <p className="text-red-600 text-sm mt-1">{errors.terms}</p>}

                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-helb-green-900 hover:bg-yellow-500"
                >
                  Submit Registration
                </Button>

                <p className="text-sm text-center text-gray-600 mt-4">
                  Already a member?{' '}
                  <button
                    type="button"
                    className="text-helb-green-700 underline"
                    onClick={() => {
                      setView('login');
                      setErrors({});
                    }}
                  >
                    Login
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
