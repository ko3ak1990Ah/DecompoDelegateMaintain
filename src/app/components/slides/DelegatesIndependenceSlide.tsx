import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function DelegatesIndependenceSlide() {
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
              Tips & Tricks
            </h2>
            <div className="h-1 w-48 rounded-full mt-2" 
                 style={{ backgroundColor: 'var(--ah-bonus)' }} />
            <p className="text-xl mt-2" style={{ color: 'var(--ah-grey-40)' }}>
              Delegate Independence
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Principle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        <div className="p-6 rounded-2xl border-4"
             style={{ 
               backgroundColor: 'var(--ah-blue-light)', 
               borderColor: 'var(--ah-blue)' 
             }}>
          <p className="text-2xl font-bold mb-3" style={{ color: 'var(--ah-blue-dark)' }}>
            Delegates should not talk to each other directly.
          </p>
          <p className="text-xl" style={{ color: 'var(--ah-grey-40)' }}>
            If two delegates need the same data, put it into a shared holder with read/write interfaces:
          </p>
          <ul className="mt-4 space-y-2 ml-6">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 2.3 }}
              className="text-lg flex items-start gap-3"
              style={{ color: 'var(--ah-grey-40)' }}
            >
              <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                    style={{ backgroundColor: 'var(--ah-blue)' }} />
              <span><strong>Main ViewModel</strong> = writer (owns loading + updates)</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 4.3 }}
              className="text-lg flex items-start gap-3"
              style={{ color: 'var(--ah-grey-40)' }}
            >
              <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                    style={{ backgroundColor: 'var(--ah-blue)' }} />
              <span><strong>Delegates</strong> = readers (consume state, stay independent)</span>
            </motion.li>
          </ul>
        </div>
      </motion.div>

      {/* Diagrams */}
      <div className="grid grid-cols-2 gap-8">
        {/* Don't - Wrong Way */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: 'var(--ah-error)' }}>
              <X className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ah-error)' }}>
              Don't
            </h3>
          </div>

          <div className="p-6 rounded-2xl border-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-error)' 
               }}>
            <p className="text-base mb-6" style={{ color: 'var(--ah-grey-40)' }}>
              Coupling, ordering issues, hard to test
            </p>
            
            {/* Diagram */}
            <div className="flex flex-col items-center gap-4">
              <div className="px-6 py-4 rounded-xl border-2 font-mono text-sm"
                   style={{ 
                     backgroundColor: 'var(--ah-grey-light-20)', 
                     borderColor: 'var(--ah-error)',
                     color: 'var(--ah-grey-60)'
                   }}>
                Delegate A
              </div>
              
              <ArrowRight className="w-6 h-6 transform rotate-90" 
                         style={{ color: 'var(--ah-error)' }} />
              
              <div className="px-6 py-4 rounded-xl border-2 font-mono text-sm"
                   style={{ 
                     backgroundColor: 'var(--ah-grey-light-20)', 
                     borderColor: 'var(--ah-error)',
                     color: 'var(--ah-grey-60)'
                   }}>
                Delegate B
              </div>
            </div>
          </div>
        </motion.div>

        {/* Do - Right Way */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: 'var(--ah-success)' }}>
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--ah-success)' }}>
              Do
            </h3>
          </div>

          <div className="p-6 rounded-2xl border-4"
               style={{ 
                 backgroundColor: 'white', 
                 borderColor: 'var(--ah-success)' 
               }}>
            <p className="text-base mb-6" style={{ color: 'var(--ah-grey-40)' }}>
              Clean separation, testable, maintainable
            </p>
            
            {/* Diagram */}
            <div className="flex flex-col items-center gap-4">
              {/* VM Writer */}
              <div className="px-6 py-4 rounded-xl border-2 font-mono text-sm font-bold"
                   style={{ 
                     backgroundColor: 'var(--ah-blue-light)', 
                     borderColor: 'var(--ah-blue)',
                     color: 'var(--ah-blue-dark)'
                   }}>
                VM (writer)
              </div>
              
              <ArrowRight className="w-6 h-6 transform rotate-90" 
                         style={{ color: 'var(--ah-success)' }} />
              
              {/* Shared Holder */}
              <div className="px-6 py-4 rounded-xl border-2 font-mono text-sm"
                   style={{ 
                     backgroundColor: 'var(--ah-bonus-light)', 
                     borderColor: 'var(--ah-bonus)',
                     color: 'var(--ah-grey-60)'
                   }}>
                Shared Holder
              </div>
              
              {/* Arrows to delegates */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-6 h-6 transform rotate-90" 
                             style={{ color: 'var(--ah-success)' }} />
                  <div className="px-4 py-3 rounded-xl border-2 font-mono text-xs"
                       style={{ 
                         backgroundColor: 'var(--ah-grey-light-20)', 
                         borderColor: 'var(--ah-success)',
                         color: 'var(--ah-grey-60)'
                       }}>
                    Delegate A<br/>(reader)
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-6 h-6 transform rotate-90" 
                             style={{ color: 'var(--ah-success)' }} />
                  <div className="px-4 py-3 rounded-xl border-2 font-mono text-xs"
                       style={{ 
                         backgroundColor: 'var(--ah-grey-light-20)', 
                         borderColor: 'var(--ah-success)',
                         color: 'var(--ah-grey-60)'
                       }}>
                    Delegate B<br/>(reader)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}