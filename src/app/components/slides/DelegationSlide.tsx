import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function DelegationSlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex flex-col justify-center px-16">
      {/* Agenda indicator */}
      <div className="absolute top-8 left-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
             style={{ backgroundColor: 'var(--ah-blue)' }}>
          02
        </div>
      </div>

      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Two Cards Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Card 1: Delegation pattern */}
          <div className="relative p-8 rounded-3xl border-4 bg-white"
               style={{ borderColor: 'var(--ah-blue)' }}>
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold" style={{ color: 'var(--ah-blue-dark)' }}>
                  Delegation pattern
                </h3>
                <div className="h-0.5 w-24 rounded-full" style={{ backgroundColor: 'var(--ah-blue)' }}></div>
              </div>
              <p className="text-xl leading-relaxed pt-2" style={{ color: 'var(--ah-grey-40)' }}>
                classic OOP, where an object hands off responsibility to a helper class.
              </p>
            </div>
          </div>

          {/* Card 2: Delegated property */}
          <div className="relative p-8 rounded-3xl border-4 bg-white"
               style={{ borderColor: 'var(--ah-blue)' }}>
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold" style={{ color: 'var(--ah-blue-dark)' }}>
                  Delegated property
                </h3>
                <div className="h-0.5 w-24 rounded-full" style={{ backgroundColor: 'var(--ah-blue)' }}></div>
              </div>
              <p className="text-xl leading-relaxed pt-2" style={{ color: 'var(--ah-grey-40)' }}>
                language feature for property delegation, <span className="font-mono">by lazy {'{}'}</span>, <span className="font-mono">by viewModels()</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}