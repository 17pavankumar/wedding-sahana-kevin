import React from 'react';
import { GoldCorner } from './GoldDecorations';

const ThankYouSection = () => {
  return (
    <section id="thank-you" className="thank-you-section py-2 py-md-3 position-relative text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="final-closing-card p-4 p-sm-5 position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Medium Elegant SK Monogram */}
              <div className="closing-monogram-glow mx-auto mb-3">
                <div className="monogram-official-logo-wrap">
                  <img
                    src="/images/sk_logo_circle.png"
                    alt="Sahana &amp; Kevin Official Wedding Logo"
                    className="monogram-official-logo-img"
                  />
                </div>
              </div>

              <p className="closing-eyebrow text-gold-soft text-uppercase tracking-wider mb-1 small" style={{ fontSize: '0.75rem' }}>
                WITH LOVE AND GRATITUDE
              </p>

              <h3 className="closing-main-text text-gold-champagne mb-2" style={{ fontSize: '1.25rem' }}>
                We Look Forward to Celebrating With You!
              </h3>

              <div className="golden-hairline mx-auto mb-2"></div>

              <div className="closing-couple-names gold-shimmer-text my-2 my-md-3">
                Sahana &amp; Kevin
              </div>

              <div className="closing-date text-gold-soft fw-semibold tracking-wider mb-3 small">
                12 . 12 . 2026 • EDEN FARMS
              </div>

              <p className="blessing-footer text-ivory-dim small mt-3 mb-0" style={{ fontSize: '0.78rem' }}>
                &ldquo;Love never fails.&rdquo; • 1 Corinthians 13:8
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
