import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function DelegationPatternSlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex items-center justify-center px-16">
      <div className="w-full">
        {/* Title with number badge and logo */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
               style={{ backgroundColor: 'var(--ah-blue)' }}>
            02
          </div>
          <h2 className="text-5xl font-bold flex-1" style={{ color: 'var(--ah-grey-60)' }}>
            Delegation Pattern
          </h2>
          {/* AH Logo aligned with title */}
          <img 
            src={ahLogoImage} 
            alt="Albert Heijn" 
            className="h-14 object-contain opacity-90"
          />
        </div>

        {/* Code snippet container */}
        <div 
          className="rounded-3xl border-4 overflow-hidden"
          style={{ 
            backgroundColor: 'var(--ah-grey-light-40)', 
            borderColor: 'var(--ah-blue)' 
          }}
        >
          {/* Header */}
          <div className="px-8 py-3 border-b-2 flex items-center gap-3"
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
              Printer.kt
            </span>
          </div>

          {/* Code content */}
          <div className="p-8 font-mono text-base leading-relaxed">
            <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
              <code>
                <span style={{ color: 'var(--ah-blue-dark)' }}>interface</span> <span className="font-bold">Printer</span> {'{\n'}
                {'    '}<span style={{ color: 'var(--ah-blue-dark)' }}>fun</span> print(message: String){'\n'}
                {'    '}<span style={{ color: 'var(--ah-blue-dark)' }}>fun</span> status(): Int{'\n'}
                {'}\n\n'}

                <span style={{ color: 'var(--ah-blue-dark)' }}>class</span> <span className="font-bold">DefaultPrinter</span> : Printer {'{ /*...*/ }\n\n'}

                <span style={{ color: 'var(--ah-blue-dark)' }}>class</span> <span className="font-bold">LoggingPrinter</span>(<span style={{ color: 'var(--ah-blue-dark)' }}>private val</span> delegate: Printer) : Printer <span style={{ color: 'var(--ah-blue-dark)' }}>by</span> delegate {'{\n'}
                {'    '}<span style={{ color: 'var(--ah-blue-dark)' }}>override fun</span> print(message: String) {'{\n'}
                {'        '}println(<span style={{ color: 'var(--ah-success)' }}>"LOG: $message"</span>){'\n'}
                {'        '}delegate.print(message){'\n'}
                {'    }'}
                {'\n}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}