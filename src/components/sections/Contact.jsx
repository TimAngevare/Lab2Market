import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../forms/ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #84A98C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Validate Together
          </h2>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            Ready to de-risk your deep tech innovation? Get in touch to start your validation journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Founders Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Meet the Team</h3>

              <div className="space-y-6">
                {/* Tim Angevare */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">TA</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Tim Angevare</h4>
                    <p className="text-primary-50 text-sm">Co-Founder</p>
                    <p className="text-primary-100 text-sm mt-1">
                      Business & IT Student
                    </p>
                  </div>
                </div>

                {/* Kentaro Nagai */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">KN</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Kentaro Nagai</h4>
                    <p className="text-primary-50 text-sm">Co-Founder</p>
                    <p className="text-primary-100 text-sm mt-1">
                      International Business Administration Student
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white"></span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Lennart de Vreede</h4>
                    <p className="text-primary-50 text-sm">Advisor</p>
                    <p className="text-primary-100 text-sm mt-1">
                      Impact Developer Photonics University of Twente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-primary-100 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@lab2market.nl" className="text-primary-100 hover:text-white transition">
                    info@lab2market.nl
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-primary-100 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-primary-100">Twente Region, Netherlands</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-2xl text-primary-100 flex-shrink-0" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="#" className="text-primary-100 hover:text-white transition">
                    Connect with us
                  </a>
                </div>
              </div>
            </div>

            {/* Trusted By */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Part of Twente's Innovation Ecosystem</h3>
              <p className="text-primary-100 text-sm">
                Trusted by researchers and spin-offs across the region, working closely with
                University of Twente, 4TU.Federation, and local innovation hubs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
