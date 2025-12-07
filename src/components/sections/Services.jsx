import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaNetworkWired, FaChartLine } from 'react-icons/fa';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <FaSearch />,
      title: 'Customer Discovery',
      subtitle: 'Find Your First 10 Customers',
      description: 'We interview potential users to validate if your research solves a real problem worth paying for. Our trained students conduct in-depth interviews with your target market, uncovering pain points, willingness to pay, and genuine product-market fit signals.'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Industry Landscape Analysis',
      subtitle: 'Map Your Competitive Space',
      description: 'Identify competitors, substitutes, and strategic partners before you invest resources. We analyze the competitive landscape, identify white spaces, and map potential partnerships that can accelerate your path to market with comprehensive industry insights.'
    },
    {
      icon: <FaChartLine />,
      title: 'Market Landscape Analysis',
      subtitle: 'Quantify Your Opportunity',
      description: 'Determine market size, pricing potential, and realistic revenue projections backed by data. Our analysis provides bottom-up market sizing, pricing benchmarks, and go-to-market strategies tailored to deep tech commercialization timelines.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="section-padding bg-primary-50/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            How We De-Risk Your Innovation
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Three essential services to validate your deep tech research before significant investment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
