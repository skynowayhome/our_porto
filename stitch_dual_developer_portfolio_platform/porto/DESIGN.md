---
name: porto
colors:
  surface: '#fcf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3eb'
  surface-container: '#f1eee6'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#42474f'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f1e8'
  outline: '#727781'
  outline-variant: '#c2c7d1'
  surface-tint: '#2a6198'
  primary: '#275e95'
  on-primary: '#ffffff'
  primary-container: '#4477b0'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a0c9ff'
  secondary: '#22657f'
  on-secondary: '#ffffff'
  secondary-container: '#a2e0fe'
  on-secondary-container: '#20647e'
  tertiary: '#4b605d'
  on-tertiary: '#ffffff'
  tertiary-container: '#637976'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#01497f'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#92cfec'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d64'
  tertiary-fixed: '#d0e7e3'
  tertiary-fixed-dim: '#b4cbc7'
  on-tertiary-fixed: '#0a1f1d'
  on-tertiary-fixed-variant: '#364b48'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-md:
    fontFamily: Courier Prime
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
---

# Design System Documentation

## Brand & Style
The design system adopts a professional, corporate yet modern aesthetic ("fidelity" variant) that balances technical precision with reliable, approachable interface patterns. The atmosphere is clear, organized, and engineered for high-density information processing without sacrificing visual breathing room.

## Colors
The color palette is built on a light mode foundation, emphasizing clean readability and purposeful contrast:
- **Primary (`#477ab3`)**: A dependable, clear blue used for primary actions, active states, and key interactive elements.
- **Secondary (`#66a3bf`)**: A brighter, supporting cyan-blue tone used for secondary actions, supporting UI elements, and subtle categorization.
- **Tertiary (`#C8DFDB`)**: A soft, muted teal-tinted accent hue reserved for highlights, specialized callouts, and secondary focal points.
- **Neutral (`#F2EFE7`)**: A warm, balanced neutral tone applied to structural elements, borders, text, and surfaces.

## Typography
The typography stack combines distinct functional typefaces to optimize readability across different context layers:
- **Headlines**: Set in *IBM Plex Sans* for a crisp, structured, and modern structural tone.
- **Body**: Set in *Courier Prime* for high legibility, giving data-heavy or text-dense views a precise, programmatic rhythm.
- **Labels & UI elements**: Set in *Inter* for clean, highly legible micro-copy and interface controls.

## Layout & Spacing
The layout follows a fluid grid system built around a consistent 8px spacing scale (`spacing` multiplier 2). Content scales naturally across viewports while maintaining strict vertical and horizontal rhythm through predictable padding and margin increments.

## Elevation & Depth
Visual hierarchy is established using tonal layers and subtle, low-contrast outlines rather than heavy drop shadows. This maintains a clean, flat-adjacent aesthetic suitable for information-dense applications while preserving clear layering for modals, dropdowns, and floating cards.

## Shapes
The shape language uses a moderately rounded approach (`roundedness` level 2), featuring 0.5rem base radius for standard containers, buttons, and inputs. Larger surfaces use scaled radii (1rem to 1.5rem) to soften structural edges while maintaining a professional geometric profile.

## Components
- **Buttons**: Styled with the primary blue (`#477ab3`), 0.5rem border radius, and *Inter* label typography for clear interactivity.
- **Inputs**: Text fields utilize *Courier Prime* for content input with neutral borders (`#F2EFE7`) and clear focus states.
- **Cards**: Surface containers feature rounded corners and subtle tonal contrast to group related information cleanly.
- **Chips & Lists**: Compact navigational and tagging elements styled with secondary/neutral tones for scanning ease.