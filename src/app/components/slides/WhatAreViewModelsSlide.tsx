import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function WhatAreViewModelsSlide() {
  return (
    <div className="w-full h-full max-w-6xl mx-auto relative flex items-center justify-center">
      {/* AH Logo Branding */}
      <div className="absolute top-8 right-8">
        <img 
          src={ahLogoImage} 
          alt="Albert Heijn" 
          className="h-14 object-contain opacity-90"
        />
      </div>

      <div className="w-full">
        <h2 className="text-5xl font-bold mb-12" style={{ color: 'var(--ah-grey-60)' }}>Agenda</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Section 1 */}
          <div className="p-6 rounded-3xl border-4 h-full flex flex-col"
               style={{ backgroundColor: 'var(--ah-blue-light)', borderColor: 'var(--ah-blue)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl font-bold"
                 style={{ backgroundColor: 'var(--ah-blue)' }}>
              01
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--ah-blue-dark)' }}>
              VM Problem
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--ah-grey-40)' }}>
              Complexity explosion, things we tried and why they failed
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-3xl border-4 h-full flex flex-col"
               style={{ backgroundColor: 'var(--ah-blue-light)', borderColor: 'var(--ah-blue)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl font-bold"
                 style={{ backgroundColor: 'var(--ah-blue)' }}>
              02
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--ah-blue-dark)' }}>
              Delegation as the Solution
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--ah-grey-40)' }}>
              How delegation applies to ViewModels
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-3xl border-4 h-full flex flex-col"
               style={{ backgroundColor: 'var(--ah-blue-light)', borderColor: 'var(--ah-blue)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl font-bold"
                 style={{ backgroundColor: 'var(--ah-blue)' }}>
              03
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--ah-blue-dark)' }}>
              Integration & Best Practices
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--ah-grey-40)' }}>
              Combining multiple delegates into one screen state, tips & tricks, testing strategies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}