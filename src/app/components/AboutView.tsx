import { ShieldCheck, Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onGetApiKey: () => void;
}

export default function AboutView({ onGetApiKey }: AboutViewProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-20 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-neutral-700 mb-4 border border-neutral-200">
          <span className="w-2 h-2 rounded-full bg-[#ef4d23]" />
          About StockAgent
        </div>
        <h1 
          className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Introducing{' '}
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>
            Stock Agent
          </span>
        </h1>
        <p className="mt-4 text-[#ef4d23] font-semibold text-lg sm:text-xl">
          The Stripe for AI Shopping Assistants.
        </p>
      </div>

      {/* Main Vision Story Card */}
      <div className="rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-8 mb-12">
        <div className="prose prose-neutral max-w-none text-base sm:text-lg text-neutral-700 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-neutral-900 leading-relaxed">
            StockAgent is a B2B SaaS developer platform engineered to bring hallucination-free, real-time AI shopping assistants to any e-commerce storefront in minutes.
          </p>

          <div className="pt-4 border-t border-neutral-100">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">The Problem with Traditional E-Commerce Search</h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Right now, online shoppers have to do all the heavy lifting. They scroll through endless catalog pages, apply complex filters, and open five different tabs just to answer a simple question: <span className="italic font-medium text-neutral-900">"Do you have this item in red, size 42, in stock right now?"</span> Half the time, frustrated buyers give up and leave without purchasing.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-3">
              Existing AI chatbots haven't solved this. Most are no-code apps locked into a single platform (like Shopify) or glorified FAQ bots that guess, fabricate answers, or break the moment a customer asks a specific inventory question.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">The StockAgent Fix: Real Answers from Real Inventory</h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We built StockAgent as <span className="font-semibold text-neutral-900">developer-first infrastructure, not a generic chatbot</span>.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-3">
              Instead of guessing or reciting canned scripts, StockAgent connects directly to a store's live inventory data source—starting with a simple, connected Google Sheet or spreadsheet. Whenever a customer asks a question in plain text or uploads a product photo, StockAgent checks the live inventory record and responds instantly with 100% accurate, grounded information.
            </p>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="pt-6 border-t border-neutral-100">
          <h3 className="text-xl font-bold text-neutral-900 mb-6">Core Pillars of StockAgent</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 mb-2 text-[#ef4d23] font-bold text-sm">
                <ShieldCheck size={18} />
                Zero-Hallucination Guarantee
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                StockAgent never states an item is in stock, or quotes a price, quantity, or variant that isn't backed by live inventory data. Accuracy comes first.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 mb-2 text-[#ef4d23] font-bold text-sm">
                <Sparkles size={18} />
                Multimodal Photo-Matching
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Shoppers can upload or snap a photo of a style or item they love, and StockAgent instantly matches the visual attributes against your actual product catalog.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 mb-2 text-[#ef4d23] font-bold text-sm">
                <CheckCircle2 size={18} />
                Live Automated Inventory Sync
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Edits made to your Google Sheet or stock database flow through automatically every 30 to 60 seconds without manual re-imports or engineering overhead.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 mb-2 text-[#ef4d23] font-bold text-sm">
                <Layers size={18} />
                Developer-First Integration
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Drop StockAgent onto any storefront using a single &lt;script&gt; embed tag, or use our raw REST API to build completely custom, headless shopping experiences.
              </p>
            </div>

          </div>
        </div>

        {/* Mission Statement Box */}
        <div className="p-6 bg-neutral-900 text-white rounded-2xl border border-neutral-800">
          <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Our goal is to power the next generation of conversational e-commerce. Just as Stripe made online payments seamless for developers, StockAgent makes adding a reliable, intelligent shopping assistant effortless for every online store.
          </p>
          <p className="text-xs font-mono text-[#ef4d23] mt-4">
            StockAgent → Connect Inventory → Add One Line of Code → Deliver Instant Shopping Answers
          </p>
        </div>

      </div>

      {/* CTA Box */}
      <div className="bg-[#0b0f1a] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h2 className="text-2xl font-semibold">Ready to add StockAgent to your store?</h2>
          <p className="text-neutral-400 text-sm mt-1">Get your free API key and test it on your store in under 2 minutes.</p>
        </div>
        <button
          onClick={onGetApiKey}
          className="bg-[#ef4d23] hover:bg-[#d83f17] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shrink-0 flex items-center gap-2"
        >
          Get API Key Now
          <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
}
