import ahLogoImage from '../../../assets/c9eef86c2beab64ae7887d616982b3bf6a498655.png';
import { motion } from 'motion/react';

export default function ThingsWeTriedSlide() {
  return (
    <div className="w-full h-full max-w-7xl mx-auto relative flex flex-col justify-center items-center px-16">
      {/* Agenda indicator */}
      <div className="absolute top-8 left-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
             style={{ backgroundColor: 'var(--ah-blue)' }}>
          01
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

      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold" style={{ color: 'var(--ah-grey-60)' }}>
            Things We Tried (And Regretted) 🤦‍♂️
          </h1>
        </div>

        {/* Regrets List */}
        <div className="space-y-6">
          {/* Abstraction - White box with blue border like "Then it grew" */}
          <div className="p-8 rounded-3xl border-4"
               style={{ 
                 backgroundColor: 'white',
                 borderColor: 'var(--ah-blue)'
               }}>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--ah-blue-dark)' }}>
              Abstraction
            </h3>
          </div>

          {/* Sub-ViewModels - White box with blue border like "Then it grew" */}
          <div className="p-8 rounded-3xl border-4"
               style={{ 
                 backgroundColor: 'white',
                 borderColor: 'var(--ah-blue)'
               }}>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--ah-blue-dark)' }}>
              Sub-ViewModels
            </h3>
          </div>

          {/* PresentationHelpers - White box with blue border like "Then it grew" */}
          <div className="p-8 rounded-3xl border-4"
               style={{ 
                 backgroundColor: 'white',
                 borderColor: 'var(--ah-blue)'
               }}>
            <h3 className="text-3xl font-bold" style={{ color: 'var(--ah-blue-dark)' }}>
              PresentationHelpers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}