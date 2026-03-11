import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import WhatAreViewModelsSlide from './slides/WhatAreViewModelsSlide';
import VMProblemSlide from './slides/VMProblemSlide';
import VMConstructorSlide from './slides/VMConstructorSlide';
import CleanArchitectureLimitsSlide from './slides/CleanArchitectureLimitsSlide';
import ThingsWeTriedSlide from './slides/ThingsWeTriedSlide';
import CanWeJustDelegateSlide from './slides/CanWeJustDelegateSlide';
import DelegationSlide from './slides/DelegationSlide';
import DelegationPatternSlide from './slides/DelegationPatternSlide';
import NoteFeatureSlide from './slides/NoteFeatureSlide';
import NoteCapabilitiesSlide from './slides/NoteCapabilitiesSlide';
import NoteDelegateSlide from './slides/NoteDelegateSlide';
import ExcessiveProblemSlide from './slides/ExcessiveProblemSlide';
import ContractSlide from './slides/ContractSlide';
import NoteDelegateImplSlide from './slides/NoteDelegateImplSlide';
import ViewModelWithDelegationSlide from './slides/ViewModelWithDelegationSlide';
import DisplayViewModelOutputsSlide from './slides/DisplayViewModelOutputsSlide';
import IntegrationProblemSlide from './slides/IntegrationProblemSlide';
import IntegrationExampleSlide from './slides/IntegrationExampleSlide';
import CombineGroupingSlide from './slides/CombineGroupingSlide';
import TipsAndTricksSlide from './slides/TipsAndTricksSlide';
import DelegatesIndependenceSlide from './slides/DelegatesIndependenceSlide';
import TestFixturesEvolutionSlide from './slides/TestFixturesEvolutionSlide';
import StructuralTransformationSlide from './slides/StructuralTransformationSlide';
import QASlide from './slides/QASlide';

const slides = [
  TitleSlide,
  IntroSlide,
  WhatAreViewModelsSlide,
  VMProblemSlide,
  VMConstructorSlide,
  CleanArchitectureLimitsSlide,
  ThingsWeTriedSlide,
  CanWeJustDelegateSlide,
  DelegationSlide,
  DelegationPatternSlide,
  NoteFeatureSlide,
  NoteCapabilitiesSlide,
  NoteDelegateSlide,
  NoteDelegateImplSlide,
  ExcessiveProblemSlide,
  ContractSlide,
  ViewModelWithDelegationSlide,
  DisplayViewModelOutputsSlide,
  IntegrationProblemSlide,
  IntegrationExampleSlide,
  CombineGroupingSlide,
  TipsAndTricksSlide,
  DelegatesIndependenceSlide,
  TestFixturesEvolutionSlide,
  StructuralTransformationSlide,
  QASlide,
];

// Reference dimensions for scaling (16:9 aspect ratio)
const REFERENCE_WIDTH = 1920;
const REFERENCE_HEIGHT = 1080;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);
  const cinemaMode = (() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const cinema = params.get('cinema');
    return mode === 'cinema' || cinema === '1' || cinema === 'true';
  })();

  // Check if fullscreen API is available
  useEffect(() => {
    const isAvailable = 
      document.fullscreenEnabled || 
      // @ts-ignore - for browser compatibility
      document.webkitFullscreenEnabled || 
      // @ts-ignore
      document.mozFullScreenEnabled || 
      // @ts-ignore
      document.msFullscreenEnabled;
    setFullscreenAvailable(!!isAvailable);
  }, []);

  // Calculate scale based on available container size
  useEffect(() => {
    let rafId: number | null = null;

    const updateScale = () => {
      const container = presentationRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportWidth = rect.width || window.innerWidth;
      const viewportHeight = rect.height || window.innerHeight;

      const scaleX = viewportWidth / REFERENCE_WIDTH;
      const scaleY = viewportHeight / REFERENCE_HEIGHT;
      const newScale = Math.max(0.1, Math.min(scaleX, scaleY));

      setScale((prevScale) => (
        Math.abs(prevScale - newScale) < 0.001 ? prevScale : newScale
      ));
    };

    const scheduleUpdate = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateScale);
    };

    scheduleUpdate();

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    if (presentationRef.current) {
      resizeObserver.observe(presentationRef.current);
    }

    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('orientationchange', scheduleUpdate);
    document.addEventListener('fullscreenchange', scheduleUpdate);
    window.visualViewport?.addEventListener('resize', scheduleUpdate);
    window.visualViewport?.addEventListener('scroll', scheduleUpdate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('orientationchange', scheduleUpdate);
      document.removeEventListener('fullscreenchange', scheduleUpdate);
      window.visualViewport?.removeEventListener('resize', scheduleUpdate);
      window.visualViewport?.removeEventListener('scroll', scheduleUpdate);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Track fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Navigation keys (support multiple clicker formats)
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        // Escape key exits fullscreen
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isFullscreen]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  const toggleFullscreen = async () => {
    if (!presentationRef.current || !fullscreenAvailable) return;
    
    try {
      if (isFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        await presentationRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } catch (error) {
      // Fullscreen API not available or blocked by permissions policy
      console.warn('Fullscreen not available:', error);
      setFullscreenAvailable(false);
    }
  };

  return (
    <div
      ref={presentationRef}
      className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
      style={{ height: '100dvh' }}
    >
      {/* Scaled presentation container */}
      <div
        className="relative"
        style={{
          width: `${REFERENCE_WIDTH}px`,
          height: `${REFERENCE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {!cinemaMode && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {!cinemaMode && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-10">
            <motion.div
              className="h-full"
              style={{ backgroundColor: 'var(--ah-blue)' }}
              initial={{ width: '0%' }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Fullscreen Toggle */}
        {fullscreenAvailable && !cinemaMode && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-8 right-8 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
          </button>
        )}
      </div>
    </div>
  );
}