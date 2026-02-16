import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function CombineGroupingSlide() {
  const [showGroup1, setShowGroup1] = useState(false);
  const [showGroup2, setShowGroup2] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowGroup1(true), 500),
      setTimeout(() => setShowGroup2(true), 2000),
      setTimeout(() => setShowFinal(true), 3500),
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
                Grouping with Combine
              </h2>
              <div className="h-1 w-80 rounded-full mt-2" 
                   style={{ backgroundColor: 'var(--ah-blue)' }} />
            </div>
          </div>
          <p className="text-xl mt-4 ml-20" style={{ color: 'var(--ah-grey-40)' }}>
            Organize delegates into logical groups, then combine groups
          </p>
        </motion.div>

        {/* Code Content */}
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Side - Groups */}
          <div className="space-y-6">
            {/* Group 1: Bottom Sheet */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: showGroup1 ? 1 : 0, x: showGroup1 ? 0 : -30 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-xl border-3 overflow-hidden"
                style={{
                  backgroundColor: 'var(--ah-grey-light-40)',
                  borderColor: 'var(--ah-blue)',
                  borderWidth: '3px',
                }}
              >
                {/* Header */}
                <div 
                  className="px-5 py-2 border-b-2 flex items-center gap-3"
                  style={{ 
                    backgroundColor: 'var(--ah-blue-light)', 
                    borderColor: 'var(--ah-blue)' 
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-success)' }} />
                  <span className="text-base font-semibold" style={{ color: 'var(--ah-grey-60)' }}>
                    Group 1: Bottom Sheet
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-base leading-relaxed">
                  <pre style={{ color: 'var(--ah-grey-60)' }}>
                    <code>
                      <span style={{ color: '#6B46C1' }}>private val</span> <span style={{ color: '#1E40AF', fontWeight: 'bold' }}>bottomSheetViewData</span> ={'\n'}
                      {'    '}<span style={{ color: '#047857' }}>combine</span>({'\n'}
                      {'        '}<span style={{ color: '#DC2626' }}>productOptionsDelegate</span>.viewData,{'\n'}
                      {'        '}<span style={{ color: '#DC2626' }}>favoritesDelegate</span>.viewData,{'\n'}
                      {'        '}::<span style={{ color: '#1E40AF' }}>makeBottomSheetViewData</span>{'\n'}
                      {'    '}){'\n'}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Group 2: Dialog */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: showGroup2 ? 1 : 0, x: showGroup2 ? 0 : -30 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-xl border-3 overflow-hidden"
                style={{
                  backgroundColor: 'var(--ah-grey-light-40)',
                  borderColor: 'var(--ah-blue)',
                  borderWidth: '3px',
                }}
              >
                {/* Header */}
                <div 
                  className="px-5 py-2 border-b-2 flex items-center gap-3"
                  style={{ 
                    backgroundColor: 'var(--ah-blue-light)', 
                    borderColor: 'var(--ah-blue)' 
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-success)' }} />
                  <span className="text-base font-semibold" style={{ color: 'var(--ah-grey-60)' }}>
                    Group 2: Dialog
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-base leading-relaxed">
                  <pre style={{ color: 'var(--ah-grey-60)' }}>
                    <code>
                      <span style={{ color: '#6B46C1' }}>private val</span> <span style={{ color: '#1E40AF', fontWeight: 'bold' }}>dialogViewData</span> ={'\n'}
                      {'    '}<span style={{ color: '#047857' }}>combine</span>({'\n'}
                      {'        '}<span style={{ color: '#DC2626' }}>deleteDialogDelegate</span>.viewData,{'\n'}
                      {'        '}<span style={{ color: '#DC2626' }}>errorDialogDelegate</span>.viewData,{'\n'}
                      {'        '}::<span style={{ color: '#1E40AF' }}>makeDialogViewData</span>{'\n'}
                      {'    '}){'\n'}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Arrow indicator */}
            {showGroup2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="h-0.5 w-20 rounded-full" style={{ backgroundColor: 'var(--ah-blue)' }} />
                <span className="text-4xl" style={{ color: 'var(--ah-blue)' }}>→</span>
                <div className="h-0.5 w-20 rounded-full" style={{ backgroundColor: 'var(--ah-blue)' }} />
              </motion.div>
            )}
          </div>

          {/* Right Side - Final Combine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: showFinal ? 1 : 0, scale: showFinal ? 1 : 0.95 }}
            transition={{ duration: 0.7 }}
            className="flex items-center relative"
          >
            <div 
              className="rounded-2xl border-4 overflow-hidden w-full"
              style={{
                backgroundColor: 'var(--ah-grey-light-40)',
                borderColor: 'var(--ah-blue)',
              }}
            >
              {/* Header */}
              <div 
                className="px-6 py-4 border-b-2 flex items-center gap-3"
                style={{ 
                  backgroundColor: 'var(--ah-blue)', 
                  borderColor: 'var(--ah-blue)' 
                }}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--ah-warning)' }} />
                <span className="text-lg font-bold text-white">
                  Final: Combine of Combines
                </span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-base leading-relaxed">
                <pre style={{ color: 'var(--ah-grey-60)' }}>
                  <code>
                    <span style={{ color: '#6B46C1' }}>val</span> <span style={{ color: '#1E40AF', fontWeight: 'bold' }}>viewData</span>: <span style={{ color: '#047857' }}>StateFlow</span>{'<'}...{'>'} ={'\n'}
                    {'    '}<span style={{ color: '#047857' }}>combine</span>({'\n'}
                    {'        '}<span style={{ color: '#DC2626' }}>listDelegate</span>.viewData,{'\n'}
                    {'\n'}
                    {'        '}<span style={{ color: '#D97706', fontWeight: 'bold' }}>bottomSheetViewData</span>,{'\n'}
                    {'        '}<span style={{ color: '#D97706', fontWeight: 'bold' }}>dialogViewData</span>,{'\n'}
                    {'\n'}
                    {'        '}::<span style={{ color: '#1E40AF' }}>makeScreenViewData</span>,{'\n'}
                    {'    '}).<span style={{ color: '#047857' }}>stateIn</span>(...)
                  </code>
                </pre>
              </div>
            </div>

            {/* Success badge */}
            {showFinal && (
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.4 }}
                className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--ah-success)' }}
              >
                <span className="text-3xl text-white">✓</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}