import { useState } from 'react';
import { ChevronDown, TrendingDown, TrendingUp, X } from 'lucide-react';
import Gauge from './Gauge';

export default function DashboardPreview() {
  const [card1Active, setCard1Active] = useState<'impressions' | 'clicks'>('impressions');
  const [card3Active, setCard3Active] = useState<'clicks' | 'starts'>('clicks');

  return (
    <div className="px-3 sm:px-4 w-full">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch">
          
          {/* Card 1 — Clicks */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-[13px] font-medium mb-3">
                <span className="text-[#ef4d23] font-semibold">Clicks</span>
                <span className="text-neutral-500">This Month</span>
              </div>

              {/* Big Number & Pill */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[28px] font-semibold text-neutral-900 leading-none">6,896</span>
                <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
                  <TrendingDown size={12} />
                  -3,382 (33%)
                </span>
              </div>

              <p className="text-[11px] text-neutral-400 mb-4">Compared to yesterday</p>

              {/* Label & Gauge */}
              <p className="text-[12px] font-medium text-neutral-700 text-center mb-1">Month Target achieved</p>
              <Gauge value={92} color="#ef4d23" showLabels={true} min="389K" max="425K" />
            </div>

            {/* Toggle Pill */}
            <div className="mt-4 bg-neutral-100 rounded-full p-1 flex items-center text-xs font-medium">
              <button
                onClick={() => setCard1Active('impressions')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all ${
                  card1Active === 'impressions'
                    ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Impressions
              </button>
              <button
                onClick={() => setCard1Active('clicks')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all ${
                  card1Active === 'clicks'
                    ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Clicks
              </button>
            </div>
          </div>

          {/* Card 2 — Form */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex flex-col justify-between gap-3 text-left">
            <div className="space-y-3">
              {/* Dropdown 1 */}
              <div>
                <label className="block text-[12px] font-medium text-neutral-700 mb-1">Show figures for</label>
                <div className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-xs font-medium text-neutral-800 bg-white">
                  <span>This month</span>
                  <ChevronDown size={14} className="text-neutral-500" />
                </div>
              </div>

              {/* Dropdown 2 */}
              <div>
                <label className="block text-[12px] font-medium text-neutral-700 mb-1">Compare period by</label>
                <div className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-xs font-medium text-neutral-800 bg-white">
                  <span>Month-to-date (MTD)</span>
                  <ChevronDown size={14} className="text-neutral-500" />
                </div>
              </div>

              {/* Input 1 */}
              <div>
                <label className="block text-[12px] font-medium text-neutral-700 mb-1">Ste targets (This month)</label>
                <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-xs font-medium bg-white">
                  <span className="text-neutral-400 mr-1.5">#</span>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full focus:outline-none text-neutral-800 bg-transparent font-medium"
                  />
                </div>
              </div>

              {/* Input 2 */}
              <div>
                <label className="block text-[12px] font-medium text-neutral-700 mb-1">Ste targets (This year)</label>
                <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-xs font-medium bg-white">
                  <span className="text-neutral-400 mr-1.5">#</span>
                  <input
                    type="number"
                    defaultValue={100}
                    className="w-full focus:outline-none text-neutral-800 bg-transparent font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 flex items-center gap-3 text-xs">
              <button className="bg-[#ef4d23] hover:bg-[#d83f17] text-white font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
                Save
              </button>
              <button className="text-neutral-600 hover:text-neutral-900 underline font-medium">
                Cancel
              </button>
              <button className="ml-auto text-neutral-400 hover:text-neutral-700 p-1">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Card 3 — Video Starts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-[13px] font-medium mb-3">
                <span className="text-[#ef4d23] font-semibold">Video Starts</span>
                <span className="text-neutral-500">today</span>
              </div>

              {/* Big Number & Pill */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[28px] font-semibold text-neutral-900 leading-none">0</span>
                <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px] font-medium">
                  <TrendingUp size={12} />
                  0
                </span>
              </div>

              <p className="text-[11px] text-neutral-400 mb-4">Compared to yesterday</p>

              {/* Gauge */}
              <Gauge value={68} color="#9ca3af" showLabels={false} />
            </div>

            {/* Toggle Pill */}
            <div className="mt-4 bg-neutral-100 rounded-full p-1 flex items-center text-xs font-medium">
              <button
                onClick={() => setCard3Active('clicks')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all ${
                  card3Active === 'clicks'
                    ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Video Clicks
              </button>
              <button
                onClick={() => setCard3Active('starts')}
                className={`flex-1 py-1.5 rounded-full text-center transition-all ${
                  card3Active === 'starts'
                    ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Video Starts
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}