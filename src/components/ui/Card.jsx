import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-6 ${className}`}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
