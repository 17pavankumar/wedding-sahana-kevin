import React, { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const EnvelopeOpening = ({ onStartReveal, onOpenComplete }) => {
  // Stages: 'initial' | 'unfolding' | 'emerging' | 'blooming' | 'revealing' | 'completed'
  const [stage, setStage] = useState('initial');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef(null);

  // Lock body scroll while envelope is active so background never scrolls
  useEffect(() => {
    if (stage !== 'completed') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [stage]);

  // Subtle physical 3D mouse parallax on desktop (only while initial)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (stage !== 'initial' || window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setTilt({
        rotateX: -y * 4,
        rotateY: x * 4
      });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [stage]);

  const handleOpenEnvelope = (e) => {
    if (e) e.stopPropagation();
    if (stage !== 'initial') return;
    setTilt({ rotateX: 0, rotateY: 0 });

    // Step 0: Golden stardust confetti burst from wax seal
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#FFE5A3', '#D4AF62', '#FFFDF0', '#C5A04D', '#F3E5AB'],
        ticks: 85,
        gravity: 0.8,
        scalar: 0.75,
        shapes: ['circle'],
        disableForReducedMotion: true
      });
    } catch (err) {
      // Graceful fallback
    }

    // Step 1: Flap swings 180° open in 3D (0.0s -> 0.55s)
    setStage('unfolding');

    // Step 2: Card smoothly glides UP out of the envelope pocket (0.55s -> 1.8s)
    setTimeout(() => {
      setStage('emerging');
    }, 550);

    // Step 3: Ethereal golden light emerges and blooms slowly for 1.7s (1.8s -> 3.5s)
    setTimeout(() => {
      setStage('blooming');
    }, 1800);

    // Step 4: Golden light softly dissolves + Golden Stardust Cascade (Feature #3)
    setTimeout(() => {
      setStage('revealing');
      if (onStartReveal) onStartReveal();

      // Feature #3: Ethereal shower of micro golden stardust drifting gently across the reveal
      try {
        confetti({
          particleCount: 45,
          angle: 90,
          spread: 120,
          origin: { y: -0.05, x: 0.5 },
          colors: ['#FFE5A3', '#D4AF62', '#FFFDF0', '#F3E5AB', '#E8C574'],
          ticks: 240,
          gravity: 0.38,
          scalar: 0.55,
          drift: 0.08,
          shapes: ['circle'],
          disableForReducedMotion: true
        });
      } catch (err) {
        // Graceful fallback
      }
    }, 3500);

    // Step 5: Seamless transition into website
    setTimeout(() => {
      setStage('completed');
      if (onOpenComplete) onOpenComplete();
    }, 4250);
  };

  if (stage === 'completed') {
    return null;
  }

  const isOpened = stage !== 'initial';
  const isCardEmerged = stage === 'emerging' || stage === 'blooming' || stage === 'revealing';

  return (
    <div
      className={`luxury-envelope-overlay stage-${stage}`}
      onClick={handleOpenEnvelope}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenEnvelope();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Click to open luxury wedding invitation"
    >
      {/* Ambient Radial Golden Halo */}
      <div className="envelope-ambient-halo"></div>

      {/* Luminous Golden Bloom Screen for Seamless Crossfade */}
      <div className={`golden-bloom-screen ${(stage === 'blooming' || stage === 'revealing') ? 'bloom-active' : ''}`}></div>

      <div className="envelope-scene-wrapper" ref={containerRef}>
        {/* Header Invitation Tagline */}
        <div className={`envelope-hero-header text-center ${isOpened ? 'fade-away' : ''}`}>
          <div className="hero-monogram-label">S &amp; K</div>
          <p className="hero-invite-subtitle">YOU ARE CORDIALLY INVITED</p>
          <div className="hero-gold-hairline">
            <span className="diamond-bullet">✦</span>
          </div>
        </div>

        {/* 3D Envelope Master Box */}
        <div
          className={`envelope-master-box ${isCardEmerged ? 'box-lowered' : ''}`}
          style={{
            transform: isCardEmerged
              ? 'translateY(48px)'
              : `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
          }}
        >
          {/* Layer 1: Envelope Interior Back Plate */}
          <div className="envelope-back-plate">
            <div className="envelope-back-pattern"></div>
          </div>

          {/* Layer 1.5: Divine Rays & Behind-Card Golden Aura (Feature #1) */}
          <div className={`envelope-behind-rays ${isCardEmerged ? 'rays-active' : ''} ${stage === 'blooming' || stage === 'revealing' ? 'rays-blooming' : ''}`}>
            <div className="card-behind-glow-core"></div>
            <div className="ray-beam ray-beam-1"></div>
            <div className="ray-beam ray-beam-2"></div>
            <div className="ray-beam ray-beam-3"></div>
            <div className="ray-beam ray-beam-4"></div>
          </div>

          {/* Layer 2: The Luxury Invitation Card (Slides UP Out of Pocket) */}
          <div className={`envelope-sliding-card ${isCardEmerged ? 'card-emerged' : ''}`}>
            <div className="sliding-card-gold-border">
              {/* Corner accents */}
              <div className="sliding-corner corner-tl"></div>
              <div className="sliding-corner corner-tr"></div>
              <div className="sliding-corner corner-bl"></div>
              <div className="sliding-corner corner-br"></div>

              {/* Card Content */}
              <div className="sliding-card-content text-center">
                <div className="sliding-card-crest mx-auto">
                  <img
                    src="/images/sk_logo_circle.png"
                    alt="Sahana &amp; Kevin Monogram Crest"
                    className="sliding-crest-img"
                  />
                </div>
                <p className="sliding-families-label">TOGETHER WITH THEIR FAMILIES</p>
                <h2 className="sliding-names-script">Sahana &amp; Kevin</h2>
                <div className="sliding-gold-divider">✦</div>
                <p className="sliding-invite-label">INVITE YOU TO CELEBRATE THEIR WEDDING</p>
                <div className="sliding-date-badge">SATURDAY • 12 DECEMBER 2026</div>
                <p className="sliding-venue-label">EDEN FARMS • BANGALORE</p>
              </div>
            </div>
          </div>

          {/* Layer 3: Front Envelope Pocket (Left, Right & Bottom Folds + Vines) */}
          <div className="envelope-pocket-front">
            {/* SVG Pocket Geometry (Left, Right, Bottom Triangles & Bevels) */}
            <svg viewBox="0 0 320 440" className="pocket-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pocketLeftGrad" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#4A1028" />
                  <stop offset="60%" stopColor="#35081C" />
                  <stop offset="100%" stopColor="#220412" />
                </linearGradient>
                <linearGradient id="pocketRightGrad" x1="100%" y1="0%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#4A1028" />
                  <stop offset="60%" stopColor="#35081C" />
                  <stop offset="100%" stopColor="#220412" />
                </linearGradient>
                <linearGradient id="pocketBottomGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#55142E" />
                  <stop offset="55%" stopColor="#3E0B20" />
                  <stop offset="100%" stopColor="#2A0516" />
                </linearGradient>
                <linearGradient id="goldBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#D4AF62" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8A6B2D" stopOpacity="0.35" />
                </linearGradient>
                <filter id="bottomPocketShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#0C0106" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Left Side Fold */}
              <path d="M 0 0 L 0 440 L 160 220 Z" fill="url(#pocketLeftGrad)" />
              <line x1="0" y1="440" x2="160" y2="220" stroke="url(#goldBevelGrad)" strokeWidth="1" />

              {/* Right Side Fold */}
              <path d="M 320 0 L 320 440 L 160 220 Z" fill="url(#pocketRightGrad)" />
              <line x1="320" y1="440" x2="160" y2="220" stroke="url(#goldBevelGrad)" strokeWidth="1" />

              {/* Bottom Triangle Fold */}
              <g filter="url(#bottomPocketShadow)">
                <path d="M 0 440 L 320 440 L 160 216 Z" fill="url(#pocketBottomGrad)" />
                <line x1="0" y1="440" x2="160" y2="216" stroke="url(#goldBevelGrad)" strokeWidth="1.3" />
                <line x1="320" y1="440" x2="160" y2="216" stroke="url(#goldBevelGrad)" strokeWidth="1.3" />
              </g>
            </svg>

            {/* Elegant Botanical Golden Vines on Left & Right Folds */}
            <img
              src="/images/envelope_floral_left.svg"
              alt=""
              className="envelope-floral-vine floral-left"
            />
            <img
              src="/images/envelope_floral_right.svg"
              alt=""
              className="envelope-floral-vine floral-right"
            />
          </div>

          {/* Layer 4: 3D Top Flap (Points down when closed, flips 180° up on tap) */}
          <div className={`envelope-top-flap ${isOpened ? 'flap-opened' : ''}`}>
            <svg viewBox="0 0 320 220" className="flap-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="topFlapVelvetGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#681B3C" />
                  <stop offset="45%" stopColor="#4A1028" />
                  <stop offset="100%" stopColor="#300719" />
                </linearGradient>
                <linearGradient id="topFlapBevel" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#D4AF62" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8A6B2D" stopOpacity="0.4" />
                </linearGradient>
                <filter id="topFlapDropShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0A0105" floodOpacity="0.8" />
                </filter>
              </defs>
              <g filter="url(#topFlapDropShadow)">
                <path d="M 0 0 L 320 0 L 160 220 Z" fill="url(#topFlapVelvetGrad)" />
                <line x1="0" y1="0" x2="160" y2="220" stroke="url(#topFlapBevel)" strokeWidth="1.4" />
                <line x1="320" y1="0" x2="160" y2="220" stroke="url(#topFlapBevel)" strokeWidth="1.4" />
                <path
                  d="M 16 8 L 160 206 L 304 8"
                  stroke="#D4AF62"
                  strokeWidth="0.8"
                  strokeOpacity="0.45"
                  fill="none"
                />
                <circle cx="160" cy="220" r="2.5" fill="#FFFDF0" />
              </g>
            </svg>
          </div>

          {/* Layer 5: Royal Wax Seal Medallion (Breaks and dissolves on tap) */}
          <div className={`envelope-wax-seal-anchor ${isOpened ? 'seal-break' : ''}`}>
            <div className="seal-glow-halo"></div>
            <div className="seal-medallion-badge">
              <img
                src="/images/sk_wax_seal.png"
                alt="Sahana &amp; Kevin Royal Wax Seal"
                className="wax-seal-img"
              />
            </div>
          </div>
        </div>

        {/* Footer Tap Action Pill - Explicit Button */}
        <div className={`envelope-hero-footer text-center ${isOpened ? 'fade-away' : ''}`}>
          <button
            type="button"
            className="luxury-tap-pill"
            onClick={handleOpenEnvelope}
            aria-label="Open invitation envelope"
          >
            <span className="gold-glow-dot"></span>
            <span className="tap-pill-text">TAP TO OPEN</span>
            <Sparkles size={14} className="tap-pill-sparkle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeOpening;
