import { useState } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface ContactViewProps {
  onGetApiKey: () => void;
}

const CONTACT_EMAIL = 'support@stockagent.ai';

export default function ContactView({ onGetApiKey }: ContactViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetApiKey();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 sm:py-20 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-neutral-700 mb-4 border border-neutral-200">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Get Started
        </div>
        <h1
          className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Ready to add this to{' '}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            your store
          </span>
          ?
        </h1>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg">
          Tell us a bit about your store and we'll get you set up with a live AI assistant
          grounded in your real inventory.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Jane Developer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ef4d23] focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="jane@store.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ef4d23] focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-company" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Company / Store name
            </label>
            <input
              id="contact-company"
              type="text"
              required
              placeholder="Acme Outdoors"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ef4d23] focus:bg-white focus:outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="contact-website" className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Store website
            </label>
            <input
              id="contact-website"
              type="url"
              required
              placeholder="https://acmeoutdoors.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ef4d23] focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ef4d23] hover:bg-[#d83f17] active:bg-[#c43610] text-white rounded-full pl-6 pr-2.5 py-3 text-sm font-semibold transition-colors shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23]"
        >
          Get my API key
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <ArrowRight size={15} strokeWidth={2.5} />
          </span>
        </button>

        {/* Talk first */}
        <div className="mt-8 flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
          <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Mail size={18} />
          </div>
          <p className="text-sm text-neutral-600">
            Prefer to talk first? Reach us at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-neutral-900 hover:text-[#ef4d23] transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles size={14} className="text-accent" />
          <span>No setup fees. No long-term contract to try it out.</span>
        </div>
      </form>
    </div>
  );
}
