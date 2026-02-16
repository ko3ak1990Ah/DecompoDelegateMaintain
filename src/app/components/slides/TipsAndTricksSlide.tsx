import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function TipsAndTricksSlide() {
  const [showTitle, setShowTitle] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [showProvides, setShowProvides] = useState(false);
  const [showScope, setShowScope] = useState(false);
  const [showLifecycle, setShowLifecycle] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTitle(true), 300),
      setTimeout(() => setShowAnnotations(true), 200),
      setTimeout(() => setShowProvides(true), 400),
      setTimeout(() => setShowScope(true), 600),
      setTimeout(() => setShowLifecycle(true), 800),
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
          transition={{ duration: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-6 mb-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                 style={{ 
                   backgroundColor: 'var(--ah-blue)',
                 }}>
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <div>
              <h2 className="text-6xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
                Tips and Tricks
              </h2>
              <div className="h-1 w-64 rounded-full mt-2" 
                   style={{ backgroundColor: 'var(--ah-bonus)' }} />
            </div>
          </div>
          <p className="text-xl mt-4 ml-20" style={{ color: 'var(--ah-grey-40)' }}>
            Providing ViewModelScope with Dagger Hilt
          </p>
        </motion.div>

        {/* Code Section */}
        <div 
          className="rounded-2xl border-4 overflow-hidden"
          style={{ 
            backgroundColor: 'var(--ah-grey-light-40)',
            borderColor: 'var(--ah-blue)',
          }}
        >
          {/* Header */}
          <div 
            className="px-8 py-4 border-b-3"
            style={{ 
              backgroundColor: 'var(--ah-blue)',
              borderColor: 'var(--ah-blue)',
            }}
          >
            <span className="text-2xl font-bold text-white">
              ViewModelScope with Dagger Hilt
            </span>
          </div>
          
          {/* Code Content */}
          <div className="p-8 font-mono text-lg leading-relaxed">
            <pre style={{ color: 'var(--ah-grey-60)' }}>
              <code>
                {/* Module Annotations */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showAnnotations ? 1 : 0, x: showAnnotations ? 0 : -20 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: 'block' }}
                >
                  <span style={{ color: '#D97706' }}>@Module</span>{'\n'}
                  <span style={{ color: '#D97706' }}>@InstallIn</span>(<span style={{ color: '#1E40AF' }}>ViewModelComponent</span>::<span style={{ color: '#6B46C1' }}>class</span>){'\n'}
                  <span style={{ color: '#6B46C1' }}>internal object</span> <span style={{ color: '#1E40AF', fontWeight: 'bold' }}>ViewModelModule</span> {'{\n\n'}
                </motion.span>

                {/* Provides Annotation */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showProvides ? 1 : 0, x: showProvides ? 0 : -20 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: 'block' }}
                >
                  {'    '}<span style={{ color: '#D97706' }}>@Provides</span>{'\n'}
                  {'    '}<span style={{ color: '#D97706' }}>@ViewModelScoped</span>{'\n'}
                  {'    '}<span style={{ color: '#6B46C1' }}>fun</span> <span style={{ color: '#047857', fontWeight: 'bold' }}>provideViewModelScope</span>({'\n'}
                  {'        '}lifecycle: <span style={{ color: '#1E40AF' }}>ViewModelLifecycle</span>,{'\n'}
                  {'    '}): <span style={{ color: '#1E40AF' }}>CoroutineScope</span> {'{\n'}
                </motion.span>

                {/* Scope Creation */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showScope ? 1 : 0, x: showScope ? 0 : -20 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: 'block' }}
                >
                  {'        '}<span style={{ color: '#6B46C1' }}>val</span> scope = <span style={{ color: '#047857' }}>CoroutineScope</span>({'\n'}
                  {'            '}<span style={{ color: '#DC2626' }}>Coroutines</span>.<span style={{ color: '#047857' }}>Main</span>.<span style={{ color: '#047857' }}>immediate</span> + <span style={{ color: '#047857' }}>SupervisorJob</span>(){'\n'}
                  {'        '}){'\n\n'}
                </motion.span>

                {/* Lifecycle Management */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showLifecycle ? 1 : 0, x: showLifecycle ? 0 : -20 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: 'block' }}
                >
                  {'        '}lifecycle.<span style={{ color: '#047857' }}>addOnClearedListener</span> {'{\n'}
                  {'            '}scope.<span style={{ color: '#DC2626' }}>cancel</span>(){'\n'}
                  {'        }'}{'}\n\n'}
                  {'        '}<span style={{ color: '#6B46C1' }}>return</span> scope{'\n'}
                  {'    }'}{'}\n'}
                  {'}'}
                </motion.span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}