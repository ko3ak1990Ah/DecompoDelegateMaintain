import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function IntegrationProblemSlide() {
  const [showCode, setShowCode] = useState(false);
  const [showProblem, setShowProblem] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowCode(true), 500),
      setTimeout(() => setShowProblem(true), 2000),
      setTimeout(() => setVisiblePoints(1), 3000),
      setTimeout(() => setVisiblePoints(2), 4000),
      setTimeout(() => setVisiblePoints(3), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const problems = [
    "Large combine calls create huge lambdas with 6–10 parameters",
    "Harder to read, maintain, and test",
    "Encourages coupling unrelated features together",
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

      <div className="w-full max-w-7xl mx-auto px-16">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-6 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                 style={{ 
                   backgroundColor: 'var(--ah-blue)',
                 }}>
              <span className="text-3xl font-bold text-white">03</span>
            </div>
            <div>
              <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                Integration Problem
              </h2>
              <div className="h-1 w-80 rounded-full mt-2" 
                   style={{ backgroundColor: 'var(--ah-blue)' }} />
            </div>
          </div>
          <p className="text-lg mt-3 ml-20" style={{ color: 'var(--ah-grey-40)' }}>
            Kotlin's combine has a hard limit of 5 arguments
          </p>
        </motion.div>

        {/* Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showCode ? 1 : 0, y: showCode ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div 
            className="rounded-3xl border-4 overflow-hidden"
            style={{
              backgroundColor: 'var(--ah-grey-light-40)',
              borderColor: 'var(--ah-blue)',
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
                ProductScreenViewModel.kt
              </span>
            </div>

            {/* Code content */}
            <div className="p-10 font-mono text-lg leading-relaxed">
              <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                <code>
                  <span style={{ color: '#6B46C1' }}>val</span> viewData: StateFlow{'<'}ScreenViewData{'>'} =
                  {'\n    '}nl.ah.appie.util.flow.<span style={{ color: '#B45309' }}>combine</span>(
                  {'\n        '}<span style={{ color: '#047857' }}>topBarViewModelDelegate</span>.topBarViewData,
                  {'\n        '}<span style={{ color: '#047857' }}>bottomBarViewModelDelegate</span>.bottomBarViewData,
                  {'\n        '}<span style={{ color: '#047857' }}>tooltipViewModelDelegate</span>.tooltipViewData,
                  {'\n        '}<span style={{ color: '#047857' }}>listViewModelDelegate</span>.listViewData,
                  {'\n        '}<span style={{ color: '#047857' }}>searchViewModelDelegate</span>.searchBarViewData,
                  {'\n        '}::<span style={{ color: '#B45309' }}>makeScreenViewData</span>,
                  {'\n    '})
                  {'\n        '}.<span style={{ color: '#B45309' }}>onEach</span>(::<span style={{ color: '#B45309' }}>countApplicableCampaigns</span>)
                  {'\n        '}.<span style={{ color: '#B45309' }}>stateIn</span>(
                  {'\n            '}scope = viewModelScope,
                  {'\n            '}started = SharingStarted.Eagerly,
                  {'\n            '}initialValue = Loading,
                  {'\n        '})
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Problem Explanation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: showProblem ? 1 : 0, scale: showProblem ? 1 : 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="p-4 rounded-lg border-2"
            style={{
              backgroundColor: '#fff3cd',
              borderColor: '#ffc107',
            }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#ff6f00' }} />
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1.5" style={{ color: '#856404' }}>
                  We've extended it to support up to 10 flows, but...
                </h3>
                <div className="space-y-1 mb-2">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: visiblePoints > index ? 1 : 0, 
                        x: visiblePoints > index ? 0 : -20 
                      }}
                      transition={{ duration: 0.5 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-sm" style={{ color: '#ff6f00' }}>•</span>
                      <span className="text-sm" style={{ color: '#856404' }}>{problem}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
