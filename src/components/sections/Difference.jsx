import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const Difference = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const traditional = [
    { icon: <FaTimes />, text: '€20K-50K investment required', negative: true },
    { icon: <FaTimes />, text: '3-6 months timeline', negative: true },
    { icon: <FaTimes />, text: 'Generic insights, not deep tech focused', negative: true }
  ];

  const lab2market = [
    { icon: <FaCheckCircle />, text: 'Affordable pricing that fits research budgets', negative: false },
    { icon: <FaCheckCircle />, text: '4-8 weeks rapid validation', negative: false },
    { icon: <FaCheckCircle />, text: 'Technical students who understand your science', negative: false },
    { icon: <FaCheckCircle />, text: 'Trained in customer development methodology', negative: false },
    { icon: <FaCheckCircle />, text: 'Embedded in Twente\'s innovation ecosystem', negative: false }
  ];

  return (
    <section id="difference" className="section-padding bg-gradient-to-r from-primary-50/40 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            The Lab2Market Difference
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Why choose student-powered validation over traditional consulting
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Traditional Approach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-200"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
              <span className="text-red-500 mr-3">✗</span>
              Traditional Market Research
            </h3>

            <ul className="space-y-4">
              {traditional.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-primary-700 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lab2Market Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 border-2 border-primary-500"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
              <span className="text-primary-500 mr-3">✓</span>
              Lab2Market Solution
            </h3>

            <ul className="space-y-4">
              {lab2market.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-primary-700 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
