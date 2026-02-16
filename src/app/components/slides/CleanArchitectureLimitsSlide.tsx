import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';

export default function CleanArchitectureLimitsSlide() {
  const words = [
    'Even', 'Clean', 'Architecture', 'Has', 'Its', 'Limits'
  ];

  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center px-16">
      {/* Agenda indicator */}
      <div className="absolute top-8 left-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
             style={{ backgroundColor: 'var(--ah-blue)' }}>
          01
        </div>
      </div>

      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      {/* Centered content with barrier animation */}
      <div className="relative">
        {/* Top barrier line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute -top-8 left-0 right-0 h-1 origin-center"
          style={{ backgroundColor: 'var(--ah-blue)' }}
        />

        {/* Bottom barrier line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute -bottom-8 left-0 right-0 h-1 origin-center"
          style={{ backgroundColor: 'var(--ah-blue)' }}
        />

        {/* Staggered word reveal */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0 + (index * 0.3),
                  ease: 'easeOut'
                }}
                className="text-7xl font-bold inline-block"
                style={{ color: 'var(--ah-grey-60)' }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}