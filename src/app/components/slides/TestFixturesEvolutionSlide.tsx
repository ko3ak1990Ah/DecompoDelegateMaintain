import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';
import { X, Check, Sparkles } from 'lucide-react';

export default function TestFixturesEvolutionSlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative px-16 py-12">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="flex items-center gap-6 mb-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
               style={{ 
                 backgroundColor: 'var(--ah-blue)',
               }}>
            <span className="text-2xl font-bold text-white">03</span>
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              Beyond Mocks: Scaling with TestFixtures
            </h2>
            <div className="h-1 w-48 rounded-full mt-2" 
                 style={{ backgroundColor: 'var(--ah-bonus)' }} />
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--ah-blue-dark)' }}>
          Timeline
        </h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
               style={{ backgroundColor: 'var(--ah-grey-light-20)' }} />
          
          <div className="space-y-4">
            {/* 2019 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 2.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-4 bg-white z-10"
                   style={{ borderColor: 'var(--ah-grey)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--ah-grey-60)' }}>2019</span>
              </div>
              <div className="flex-1 pt-3">
                <div className="p-4 rounded-xl border-2"
                     style={{ 
                       backgroundColor: 'var(--ah-grey-light-20)', 
                       borderColor: 'var(--ah-grey)' 
                     }}>
                  <p className="text-lg font-bold mb-1" style={{ color: 'var(--ah-grey-60)' }}>
                    Gradle 5.6
                  </p>
                  <p className="text-base" style={{ color: 'var(--ah-grey-40)' }}>
                    Feature introduced for JVM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2021-2025 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 4.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-4 bg-white z-10"
                   style={{ borderColor: 'var(--ah-warning)' }}>
                <span className="text-xs font-bold" style={{ color: 'var(--ah-grey-60)' }}>2021-25</span>
              </div>
              <div className="flex-1 pt-3">
                <div className="p-4 rounded-xl border-2"
                     style={{ 
                       backgroundColor: 'var(--ah-warning-light)', 
                       borderColor: 'var(--ah-warning)' 
                     }}>
                  <p className="text-lg font-bold mb-1" style={{ color: 'var(--ah-grey-60)' }}>
                    Experimental in Android
                  </p>
                  <p className="text-base" style={{ color: 'var(--ah-grey-40)' }}>
                    Limited Kotlin support, required android.experimental flags
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2026 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 6.3 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-4 bg-white z-10"
                   style={{ borderColor: 'var(--ah-success)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--ah-success)' }}>2026</span>
              </div>
              <div className="flex-1 pt-3">
                <div className="p-4 rounded-xl border-2"
                     style={{ 
                       backgroundColor: 'var(--ah-success-light)', 
                       borderColor: 'var(--ah-success)' 
                     }}>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-lg font-bold" style={{ color: 'var(--ah-success)' }}>
                      AGP 9.0 - STABLE
                    </p>
                    <Sparkles className="w-5 h-5" style={{ color: 'var(--ah-success)' }} />
                  </div>
                  <p className="text-base" style={{ color: 'var(--ah-grey-40)' }}>
                    Native support in the New Variant API. No more experimental toggles needed for Kotlin.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Core Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--ah-blue-dark)' }}>
          Core Philosophy: Fakes &gt; Mocks
        </h3>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Mocks Problem */}
          <div className="p-5 rounded-xl border-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-error)' 
               }}>
            <div className="flex items-center gap-3 mb-3">
              <X className="w-6 h-6" style={{ color: 'var(--ah-error)' }} />
              <h4 className="text-xl font-bold" style={{ color: 'var(--ah-error)' }}>
                The Problem with Mocks
              </h4>
            </div>
            <p className="text-base" style={{ color: 'var(--ah-grey-40)' }}>
              Brittle, tightly coupled to implementation, high maintenance
            </p>
          </div>

          {/* Fakes Power */}
          <div className="p-5 rounded-xl border-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-success)' 
               }}>
            <div className="flex items-center gap-3 mb-3">
              <Check className="w-6 h-6" style={{ color: 'var(--ah-success)' }} />
              <h4 className="text-xl font-bold" style={{ color: 'var(--ah-success)' }}>
                The Power of Fakes
              </h4>
            </div>
            <p className="text-base" style={{ color: 'var(--ah-grey-40)' }}>
              Reusable, behavior-based, and refactor-proof
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="p-5 rounded-xl border-4"
             style={{ 
               backgroundColor: 'var(--ah-blue-light)', 
               borderColor: 'var(--ah-blue)' 
             }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ backgroundColor: 'var(--ah-blue)' }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--ah-blue-dark)' }}>
                Key Insight
              </h4>
              <p className="text-lg" style={{ color: 'var(--ah-grey-40)' }}>
                Test Fixtures allow us to ship <strong>"Official Fakes"</strong> directly with our modules.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}