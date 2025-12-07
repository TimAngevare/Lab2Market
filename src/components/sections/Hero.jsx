import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import AnimatedBridge from '../ui/AnimatedBridge';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-primary-100/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #52796F 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn Deep Tech Research Into{' '}
              <span className="bg-gradient-to-r from-primary-500 to-primary-100 bg-clip-text text-transparent">
                Market Reality
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Student-powered market validation for Twente's academic innovations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="contact" smooth={true} duration={800} offset={-80}>
                <Button size="lg" className="cursor-pointer">
                  Start Your Validation Journey
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold text-primary-500">4TU</div>
                <div className="text-sm text-primary-700">Graduates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">Deep Tech</div>
                <div className="text-sm text-primary-700">Focus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">Twente</div>
                <div className="text-sm text-primary-700">Ecosystem</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <AnimatedBridge />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
