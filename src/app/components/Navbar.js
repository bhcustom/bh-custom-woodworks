'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [collectionsExpanded, setCollectionsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isHome);

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
  }, [isHome]);

  return (
    <>
      {/* ====== NAVBAR ====== */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''} ${isHome ? 'is-home' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className="navbar-logo" onClick={closeMenu}>
            <Image
              src="/bh-custom-woodworks-logo.svg"
              alt=""
              width={70}
              height={70}
              className="navbar-logo-icon"
              priority
            />
            <span className="navbar-logo-text">BH Custom <br /> Woodworks</span>
          </a>

          <nav className="navbar-links" style={{ alignItems: 'center' }}>
            <a href="/shop" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>Shop Our Etsy Store</a>
            <div className="nav-dropdown">
              <a href="/#collections" className="nav-dropdown-trigger active">
                Collections
                <span className="material-symbols-outlined nav-dropdown-icon">
                  expand_more
                </span>
              </a>
              <div className="nav-dropdown-menu">
                <a href="/services/memorial-pieces">Memorial Pieces</a>
                <a href="/services/charcuterie-boards">Charcuterie Boards</a>
                <a href="/services/cutting-boards">Cutting Boards</a>
                <a href="/services/wedding-decor">Wedding Decor</a>
                <a href="/services/laser-engraved-gifts">Laser Engraved Gifts</a>
                <a href="/services/business-signage">Business Signage</a>
              </div>
            </div>
            <a href="/#process">Process</a>
            <a href="/quote">Custom Quote</a>
            <a href="/our-story">Our Story</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="navbar-actions">
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
          <div className="mobile-menu-cta" style={{ marginTop: '0', marginBottom: '1.25rem' }}>
            <a href="/shop" className="btn btn-primary" onClick={closeMenu}>Shop Our Etsy Store</a>
          </div>

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
            <a href="/services/memorial-pieces" className="mobile-menu-sublink" onClick={closeMenu}>Memorial Pieces</a>
            <a href="/services/charcuterie-boards" className="mobile-menu-sublink" onClick={closeMenu}>Charcuterie Boards</a>
            <a href="/services/cutting-boards" className="mobile-menu-sublink" onClick={closeMenu}>Cutting Boards</a>
            <a href="/services/wedding-decor" className="mobile-menu-sublink" onClick={closeMenu}>Wedding Decor</a>
            <a href="/services/laser-engraved-gifts" className="mobile-menu-sublink" onClick={closeMenu}>Laser Engraved Gifts</a>
            <a href="/services/business-signage" className="mobile-menu-sublink" onClick={closeMenu}>Business Signage</a>
          </div>

          <a href="/#process" className="mobile-menu-link" onClick={closeMenu}>Process</a>
          <a href="/quote" className="mobile-menu-link" onClick={closeMenu}>Custom Quote</a>
          <a href="/our-story" className="mobile-menu-link" onClick={closeMenu}>Our Story</a>
          <a href="/contact" className="mobile-menu-link" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </>
  );
}
