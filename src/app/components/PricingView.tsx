import { useState, useEffect } from 'react';
import { Check, HelpCircle, Star } from 'lucide-react';

interface PricingViewProps {
  onGetApiKey: () => void;
}

export default function PricingView({ onGetApiKey }: PricingViewProps) {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      subtitle: 'Testing the waters',
      priceMonthly: '$0',
      priceAnnual: '$0',
      dataMonthly: '$0',
      dataAnnual: '$0',
      period: 'forever free',
      dataPeriodMo: 'free',
      dataPeriodYr: 'free',
      featured: false,
      badge: 'Free Tier',
      features: [
        '1 connected store / inventory source',
        'Up to 100 monthly conversations',
        'Live Google Sheet inventory sync (60s)',
        'Embeddable chat widget & REST API',
        'Text & photo search grounding',
        'Community Discord & Github support',
      ],
      buttonText: 'Get Started Free',
    },
    {
      name: 'Starter',
      subtitle: 'Simple, monthly — for growing stores',
      priceMonthly: '$29',
      priceAnnual: '$23',
      dataMonthly: '$29',
      dataAnnual: '$23',
      period: '/ month',
      dataPeriodMo: '/mo',
      dataPeriodYr: '/yr',
      featured: false,
      badge: 'Simple',
      features: [
        'Up to 3 connected stores',
        'Up to 2,500 monthly conversations',
        'Live Google Sheet inventory sync (60s)',
        'Custom widget styling & branding',
        'Analytics & conversation logs',
        'Email & developer support',
      ],
      buttonText: 'Start Starter Trial',
    },
    {
      name: 'Growth',
      subtitle: 'Live stores that need this working',
      priceMonthly: '$49',
      priceAnnual: '$39',
      dataMonthly: '$49',
      dataAnnual: '$39',
      period: '/ month',
      dataPeriodMo: '/mo',
      dataPeriodYr: '/yr',
      featured: true,
      badge: 'Most Popular',
      features: [
        'Up to 5 connected stores',
        'Up to 10,000 monthly conversations',
        'Priority live sync (30s polling)',
        'Custom widget styling & branding',
        'Analytics & conversation logs',
        'Priority email & developer support',
        'Raw REST API access for headless apps',
      ],
      buttonText: 'Start Growth Trial',
    },
    {
      name: 'Scale',
      subtitle: 'Multiple stores or high traffic',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      dataMonthly: 'Custom',
      dataAnnual: 'Custom',
      period: 'tailored pricing',
      dataPeriodMo: '',
      dataPeriodYr: '',
      featured: false,
      badge: 'Enterprise',
      features: [
        'Unlimited connected stores',
        'Custom monthly conversation volume',
        'Instant webhook sync & custom connectors',
        'Dedicated SLA & support engineer',
        'Multi-tenant enterprise access controls',
        'Custom AI model fine-tuning & prompts',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  // Scroll-triggered reveal for header, cards, and footer note
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const switchAnnual = annual
    ? 'translate-x-8'
    : 'translate-x-0';

  return (
    <section className="isolate overflow-hidden pt-24 pb-24 relative">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(0,0,0,0.02),transparent_60%)]" />

      <div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        {/* Header */}
        <div className="text-center animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          <h2
            className="sm:text-5xl text-4xl font-medium text-neutral-900 tracking-tight"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Pricing Plans
          </h2>

          {/* Billing toggle */}
          <div className="flex mt-6 gap-x-4 gap-y-4 items-center justify-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm text-neutral-500">Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-neutral-200/80 p-1 ring-1 ring-neutral-200 transition"
            >
              <span
                className={`inline-flex h-6 w-6 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition will-change-transform ${switchAnnual}`}
              />
            </button>
            <span className="text-sm text-neutral-500">Annual
              <span className="ml-2 inline-flex items-center rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-600 ring-1 ring-amber-300/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 lg:grid-cols-4 mt-10 gap-x-6 gap-y-6">
        {plans.map((plan, idx) => {
          const price = annual ? (plan.dataAnnual ?? plan.priceAnnual) : (plan.dataMonthly ?? plan.priceMonthly);
          const periodLabel = annual ? (plan.dataPeriodYr ?? plan.period) : (plan.dataPeriodMo ?? plan.period);

          if (plan.featured) {
            return (
              <div
                key={idx}
                className="animate-on-scroll border-neutral-200 border ring-[#ef4d23]/20 ring-2 rounded-3xl pt-2 pr-2 pb-2 pl-2 relative shadow-xl scale-[1.02] z-10 backdrop-blur-xl"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-white">
                  <div className="absolute inset-0">
                    {/* Replace with real image: <img src="..." className="h-48 w-full rounded-t-2xl object-cover opacity-60" /> */}
                    <div className="h-48 w-full rounded-t-2xl bg-gradient-to-br from-[#ef4d23]/20 via-neutral-200 to-neutral-100" />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(239,77,35,0.12),transparent_60%)]" />
                  </div>
                  <div className="relative p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">{plan.name}</div>
                        <div className="mt-2 flex items-end gap-2">
                          <div className="text-4xl font-medium tracking-tight text-neutral-900">{price}</div>
                          <div className="text-sm text-neutral-500">{periodLabel}</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-600 ring-1 ring-amber-300/25">
                        <Star size={14} /> {plan.badge}
                      </span>
                    </div>
                    <button
                      onClick={onGetApiKey}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ef4d23] px-4 py-3 text-sm font-medium tracking-tight text-white shadow-[0_10px_30px_rgba(239,77,35,0.25)] hover:bg-[#d83f17]"
                    >
                      {plan.buttonText}
                    </button>
                    <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={16} className="shrink-0 mt-0.5 text-[#ef4d23]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              className="animate-on-scroll border-neutral-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl shadow-sm hover:border-neutral-300 transition"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">{plan.name}</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-4xl font-medium tracking-tight text-neutral-900">{price}</div>
                    <div className="text-sm text-neutral-500">{periodLabel}</div>
                  </div>
                </div>
              </div>
              <button
                onClick={onGetApiKey}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium tracking-tight transition-colors ${
                  plan.name === 'Free'
                    ? 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                {plan.buttonText}
              </button>
              <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className="shrink-0 mt-0.5 text-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="animate-on-scroll text-xs text-neutral-500 text-center mt-6" style={{ animationDelay: '0.6s' }}>
        All plans include 14-day free trial. No setup fees.
      </p>

      {/* FAQ Banner */}
      <div className="bg-neutral-100 rounded-3xl p-8 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-2xl border border-neutral-200 shrink-0 text-accent">
            <HelpCircle size={24} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-neutral-900">Have questions about API limits or custom enterprise plans?</h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Reach out to our developer support team at <span className="font-semibold text-neutral-900">support@stockagent.ai</span>
            </p>
          </div>
        </div>

        <button
          onClick={onGetApiKey}
          className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors"
        >
          Contact Us
        </button>
      </div>

      </div>
    </section>
  );
}
