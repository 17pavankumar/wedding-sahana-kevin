import React, { useState, useEffect } from 'react';
import GoldParticles from './components/GoldParticles';
import EnvelopeOpening from './components/EnvelopeOpening';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import BibleVerse from './components/BibleVerse';
import Countdown from './components/Countdown';
import OrderOfEvents from './components/OrderOfEvents';
import VenueSection from './components/VenueSection';
import DressCode from './components/DressCode';
import ThankYouSection from './components/ThankYouSection';
import { ArrowUp } from 'lucide-react';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Prevent unwanted URL hash jumping on page load and lock scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  const handleStartReveal = () => {
    setIsRevealed(true);
  };

  const handleEnvelopeComplete = () => {
    setEnvelopeOpened(true);
    setIsRevealed(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="wedding-app-root">
      {/* Golden Floating Stardust Particles */}
      <GoldParticles />

      {/* Section 01: Full-Screen 3D Animated Luxury Envelope */}
      {!envelopeOpened && (
        <EnvelopeOpening
          onStartReveal={handleStartReveal}
          onOpenComplete={handleEnvelopeComplete}
        />
      )}

      {/* Main Luxury Wedding Website Content */}
      <main className="wedding-main-content">
        {/* Navigation Bar */}
        <Navbar />

        {/* Section 02: Main Wedding Invitation Cover */}
        <HeroCover isRevealed={isRevealed} />

        {/* Section 03: Bible Verse & Welcome Message */}
        <BibleVerse />

        {/* Section 04: Order of Events / Celebration Schedule */}
        <OrderOfEvents />

        {/* Section 05: Venue & Google Maps */}
        <VenueSection />

        {/* Section 06: Wedding Countdown & Calendar */}
        <Countdown />

        {/* Section 07: Luxury Dress Code */}
        <DressCode />

        {/* Section 08: Final Thank You Section */}
        <ThankYouSection />

        {/* Footer */}
        <footer className="wedding-footer py-4 text-center">
          <div className="container">
            <p className="footer-credits text-wine-accent small mb-0">
              Sahana &amp; Kevin • 12 December 2026 • Eden Farms Bangalore
            </p>
          </div>
        </footer>
      </main>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn-scroll-top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} color="#D4AF62" />
        </button>
      )}
    </div>
  );
}

export default App;
