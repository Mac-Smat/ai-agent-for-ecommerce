import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab?: 'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact';
  onTabChange?: (tab: 'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact') => void;
  onGetApiKey?: () => void;
}

const flowerLogoSvg = (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Center Circle */}
    <circle cx="16" cy="16" r="3.5" fill="#ef4d23" />
    {/* 8 Petals around (16,16) radius 10 */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * Math.PI) / 4;
      const x = 16 + 10 * Math.cos(angle);
      const y = 16 + 10 * Math.sin(angle);
      return <circle key={i} cx={x} cy={y} r="3.5" fill="#ef4d23" />;
    })}
  </svg>
);

export default function Navbar({ activeTab = 'home', onTabChange, onGetApiKey }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (tab: 'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact') => {
    if (onTabChange) onTabChange(tab);
    setMobileOpen(false);
  };

  const navItems: { id: 'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'docs', label: 'SDK Docs' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'features', label: 'Integrations' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="flex justify-center pt-3 sm:pt-6 px-3 sm:px-4 relative z-40">
      <div className="bg-white/95 backdrop-blur-md rounded-full shadow-sm border border-neutral-200/80 px-3 sm:px-4 py-1.5 sm:py-2 w-full max-w-[760px] relative flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo (left, shrink-0) */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-2 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23] rounded-lg"
          aria-label="StockAgent Home"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">{flowerLogoSvg}</span>
          <span className="font-bold text-neutral-900 text-sm sm:text-base whitespace-nowrap hidden min-[400px]:inline-block">
            StockAgent
          </span>
        </button>

        {/* Desktop Links (hidden md:flex, gap-4 lg:gap-6, 14px) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 text-[14px] font-medium min-w-0" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-1.5 py-1 px-1.5 rounded-md transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23] ${
                  isActive
                    ? 'text-[#ef4d23] font-semibold'
                    : 'text-neutral-800 hover:text-[#ef4d23]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="w-[5px] h-[5px] rounded-full bg-[#ef4d23] inline-block shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto md:ml-0">
          {/* Orange #ef4d23 rounded-full button "Get API Key" */}
          <button
            onClick={onGetApiKey}
            className="bg-[#ef4d23] hover:bg-[#d83f17] active:bg-[#c43610] text-white rounded-full pl-3.5 sm:pl-5 pr-1.5 py-1.5 sm:py-2 text-xs sm:text-[13px] font-medium flex items-center gap-1.5 sm:gap-2 transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23]"
          >
            <span className="whitespace-nowrap">Get API Key</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
          </button>

          {/* Mobile-only Hamburger Menu */}
          <button
            className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Toggle menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileOpen && (
          <>
            {/* Backdrop click outside */}
            <div
              className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-3 z-50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-1 text-sm font-medium" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`w-full text-left py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#ef4d23]/10 text-[#ef4d23] font-semibold'
                          : 'text-neutral-800 hover:bg-neutral-100'
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#ef4d23]" />}
                    </button>
                  );
                })}
                <div className="pt-2 mt-1 border-t border-neutral-100">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      if (onGetApiKey) onGetApiKey();
                    }}
                    className="w-full bg-[#ef4d23] hover:bg-[#d83f17] active:bg-[#c43610] text-white rounded-xl py-2.5 px-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Get API Key</span>
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </nav>
            </div>
          </>
        )}

      </div>
    </header>
  );
}