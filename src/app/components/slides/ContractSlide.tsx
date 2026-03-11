import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';

export default function ContractSlide() {
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
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: 'var(--ah-blue)' }}
          >
            02
          </div>
          <div>
            <h2 className="text-5xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
              Contract
            </h2>
            <p className="text-lg mt-1" style={{ color: 'var(--ah-grey-40)' }}>
              Define a focused interface between ViewModel and smart note behavior
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Code snippet container */}
          <div
            className="rounded-3xl border-4 overflow-hidden relative"
            style={{
              backgroundColor: 'var(--ah-grey-light-40)',
              borderColor: 'var(--ah-blue)',
            }}
          >
            {/* Header */}
            <div
              className="px-8 py-3 border-b-2 flex items-center gap-3"
              style={{
                backgroundColor: 'var(--ah-blue-light)',
                borderColor: 'var(--ah-blue)',
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-error)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-warning)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ah-success)' }} />
              </div>
              <span className="text-base font-mono ml-4" style={{ color: 'var(--ah-grey-60)' }}>
                ProductSearchSmartNoteContract.kt
              </span>
            </div>

            {/* Code content */}
            <div className="p-8 font-mono text-base leading-relaxed">
              <pre className="text-left" style={{ color: 'var(--ah-grey-60)' }}>
                <code>
                  <span style={{ color: '#6B46C1' }}>interface</span>{' '}
                  <span className="font-bold" style={{ color: '#1E40AF' }}>
                    ProductSearchSmartNoteContract
                  </span>{' '}
                  {'{\n\n'}
                  {'    '}
                  <span style={{ color: '#6B46C1' }}>fun</span>{' '}
                  <span style={{ color: '#B45309' }}>onAddSmartNoteClicked</span>
                  (note: <span style={{ color: '#047857' }}>String</span>)
                  {'\n\n'}
                  {'    '}
                  <span style={{ color: '#6B46C1' }}>fun</span>{' '}
                  <span style={{ color: '#B45309' }}>onSmartNoteShown</span>
                  (note: <span style={{ color: '#047857' }}>SmartNoteViewData</span>)
                  {'\n\n'}
                  {'    '}
                  <span style={{ color: '#6B46C1' }}>fun</span>{' '}
                  <span style={{ color: '#B45309' }}>onSmartNoteTooltipDismissed</span>
                  (smartNoteViewData: <span style={{ color: '#047857' }}>SmartNoteViewData</span>)
                  {'\n}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}