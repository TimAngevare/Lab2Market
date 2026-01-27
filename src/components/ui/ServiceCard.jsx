import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const ServiceCard = ({ icon, title, subtitle, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="group bg-white rounded-2xl p-8 cursor-pointer h-full flex flex-col shadow-soft border border-primary-50/50 hover:shadow-soft-lg hover:border-primary-100 transition-all duration-300"
      whileHover={{ y: -8 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Icon with gradient background */}
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 text-white text-2xl shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-primary-900 mb-2">
        {title}
      </h3>

      <p className="text-primary-500 mb-4 font-semibold">
        {subtitle}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-primary-700/80 leading-relaxed border-t border-primary-50 pt-4 mt-2">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex items-center gap-2 text-primary-500 font-semibold">
        <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-sm" />
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
