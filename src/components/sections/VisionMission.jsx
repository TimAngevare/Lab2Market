import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaRocket } from 'react-icons/fa';

const VisionMission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="vision-mission" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-primary-50/10 to-transparent"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Building the future of deep tech commercialization in Twente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-10"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900">Vision</h3>
            </div>

            <p className="text-lg text-primary-700 leading-relaxed">
              A thriving Twente ecosystem where the distinction between 'academic research' and
              'market solution' dissolves. We envision a future where high-tech science and applied
              'living technology' are seamlessly validated and scaled to directly solve the global
              societal challenges we face today.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-10"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900">Mission</h3>
            </div>

            <p className="text-lg text-primary-700 leading-relaxed">
              We de-risk the commercial potential of Twente's deeptech research ecosystem by
              deploying young ambitious talent with a technical business background. By training
              4TU graduates to validate markets, we offer affordable, high-quality business
              development that bridges the gap between lab innovation and market product.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
