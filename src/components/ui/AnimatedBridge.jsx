import { motion } from 'framer-motion';

const AnimatedBridge = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <svg
        viewBox="0 0 600 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lab/Research side - Erlenmeyer Flask */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Flask body - Erlenmeyer shape */}
          <path
            d="M 85 45 L 85 70 L 70 110 Q 70 115, 75 115 L 105 115 Q 110 115, 110 110 L 95 70 L 95 45 Z"
            fill="#52796F"
            stroke="#354F52"
            strokeWidth="2"
          />

          {/* Flask neck/opening */}
          <rect x="83" y="40" width="14" height="5" fill="#52796F" stroke="#354F52" strokeWidth="1.5" rx="1" />

          {/* Liquid inside - properly fills bottom of flask */}
          <path
            d="M 74 98 L 72 108 Q 70 113, 75 113 L 105 113 Q 110 113, 108 108 L 106 98 L 74 98 Z"
            fill="#84A98C"
            opacity="0.7"
          />

          {/* Bubbles - animated rising from liquid */}
          <motion.circle
            cx="90"
            r="2.5"
            fill="#CAD2C5"
            opacity="0.8"
            animate={{ cy: [105, 70, 45], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, repeatDelay: 0.5 }}
          />
          <motion.circle
            cx="85"
            r="2"
            fill="#CAD2C5"
            opacity="0.8"
            animate={{ cy: [108, 75, 48], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1, repeatDelay: 0.3 }}
          />
          <motion.circle
            cx="95"
            r="1.5"
            fill="#CAD2C5"
            opacity="0.8"
            animate={{ cy: [106, 72, 46], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1.5, repeatDelay: 0.4 }}
          />
        </motion.g>

        {/* Bridge/Connection - adjusted to connect flask to chart */}
        <motion.path
          d="M 110 90 Q 280 50, 455 100"
          stroke="#52796F"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Animated dots along the path */}
        <motion.g>
          <motion.circle
            r="4"
            fill="#84A98C"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 115 90 Q 290 50, 460 100"
              begin="1s"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3s"
              repeatCount="indefinite"
              begin="1s"
            />
          </motion.circle>
        </motion.g>

        {/* Market/Graph side - Bar Chart */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Chart axes */}
          <line x1="460" y1="125" x2="545" y2="125" stroke="#354F52" strokeWidth="2" />
          <line x1="460" y1="50" x2="460" y2="125" stroke="#354F52" strokeWidth="2" />

          {/* Upward trending bars */}
          <motion.rect
            x="468"
            y="0"
            width="14"
            height="10"
            fill="#52796F"
            initial={{ height: 0, y: 125 }}
            animate={{ height: 10, y: 115 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          />
          <motion.rect
            x="486"
            y="-5"
            width="14"
            height="25"
            fill="#52796F"
            initial={{ height: 0, y: 125 }}
            animate={{ height: 25, y: 100 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          />
          <motion.rect
            x="504"
            y="-10"
            width="14"
            height="45"
            fill="#52796F"
            initial={{ height: 0, y: 125 }}
            animate={{ height: 45, y: 80 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          />
          <motion.rect
            x="522"
            y="-15"
            width="14"
            height="65"
            fill="#84A98C"
            initial={{ height: 0, y: 125 }}
            animate={{ height: 65, y: 60 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />

          {/* Trend line overlay */}
          <motion.polyline
            points="475,120 493,112 511,92 529,72"
            fill="none"
            stroke="#CAD2C5"
            strokeWidth="2"
            strokeDasharray="3,3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1, delay: 2.1 }}
          />

          {/* Growth arrow */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2.3 }}
          >
            <line x1="529" y1="72" x2="529" y2="48" stroke="#84A98C" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="529,45 525,53 533,53" fill="#84A98C" />
          </motion.g>

          {/* Dollar sign or revenue indicator */}
          <motion.text
            x="540"
            y="58"
            fill="#52796F"
            fontSize="20"
            fontWeight="700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
          >
            $
          </motion.text>
        </motion.g>

        {/* Text labels */}
        <motion.text
          x="90"
          y="145"
          textAnchor="middle"
          fill="#354F52"
          fontSize="15"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Research
        </motion.text>

        <motion.text
          x="505"
          y="145"
          textAnchor="middle"
          fill="#354F52"
          fontSize="15"
          fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Market
        </motion.text>
      </svg>
    </div>
  );
};

export default AnimatedBridge;
