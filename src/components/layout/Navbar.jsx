import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import logoMain from '../../assets/images/logo-dark.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', to: 'services' },
    { name: 'Why validate?', to: 'why-validation' },
    { name: 'Process', to: 'process' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={800} className="cursor-pointer">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logoMain}
                alt="Lab2Market"
                className="h-12 md:h-15 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                className={`cursor-pointer font-medium text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-primary-700 hover:text-primary-500'
                    : 'text-primary-900 hover:text-primary-500'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <Button size="sm" className="cursor-pointer ml-4">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary-900 text-2xl p-2 rounded-xl hover:bg-primary-50/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-primary-50/50"
          >
            <div className="container-custom py-8 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="block text-primary-700 hover:text-primary-500 hover:bg-primary-50/50 font-medium cursor-pointer py-3 px-4 rounded-xl transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="md" className="w-full cursor-pointer">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
