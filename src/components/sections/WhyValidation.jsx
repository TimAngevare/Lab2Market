import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaIndustry } from 'react-icons/fa';

const WhyValidation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const challenges = [
    {
      icon: <FaLightbulb />,
      title: 'Limited Industry Knowledge',
      description: 'Researchers excel at technical innovation but often lack insights into market needs, competitive landscapes, and real-world application requirements'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Validation Bottlenecks',
      description: 'Without validation from established industry players or certification bodies, promising technologies face delayed adoption cycles and credibility challenges'
    },
    {
      icon: <FaIndustry />,
      title: 'Misaligned Development',
      description: 'Many academic projects pursue technical excellence without confirming product-market fit, leading to solutions in search of problems'
    }
  ];

  const benefits = [
    'Identify validated market opportunities before significant R&D investment',
    'Connect with potential industry partners and pilot customers who can accelerate validation',
    'Map the commercialization pathway from current TRL to market-ready solutions',
    'Strengthen funding applications with evidence-based market analysis that addresses investor concerns',
    'Avoid costly pivots by validating assumptions about customer needs, pricing, and competitive positioning'
  ];

  return (
    <section id="why-validation" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Main Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Why Market Validation for Deep Tech Academic Research?
          </h2>
        </motion.div>

        {/* Section 1: Bridging the Commercialization Gap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            Bridging the Commercialization Gap
          </h3>

          <div className="glass-card p-8 max-w-5xl mx-auto">
            <p className="text-lg text-primary-700 leading-relaxed mb-8 text-center">
              Academic research typically operates at <strong>Technology Readiness Levels (TRL) 1-4</strong>—focused
              on fundamental principles and proof-of-concept demonstrations. However, investors and industry partners
              require solutions at <strong>TRL 7 or higher</strong>: validated in relevant operational environments
              and ready for commercial deployment.
            </p>

            {/* TRL Scale Visualization */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="bg-primary-700 text-white rounded-lg py-4 px-6 mb-2">
                    <div className="text-3xl font-bold">TRL 1-4</div>
                    <div className="text-sm mt-1">Academic Research</div>
                  </div>
                  <p className="text-sm text-primary-700">Lab & Proof of Concept</p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    className="text-6xl text-primary-500"
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>

                <div className="text-center flex-1">
                  <div className="bg-gradient-primary text-white rounded-lg py-4 px-6 mb-2 shadow-lg">
                    <div className="text-3xl font-bold">TRL 7+</div>
                    <div className="text-sm mt-1">Market Ready</div>
                  </div>
                  <p className="text-sm text-primary-700">Validated & Commercial</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                <p className="text-red-800 font-semibold text-center">
                  This gap represents one of the most critical barriers to deep tech commercialization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: The Market Validation Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            The Market Validation Challenge
          </h3>

          {/* Statistic Highlight */}
          <div className="glass-card p-8 mb-8 max-w-4xl mx-auto bg-gradient-to-br from-primary-50/50 to-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="text-center md:text-left">
                <div className="text-7xl font-bold text-primary-500 mb-2">75%</div>
                <p className="text-lg text-primary-700">
                  of deep tech founders struggle with corporate partnership challenges
                </p>
              </div>
              <div className="text-primary-700 leading-relaxed">
                <p>
                  Recent research done by TNO on Europe's deep tech ecosystem reveals that investors remain hesitant
                  due to uncertain market adoption and lack of clear value propositions. For academic
                  innovations, particularly in fields like <strong>photonic integrated circuits, quantum
                  technologies, and advanced semiconductors</strong>, the challenge is even more acute.
                </p>
              </div>
            </div>
          </div>

          {/* Three Challenges */}
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl text-red-600">
                    {challenge.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">
                  {challenge.title}
                </h4>
                <p className="text-primary-700 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: How We Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-10 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              How We Help Navigate the Path to TRL 7
            </h3>

            <p className="text-lg mb-8 text-center opacity-90">
              We specialize in validating commercial viability early and charting the roadmap from lab to market.
              Our market validation research helps you:
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <FaCheckCircle className="text-2xl text-primary-100 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg leading-relaxed text-center opacity-90">
                By conducting rigorous market validation alongside technical development, we help academic
                researchers make informed decisions about which applications to pursue, what partnerships
                to establish, and how to position innovations for maximum commercial impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyValidation;
