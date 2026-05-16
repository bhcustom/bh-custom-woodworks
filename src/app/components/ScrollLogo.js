'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollLogo — Animates the logo icon from hero → navbar on scroll.
 *
 * On the homepage:
 *   - At scroll 0: logo sits centered in the hero (large, 160px).
 *     The navbar text sits flush left (no icon beside it).
 *   - On scroll: logo flies up to the navbar, shrinks to navbar icon size.
 *     The navbar text slides right to make room for the arriving icon.
 *
 * On other pages: hidden (falls back to the static navbar icon).
 */
export default function ScrollLogo() {
  const floatingRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const floating = floatingRef.current;
    if (!floating) return;

    const heroAnchor = document.getElementById('hero-logo-anchor');
    const navIcon = document.getElementById('nav-logo-anchor');
    const navText = document.querySelector('.navbar-logo-text');
    const navLogoLink = document.querySelector('.navbar-logo');

    // Not on homepage — show static navbar icon, hide floating
    if (!heroAnchor) {
      floating.style.display = 'none';
      if (navIcon) {
        navIcon.style.opacity = '1';
        navIcon.style.width = '';
      }
      if (navText) navText.style.transform = '';
      if (navLogoLink) navLogoLink.style.overflow = '';
      return;
    }

    // On homepage — hide static navbar icon via width collapse, show floating
    if (navIcon) {
      navIcon.style.opacity = '0';
      navIcon.style.width = '0';
      navIcon.style.overflow = 'hidden';
    }
    if (navLogoLink) navLogoLink.style.overflow = 'visible';
    floating.style.display = '';

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    // Cache the full icon width for transition calculations
    const navIconFullWidth = 70; // 4.4rem ≈ 70px

    // ── Snapshot FIXED start & end positions once at init ──
    // Scroll to top momentarily to get true initial positions
    const initialScrollY = window.scrollY;

    // Hero start position (page coordinates, not viewport)
    const heroRect = heroAnchor.getBoundingClientRect();
    const heroSection = document.querySelector('.hero');
    const heroSectionHeight = heroSection ? heroSection.getBoundingClientRect().height : 653;
    const startCX = heroRect.left + heroRect.width / 2;
    const startCY = heroRect.top + initialScrollY + heroRect.height / 2;
    const scrollThreshold = heroSectionHeight * 0.4;

    // Navbar end position (it's position:sticky so its viewport position is constant)
    const navbarEl = document.querySelector('.navbar-inner');
    const navbarRect = navbarEl.getBoundingClientRect();
    const gutterPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gutter')) * 16 || 32;
    const endCX = navbarRect.left + gutterPx + navIconFullWidth / 2;
    const endCY = navbarRect.top + navbarRect.height / 2; // viewport-relative (sticky)

    function update() {
      const scrollY = window.scrollY;

      // Scroll progress
      const rawProgress = Math.max(0, scrollY) / scrollThreshold;
      const progress = Math.min(rawProgress, 1);
      const easedProgress = easeOutCubic(progress);

      // Convert hero start from page coords to current viewport coords
      const currentStartCY = startCY - scrollY;

      // Interpolate in a straight line between the two fixed points
      const cx = lerp(startCX, endCX, easedProgress);
      const cy = lerp(currentStartCY, endCY, easedProgress);

      // Scale: hero logo is 160px, navbar icon is ~70px
      const heroSize = 160;
      const scale = lerp(1, navIconFullWidth / heroSize, easedProgress);

      // Apply transform
      floating.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(${scale})`;

      // Expand the static icon's width to "make room" in the layout
      if (navIcon) {
        const currentIconWidth = lerp(0, navIconFullWidth, easedProgress);
        navIcon.style.width = `${currentIconWidth}px`;
        // Show the static icon once transition is complete (for crispness)
        navIcon.style.opacity = progress >= 0.98 ? '1' : '0';
        if (progress >= 0.98) {
          floating.style.opacity = '0';
        } else {
          floating.style.opacity = '1';
        }
      }

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <img
      ref={floatingRef}
      src="/logo_icon.svg"
      alt=""
      aria-hidden="true"
      className="scroll-logo-floating"
      width={160}
      height={160}
    />
  );
}
