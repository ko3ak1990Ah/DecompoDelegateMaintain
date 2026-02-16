import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';
import { MessageCircle, HelpCircle } from 'lucide-react';

export default function QASlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative px-16 py-12 flex items-center justify-center">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="text-center space-y-12">
        {/* Decorative Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-12"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center"
                 style={{ backgroundColor: 'var(--ah-blue-light)' }}>
              <HelpCircle className="w-14 h-14" style={{ color: 'var(--ah-blue)' }} />
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center"
                 style={{ backgroundColor: 'var(--ah-bonus-light)' }}>
              <MessageCircle className="w-14 h-14" style={{ color: 'var(--ah-bonus)' }} />
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          >
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center"
                 style={{ backgroundColor: 'var(--ah-success-light)' }}>
              <HelpCircle className="w-14 h-14" style={{ color: 'var(--ah-success)' }} />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-8xl font-bold tracking-tight" 
              style={{ color: 'var(--ah-blue-dark)' }}>
            Questions?
          </h1>
          
          <div className="h-2 w-64 rounded-full mx-auto" 
               style={{ backgroundColor: 'var(--ah-bonus)' }} />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border-2"
               style={{ 
                 backgroundColor: 'var(--ah-grey-light-40)',
                 borderColor: 'var(--ah-grey-light-20)'
               }}>
            <div className="text-xl font-semibold" style={{ color: 'var(--ah-grey-60)' }}>
              Ievgen Umanets
            </div>
            <div className="w-px h-6" style={{ backgroundColor: 'var(--ah-grey)' }} />
            <img 
              src={ahLogoImage} 
              alt="Albert Heijn" 
              className="h-10 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}