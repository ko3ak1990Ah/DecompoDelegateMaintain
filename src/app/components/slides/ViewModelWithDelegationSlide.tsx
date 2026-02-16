import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Shield } from 'lucide-react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function ViewModelWithDelegationSlide() {
  const [highlightDelegate, setHighlightDelegate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setHighlightDelegate(true), 2000);
    const timer2 = setTimeout(() => setShowSuccess(true), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
               style={{ backgroundColor: 'var(--ah-blue)' }}>
            02
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              ViewModel with Delegation
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              Exposing only the safe surface area via contracts
            </p>
          </div>
        </div>

        {/* Code snippet - Full width */}
        <div className="relative max-w-5xl mx-auto">
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
                ProductSearchViewModel.kt
              </span>
            </div>

            {/* Code content */}
            <div className="p-8 font-mono text-xl leading-relaxed">
              <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                <code>
                  <span style={{ color: '#6B46C1' }}>class</span> <span className="font-bold" style={{ color: '#1E40AF' }}>ProductSearchViewModel</span> <span style={{ color: '#9333EA' }}>@Inject constructor</span>(
                  {'\n'}    <span style={{ color: '#6B46C1' }}>...</span>
                  {'\n'}
                  <motion.span
                    initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                    animate={{ 
                      backgroundColor: highlightDelegate ? 'var(--ah-warning-light)' : 'rgba(255, 255, 255, 0)'
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-block w-full px-3 py-2 rounded"
                  >
                    {'    '}<span style={{ color: '#6B46C1' }}>private val</span> smartNoteViewModelDelegate:
                    {'\n'}        <span style={{ color: '#047857' }}>ProductSearchSmartNoteViewModelDelegate</span>,
                  </motion.span>
                  {'\n'}    <span style={{ color: '#6B46C1' }}>private val</span> productVariantBottomSheetViewModelDelegate:
                  {'\n'}        <span style={{ color: '#047857' }}>ProductVariantBottomSheetViewModelDelegate</span>
                  {'\n'}) : <span style={{ color: '#047857' }}>ViewModel</span>(),
                  {'\n'}    <span style={{ color: '#047857' }}>CrossSellLaneViewContract</span> <span style={{ color: '#6B46C1' }}>by</span> crossSellLaneViewModelDelegate,
                  {'\n'}    <span style={{ color: '#047857' }}>FilterViewContract</span> <span style={{ color: '#6B46C1' }}>by</span> filterViewModelDelegate,
                  {'\n'}
                  <motion.span
                    initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
                    animate={{ 
                      backgroundColor: showSuccess ? 'var(--ah-success-light)' : 'rgba(255, 255, 255, 0)'
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-block w-full px-3 py-2 rounded"
                  >
                    {'    '}<span style={{ color: '#047857' }}>ProductSearchSmartNoteContract</span> <span style={{ color: '#6B46C1' }}>by</span> smartNoteViewModelDelegate,
                  </motion.span>
                </code>
              </pre>
            </div>
          </div>

          {/* Emojis positioned outside the box */}
          {highlightDelegate && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-[-80px] top-[180px]"
            >
              <span className="text-6xl">👈</span>
            </motion.div>
          )}

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="absolute right-[-80px] bottom-[50px]"
            >
              <span className="text-6xl">😊</span>
            </motion.div>
          )}

          {/* Success badge */}
          {showSuccess && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
              className="absolute -top-8 -right-8 w-28 h-28 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: 'var(--ah-success)' }}
            >
              <CheckCircle2 className="w-16 h-16 text-white" />
            </motion.div>
          )}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showSuccess ? 1 : 0, y: showSuccess ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-2xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
            Clean, modular, testable — no more direct calls from UI to implementation details
          </p>
        </motion.div>
      </div>
    </div>
  );
}