import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-helb-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-helb-gold-400">
              About Us
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              HELB REGULATED Non-WDT Sacco Society Limited is a licensed Non
              Withdrawable deposit taking (NWDT) SACCO that was formed to serve
              the financial needs of HELB employees and their families. We
              provide affordable financial services to help our members achieve
              their financial goals.
            </p>
          </div>

          {/* Our Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-helb-gold-400">
              Our Products & Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/loans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Loan Products
                </Link>
              </li>
              <li>
                <Link
                  to="/savings"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Savings Products
                </Link>
              </li>
              <li>
                <Link
                  to="/other-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Other Products & Services
                </Link>
              </li>
              <li>
                <Link
                  to="/helb-investment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  HELB Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-helb-gold-400">
              About Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Departments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Portals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-helb-gold-400">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <p>📧 memberservices.co.ke</p>
              <p>📞 Tel +254 711052499/799</p>
              <div className="mt-2">
                <p className="font-medium">
                  HELB REGULATED Non-WDT SACCO SOCIETY
                </p>
                <p>LTD P.O. Box 69489 - 0400,</p>
                <p>NAIROBI, KENYA</p>
              </div>
            </div>

            <h4 className="text-md font-semibold mb-2 text-helb-gold-400">
              Portals
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://members.helbsacco.co.ke/site/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Members Portal
                </a>
              </li>
            </ul>

            <h4 className="text-md font-semibold mb-2 mt-4 text-helb-gold-400">
              Resources
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News And Media
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tender Publications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-helb-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
  © {new Date().getFullYear()} Copyrights by HELB REGULATED Non-WDT
  Sacco Society Limited. All Rights Reserved <br /> <br />
  Designed by{" "}
  <a
    href="https://technopickltd.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    Technopick Reliable Solutions LTD
  </a>
</p>


          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-10 h-10 bg-helb-gold-500 rounded-full flex items-center justify-center hover:bg-helb-gold-600 transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-helb-gold-500 rounded-full flex items-center justify-center hover:bg-helb-gold-600 transition-colors"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-helb-gold-500 rounded-full flex items-center justify-center hover:bg-helb-gold-600 transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-helb-gold-500 rounded-full flex items-center justify-center hover:bg-helb-gold-600 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
