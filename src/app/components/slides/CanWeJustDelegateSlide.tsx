import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import delegationImage from '../../../assets/2efaa478a00bd2a087032dcb08d9d4f330913c7d.png';

export default function CanWeJustDelegateSlide() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="w-full">
        {/* Title with number badge */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
               style={{ backgroundColor: 'var(--ah-blue)' }}>
            02
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              So, Can We Just Delegate?
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              The delegation pattern approach
            </p>
          </div>
        </div>

        {/* Image container with animation */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: showImage ? 1 : 0,
              scale: showImage ? 1 : 0.8,
              y: showImage ? 0 : 20
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl border-4 overflow-hidden p-8"
            style={{ 
              backgroundColor: 'white',
              borderColor: 'var(--ah-blue)'
            }}
          >
            <img 
              src={delegationImage} 
              alt="Delegation - The art of getting things done through others" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}