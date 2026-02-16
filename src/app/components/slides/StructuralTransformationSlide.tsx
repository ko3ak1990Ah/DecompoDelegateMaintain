import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';
import { FolderOpen, File, AlertCircle, CheckCircle } from 'lucide-react';

export default function StructuralTransformationSlide() {
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
        className="mb-8"
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
              Refactoring to Native Test Fixtures
            </h2>
            <div className="h-1 w-48 rounded-full mt-2" 
                 style={{ backgroundColor: 'var(--ah-bonus)' }} />
          </div>
        </div>
      </motion.div>

      {/* Before vs After Comparison */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* Left Column - Legacy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-7 h-7" style={{ color: 'var(--ah-bonus)' }} />
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              Old: Separate Modules
            </h3>
          </div>

          <div className="p-6 rounded-2xl border-4 mb-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-bonus)' 
               }}>
            {/* Directory Tree */}
            <div className="font-mono text-sm space-y-1" style={{ color: 'var(--ah-grey-60)' }}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" style={{ color: 'var(--ah-blue)' }} />
                <span className="font-bold">product:search/</span>
              </div>
              
              {/* variants module */}
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" style={{ color: 'var(--ah-blue)' }} />
                  <span className="font-bold">variants/</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>src/main/</span>
                    <span className="text-xs" style={{ color: 'var(--ah-grey-40)' }}>
                      (Production code)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>build.gradle.kts</span>
                  </div>
                </div>
              </div>

              {/* variants-test module */}
              <div className="ml-4 mt-2">
                <div className="flex items-center gap-2 p-2 rounded"
                     style={{ backgroundColor: 'var(--ah-bonus-light)' }}>
                  <FolderOpen className="w-4 h-4" style={{ color: 'var(--ah-bonus)' }} />
                  <span className="font-bold">variants-test/</span>
                  <span className="text-xs ml-auto" style={{ color: 'var(--ah-bonus-dark)' }}>
                    ⚠️ Separate module!
                  </span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>src/main/</span>
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-xs"
                       style={{ color: 'var(--ah-grey-40)' }}>
                    <File className="w-3 h-3" />
                    <span>FakeViewModelDelegate.kt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <File className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>build.gradle.kts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 rounded-xl border-2 text-center"
               style={{ 
                 backgroundColor: 'var(--ah-bonus-light)', 
                 borderColor: 'var(--ah-bonus)' 
               }}>
            <p className="text-base font-bold" style={{ color: 'var(--ah-bonus-dark)' }}>
              High Maintenance / Module Bloat
            </p>
          </div>
        </motion.div>

        {/* Right Column - Modern */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-7 h-7" style={{ color: 'var(--ah-success)' }} />
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              New: Integrated Fixtures
            </h3>
          </div>

          <div className="p-6 rounded-2xl border-4 mb-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-success)' 
               }}>
            {/* Directory Tree */}
            <div className="font-mono text-sm space-y-1" style={{ color: 'var(--ah-grey-60)' }}>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" style={{ color: 'var(--ah-blue)' }} />
                <span className="font-bold">product:search/</span>
              </div>
              
              {/* Single unified module */}
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" style={{ color: 'var(--ah-blue)' }} />
                  <span className="font-bold">variants/</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>src/main/</span>
                    <span className="text-xs" style={{ color: 'var(--ah-grey-40)' }}>
                      (Production code)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>src/test/</span>
                    <span className="text-xs" style={{ color: 'var(--ah-grey-40)' }}>
                      (Internal tests)
                    </span>
                  </div>
                  
                  {/* Highlighted testFixtures */}
                  <div className="flex items-center gap-2 p-2 rounded"
                       style={{ backgroundColor: 'var(--ah-success-light)' }}>
                    <FolderOpen className="w-3 h-3" style={{ color: 'var(--ah-success)' }} />
                    <span className="font-bold">src/testFixtures/</span>
                    <span className="text-xs ml-auto" style={{ color: 'var(--ah-success)' }}>
                      ✓ Native!
                    </span>
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-xs"
                       style={{ color: 'var(--ah-grey-40)' }}>
                    <File className="w-3 h-3" />
                    <span>FakeViewModelDelegate.kt</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <File className="w-3 h-3" style={{ color: 'var(--ah-grey)' }} />
                    <span>build.gradle.kts</span>
                  </div>
                  <div className="ml-4 text-xs" style={{ color: 'var(--ah-grey-40)' }}>
                    android.testFixtures.enable = true
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 rounded-xl border-2 text-center"
               style={{ 
                 backgroundColor: 'var(--ah-success-light)', 
                 borderColor: 'var(--ah-success)' 
               }}>
            <p className="text-base font-bold" style={{ color: 'var(--ah-success)' }}>
              Streamlined
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Code Snippet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--ah-blue-dark)' }}>
          Consuming Test Fixtures in Other Modules
        </h3>
        
        <div className="p-5 rounded-xl border-2 font-mono"
             style={{ 
               backgroundColor: 'var(--ah-grey-light-20)', 
               borderColor: 'var(--ah-grey)',
               color: 'var(--ah-grey-60)'
             }}>
          <div className="text-sm">
            <span style={{ color: 'var(--ah-blue-dark)' }}>testImplementation</span>
            <span>(</span>
            <span style={{ color: 'var(--ah-blue-dark)' }}>testFixtures</span>
            <span>(</span>
            <span style={{ color: 'var(--ah-success)' }}>project</span>
            <span>(</span>
            <span style={{ color: 'var(--ah-bonus)' }}>&quot;:product:search:variants&quot;</span>
            <span>)))</span>
          </div>
        </div>

        {/* AGP < 9 Note */}
        <div className="flex items-start gap-3 p-4 rounded-xl border-2"
             style={{ 
               backgroundColor: 'var(--ah-blue-light)', 
               borderColor: 'var(--ah-blue)' 
             }}>
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
               style={{ backgroundColor: 'var(--ah-blue)' }}>
            !
          </div>
          <div>
            <p className="text-sm font-bold mb-1" style={{ color: 'var(--ah-blue-dark)' }}>
              For AGP &lt; 9.0
            </p>
            <p className="text-xs mb-2" style={{ color: 'var(--ah-grey-40)' }}>
              Add this to your <span className="font-mono">gradle.properties</span>:
            </p>
            <div className="p-2 rounded border font-mono text-xs"
                 style={{ 
                   backgroundColor: 'white', 
                   borderColor: 'var(--ah-blue)',
                   color: 'var(--ah-grey-60)'
                 }}>
              <span style={{ color: 'var(--ah-grey-40)' }}># Test fixtures support</span><br/>
              <span style={{ color: 'var(--ah-blue-dark)' }}>android.experimental.enableTestFixturesKotlinSupport</span>
              <span>=</span>
              <span style={{ color: 'var(--ah-success)' }}>true</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}