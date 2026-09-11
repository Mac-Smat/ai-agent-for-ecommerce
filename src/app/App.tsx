import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import DashboardPreview from './components/DashboardPreview';
import IntroducingStockAgent from './components/IntroducingStockAgent';
import Integrations from './components/Integrations';
import ProblemFix from './components/ProblemFix';
import HowItWorks from './components/HowItWorks';
import LiveWidgetDemo from './components/LiveWidgetDemo';
import FeaturesView from './components/FeaturesView';
import PricingView from './components/PricingView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import DocsView from './components/DocsView';
import OnboardingModal from './components/OnboardingModal';
import Footer from './components/Footer';

import '../styles/fonts.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4 font-sans flex flex-col justify-between overflow-x-hidden">
      <div>
        {/* HERO CONTAINER */}
        {activeTab === 'home' && (
          <div className="relative w-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl flex flex-col justify-between">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              // @ts-ignore
              webkit-playsinline="true"
              x5-playsinline="true"
            >
              <source
                src="/images/Create_3D_animation_sequence_202608241537.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Above Video Overlay */}
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />

            {/* Foreground Content Wrapper */}
            <div className="relative z-10 flex flex-col justify-between flex-1 pb-4 sm:pb-8">
              {/* Navbar */}
              <Navbar
                activeTab={activeTab}
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onGetApiKey={handleOpenModal}
              />

              {/* Hero Content (Centered) */}
              <div className="flex flex-col items-center px-4 pt-6 sm:pt-10 md:pt-14 pb-6 sm:pb-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px] font-medium text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-[#ef4d23]" />
                  StockAgent Infrastructure
                </div>

                {/* Headline */}
                <h1
                  className="mt-5 sm:mt-6 max-w-4xl"
                  style={{
                    fontSize: 'clamp(36px, 8vw, 72px)',
                    lineHeight: 1.05,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: '#0b0f1a',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  Let your shoppers ask{' '}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  >
                    anything
                  </span>{' '}
                  <br className="hidden sm:inline" />
                  — and get a real answer.
                </h1>

                {/* Subtitle */}
                <p
                  className="mt-4 sm:mt-6 text-neutral-700 px-2 max-w-2xl"
                  style={{
                    fontSize: 'clamp(13px, 3.5vw, 16px)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  Your customer asks — "Do you have red sneakers in size 42?" — and gets an instant
                  answer pulled straight from your live inventory.{' '}
                  <span className="font-medium text-neutral-900">Not a script. Not a guess.</span>
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <button
                    onClick={handleOpenModal}
                    className="inline-flex items-center gap-3 bg-[#ef4d23] hover:bg-[#d83f17] active:bg-[#c43610] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2.5 text-sm font-medium transition-colors shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4d23]"
                  >
                    Get your API key
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </span>
                  </button>
                  <a
                    href="#how-it-works"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-[#ef4d23] transition-colors"
                  >
                    See how it works
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Dashboard Preview */}
              <DashboardPreview />
            </div>
          </div>
        )}

        {/* NON-HOME NAV HEADER WHEN TAB IS NOT HOME */}
        {activeTab !== 'home' && (
          <div className="mb-4 sm:mb-6">
            <Navbar
              activeTab={activeTab}
              onTabChange={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onGetApiKey={handleOpenModal}
            />
          </div>
        )}

        {/* PAGE CONTENT WHEN ON HOME TAB */}
        {activeTab === 'home' && (
          <>
            {/* Introducing StockAgent Section */}
            <IntroducingStockAgent onGetApiKey={handleOpenModal} />

            {/* Social Proof & Integrations Banner */}
            <Integrations />

            {/* Problem vs Fix Section */}
            <ProblemFix onGetApiKey={handleOpenModal} />

            {/* How It Works Section */}
            <HowItWorks onGetApiKey={handleOpenModal} />

            {/* Live Storefront Assistant Simulator */}
            <LiveWidgetDemo />
          </>
        )}

        {/* FEATURES VIEW */}
        {activeTab === 'features' && (
          <FeaturesView onGetApiKey={handleOpenModal} />
        )}

        {/* PRICING VIEW */}
        {activeTab === 'pricing' && (
          <PricingView onGetApiKey={handleOpenModal} />
        )}

        {/* DOCS VIEW */}
        {activeTab === 'docs' && (
          <DocsView />
        )}

        {/* ABOUT VIEW */}
        {activeTab === 'about' && (
          <AboutView onGetApiKey={handleOpenModal} />
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <ContactView onGetApiKey={handleOpenModal} />
        )}

        {/* Developer Onboarding Modal */}
        <OnboardingModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>

      {/* Footer */}
      <Footer onTabChange={setActiveTab} onGetApiKey={handleOpenModal} />
    </div>
  );
}