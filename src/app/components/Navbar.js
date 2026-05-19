'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionsExpanded, setCollectionsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setCollectionsExpanded(false);
  };

  const toggleCollections = (e) => {
    e.preventDefault();
    setCollectionsExpanded(!collectionsExpanded);
  };

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Scroll detection logic
  useEffect(() => {
    const isHome = window.location.pathname === '/';
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      // 150px is when the hero icon is fully moved under/past the main menu
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* ====== NAVBAR ====== */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className="navbar-logo" onClick={closeMenu}>
            <Image
              src="/logo_icon.svg"
              alt="BH Custom Woodworks Logo"
              width={70}
              height={70}
              className="navbar-logo-icon"
            />
            <span className="navbar-logo-text">BH Custom <br /> Woodworks</span>
          </a>

          <nav className="navbar-links">
            <div className="nav-dropdown">
              <a href="/#collections" className="nav-dropdown-trigger active">
                Collections
                <span className="material-symbols-outlined nav-dropdown-icon">
                  expand_more
                </span>
              </a>
              <div className="nav-dropdown-menu">
                <a href="/services/custom-wood-signs">Custom Wood Signs</a>
                <a href="/services/laser-engraved-gifts">Laser Engraved Gifts</a>
                <a href="/services/cutting-boards">Cutting Boards</a>
                <a href="/services/wedding-decor">Wedding Decor</a>
                <a href="/services/business-signage">Business Signage</a>
                <a href="/services/memorial-pieces">Memorial Pieces</a>
                <a href="/services/laser-engraving">Laser Engraving</a>
              </div>
            </div>
            <a href="/#process">Process</a>
            <a href="/quote">Custom Quote</a>
            <a href="/our-story">Our Story</a>
          </nav>

          <div className="navbar-actions">
            <a href="/shop" className="btn btn-primary">Shop Now</a>
            <button 
              className="navbar-menu-btn" 
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ====== MOBILE MENU OVERLAY ====== */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a 
            href="#" 
            className={`mobile-menu-link ${collectionsExpanded ? 'expanded' : ''}`}
            onClick={toggleCollections}
          >
            Collections
            <span className="material-symbols-outlined">
              expand_more
            </span>
          </a>
          
          <div className={`mobile-menu-sublinks ${collectionsExpanded ? 'expanded' : ''}`}>
            <a href="/services/custom-wood-signs" className="mobile-menu-sublink" onClick={closeMenu}>Custom Wood Signs</a>
            <a href="/services/laser-engraved-gifts" className="mobile-menu-sublink" onClick={closeMenu}>Laser Engraved Gifts</a>
            <a href="/services/cutting-boards" className="mobile-menu-sublink" onClick={closeMenu}>Cutting Boards</a>
            <a href="/services/wedding-decor" className="mobile-menu-sublink" onClick={closeMenu}>Wedding Decor</a>
            <a href="/services/business-signage" className="mobile-menu-sublink" onClick={closeMenu}>Business Signage</a>
            <a href="/services/memorial-pieces" className="mobile-menu-sublink" onClick={closeMenu}>Memorial Pieces</a>
            <a href="/services/laser-engraving" className="mobile-menu-sublink" onClick={closeMenu}>Laser Engraving</a>
          </div>

          <a href="/#process" className="mobile-menu-link" onClick={closeMenu}>Process</a>
          <a href="/quote" className="mobile-menu-link" onClick={closeMenu}>Custom Quote</a>
          <a href="/our-story" className="mobile-menu-link" onClick={closeMenu}>Our Story</a>
          
          <div className="mobile-menu-cta">
            <a href="/shop" className="btn btn-primary" onClick={closeMenu}>Shop Now</a>
          </div>
        </div>
      </div>
    </>
  );
}
