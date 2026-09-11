import { useState } from 'react';
import { X, Key, Check, Copy, ArrowRight, Sheet, Sparkles, ShieldCheck } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [sheetUrl, setSheetUrl] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomHex = Math.random().toString(36).substring(2, 10);
    const key = `sk_live_${randomHex}${Math.random().toString(36).substring(2, 8)}`;
    setGeneratedKey(key);
    setStep(3);
  };

  const scriptTagSnippet = `<script
  src="https://cdn.stockagent.ai/v1/widget.js"
  data-api-key="${generatedKey || 'sk_live_demo'}"
  async
></script>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(scriptTagSnippet);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleReset = () => {
    setStep(1);
    setName('');
    setEmail('');
    setStoreName('');
    setSheetUrl('');
    setGeneratedKey('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Step Indicator Badges */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 1 ? 'bg-accent' : 'bg-neutral-200'
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 2 ? 'bg-accent' : 'bg-neutral-200'
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step >= 3 ? 'bg-accent' : 'bg-neutral-200'
            }`}
          />
          <span className="text-xs font-mono text-neutral-400 ml-2">Step {step} of 3</span>
        </div>

        {/* STEP 1: Account & Store Details */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                <Key size={14} />
                Developer Signup
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Get your StockAgent API Key</h2>
              <p className="text-xs text-neutral-500 mt-1">Tell us a bit about your store to initialize your tenant API key.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="Alex Rivers"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-accent focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Work Email</label>
              <input
                type="email"
                required
                placeholder="alex@storebrand.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-accent focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Store / Company Name</label>
              <input
                type="text"
                required
                placeholder="Aesthetic Goods Co."
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-accent focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Continue to Connect Inventory
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* STEP 2: Connect Inventory Source */}
        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-100">
                <Sheet size={14} />
                Live Inventory Connection
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Connect your Google Sheet</h2>
              <p className="text-xs text-neutral-500 mt-1">
                Paste your live Google Sheet share URL. Edits will sync automatically every 30 seconds.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Google Sheet Share URL</label>
              <input
                type="url"
                required
                placeholder="https://docs.google.com/spreadsheets/d/1BxiM..."
                value={sheetUrl}
                onChange={(e) => setSheetUrl(e.target.value)}
                className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-accent focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-1">
              <p className="font-semibold text-neutral-900 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                Required Columns:
              </p>
              <p className="font-mono text-[11px] text-neutral-500">
                Product name, SKU, Size, Colour, Price, Quantity in stock, Product image URL
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Generate Live API Key
              <Sparkles size={16} />
            </button>
          </form>
        )}

        {/* STEP 3: API Key Generated & Snippet */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Check size={24} />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Your Store is Ready! 🎉</h2>
              <p className="text-xs text-neutral-500 mt-1">
                API Key initialized for <span className="font-semibold text-neutral-900">{storeName || 'Your Store'}</span>.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Generated API Key</label>
              <div className="bg-neutral-100 p-2.5 rounded-xl border border-neutral-200 font-mono text-xs text-neutral-900 font-bold truncate">
                {generatedKey}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-neutral-700">Embeddable Script Snippet</label>
                <button
                  onClick={handleCopySnippet}
                  className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                >
                  {copiedKey ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                  {copiedKey ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <div className="bg-neutral-950 text-neutral-100 p-3 rounded-xl font-mono text-[11px] overflow-x-auto border border-neutral-800">
                <pre>{scriptTagSnippet}</pre>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-full text-sm font-semibold transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

