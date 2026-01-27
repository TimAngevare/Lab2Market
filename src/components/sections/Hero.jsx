import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaFlask, FaChartLine, FaGlobe } from 'react-icons/fa';
import Button from '../ui/Button';
import AnimatedBridge from '../ui/AnimatedBridge';

const Hero = () => {
  const stats = [
    { icon: <FaFlask />, value: '4TU', label: 'Students' },
    { icon: <FaChartLine />, value: 'Deep Tech', label: 'Focus' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/30 to-primary-100/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #52796F 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn Deep Tech Research Into{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Market Reality
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-700/80 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Student-powered market validation for Twente's academic innovations.
              We bridge the gap between groundbreaking research and commercial success.
            </motion.p>

            {/* Slogan Banner */}
            <motion.div
              className="glass-card bg-gradient-primary/10 border-primary-500/20 px-6 py-5 rounded-2xl mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg md:text-xl font-medium text-primary-900 italic">
                "We handle commercialization so you can focus on what matters:
                <span className="text-primary-500 font-semibold"> technical research.</span>"
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="contact" smooth={true} duration={800} offset={-80}>
                <Button size="lg" className="cursor-pointer" icon={<FaArrowRight />}>
                  Start Your Journey
                </Button>
              </Link>
              <Link to="services" smooth={true} duration={800} offset={-80}>
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-14 pt-10 border-t border-primary-100/50 max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary-500 text-xl">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                  <div className="text-sm text-primary-700/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Glow effect behind animation */}
            <div className="absolute inset-0 bg-gradient-radial opacity-20 blur-3xl scale-110"></div>
            <AnimatedBridge />
          </motion.div>
        </div>
      </div>
{/* Scroll indicator */}
    </section>
  );
};

export default Hero;
