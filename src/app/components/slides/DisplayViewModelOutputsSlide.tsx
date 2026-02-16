import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function DisplayViewModelOutputsSlide() {
  const [showFeatures, setShowFeatures] = useState(0);
  const [showCombine, setShowCombine] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [showConnectors, setShowConnectors] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowFeatures(1), 500),
      setTimeout(() => setShowFeatures(2), 800),
      setTimeout(() => setShowFeatures(3), 1100),
      setTimeout(() => setShowConnectors(true), 1400),
      setTimeout(() => setShowCombine(true), 1800),
      setTimeout(() => setShowOutput(true), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const features = [
    { name: 'Feature1VMDelegate.state', color: 'var(--ah-blue)' },
    { name: 'Feature2VMDelegate.state', color: 'var(--ah-blue)' },
    { name: 'Feature7VMDelegate.state', color: 'var(--ah-blue)' },
  ];

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

      <div className="w-full max-w-7xl mx-auto px-12">
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
                Integration
              </h2>
              <div className="h-1 w-80 rounded-full mt-2" 
                   style={{ backgroundColor: 'var(--ah-blue)' }} />
            </div>
          </div>
          <p className="text-xl mt-4 ml-20" style={{ color: 'var(--ah-grey-40)' }}>
            State flows merge into unified ScreenViewData
          </p>
        </motion.div>

        {/* Data Flow Visualization */}
        <div className="relative">
          {/* Top Row - Feature States as Flows */}
          <div className="flex items-center justify-center gap-8 mb-16" id="feature-states">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -30 }}
                animate={{ 
                  opacity: showFeatures > index ? 1 : 0, 
                  y: showFeatures > index ? 0 : -30,
                }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2
                }}
                className="relative flex flex-col items-center"
              >
                {/* State card */}
                <div
                  className="p-6 rounded-xl border-3 relative overflow-hidden min-w-[240px]"
                  style={{
                    backgroundColor: 'var(--ah-blue-light)',
                    borderColor: feature.color,
                  }}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <Code2 className="w-5 h-5 flex-shrink-0" style={{ color: feature.color }} />
                    <span className="font-mono text-base font-medium" style={{ color: 'var(--ah-grey-60)' }}>
                      {feature.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Converging Flow Lines with SVG */}
          {showConnectors && (
            <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '90px', height: '280px' }}>
              <svg width="100%" height="280" className="absolute inset-0" viewBox="0 0 1000 280" preserveAspectRatio="none">
                {/* Left line - Feature 1 to combine (curves inward) */}
                <motion.path
                  d="M 250 0 Q 250 100, 500 180"
                  stroke="var(--ah-blue)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                
                {/* Middle line - Feature 2 to combine (straight down) */}
                <motion.path
                  d="M 500 0 L 500 180"
                  stroke="var(--ah-blue)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                
                {/* Right line - Feature 7 to combine (curves inward) */}
                <motion.path
                  d="M 750 0 Q 750 100, 500 180"
                  stroke="var(--ah-blue)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </svg>

              {/* Flowing dots on paths using absolute positioning */}
              {/* Left path flowing dots */}
              {[0, 1, 2].map((dotIndex) => (
                <motion.div
                  key={`left-${dotIndex}`}
                  className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: 'var(--ah-blue)' }}
                  animate={{
                    left: ['25%', '27%', '32%', '40%', '50%'],
                    top: ['0px', '40px', '80px', '130px', '180px'],
                    opacity: [0, 1, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.4 + dotIndex * 0.6,
                    ease: 'linear'
                  }}
                />
              ))}

              {/* Middle path flowing dots */}
              {[0, 1, 2].map((dotIndex) => (
                <motion.div
                  key={`middle-${dotIndex}`}
                  className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: 'var(--ah-blue)', left: '50%' }}
                  animate={{
                    top: ['0px', '180px'],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5 + dotIndex * 0.6,
                    ease: 'linear'
                  }}
                />
              ))}

              {/* Right path flowing dots */}
              {[0, 1, 2].map((dotIndex) => (
                <motion.div
                  key={`right-${dotIndex}`}
                  className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: 'var(--ah-blue)' }}
                  animate={{
                    left: ['75%', '73%', '68%', '60%', '50%'],
                    top: ['0px', '40px', '80px', '130px', '180px'],
                    opacity: [0, 1, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6 + dotIndex * 0.6,
                    ease: 'linear'
                  }}
                />
              ))}
            </div>
          )}

          {/* Middle Row - ViewModel Box */}
          <div className="flex justify-center mb-12 mt-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: showCombine ? 1 : 0,
                scale: showCombine ? 1 : 0.5
              }}
              transition={{ 
                duration: 0.6,
                type: 'spring',
                bounce: 0.4,
                delay: 0.3
              }}
              className="relative"
            >
              <div 
                className="px-16 py-8 rounded-2xl border-4 relative"
                style={{
                  backgroundColor: 'var(--ah-blue-light)',
                  borderColor: 'var(--ah-blue)',
                }}
              >
                {/* Pulsing glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 84, 166, 0.2) 0%, transparent 70%)',
                    filter: 'blur(20px)'
                  }}
                />

                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold mb-4" style={{ color: 'var(--ah-blue)' }}>
                    ViewModel
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-px w-12" style={{ backgroundColor: 'var(--ah-grey-30)' }} />
                    <span className="font-mono text-2xl font-bold" style={{ color: 'var(--ah-blue)' }}>combine()</span>
                    <div className="h-px w-12" style={{ backgroundColor: 'var(--ah-grey-30)' }} />
                  </div>
                </div>
              </div>

              {/* Arrow down to makeScreenContentData with flowing animation */}
              {showCombine && (
                <div className="absolute left-1/2 top-full w-0.5 h-16 origin-top -translate-x-1/2" style={{ background: 'var(--ah-blue)' }}>
                  {/* Flowing dots animation */}
                  {[0, 1, 2].map((dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className="absolute w-2 h-2 rounded-full left-1/2 -translate-x-1/2"
                      style={{ backgroundColor: 'var(--ah-blue)' }}
                      animate={{
                        top: ['0%', '100%'],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.3 + dotIndex * 0.5,
                        ease: 'linear'
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Third Row - makeScreenContentData */}
          <div className="flex justify-center mb-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: 0, y: 20 }}
              animate={{ 
                opacity: showOutput ? 1 : 0,
                y: showOutput ? 0 : 20
              }}
              transition={{ 
                duration: 0.6,
                delay: 0.2
              }}
              className="relative"
            >
              <div 
                className="px-10 py-5 rounded-xl border-2"
                style={{
                  backgroundColor: 'var(--ah-blue-light)',
                  borderColor: 'var(--ah-blue)',
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-mono" style={{ color: 'var(--ah-grey-60)' }}>
                    makeScreenContentData
                  </div>
                </div>
              </div>

              {/* Arrow down to ScreenViewData with flowing animation */}
              {showOutput && (
                <div className="absolute left-1/2 top-full w-0.5 h-16 origin-top -translate-x-1/2" style={{ background: 'var(--ah-blue)' }}>
                  {/* Flowing dots animation */}
                  {[0, 1, 2].map((dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className="absolute w-2 h-2 rounded-full left-1/2 -translate-x-1/2"
                      style={{ backgroundColor: 'var(--ah-blue)' }}
                      animate={{
                        top: ['0%', '100%'],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.3 + dotIndex * 0.5,
                        ease: 'linear'
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Bottom Row - ScreenViewData Output */}
          <div className="flex justify-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: showOutput ? 1 : 0,
                y: showOutput ? 0 : 30
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.5
              }}
            >
              <div
                className="p-10 rounded-3xl border-4 relative overflow-hidden min-w-[500px]"
                style={{
                  backgroundColor: 'var(--ah-blue-light)',
                  borderColor: 'var(--ah-blue)',
                }}
              >
                {/* 3D depth effect */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 84, 166, 0.3) 0%, transparent 50%, rgba(0, 84, 166, 0.1) 100%)'
                  }}
                />

                {/* Animated particles */}
                {showOutput && [0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: 'var(--ah-blue)',
                      left: `${20 + i * 20}%`,
                      top: '20%',
                    }}
                  />
                ))}

                <div className="relative z-10">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="text-4xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                      ScreenViewData
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom tagline - REMOVED */}
      </div>
    </div>
  );
}
