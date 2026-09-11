import ScrollingFeatureShowcase from './ScrollingFeatureShowcase';

interface HowItWorksProps {
  onGetApiKey: () => void;
}

export default function HowItWorks({ onGetApiKey }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="mt-4 sm:mt-6 w-screen relative bg-transparent overflow-hidden -mx-3 sm:-mx-4 scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6 pt-14 sm:pt-20">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-neutral-700 mb-4 border border-neutral-200">
          <span className="w-2 h-2 rounded-full bg-[#ef4d23]" />
          Simple Integration
        </div>
        <h2
          className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          How it works in{' '}
          <span
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}
          >
            4 easy steps
          </span>
        </h2>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg">
          Designed for developers and merchants to go live in minutes, not weeks.
        </p>
      </div>

      <ScrollingFeatureShowcase onGetApiKey={onGetApiKey} />
    </section>
  );
}
