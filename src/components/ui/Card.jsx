import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, variant = 'default', ...props }) => {
  const variants = {
    default: 'glass-card',
    solid: 'bg-white shadow-soft rounded-2xl border border-primary-50/50',
    gradient: 'bg-gradient-to-br from-white to-primary-50/30 shadow-soft rounded-2xl border border-primary-50/50',
    dark: 'glass-card-dark text-white'
  };

  return (
    <motion.div
      className={`${variants[variant]} p-6 ${className}`}
      whileHover={hover ? {
        y: -8,
        boxShadow: '0 20px 40px -4px rgba(82, 121, 111, 0.15)',
        transition: { duration: 0.3 }
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
