import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L2M</span>
              </div>
              <span className="font-display font-bold text-xl">Lab2Market</span>
            </div>
            <p className="text-primary-100 leading-relaxed">
              Student-powered market validation for Twente's deep tech research ecosystem.
              Bridging the gap between lab innovation and market product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-100">
              <li>Customer Discovery</li>
              <li>Industry Landscape Analysis</li>
              <li>Market Landscape Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="flex-shrink-0" />
                <a href="mailto:info@lab2market.nl" className="hover:text-white transition">
                  info@lab2market.nl
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="flex-shrink-0" />
                <span>Twente, Netherlands</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="flex-shrink-0" />
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-100 text-sm">
              © {currentYear} Lab2Market. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm text-primary-100">
              <span>Part of 4TU.Federation</span>
              <span>•</span>
              <span>Based in Twente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
