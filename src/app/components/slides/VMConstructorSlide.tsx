import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import panicImage from '../../../assets/4be6d3e614de42aadf10d8568f2b8600165a714e.png';

export default function VMConstructorSlide() {
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExplosion(true);
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
            01
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              The Constructor
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              Dependencies keep piling up...
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Code snippet container */}
          <motion.div 
            className="rounded-3xl border-4 overflow-hidden relative"
            style={{ 
              backgroundColor: 'var(--ah-grey-light-40)', 
              borderColor: 'var(--ah-blue)' 
            }}
            animate={{
              borderColor: showExplosion ? 'var(--ah-error)' : 'var(--ah-blue)',
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="px-8 py-3 border-b-2 flex items-center gap-3"
                 style={{ 
                   backgroundColor: showExplosion ? 'var(--ah-error-light)' : 'var(--ah-blue-light)', 
                   borderColor: showExplosion ? 'var(--ah-error)' : 'var(--ah-blue)' 
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
            <div className="p-8 font-mono text-sm leading-relaxed overflow-y-auto max-h-[450px]">
              <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                <code>
                  <span style={{ color: 'var(--ah-blue-dark)' }}>class</span> <span className="font-bold">ProductSearchViewModel</span> <span style={{ color: 'var(--ah-blue-dark)' }}>@Inject constructor</span>(
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> savedStateHandle: SavedStateHandle,
                  {'\n'}    getProductSearchFeatureConfigUseCase: GetProductSearchFeatureConfigUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> observeRecentSearchQueriesUseCase: ObserveProductSearchRecentQueriesUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> getSearchSuggestionsUseCase: GetSearchSuggestionsUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> observeShoppingIntentUseCase: ObserveShoppingIntentUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> deleteRecentQueryUseCase: DeleteProductSearchRecentQueriesUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> saveQueryUseCase: SaveProductSearchRecentQueriesUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> searchAnalyticsManager: ProductSearchAnalyticsTracker,
                  {'\n'}    <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  <span style={{ color: 'var(--ah-grey)' }}>.</span>
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> servicePlatformAnalyticsManager: ServicePlatformAnalyticsManager,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> clearRecentQueryUseCase: ClearAllProductSearchRecentQueriesUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> isOrderModeUseCase: IsOrderModeUseCase,
                  {'\n'}    <span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> trackableItemPositionHelper: TrackableItemPositionHelper,
                  {'\n'}) : <span style={{ color: 'var(--ah-blue-dark)' }}>ViewModel</span>()
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Explosion effects */}
          {showExplosion && (
            <>
              {/* Panic badge with image */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'var(--ah-error)' }}
              >
                <img 
                  src={panicImage} 
                  alt="Panic" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Explosion particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * Math.PI * 2) / 8) * 150,
                    y: Math.sin((i * Math.PI * 2) / 8) * 150,
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                  className="absolute top-0 right-0 w-4 h-4 rounded-full"
                  style={{ 
                    backgroundColor: i % 2 === 0 ? 'var(--ah-error)' : 'var(--ah-warning)',
                    left: 'calc(100% - 3rem)',
                    top: '0'
                  }}
                />
              ))}

              {/* Shaking warning text */}
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: -30,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl"
                style={{ backgroundColor: 'var(--ah-error)' }}
              >
                <p className="text-3xl font-bold text-white whitespace-nowrap">
                  ⚠️ Too many dependencies!
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}