import React from 'react';
import { FloralDivider } from './GoldDecorations';

const FamilyDetails = () => {
  return (
    <section id="family" className="family-details-section py-3 py-md-4 position-relative">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="section-title text-gold-champagne mb-1" style={{ fontSize: '1.6rem' }}>
            Family Blessings
          </h2>
          <p className="section-subtitle text-gold-soft small mb-2">Rooted in love and faith</p>
          <div className="golden-hairline mx-auto"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="family-card p-3 p-sm-4 position-relative">
              <div className="row align-items-center g-3 g-md-4">
                {/* Groom's Family Column */}
                <div className="col-12 col-md-5 text-center text-md-end groom-family-col">
                  <div className="family-person-badge">GROOM</div>
                  <h3 className="family-person-name text-gold-metallic mb-1">
                    KEVIN
                  </h3>
                  <div className="family-parents-text text-ivory mb-1 small">
                    <span className="text-gold-soft d-block text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Son of</span>
                    <strong className="d-block">George Thomas</strong>
                    <span className="text-ivory-dim">&amp; (Late) Jessy George Thomas</span>
                  </div>
                  <div className="family-address text-ivory-muted small" style={{ fontSize: '0.8rem' }}>
                    <span>Petra Shalom, Hennur, Bangalore</span>
                  </div>
                </div>

                {/* Central Emblem */}
                <div className="col-12 col-md-2 text-center my-1 my-md-0 d-flex flex-column align-items-center justify-content-center">
                  <div className="family-divider-vertical d-none d-md-block"></div>
                  <div className="family-crest-circle my-1 p-1">
                    <img
                      src="/images/sk_logo_circle.png"
                      alt="S&amp;K Monogram"
                      width="42"
                      height="42"
                      style={{ borderRadius: '50%' }}
                    />
                  </div>
                  <div className="family-divider-vertical d-none d-md-block"></div>
                  <div className="family-divider-horizontal d-md-none w-50 my-2"></div>
                </div>

                {/* Bride's Family Column */}
                <div className="col-12 col-md-5 text-center text-md-start bride-family-col">
                  <div className="family-person-badge">BRIDE</div>
                  <h3 className="family-person-name text-gold-metallic mb-1">
                    SAHANA
                  </h3>
                  <div className="family-parents-text text-ivory mb-1 small">
                    <span className="text-gold-soft d-block text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>Daughter of</span>
                    <strong className="d-block">Triveni Bhaskar</strong>
                    <span className="text-ivory-dim">&amp; (Late) Balappa Bhaskar</span>
                  </div>
                  <div className="family-address text-ivory-muted small" style={{ fontSize: '0.8rem' }}>
                    <span>Banaswadi, Bangalore</span>
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

export default FamilyDetails;
