import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import mobileScreenImage from '../../../assets/900cb580fa6f52404887c0886b3dc18d28337b18.png';

export default function IntegrationExampleSlide() {
  const [showDelegates, setShowDelegates] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowDelegates(true), 500),
      setTimeout(() => setShowDetails(true), 1500),
      setTimeout(() => setShowMobile(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-white">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8 z-20">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-16">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                 style={{ 
                   backgroundColor: 'var(--ah-blue)',
                 }}>
              <span className="text-3xl font-bold text-white">03</span>
            </div>
            <div>
              <h2 className="text-6xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                Related features
              </h2>
              <div className="h-1 w-80 rounded-full mt-2" 
                   style={{ backgroundColor: 'var(--ah-blue)' }} />
            </div>
          </div>
          <p className="text-xl mt-4 ml-20" style={{ color: 'var(--ah-grey-40)' }}>
            Delegates expose typed bottom sheet data
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left Side - Delegate Structure */}
          <div className="space-y-10 pt-8">
            {/* ProductOptionsDelegate */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: showDelegates ? 1 : 0, x: showDelegates ? 0 : -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <div 
                className="p-6 rounded-lg border-2"
                style={{
                  backgroundColor: 'var(--ah-blue-light)',
                  borderColor: 'var(--ah-blue)',
                }}
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                  ProductOptionsDelegate
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pl-6 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-mono leading-none" style={{ color: 'var(--ah-grey-40)' }}>└─</span>
                  <div className="flex-1">
                    <div className="font-mono text-2xl mb-3" style={{ color: 'var(--ah-grey-60)' }}>bottomSheetData</div>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl w-16" style={{ color: 'var(--ah-grey-40)' }}>type:</span>
                        <span className="font-mono text-2xl font-semibold" style={{ color: 'var(--ah-blue)' }}>
                          ProductOptionsBottomSheet
                        </span>
                      </div>
                      <div className="flex items-center gap-3 pl-6">
                        <span className="text-2xl leading-none" style={{ color: 'var(--ah-grey-40)' }}>└─</span>
                        <span className="font-mono text-xl" style={{ color: 'var(--ah-grey-60)' }}>
                          items: [ProductCard, …]
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* FavoritesDelegate */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: showDelegates ? 1 : 0, x: showDelegates ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div 
                className="p-6 rounded-lg border-2"
                style={{
                  backgroundColor: 'var(--ah-blue-light)',
                  borderColor: 'var(--ah-blue)',
                }}
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                  FavoritesDelegate
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : -10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pl-6 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-mono leading-none" style={{ color: 'var(--ah-grey-40)' }}>└─</span>
                  <div className="flex-1">
                    <div className="font-mono text-2xl mb-3" style={{ color: 'var(--ah-grey-60)' }}>bottomSheetData</div>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl w-16" style={{ color: 'var(--ah-grey-40)' }}>type:</span>
                        <span className="font-mono text-2xl font-semibold" style={{ color: 'var(--ah-blue)' }}>
                          FavoritesBottomSheet
                        </span>
                      </div>
                      <div className="pl-6 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl leading-none" style={{ color: 'var(--ah-grey-40)' }}>├─</span>
                          <span className="font-mono text-xl" style={{ color: 'var(--ah-grey-60)' }}>
                            title: String
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl leading-none" style={{ color: 'var(--ah-grey-40)' }}>└─</span>
                          <span className="font-mono text-xl" style={{ color: 'var(--ah-grey-60)' }}>
                            items: [FavoriteCard, …]
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Mobile Screen Preview with Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: showMobile ? 1 : 0, scale: showMobile ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start justify-center"
          >
            <div 
              className="rounded-3xl border-4 overflow-hidden w-fit max-h-[680px]"
              style={{
                borderColor: 'var(--ah-blue)',
              }}
            >
              {/* Mobile Screen Image - full content visible */}
              <img 
                src={mobileScreenImage} 
                alt="Mobile App Preview" 
                className="h-auto max-h-[680px] w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}