import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import feedbackQR from '../../../assets/41352e8733707d432a52f628e32b54f3603778e2.png';
import { motion } from 'motion/react';
import { MessageCircle, HelpCircle } from 'lucide-react';

export default function QASlide() {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Questions */}
          <div className="space-y-12">
            {/* Decorative Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-start gap-8"
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
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                     style={{ backgroundColor: 'var(--ah-blue-light)' }}>
                  <HelpCircle className="w-12 h-12" style={{ color: 'var(--ah-blue)' }} />
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
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                     style={{ backgroundColor: 'var(--ah-bonus-light)' }}>
                  <MessageCircle className="w-12 h-12" style={{ color: 'var(--ah-bonus)' }} />
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
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                     style={{ backgroundColor: 'var(--ah-success-light)' }}>
                  <HelpCircle className="w-12 h-12" style={{ color: 'var(--ah-success)' }} />
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
              
              <div className="h-2 w-64 rounded-full" 
                   style={{ backgroundColor: 'var(--ah-bonus)' }} />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* Right side - Feedback QR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center"
          >
            <div
              className="p-8 rounded-3xl border-4 bg-white"
              style={{ borderColor: 'var(--ah-blue)' }}
            >
              <img
                src={feedbackQR}
                alt="Scan for feedback"
                className="w-72 h-72 object-contain"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-6 text-center"
            >
              <p 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--ah-blue-dark)' }}
              >
                Share Your Feedback
              </p>
              <p 
                className="text-xl"
                style={{ color: 'var(--ah-grey-40)' }}
              >
                Scan to let me know your thoughts about the talk
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}