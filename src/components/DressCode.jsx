import React from 'react';
import { Sparkles } from 'lucide-react';
import { GoldCorner } from './GoldDecorations';

const DressCode = () => {
  return (
    <section id="dress-code" className="dress-code-section py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Minimal Luxury Wine Dress Code Card */}
            <div className="dress-code-card-main p-4 p-md-5 text-center position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Sparkle Icon in Subtle Circular Halo */}
              <div className="dress-sparkle-badge mx-auto mb-3">
                <Sparkles size={20} className="text-gold-champagne" />
              </div>

              {/* Small Spaced-out Eyebrow Label */}
              <p className="dress-eyebrow-minimal text-gold-soft text-uppercase tracking-widest mb-2 small">
                DRESS CODE
              </p>

              {/* Main Heading: Wine Colour Theme */}
              <h2 className="dress-title-minimal text-gold-champagne mb-2">
                Wine Colour Theme
              </h2>

              {/* Clarification: For Wedding Only */}
              <div className="mb-3">
                <span className="dress-occasion-tag text-uppercase fw-semibold">
                  Wedding Only
                </span>
              </div>

              <div className="golden-hairline mx-auto mb-3"></div>

              {/* Description */}
              <p className="dress-subtitle-minimal text-ivory mb-0">
                We encourage our guests to embrace the wine colour palette for the wedding ceremony only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
