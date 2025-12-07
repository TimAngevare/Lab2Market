import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClipboardList, FaSearch, FaLightbulb, FaChartBar } from 'react-icons/fa';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: <FaClipboardList />,
      title: 'Intake',
      week: 'Week 1',
      description: 'Understanding your technology and research goals. We deep-dive into your innovation to tailor our validation approach.'
    },
    {
      icon: <FaSearch />,
      title: 'Research',
      week: 'Weeks 2-11',
      description: 'Student team conducts interviews and analysis. Expert 4TU students engage with your target market and competitive landscape.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Synthesis',
      week: 'Week 11',
      description: 'Findings compiled into actionable report. We transform raw data into strategic insights you can act on immediately.'
    },
    {
      icon: <FaChartBar />,
      title: 'Delivery',
      week: 'Week 12',
      description: 'Presentation with go/no-go recommendation. Clear decision framework backed by market evidence.'
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            A streamlined 8-week journey from uncertainty to clarity
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-500 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="glass-card p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-3xl text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Week label */}
                  <div className="text-sm font-semibold text-primary-500 mb-2">
                    {step.week}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-700 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Step number */}
                  <div className="mt-4 text-6xl font-bold text-primary-50">
                    {index + 1}
                  </div>
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-primary-500 mx-auto my-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
