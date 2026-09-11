import { CheckCircle2, Clock, Camera, RefreshCw, Code2, ShoppingCart, MapPin, Sparkles, HelpCircle } from 'lucide-react';

interface FeaturesViewProps {
  onGetApiKey: () => void;
}

const currentFeatures = [
  {
    icon: CheckCircle2,
    title: 'Stock, size, and price Q&A',
    description: 'Natural language questions answered instantly, grounded directly in your real store inventory data with zero guesses.',
    highlight: '100% Grounded Answers',
  },
  {
    icon: Camera,
    title: 'Photo-based product search',
    description: 'Shoppers can snap or upload a photo of what they want. AI interprets the visual details and matches them against your stock.',
    highlight: 'Multimodal Matching',
  },
  {
    icon: RefreshCw,
    title: 'Live inventory sync',
    description: 'Connect your Google Sheet once. Any edit to size, quantity, or price flows through automatically via background polling.',
    highlight: 'Zero Manual Imports',
  },
  {
    icon: Code2,
    title: 'Drop-in widget or full REST API',
    description: 'Go live with a single script tag on your storefront, or build fully custom headless AI shopping experiences using our REST API.',
    highlight: 'Developer First',
  },
];

const upcomingRoadmap = [
  {
    phase: 'v1.1',
    icon: HelpCircle,
    title: 'Store FAQs & Instant Webhooks',
    description: 'Instant webhook push notifications for real-time inventory edits, plus static FAQ retrieval over return policies & shipping.',
    status: 'In Development',
  },
  {
    phase: 'v2.0',
    icon: ShoppingCart,
    title: 'Add to Cart & Checkout',
    description: 'Direct cart creation and instant checkout links inside the chat assistant interface across major store platforms.',
    status: 'Planned',
  },
  {
    phase: 'v2.0',
    icon: MapPin,
    title: 'Order Tracking & Native Connectors',
    description: 'Real-time order status updates and native platform connectors for Shopify, WooCommerce, and Magento.',
    status: 'Planned',
  },
  {
    phase: 'v2+',
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Smart AI product recommendations based on shopper context, past views, and aesthetic similarity matching.',
    status: 'On the Horizon',
  },
];

export default function FeaturesView({ onGetApiKey }: FeaturesViewProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 sm:py-20 animate-in fade-in duration-300">
      
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-neutral-700 mb-4 border border-neutral-200">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Product Architecture & Scope
        </div>
        <h1 
          className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Everything you need for{' '}
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>
            AI Shopping
          </span>
        </h1>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg">
          Explore what StockAgent does today, and see our open roadmap for what's shipping next.
        </p>
      </div>

      {/* Section 1: Features Today */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <h2 className="text-2xl font-bold text-neutral-900">What It Does Today (v1 Scope)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-accent/10 group-hover:text-accent text-neutral-800 flex items-center justify-center mb-6 transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {feat.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Public Roadmap ("What's Coming") */}
      <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider bg-accent/20 px-3 py-1 rounded-full mb-3">
              <Clock size={14} />
              Open Development
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
              What's Coming Next
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              We're building in the open, one solid piece at a time. Here is what's on our v1.1 & v2 roadmap.
            </p>
          </div>

          <button
            onClick={onGetApiKey}
            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shrink-0"
          >
            Join Early Pilot
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingRoadmap.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-700/60 px-2.5 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} className="text-neutral-300" />
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

