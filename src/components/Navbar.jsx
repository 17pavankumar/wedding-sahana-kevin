import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Invitation', href: '#cover' },
    { name: 'Blessings', href: '#verse' },
    { name: 'Events', href: '#events' },
    { name: 'Venue & Map', href: '#venue' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Dress Code', href: '#dress-code' },
    { name: 'With Love', href: '#thank-you' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`wedding-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Monogram Brand using Official Logo */}
        <a href="#cover" className="nav-brand text-decoration-none d-flex align-items-center gap-2">
          <div className="brand-crest p-0 overflow-hidden">
            <img
              src="/images/sk_logo_circle.png"
              alt="Sahana &amp; Kevin Official Crest"
              width="36"
              height="36"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span className="brand-names">Sahana &amp; Kevin</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links d-none d-lg-flex align-items-center gap-4">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="nav-item-link">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button
            className="mobile-nav-toggle btn p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} color="#D4AF62" /> : <Menu size={24} color="#4A1028" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="d-flex flex-column align-items-center gap-3 py-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
