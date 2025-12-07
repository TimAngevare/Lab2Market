import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: 'Dr. Sarah van der Berg',
      role: 'Senior Researcher',
      organization: 'University of Twente, Materials Science',
      content: 'Lab2Market helped us validate our novel battery technology before seeking funding. Their student team conducted 25+ interviews with potential customers and provided actionable insights that shaped our commercialization strategy. The affordable pricing made this possible within our research budget.',
      rating: 5
    },
    {
      name: 'Mark Jansen',
      role: 'Founder & CEO',
      organization: 'QuantumFlow Technologies',
      content: 'As a deep tech spin-off, we needed to understand our market quickly without breaking the bank. Lab2Market\'s team delivered a comprehensive industry analysis in just 6 weeks. Their technical background meant they truly understood our quantum sensing technology and could have meaningful conversations with industry experts.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50/40 via-white to-primary-100/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Trusted by Twente's Innovators
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Hear from researchers and founders who've validated their deep tech with Lab2Market
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-5xl text-primary-500/20">
                <FaQuoteLeft />
              </div>

              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-primary-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.content}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-primary-50">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-700 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary-500 text-sm font-medium">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-primary-700 text-lg">
            Ready to join them?{' '}
            <a
              href="#contact"
              className="text-primary-500 font-semibold hover:text-primary-700 transition underline"
            >
              Start your validation journey
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
