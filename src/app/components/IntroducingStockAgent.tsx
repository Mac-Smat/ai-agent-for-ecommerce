import { ArrowUpRight } from 'lucide-react';

interface IntroducingStockAgentProps {
  onGetApiKey?: () => void;
}

export default function IntroducingStockAgent({ onGetApiKey }: IntroducingStockAgentProps) {
  return (
    <section className="mt-4 sm:mt-6 w-full relative">
      {/* Background Flowing Curves (SVG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="w-full h-full min-w-[900px] absolute right-0 top-0 opacity-85"
          viewBox="0 0 1440 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Top Line: Sweeps horizontally, curves down to the right.
              Reveals left -> right (path starts at the left edge). */}
          <path
            d="M 0 45 L 680 45 C 800 45 860 140 920 280 C 970 380 1060 420 1200 420 L 1440 420"
            stroke="#ef4d23"
            strokeWidth="1.75"
            strokeLinecap="round"
            pathLength={1}
            style={{ strokeDasharray: 1, animation: 'stockagent-draw 4.5s ease-in-out infinite' }}
          />

          {/* Middle Line: Same shape/position, but reversed so it reveals
              right -> left (path starts at the right edge). */}
          <path
            d="M 1440 320 L 1160 320 C 1100 230 1050 135 940 135 L 0 135"
            stroke="#ef4d23"
            strokeWidth="1.75"
            strokeLinecap="round"
            pathLength={1}
            style={{ strokeDasharray: 1, animation: 'stockagent-draw 4.5s ease-in-out infinite' }}
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-12 md:px-16 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-4xl text-left">
        {/* Eyebrow (no accent line) */}
        <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#ef4d23]">
          Introducing StockAgent
        </span>

        {/* Headline (Serif) */}
        <h2
          className="mt-[42px] sm:mt-[46px] text-[#0b0f1a] font-normal leading-[1.08] tracking-[-0.02em]"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(38px, 6vw, 68px)',
          }}
        >
          Turn inventory into <br className="hidden sm:inline" />
          competitive advantage.
        </h2>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          StockAgent is an ecommerce visual AI infrastructure that helps online retailers and merchants
          uncover customer intent, match shopper photos to live inventory, and make every search convert
          at industry-leading speeds.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onGetApiKey}
            className="group inline-flex items-center gap-2.5 bg-[#0b0f1a] hover:bg-[#1a202c] active:bg-black text-white px-6 py-3.5 rounded-lg text-[14px] sm:text-[15px] font-medium transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23]"
          >
            <span>Explore StockAgent AI</span>
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-300 group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
