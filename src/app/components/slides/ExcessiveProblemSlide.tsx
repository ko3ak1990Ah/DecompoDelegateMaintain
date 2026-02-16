import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { XCircle, AlertTriangle } from 'lucide-react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function ExcessiveProblemSlide() {
  const [showProblem, setShowProblem] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProblem(true);
    }, 2000);
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
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
               style={{ backgroundColor: 'var(--ah-blue)' }}>
            02
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              What's Wrong with Being Excessive?
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              UI layer shouldn't access infrastructure details
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Left: Code snippet - Takes more space */}
          <div className="relative flex-1">
            <div 
              className="rounded-3xl border-4 overflow-hidden relative"
              style={{ 
                backgroundColor: 'var(--ah-grey-light-40)', 
                borderColor: 'var(--ah-blue)' 
              }}
            >
              {/* Header */}
              <div className="px-8 py-4 border-b-2 flex items-center gap-3"
                   style={{ 
                     backgroundColor: 'var(--ah-blue-light)', 
                     borderColor: 'var(--ah-blue)' 
                   }}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-error)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-warning)' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-success)' }} />
                </div>
                <span className="text-base font-mono ml-4" style={{ color: 'var(--ah-grey-60)' }}>
                  ProductSearchFragment.kt
                </span>
              </div>

              {/* Code content */}
              <div className="p-10 font-mono text-lg leading-relaxed">
                <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                  <code>
                    <span style={{ color: '#9333EA' }}>@AndroidEntryPoint</span>
                    {'\n'}<span style={{ color: '#6B46C1' }}>class</span> <span className="font-bold" style={{ color: '#1E40AF' }}>ProductSearchFragment</span> : <span style={{ color: '#047857' }}>Fragment</span> {'{\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>val</span> viewModel <span style={{ color: '#6B46C1' }}>by</span> viewModels{'<'}<span style={{ color: '#047857' }}>ProductSearchViewModel</span>{'>()\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>override fun</span> <span style={{ color: '#B45309' }}>onViewCreated</span>(view: <span style={{ color: '#047857' }}>View</span>, savedInstanceState: <span style={{ color: '#047857' }}>Bundle</span>?) {'\n'}
                    {'        '}<span style={{ color: '#6B46C1' }}>super</span>.onViewCreated(view, savedInstanceState)
                    {'\n\n'}
                    <motion.span
                      initial={{ backgroundColor: 'rgba(255, 222, 219, 0)' }}
                      animate={{ 
                        backgroundColor: showProblem ? 'var(--ah-error-light)' : 'rgba(255, 222, 219, 0)'
                      }}
                      transition={{ duration: 0.5 }}
                      className="inline-block w-full px-2 py-1 rounded"
                    >
                      {'        '}viewModel.<span style={{ color: '#DC2626' }}>scheduleWorkManager</span>(<span style={{ color: '#059669' }}>"Note"</span>)
                    </motion.span>
                    {'\n    }\n}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* Error icon */}
            {showProblem && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'var(--ah-error)' }}
              >
                <XCircle className="w-14 h-14 text-white" />
              </motion.div>
            )}
          </div>

          {/* Right: Explanation - Compact sidebar */}
          <div className="w-80 flex flex-col justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showProblem ? 1 : 0, x: showProblem ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl border-4"
              style={{ 
                backgroundColor: 'var(--ah-error-light)',
                borderColor: 'var(--ah-error)'
              }}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-21 h-7 flex-shrink-2" style={{ color: 'var(--ah-error)' }} />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--ah-error)' }}>
                    Direct Access Problem
                  </h3>
                  <p className="text-base leading-snug mb-3" style={{ color: 'var(--ah-grey-60)' }}>
                    Main ViewModel can call it directly:
                  </p>
                  <div className="p-3 rounded-lg font-mono text-sm" style={{ backgroundColor: 'white' }}>
                    viewModel.<span style={{ color: '#DC2626' }}>scheduleWorkManager</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showProblem ? 1 : 0, x: showProblem ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5 rounded-xl"
              style={{ backgroundColor: 'var(--ah-grey-light-40)' }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--ah-grey-60)' }}>
                Why is this wrong?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-xl">🚫</span>
                  <span className="text-sm leading-snug" style={{ color: 'var(--ah-grey-60)' }}>
                    <strong>Breaks encapsulation:</strong> UI knows about WorkManager
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🔓</span>
                  <span className="text-sm leading-snug" style={{ color: 'var(--ah-grey-60)' }}>
                    <strong>Exposes implementation:</strong> Infrastructure details leak out
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">⚠️</span>
                  <span className="text-sm leading-snug" style={{ color: 'var(--ah-grey-60)' }}>
                    <strong>Violates separation:</strong> UI layer controls background jobs
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}