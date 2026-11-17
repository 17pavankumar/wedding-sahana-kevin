import React from 'react';
import { Church, Sparkles, Clock, Calendar } from 'lucide-react';
import { GoldCorner } from './GoldDecorations';

const OrderOfEvents = () => {
  return (
    <section id="events" className="events-section py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Single Compact Luxury Wine Event Card */}
            <div className="events-unified-card order-of-events-card p-4 p-md-5 text-center position-relative">
              {/* Ornate Gold Corners */}
              <GoldCorner className="corner-tl" />
              <GoldCorner className="corner-tr" style={{ transform: 'rotate(90deg)' }} />
              <GoldCorner className="corner-bl" style={{ transform: 'rotate(270deg)' }} />
              <GoldCorner className="corner-br" style={{ transform: 'rotate(180deg)' }} />

              {/* Sparkle Icon Halo Badge */}
              <div className="events-icon-badge mx-auto mb-3">
                <Calendar size={20} className="text-gold-champagne" />
              </div>

              {/* Eyebrow */}
              <p className="timeline-eyebrow text-gold-soft text-uppercase tracking-widest mb-1 small">
                CELEBRATION SCHEDULE
              </p>

              {/* Script Title */}
              <h2 className="timeline-script-title gold-shimmer-text mb-2">
                Wedding &amp; Reception Details
              </h2>

              <div className="golden-hairline mx-auto mb-3"></div>

              {/* Date & Venue Chip */}
              <p className="timeline-date-chip text-gold-soft small mb-4">
                Saturday, 12 December 2026 • Eden Farms, Bangalore
              </p>

              {/* Simple & Elegant Schedule: Wedding First, Reception Next */}
              <div className="row g-3 g-md-4 justify-content-center">
                {/* 1. Wedding Ceremony First */}
                <div className="col-12 col-sm-6 col-md-5">
                  <div className="event-schedule-chip p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                      <Church size={16} className="text-gold-champagne" />
                      <span className="event-chip-label text-gold-soft text-uppercase tracking-wider">
                        Wedding Ceremony
                      </span>
                    </div>
                    <div className="event-chip-time text-gold-metallic fw-bold">
                      4:00 PM
                    </div>
                  </div>
                </div>

                {/* 2. Wedding Reception Next */}
                <div className="col-12 col-sm-6 col-md-5">
                  <div className="event-schedule-chip p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                      <Sparkles size={16} className="text-gold-champagne" />
                      <span className="event-chip-label text-gold-soft text-uppercase tracking-wider">
                        Wedding Reception
                      </span>
                    </div>
                    <div className="event-chip-time text-gold-metallic fw-bold">
                      7:00 PM
                    </div>
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

export default OrderOfEvents;
