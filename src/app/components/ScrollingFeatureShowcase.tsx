import { useState, useEffect, useRef } from 'react';

interface Slide {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const slidesData: Slide[] = [
  {
    title: 'Sign up & get your API key',
    description:
      'Create an account in seconds and instantly generate a secure API key for your merchant store. No sales call, no onboarding queue — just go live.',
    image:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#0b0f1a',
    textColor: '#ffffff',
  },
  {
    title: 'Connect your inventory',
    description:
      'Start with a live Google Sheet or Excel Online — no complex backend engineering or database setup required. Your stock stays synced in real time.',
    image:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#ef4d23',
    textColor: '#ffffff',
  },
  {
    title: 'Add one line of code',
    description:
      'Paste a single script tag into your store header, or connect custom frontends using our raw REST API. Works with Shopify, WooCommerce, and headless stacks.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#ededed',
    textColor: '#0b0f1a',
  },
  {
    title: 'Real answers for shoppers',
    description:
      'Your customers start asking questions in plain text or photo uploads and get 100% accurate, live-inventory answers — powered by the StockAgent assistant.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#1f2937',
    textColor: '#ffffff',
  },
];

interface ScrollingFeatureShowcaseProps {
  onGetApiKey?: () => void;
}

export function ScrollingFeatureShowcase({ onGetApiKey }: ScrollingFeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.max(0, Math.floor(container.scrollTop / stepHeight))
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const dynamicStyles = {
    backgroundColor: 'transparent',
    color: '#0b0f1a',
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const isLight = true;
  const barIdle = isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.25)';
  const barActive = isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.85)';

  const gridPatternStyle = {
    '--grid-color': isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.10)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  // Grid pattern with a left-side opacity fade (applied to the grid layer only, not the image).
  const gridFadeStyle = {
    ...gridPatternStyle,
    maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)',
  };

  const goToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollableHeight = container.scrollHeight - window.innerHeight;
    const stepHeight = scrollableHeight / slidesData.length;
    container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
  };

  return (
    <div
      ref={scrollContainerRef}
      className="mt-10 sm:mt-16 h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`.hiw-hide-scroll::-webkit-scrollbar{display:none;}`}</style>
      <div className="hiw-hide-scroll" style={{ height: `${slidesData.length * 100}vh` }}>
        <div
          ref={stickyPanelRef}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="relative flex flex-col justify-center p-6 sm:p-8 md:p-16">
              {/* Pagination Bars */}
              <div className="absolute top-16 left-8 md:left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="h-1 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      width: index === activeIndex ? '3rem' : '1.5rem',
                      backgroundColor: index === activeIndex ? barActive : barIdle,
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Step number */}
              <div className="absolute top-14 right-8 md:right-16 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Step {activeIndex + 1} / {slidesData.length}
              </div>

              <div className="relative h-64 w-full">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                  >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-md">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-16 left-8 md:left-16">
                <button
                  onClick={onGetApiKey}
                  className="px-10 py-4 bg-[#ef4d23] hover:bg-[#d83f17] text-white font-semibold rounded-full uppercase tracking-wider transition-colors"
                >
                  Get API Key
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative hidden md:flex items-center justify-center p-8">
              {/* Grid layer (fades on the left, behind the image only) */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={gridFadeStyle}
                aria-hidden="true"
              />

              <div className="relative z-10 w-[50%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}>
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/800x1200/1f2937/ffffff?text=StockAgent`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingFeatureShowcase;
