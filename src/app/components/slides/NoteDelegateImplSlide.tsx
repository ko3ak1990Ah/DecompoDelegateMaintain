import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function NoteDelegateImplSlide() {
  const [visiblePoints, setVisiblePoints] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisiblePoints(1), 2000),
      setTimeout(() => setVisiblePoints(2), 4000),
      setTimeout(() => setVisiblePoints(3), 6000),
      setTimeout(() => setVisiblePoints(4), 8000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const benefits = [
    {
      icon: '🎯',
      title: 'Single Responsibility',
      text: 'Does just one job—handles all smart note business logic'
    },
    {
      icon: '🔒',
      title: 'Encapsulation',
      text: 'Flags like isMyListSearch tucked safely away from the main ViewModel'
    },
    {
      icon: '✨',
      title: 'Clean State Management',
      text: 'Compose-friendly MutableStateFlow for lifecycle-safe state'
    },
    {
      icon: '🎉',
      title: 'Maintainability',
      text: 'Bug in smart notes? I know exactly which file to blame!'
    }
  ];

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
              NoteDelegate Implementation
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              Delegate in action—focused and feature-complete
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
                  ProductSearchSmartNoteViewModelDelegateImpl.kt
                </span>
              </div>

              {/* Code content */}
              <div className="p-10 font-mono text-lg leading-relaxed overflow-y-auto max-h-[600px]">
                <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                  <code>
                    <span style={{ color: '#9333EA' }}>@ViewModelScoped</span>
                    {'\n'}<span style={{ color: '#6B46C1' }}>internal class</span> <span className="font-bold" style={{ color: '#1E40AF' }}>ProductSearchSmartNoteViewModelDelegateImpl</span>
                    {'\n'}<span style={{ color: '#6B46C1' }}>@Inject constructor</span>(
                    {'\n'}    savedStateHandle: <span style={{ color: '#047857' }}>SavedStateHandle</span>,
                    {'\n'}    <span style={{ color: '#6B46C1' }}>private val</span> coroutineScope: <span style={{ color: '#047857' }}>CoroutineScope</span>,
                    {'\n'}    <span style={{ color: '#6B46C1' }}>private val</span> addSmartNoteUseCase: <span style={{ color: '#047857' }}>AddSmartNoteUseCase</span>,
                    {'\n'}    <span style={{ color: '#6B46C1' }}>...</span>
                    {'\n'}    <span style={{ color: '#6B46C1' }}>private val</span> smartNoteToolTipDataStore: <span style={{ color: '#047857' }}>SmartNoteToolTipDataStore</span>
                    {'\n'}) : <span style={{ color: '#047857' }}>ProductSearchSmartNoteViewModelDelegate</span> {'{\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>private val</span> isMyListSearch: <span style={{ color: '#047857' }}>Boolean</span> =
                    {'\n'}        savedStateHandle.get{'<'}<span style={{ color: '#047857' }}>Boolean</span>{'>('}IS_MY_LIST_SEARCH) == <span style={{ color: '#DC2626' }}>true</span>
                    {'\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>private val</span> allowAddBanners: <span style={{ color: '#047857' }}>Boolean</span> =
                    {'\n'}        savedStateHandle.get{'<'}<span style={{ color: '#047857' }}>Boolean</span>{'>('}ARG_SHOW_AD_BANNERS) != <span style={{ color: '#DC2626' }}>false</span>
                    {'\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>private val</span> _state: <span style={{ color: '#047857' }}>MutableStateFlow</span>{'<'}<span style={{ color: '#047857' }}>SmartNoteState</span>{'>'} =
                    {'\n'}        MutableStateFlow(SmartNoteState(<span style={{ color: '#DC2626' }}>null</span>))
                    {'\n\n'}
                    {'    '}<span style={{ color: '#6B46C1' }}>override val</span> state: <span style={{ color: '#047857' }}>StateFlow</span>{'<'}<span style={{ color: '#047857' }}>SmartNoteState</span>{'>'}
                    {'\n'}        <span style={{ color: '#6B46C1' }}>get</span>() = _state
                    {'\n}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* Success badge */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.4 }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: 'var(--ah-success)' }}
            >
              <CheckCircle2 className="w-14 h-14 text-white" />
            </motion.div>
          </div>

          {/* Right: Benefits - Compact sidebar */}
          <div className="w-80 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3 mb-1">
              <Sparkles className="w-7 h-7" style={{ color: 'var(--ah-blue)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                Why This Works
              </h3>
            </div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: visiblePoints > index ? 1 : 0, 
                  x: visiblePoints > index ? 0 : 20 
                }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-xl border-2"
                style={{ 
                  backgroundColor: visiblePoints > index ? 'var(--ah-blue-light)' : 'var(--ah-grey-light-40)',
                  borderColor: visiblePoints > index ? 'var(--ah-blue)' : 'var(--ah-grey-light-20)'
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold mb-1" style={{ color: 'var(--ah-grey-60)' }}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-snug" style={{ color: 'var(--ah-grey-40)' }}>
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: visiblePoints >= 4 ? 1 : 0, y: visiblePoints >= 4 ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-1 p-3 rounded-xl text-center"
              style={{ backgroundColor: 'var(--ah-success-light)' }}
            >
              <p className="text-base font-semibold" style={{ color: 'var(--ah-grey-60)' }}>
                🎊 ViewModel stays focused!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}