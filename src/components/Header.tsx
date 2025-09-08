// ... existing imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Keep: About dropdown
  const aboutUsItems = [
    { title: 'Who We Are', href: '/about' },
    // { title: 'Become a Member', href: '/membership' },
    { title: 'Board Of Directors', href: '/leadership' },
    { title: 'Supervisory Committee', href: '/supervisory' },
    { title: 'Management Team', href: '/management' },
  ];

  // ✅ Keep: Products dropdown
  const productsItems = [
    { title: 'Loan Products', href: '/loans' },
    { title: 'Savings Products', href: '/savings' },
  ];

  // ✅ Reusable Dropdown Component
  const Dropdown = ({
  title,
  items,
  dropdownKey,
}: {
  title: string;
  items: { title: string; href: string }[];
  dropdownKey: string;
}) => {
  const isOpen = activeDropdown === dropdownKey;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(dropdownKey)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center space-x-1 text-gray-700 hover:text-helb-green-600 font-medium transition-colors">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Always render, but show/hide via classes */}
      <div
        className={`absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-200
    ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
  `}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-4 py-3 text-gray-700 hover:bg-helb-green-50 hover:text-helb-green-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};



  return (
    <>
      {/* Top Bar */}
      <div className="bg-helb-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>📧 memberservices.co.ke</span>
            <span>📞 +254 711052499/799</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>HELB REGULATED NON-WDT SACCO SOCIETY LTD P.O. Box 69489 - 0400, NAIROBI</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-helb-green-600 square-full flex items-center justify-center">
                <img src="/Logo.jpg" alt="HELB Sacco Logo" className='square-full' />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-helb-green-600 font-medium transition-colors">HOME</Link>
              <Dropdown title="ABOUT US" items={aboutUsItems} dropdownKey="about" />
              <Dropdown title="PRODUCTS" items={productsItems} dropdownKey="products" />
              <Link
                to="/membership"
                className="text-gray-700 hover:text-helb-green-600 font-medium transition-colors"
              >
                MEMBERSHIP
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-helb-green-600 font-medium transition-colors">DOWNLOADS</Link>
              <Link to="/faqs" className="text-gray-700 hover:text-helb-green-600 font-medium transition-colors">FAQS</Link>
              <Link to="/contact" className="text-gray-700 hover:text-helb-green-600 font-medium transition-colors">CONTACT US</Link>
              {/* Login Button (Desktop) */}
              <a href="https://members.helbsacco.co.ke/site/login">
              <Button className="bg-helb-green-600 hover:bg-helb-green-700 text-white">
              Member Login
              </Button>
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-helb-green-600 font-medium">HOME</Link>
              
              <div>
                <span className="block text-gray-700 font-medium mb-2">ABOUT</span>
                <div className="pl-4 space-y-2">
                  {aboutUsItems.map((item, index) => (
                    <Link key={index} to={item.href} className="block text-gray-600 hover:text-helb-green-600">{item.title}</Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/membership"
                className="block text-gray-700 hover:text-helb-green-600 font-medium"
              >
                MEMBERSHIP
              </Link>

              <div>
                <span className="block text-gray-700 font-medium mb-2">PRODUCTS</span>
                <div className="pl-4 space-y-2">
                  {productsItems.map((item, index) => (
                    <Link key={index} to={item.href} className="block text-gray-600 hover:text-helb-green-600">{item.title}</Link>
                  ))}
                </div>
              </div>

              <Link to="/resources" className="block text-gray-700 hover:text-helb-green-600 font-medium">DOWNLOADS</Link>
              <Link to="/faqs" className="block text-gray-700 hover:text-helb-green-600 font-medium">FAQS</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-helb-green-600 font-medium">CONTACT US</Link>
              <button
              onClick={() => window.location.href = 'https://members.helbsacco.co.ke/site/login'}
              className="block w-full bg-helb-green-600 hover:bg-helb-green-700 text-white py-2 px-4 rounded"
              >
                Member Login
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
