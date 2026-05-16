---
name: Modern Artisan
colors:
  surface: '#fff8f5'
  surface-dim: '#dfd9d6'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ef'
  surface-container: '#f3ecea'
  surface-container-high: '#ede7e4'
  surface-container-highest: '#e8e1de'
  on-surface: '#1d1b1a'
  on-surface-variant: '#4e453f'
  inverse-surface: '#33302e'
  inverse-on-surface: '#f6efed'
  outline: '#80756e'
  outline-variant: '#d2c4bb'
  surface-tint: '#6f5a4b'
  primary: '#1e1106'
  on-primary: '#ffffff'
  primary-container: '#352518'
  on-primary-container: '#a38b79'
  inverse-primary: '#ddc1ae'
  secondary: '#5c614d'
  on-secondary: '#ffffff'
  secondary-container: '#dee2c9'
  on-secondary-container: '#606551'
  tertiary: '#1f1100'
  on-tertiary: '#ffffff'
  tertiary-container: '#392402'
  on-tertiary-container: '#ab8a5e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#faddc9'
  primary-fixed-dim: '#ddc1ae'
  on-primary-fixed: '#27180c'
  on-primary-fixed-variant: '#564334'
  secondary-fixed: '#e0e5cc'
  secondary-fixed-dim: '#c4c9b1'
  on-secondary-fixed: '#191d0e'
  on-secondary-fixed-variant: '#444936'
  tertiary-fixed: '#ffddb3'
  tertiary-fixed-dim: '#e6c090'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5c421d'
  background: '#fff8f5'
  on-background: '#1d1b1a'
  surface-variant: '#e8e1de'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  gutter: 32px
  section-padding: 96px
  container-max: 1280px
---

## Brand & Style

Modern Artisan embodies an "Artisan Editorial" aesthetic—a sophisticated intersection of heritage craftsmanship and contemporary precision. The brand personality is rooted in quality, intentionality, and timelessness. It targets a discerning audience that values the tactile nature of raw materials alongside the sharpness of modern technology.

The design style is **Minimalist-Tactile**. It utilizes heavy white space and a restricted, nature-inspired palette to create an atmosphere of luxury. Unlike cold minimalism, this style feels warm and approachable through the use of organic textures (wood grains, marble) and soft, tonal layering. The UI feels like a high-end coffee table book: spacious, authoritative, and elegant.

## Colors

The color strategy is "Warm Fidelity," inspired by natural woodworking materials. 

- **Primary (#352518):** A deep, dark walnut brown used for core brand presence and high-contrast typography.
- **Secondary (#5C614D):** A muted sage/moss green that complements wood tones without competing for attention.
- **Tertiary (#B89669):** A warm oak/honey gold used sparingly for emphasis and light accents.
- **Neutral/Surface (#FFF8F5):** A soft, linen-toned white replaces harsh grays to maintain warmth across the interface.

Backgrounds utilize subtle shifts in cream and off-white (Surface Container tiers) to differentiate sections without the need for heavy borders.

## Typography

The typography pairs the timeless authority of **Noto Serif** with the functional, modern clarity of **Manrope**.

- **Noto Serif** is reserved for headlines and display text. It conveys "Heritage" and "Artisan" qualities. Use italics sparingly for emphasis to evoke an editorial, high-fashion feel.
- **Manrope** handles all functional text. Its geometric yet open letterforms ensure high readability.
- **Labels** are always set in uppercase with increased letter spacing to provide a structured, "catalog" feel to the metadata.

## Layout & Spacing

The system uses a **Fixed-Width Centered Grid** for desktop and a **Fluid Fluid Grid** for mobile. 

- **Sectioning:** Large vertical gaps (96px) are used to let the photography and craft-focused copy "breathe."
- **Bento Grid:** For product categories, a non-uniform grid (Bento style) allows for visual hierarchy where "Signature" or "Featured" items can occupy more visual weight (spanning 2x2 blocks).
- **Alignment:** Content is generally center-aligned for high-level brand moments (Hero, CTAs) and left-aligned for informative or transactional sections to ensure scanning efficiency.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**.

- **Surfaces:** We avoid drop shadows on flat surfaces. Instead, we use `surface-container` tiers (shifting from #FFF8F5 to #F9F2EF) to create structural depth.
- **Cards:** Product cards use extremely diffused, low-opacity shadows (e.g., `shadow-[0_8px_30px_rgb(77,59,44,0.05)]`). The shadow color should be a tinted version of the primary brown rather than pure black to maintain the warm aesthetic.
- **Micro-interactions:** On hover, cards may increase their shadow spread slightly or scale the internal imagery to simulate "reaching toward" the user.

## Shapes

The shape language balances the "Organic" and the "Precision."

- **Rounded-XL (24px):** Used for large container cards and product grid items to soften the interface and feel more "hand-touched."
- **Pill (Full):** Primary buttons and category tags use a fully rounded "pill" shape. This represents the "Modern" half of the brand—clean, finished, and smooth.
- **Hard Lines:** Editorial dividers and border-bottoms on navigation items use thin 1px lines to reference the precision of laser-engraving technology.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Brown background with Surface-colored text. No border. On hover, shifts to Tertiary Gold.
- **Secondary/Outline:** Pill-shaped, 1px Outline border. Text matches the primary brand color. 

### Cards (The "Showcase" Card)
- Cards should feature an image-first layout. Typography is overlaid using a subtle gradient scrim (from Primary 80% to transparent) at the bottom 40% of the card.
- Inner elements like "Signature" tags use backdrop-blurs (glassmorphism) to feel premium and integrated with the photography.

### Input Fields
- Underlined or softly boxed with `outline-variant` (#D2C4BB). 
- Use Manrope Body-md for placeholder text and labels.

### Icons
- Use Material Symbols with a Light weight (200-300) and no fill. This keeps the visual weight of the icons in line with the thin, precise typography.