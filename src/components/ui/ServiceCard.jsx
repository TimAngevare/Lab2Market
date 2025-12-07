import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ icon, title, subtitle, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="glass-card p-8 cursor-pointer h-full flex flex-col"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-5xl mb-4 text-primary-500">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-primary-900 mb-2">
        {title}
      </h3>

      <p className="text-primary-700 mb-4 font-medium">
        {subtitle}
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-primary-700 leading-relaxed border-t border-primary-50 pt-4 mt-2">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-4">
        <span className="text-primary-500 text-sm font-semibold">
          {isExpanded ? '− Less' : '+ Learn More'}
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
