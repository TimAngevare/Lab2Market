import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img
              src={logoWhite}
              alt="Lab2Market"
              className="h-14 w-auto mb-6"
            />
            <p className="text-primary-50 leading-relaxed max-w-md text-lg">
              Student-powered market validation for deep tech research ecosystem.
              Bridging the gap between lab innovation and market product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-primary-50">
              <li className="hover:text-white transition-colors cursor-pointer">Customer Discovery</li>
              <li className="hover:text-white transition-colors cursor-pointer">Industry Landscape Analysis</li>
              <li className="hover:text-white transition-colors cursor-pointer">Market Landscape Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4 text-primary-50">
              <li>
                <a
                  href="mailto:info@lab2market.nl"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 bg-primary-700/50 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <FaEnvelope />
                  </span>
                  <span>info@lab2market.nl</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-10 h-10 bg-primary-700/50 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt />
                </span>
                <span>Twente, Netherlands</span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/lab2marketnl"
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 bg-primary-700/50 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <FaLinkedin />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-100 text-sm">
              &copy; {currentYear} Lab2Market. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm text-primary-100">
              <span>Part of 4TU.Federation</span>
              <span className="w-1.5 h-1.5 bg-primary-100 rounded-full"></span>
              <span>Based in Twente</span>
              <span className="w-1.5 h-1.5 bg-primary-100 rounded-full"></span>
              <span>KVK: 99602105</span>
            </div>

            {/* Back to top button */}
            <Link to="hero" smooth={true} duration={800}>
              <motion.button
                className="w-10 h-10 bg-primary-500 hover:bg-primary-100 hover:text-primary-900 rounded-xl flex items-center justify-center transition-all cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowUp />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
