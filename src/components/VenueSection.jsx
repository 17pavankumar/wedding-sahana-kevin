import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { GoldCorner, FloralDivider } from './GoldDecorations';

const VenueSection = () => {
  const [copied, setCopied] = useState(false);
  const [activePhoto, setActivePhoto] = useState('lawn'); // 'lawn' | 'walkway'

  const venueTitle = "EDEN FARMS";
  const venueAddress = "Dasanayakanahalli, Hennur-Bagalur Road, Bangalore, Karnataka";
  const fullAddress = `${venueTitle}, ${venueAddress}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="venue-section py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Compact Luxury Wine Card */}
            <div className="venue-card p-3 p-sm-4 position-relative">
              {/* Gold corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Compact Header */}
              <div className="text-center mb-3">
                <p className="timeline-eyebrow text-gold-soft text-uppercase tracking-wider mb-1 small">
                  LOCATION &amp; DIRECTIONS
                </p>
                <h2 className="timeline-script-title gold-shimmer-text mb-1">
                  Celebrate at Eden Farms
                </h2>
                <div className="golden-hairline mx-auto mb-2"></div>
              </div>

              <div className="row g-3 g-md-4 align-items-center">
                {/* Left: Compact Venue Photo with Switcher */}
                <div className="col-12 col-md-5">
                  <div className="venue-image-frame position-relative overflow-hidden">
                    <img
                      src={activePhoto === 'lawn' ? '/images/venue.jpg' : '/images/venue_walkway.jpg'}
                      alt="Eden Farms Bangalore"
                      className="venue-img"
                    />
                    <div className="venue-image-gold-border"></div>
                    
                    {/* Compact View Switcher */}
                    <div className="venue-photo-toggle-pill position-absolute top-0 end-0 m-2 d-flex gap-1">
                      <button
                        onClick={() => setActivePhoto('lawn')}
                        className={`btn-photo-pill ${activePhoto === 'lawn' ? 'active' : ''}`}
                        title="Ceremony Lawn"
                      >
                        Lawn
                      </button>
                      <button
                        onClick={() => setActivePhoto('walkway')}
                        className={`btn-photo-pill ${activePhoto === 'walkway' ? 'active' : ''}`}
                        title="Floral Walkway"
                      >
                        Walkway
                      </button>
                    </div>

                    <div className="venue-image-caption position-absolute bottom-0 start-0 w-100 p-2 text-center">
                      <span className="caption-text text-gold-champagne small fw-semibold">
                        {activePhoto === 'lawn' ? 'Eden Farms • Ceremony Lawn' : 'Eden Farms • Floral Walkway'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Venue Info & Timings */}
                <div className="col-12 col-md-7 text-center text-md-start">
                  <div className="venue-info-badge d-inline-flex align-items-center gap-1 py-1 px-2 mb-2">
                    <MapPin size={13} className="text-gold-champagne" />
                    <span className="text-gold-soft text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                      BANGALORE, KARNATAKA
                    </span>
                  </div>

                  <h3 className="venue-name-display text-gold-metallic mb-1">
                    {venueTitle}
                  </h3>

                  <p className="venue-address-display text-ivory mb-3 small leading-normal">
                    Dasanayakanahalli, Hennur-Bagalur Road, Bangalore.
                  </p>

                  {/* Action Buttons */}
                  <div className="venue-actions d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold-solid btn-sm d-inline-flex align-items-center gap-1"
                    >
                      <Navigation size={14} />
                      <span>DIRECTIONS</span>
                      <ExternalLink size={12} />
                    </a>

                    <button
                      onClick={handleCopyAddress}
                      className="btn btn-gold-outline btn-sm d-inline-flex align-items-center gap-1"
                      title="Copy full venue address"
                    >
                      {copied ? <Check size={14} color="#D4AF62" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Compact Embedded Map */}
              <div className="venue-map-container mt-3 pt-2">
                <div className="map-frame-wrapper position-relative">
                  <iframe
                    title="Eden Farms Location Map"
                    src={embedMapsUrl}
                    width="100%"
                    height="190"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="map-floating-overlay d-flex justify-content-between align-items-center p-1 px-3">
                    <span className="text-ivory small" style={{ fontSize: '0.78rem' }}>Eden Farms • Hennur-Bagalur Rd</span>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-champagne small fw-semibold text-decoration-none"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
