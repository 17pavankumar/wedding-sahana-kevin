import React from 'react';

// Ornate Gold Corner Filigree
export const GoldCorner = ({ className = '', style = {} }) => (
  <svg
    viewBox="0 0 100 100"
    className={`gold-corner ${className}`}
    style={{ width: '48px', height: '48px', ...style }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 95V25C5 13.9543 13.9543 5 25 5H95"
      stroke="url(#goldGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M15 95V30C15 21.7157 21.7157 15 30 15H95"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <circle cx="25" cy="25" r="4" fill="url(#goldGrad)" />
    <path
      d="M25 5C25 16.0457 16.0457 25 5 25"
      stroke="url(#goldGrad)"
      strokeWidth="1.5"
    />
    <circle cx="5" cy="5" r="3" fill="url(#goldGrad)" />
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7E8" />
        <stop offset="35%" stopColor="#D4AF62" />
        <stop offset="70%" stopColor="#C5A04D" />
        <stop offset="100%" stopColor="#8A6B2D" />
      </linearGradient>
    </defs>
  </svg>
);

// Luxury Floral Divider
export const FloralDivider = ({ className = '', style = {} }) => (
  <div className={`floral-divider-container my-3 ${className}`} style={style}>
    <svg
      viewBox="0 0 400 36"
      className="floral-divider-svg w-100"
      style={{ maxWidth: '320px', height: '28px', display: 'block', margin: '0 auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 18H160M240 18H380"
        stroke="url(#goldDivGrad)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="80" cy="18" r="2" fill="#D4AF62" />
      <circle cx="320" cy="18" r="2" fill="#D4AF62" />
      {/* Center Rose / Floral Ornament */}
      <g transform="translate(182, 0)">
        <path
          d="M18 18C18 10 26 10 26 18C26 26 18 26 18 18Z"
          fill="url(#goldDivGrad)"
          opacity="0.8"
        />
        <path
          d="M18 18C18 13 10 13 10 18C10 23 18 23 18 18Z"
          fill="url(#goldDivGrad)"
          opacity="0.8"
        />
        <path
          d="M18 18C13 18 13 26 18 26C23 26 23 18 18 18Z"
          fill="url(#goldDivGrad)"
          opacity="0.8"
        />
        <path
          d="M18 18C13 18 13 10 18 10C23 10 23 18 18 18Z"
          fill="url(#goldDivGrad)"
          opacity="0.8"
        />
        <circle cx="18" cy="18" r="3.5" fill="#FFF7E8" />
        {/* Subtle leaves */}
        <path
          d="M5 18C-5 13 0 5 8 13"
          stroke="url(#goldDivGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M31 18C41 13 36 5 28 13"
          stroke="url(#goldDivGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient id="goldDivGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A1028" stopOpacity="0" />
          <stop offset="20%" stopColor="#D4AF62" />
          <stop offset="50%" stopColor="#FFF7E8" />
          <stop offset="80%" stopColor="#D4AF62" />
          <stop offset="100%" stopColor="#4A1028" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// KS Wax Seal Component (Realistic 3D wax seal with seal rim, KS monogram)
export const WaxSeal = ({ size = 110, onClick, animated = true, className = '', label = null }) => (
  <div
    className={`wax-seal-wrapper ${animated ? 'wax-seal-pulse' : ''} ${className}`}
    onClick={onClick}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      cursor: onClick ? 'pointer' : 'default',
      position: 'relative',
      userSelect: 'none'
    }}
  >
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className="wax-seal-svg"
      style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.65)) drop-shadow(0 0 15px rgba(212,175,98,0.35))' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="waxBase" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#8A2447" />
          <stop offset="35%" stopColor="#641B38" />
          <stop offset="70%" stopColor="#4A1028" />
          <stop offset="100%" stopColor="#250614" />
        </radialGradient>
        <radialGradient id="goldRim" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF7E8" />
          <stop offset="40%" stopColor="#D4AF62" />
          <stop offset="75%" stopColor="#C5A04D" />
          <stop offset="100%" stopColor="#7A5818" />
        </radialGradient>
        <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF62" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4A1028" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Irregular Organic Wax Seal Outer Rim */}
      <path
        d="M70 6
           C86 5, 98 12, 108 20
           C120 30, 132 44, 134 60
           C136 78, 126 94, 118 106
           C108 120, 94 132, 76 134
           C58 136, 42 128, 30 118
           C16 106, 6 92, 5 74
           C4 56, 14 40, 24 28
           C36 14, 52 7, 70 6 Z"
        fill="url(#waxBase)"
        stroke="url(#goldRim)"
        strokeWidth="2.5"
      />

      {/* Wax inner depression */}
      <circle
        cx="70"
        cy="70"
        r="48"
        fill="url(#waxBase)"
        stroke="url(#goldRim)"
        strokeWidth="1.8"
        strokeOpacity="0.85"
      />

      {/* Dotted Gold Inner Circle */}
      <circle
        cx="70"
        cy="70"
        r="42"
        fill="none"
        stroke="url(#goldRim)"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeOpacity="0.75"
      />

      {/* Subtle Laurel / Foliage in seal */}
      <path
        d="M44 80 C40 68, 42 56, 50 48"
        stroke="url(#goldRim)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M96 80 C100 68, 98 56, 90 48"
        stroke="url(#goldRim)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Monogram KS or Custom Label */}
      {label ? (
        <text
          x="70"
          y="76"
          textAnchor="middle"
          fill="url(#goldRim)"
          fontFamily="'Playfair Display', serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="2"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
        >
          {label}
        </text>
      ) : (
        <g>
          {/* Monogram SK */}
          <text
            x="70"
            y="78"
            textAnchor="middle"
            fill="url(#goldRim)"
            fontFamily="'Alex Brush', 'Great Vibes', cursive"
            fontSize="36"
            fontWeight="bold"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(212,175,98,0.5)' }}
          >
            S&amp;K
          </text>
        </g>
      )}
    </svg>
  </div>
);

// Ornamental Crest with Rings
export const WeddingRingsEmblem = () => (
  <svg
    viewBox="0 0 100 40"
    style={{ width: '64px', height: '28px', display: 'inline-block' }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="42" cy="20" r="13" stroke="url(#goldRingGrad)" strokeWidth="2.5" />
    <circle cx="58" cy="20" r="13" stroke="url(#goldRingGrad)" strokeWidth="2.5" />
    <path
      d="M38 10L42 7L46 10"
      stroke="#FFF7E8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7E8" />
        <stop offset="50%" stopColor="#D4AF62" />
        <stop offset="100%" stopColor="#8A6B2D" />
      </linearGradient>
    </defs>
  </svg>
);

