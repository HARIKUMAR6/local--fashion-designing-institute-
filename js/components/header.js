/**
 * MAISON ÉLAN — Global Header Component
 * Haute Couture Brand Architecture & Editorial Navigation Shell
 * Designed from scratch for luxury fashion academy presentation.
 * Strictly uses relative paths for 100% static hosting compatibility.
 */

import { getTheme, toggleTheme, THEME_DARK } from '../theme.js';
import { getDirection, toggleDirection, DIR_RTL } from '../direction.js';

/**
 * Generates the signature MAISON ÉLAN bespoke heraldic monogram emblem.
 * Features an intertwining Roman 'M' and French 'É' within a fine double-lined atelier cartouche.
 * @param {Object} options
 * @param {number} [options.size=42]
 * @param {string} [options.className='']
 * @returns {string}
 */
export function createEmblemSVG({ size = 42, className = '' } = {}) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}" class="maison-elan-emblem shrink-0 ${className}" aria-hidden="true">
      <!-- Outer hairline frame -->
      <rect x="6" y="6" width="88" height="88" rx="1.5" fill="none" stroke="currentColor" stroke-width="0.75" stroke-opacity="0.35"/>
      
      <!-- Inner atelier octagonal border -->
      <path d="M 20,11 L 80,11 L 89,20 L 89,80 L 80,89 L 20,89 L 11,80 L 11,20 Z" fill="none" stroke="currentColor" stroke-width="1.25" stroke-opacity="0.85"/>

      <!-- Four cardinal atelier diamonds -->
      <polygon points="50,7.5 52,9.5 50,11.5 48,9.5" fill="currentColor" opacity="0.75"/>
      <polygon points="50,88.5 52,90.5 50,92.5 48,90.5" fill="currentColor" opacity="0.75"/>
      <polygon points="7.5,50 9.5,52 11.5,50 9.5,48" fill="currentColor" opacity="0.75"/>
      <polygon points="88.5,50 90.5,52 92.5,50 90.5,48" fill="currentColor" opacity="0.75"/>

      <!-- Corner flourishes -->
      <line x1="16" y1="21" x2="21" y2="16" stroke="currentColor" stroke-width="0.65" stroke-opacity="0.45"/>
      <line x1="84" y1="21" x2="79" y2="16" stroke="currentColor" stroke-width="0.65" stroke-opacity="0.45"/>
      <line x1="16" y1="79" x2="21" y2="84" stroke="currentColor" stroke-width="0.65" stroke-opacity="0.45"/>
      <line x1="84" y1="79" x2="79" y2="84" stroke="currentColor" stroke-width="0.65" stroke-opacity="0.45"/>

      <!-- Haute Couture Monogram M & E -->
      <!-- Letter M: Left Pillar -->
      <path d="M 21,27 L 31,27 L 31,29.5 L 28,30 L 28,70 L 31,70.5 L 31,73 L 21,73 L 21,70.5 L 24,70 L 24,30 L 21,29.5 Z" fill="currentColor"/>

      <!-- Letter M: Right Pillar -->
      <path d="M 69,27 L 79,27 L 79,29.5 L 76,30 L 76,70 L 79,70.5 L 79,73 L 69,73 L 69,70.5 L 72,70 L 72,30 L 69,29.5 Z" fill="currentColor"/>

      <!-- Letter M: Diagonals -->
      <!-- Left thick diagonal -->
      <polygon points="25.5,30 31,30 50,67 44.5,67" fill="currentColor"/>
      <!-- Right hairline diagonal -->
      <polygon points="74.5,30 71.5,30 44.5,67 47.5,67" fill="currentColor" opacity="0.88"/>

      <!-- Interlaced Letter E: Vertical Spine -->
      <path d="M 37,33 L 42,33 L 42,67 L 37,67 L 37,65 L 39.5,64.5 L 39.5,35.5 L 37,35 Z" fill="currentColor"/>

      <!-- Letter E: Top Arm & Terminal Serif -->
      <path d="M 40.5,33 L 63,33 L 63,39 L 61,39 L 61,35.5 L 40.5,35.5 Z" fill="currentColor"/>

      <!-- Letter E: Middle Arm & Faceted Terminal -->
      <polygon points="40.5,49 57,49 60,50.5 57,52 40.5,52" fill="currentColor"/>

      <!-- Letter E: Bottom Arm & Terminal Serif -->
      <path d="M 40.5,64.5 L 63,64.5 L 63,61 L 65,61 L 65,67 L 40.5,67 Z" fill="currentColor"/>

      <!-- Signature French Accent Aigu (´) on the É in Deep Burgundy -->
      <polygon points="49,24.5 57,17 59.5,18.5 51.5,26" fill="var(--accent-burgundy, #7B263A)"/>

      <!-- Center Atelier Jewel Diamond -->
      <polygon points="50,48.5 52,50.5 50,52.5 48,50.5" fill="var(--accent-burgundy, #7B263A)"/>
    </svg>
  `;
}

// Clean, high-fashion inline SVG utility icons
const ICONS = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon transition-transform duration-200" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" x2="21" y1="8" y2="8"/><line x1="3" x2="21" y1="16" y2="16"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
};

/**
 * Builds the brand logo markup with custom emblem and authoritative typography lockup.
 * @param {boolean} [isCompact=false]
 * @returns {string}
 */
export function createLogoHTML(isCompact = false) {
  const emblemSize = isCompact ? 34 : 42;
  return `
    <a href="index.html" class="group inline-flex items-center gap-3 sm:gap-3.5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy" aria-label="MAISON ÉLAN Fashion & Design Academy - Home">
      ${createEmblemSVG({ size: emblemSize, className: 'text-text-primary group-hover:text-text-accent transition-colors duration-200' })}
      <div class="flex flex-col justify-center">
        <span class="font-display ${isCompact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl lg:text-[1.625rem]'} font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-text-primary group-hover:text-text-accent transition-colors duration-200 uppercase leading-none">MAISON ÉLAN</span>
        <span class="font-sans text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.3em] sm:tracking-[0.34em] text-text-muted uppercase mt-1 leading-tight">FASHION &amp; DESIGN ACADEMY</span>
      </div>
    </a>
  `;
}

/**
 * Generates Theme and Direction controls block.
 * @returns {string}
 */
function createControlsHTML() {
  const currentTheme = getTheme();
  const currentDir = getDirection();
  const isDark = currentTheme === THEME_DARK;
  const isRtl = currentDir === DIR_RTL;

  return `
    <div class="flex items-center gap-1.5 sm:gap-2">
      <!-- Theme Toggle (Sun/Moon Icon Only) -->
      <button
        type="button"
        id="theme-toggle"
        class="inline-flex items-center justify-center w-8.5 h-8.5 text-text-secondary hover:text-text-primary bg-transparent hover:bg-bg-surface border border-border-subtle hover:border-border-medium rounded-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
        aria-label="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
        title="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
      >
        <span class="theme-toggle-icon flex items-center justify-center">
          ${isDark ? ICONS.sun : ICONS.moon}
        </span>
      </button>

      <!-- Direction Toggle (Compact LTR/RTL) -->
      <button
        type="button"
        id="direction-toggle"
        class="inline-flex items-center justify-center h-8.5 px-2.5 text-[10px] font-semibold tracking-[0.18em] text-text-secondary hover:text-text-primary bg-transparent hover:bg-bg-surface border border-border-subtle hover:border-border-medium rounded-none uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
        aria-label="${isRtl ? 'Switch to LTR layout' : 'Switch to RTL layout'}"
        title="${isRtl ? 'Switch to LTR layout' : 'Switch to RTL layout'}"
      >
        <span id="direction-toggle-label">${isRtl ? 'LTR' : 'RTL'}</span>
      </button>
    </div>
  `;
}

/**
 * Generates public desktop navigation items with refined editorial typography.
 * @param {string} activePage
 * @returns {string}
 */
function createDesktopNavHTML(activePage) {
  const isHomeActive = activePage === 'home-1' || activePage === 'home-2';
  const isHome1Active = activePage === 'home-1';
  const isHome2Active = activePage === 'home-2';

  const linkBaseClass = "relative py-1 text-[11px] xl:text-[11.5px] uppercase font-medium tracking-[0.22em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy";

  return `
    <nav aria-label="Primary Navigation" class="hidden lg:flex items-center gap-6 xl:gap-8">
      <!-- Home Dropdown (Strictly Home 1 and Home 2 only) -->
      <div class="relative dropdown-container" id="home-dropdown-container">
        <button
          type="button"
          id="home-dropdown-trigger"
          class="${linkBaseClass} inline-flex items-center gap-1.5 ${
            isHomeActive
              ? 'text-text-primary font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-text-primary'
              : 'text-text-secondary hover:text-text-primary'
          }"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="home-dropdown-menu"
        >
          <span>Home</span>
          ${ICONS.chevronDown}
        </button>

        <!-- Dropdown Menu (Strictly Home 1 and Home 2 only) -->
        <div
          id="home-dropdown-menu"
          class="absolute inset-inline-start-0 inset-block-start-full mt-3 w-40 bg-bg-surface border border-border-subtle shadow-editorial py-1.5 hidden flex-col z-dropdown rounded-none transition-all duration-150 backdrop-blur-md"
          role="menu"
          aria-labelledby="home-dropdown-trigger"
        >
          <a
            href="index.html"
            role="menuitem"
            class="px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-start transition-colors duration-150 hover:bg-bg-surface-elevated hover:text-text-accent ${
              isHome1Active ? 'font-semibold text-text-accent bg-bg-surface-elevated' : 'text-text-primary'
            }"
            ${isHome1Active ? 'aria-current="page"' : ''}
          >
            Home 1
          </a>
          <a
            href="home-2.html"
            role="menuitem"
            class="px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-start transition-colors duration-150 hover:bg-bg-surface-elevated hover:text-text-accent ${
              isHome2Active ? 'font-semibold text-text-accent bg-bg-surface-elevated' : 'text-text-primary'
            }"
            ${isHome2Active ? 'aria-current="page"' : ''}
          >
            Home 2
          </a>
        </div>
      </div>

      <!-- About -->
      <a
        href="about.html"
        class="${linkBaseClass} ${
          activePage === 'about'
            ? 'text-text-primary font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-text-primary'
            : 'text-text-secondary hover:text-text-primary'
        }"
        ${activePage === 'about' ? 'aria-current="page"' : ''}
      >
        About
      </a>

      <!-- Courses -->
      <a
        href="courses.html"
        class="${linkBaseClass} ${
          activePage === 'courses'
            ? 'text-text-primary font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-text-primary'
            : 'text-text-secondary hover:text-text-primary'
        }"
        ${activePage === 'courses' ? 'aria-current="page"' : ''}
      >
        Courses
      </a>

      <!-- Gallery -->
      <a
        href="gallery.html"
        class="${linkBaseClass} ${
          activePage === 'gallery'
            ? 'text-text-primary font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-text-primary'
            : 'text-text-secondary hover:text-text-primary'
        }"
        ${activePage === 'gallery' ? 'aria-current="page"' : ''}
      >
        Gallery
      </a>

      <!-- Contact -->
      <a
        href="contact.html"
        class="${linkBaseClass} ${
          activePage === 'contact'
            ? 'text-text-primary font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-text-primary'
            : 'text-text-secondary hover:text-text-primary'
        }"
        ${activePage === 'contact' ? 'aria-current="page"' : ''}
      >
        Contact
      </a>
    </nav>
  `;
}

/**
 * Generates mobile navigation drawer markup with full accessibility and keyboard support.
 * @param {string} activePage
 * @returns {string}
 */
function createMobileNavHTML(activePage) {
  const isHomeActive = activePage === 'home-1' || activePage === 'home-2';
  const isHome1Active = activePage === 'home-1';
  const isHome2Active = activePage === 'home-2';

  return `
    <!-- Mobile Navigation Drawer Overlay -->
    <div
      id="mobile-nav-backdrop"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-modal-backdrop hidden transition-opacity duration-300 opacity-0"
      aria-hidden="true"
    ></div>

    <div
      id="mobile-nav-drawer"
      class="fixed inset-y-0 inset-inline-end-0 w-full max-w-sm bg-bg-surface border-inline-start border-border-subtle shadow-editorial z-modal hidden flex-col transition-transform duration-300 ease-out mobile-drawer-closed"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <!-- Drawer Header with Emblem Lockup -->
      <div class="flex items-center justify-between p-6 border-b border-border-subtle">
        <div class="flex items-center gap-3">
          ${createEmblemSVG({ size: 36, className: 'text-text-primary' })}
          <div class="flex flex-col text-start">
            <span class="font-display text-lg font-semibold tracking-[0.14em] text-text-primary uppercase leading-tight">MAISON ÉLAN</span>
            <span class="font-sans text-[8.5px] font-semibold tracking-[0.24em] text-text-muted uppercase">ACADEMY NAVIGATION</span>
          </div>
        </div>
        <button
          type="button"
          id="mobile-nav-close"
          class="w-9 h-9 inline-flex items-center justify-center text-text-secondary hover:text-text-primary rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
          aria-label="Close navigation menu"
        >
          ${ICONS.close}
        </button>
      </div>

      <!-- Drawer Content -->
      <div class="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <nav aria-label="Mobile Primary Navigation" class="flex flex-col space-y-1">
          <!-- Mobile Home Accordion -->
          <div class="border-b border-border-subtle pb-2">
            <button
              type="button"
              id="mobile-home-accordion-btn"
              class="w-full flex items-center justify-between py-3 text-start font-display text-xl text-text-primary hover:text-text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
              aria-expanded="false"
              aria-controls="mobile-home-submenu"
            >
              <span class="${isHomeActive ? 'font-semibold text-text-accent' : ''}">Home</span>
              ${ICONS.chevronDown}
            </button>
            <div id="mobile-home-submenu" class="hidden flex-col ps-4 py-1 space-y-2">
              <a
                href="index.html"
                class="block py-2 text-xs tracking-[0.2em] uppercase transition-colors hover:text-text-accent ${
                  isHome1Active ? 'font-bold text-text-accent' : 'text-text-secondary'
                }"
                ${isHome1Active ? 'aria-current="page"' : ''}
              >
                Home 1
              </a>
              <a
                href="home-2.html"
                class="block py-2 text-xs tracking-[0.2em] uppercase transition-colors hover:text-text-accent ${
                  isHome2Active ? 'font-bold text-text-accent' : 'text-text-secondary'
                }"
                ${isHome2Active ? 'aria-current="page"' : ''}
              >
                Home 2
              </a>
            </div>
          </div>

          <!-- About -->
          <a
            href="about.html"
            class="py-3 border-b border-border-subtle font-display text-xl text-start transition-colors hover:text-text-accent ${
              activePage === 'about' ? 'font-semibold text-text-accent' : 'text-text-primary'
            }"
            ${activePage === 'about' ? 'aria-current="page"' : ''}
          >
            About
          </a>

          <!-- Courses -->
          <a
            href="courses.html"
            class="py-3 border-b border-border-subtle font-display text-xl text-start transition-colors hover:text-text-accent ${
              activePage === 'courses' ? 'font-semibold text-text-accent' : 'text-text-primary'
            }"
            ${activePage === 'courses' ? 'aria-current="page"' : ''}
          >
            Courses
          </a>

          <!-- Gallery -->
          <a
            href="gallery.html"
            class="py-3 border-b border-border-subtle font-display text-xl text-start transition-colors hover:text-text-accent ${
              activePage === 'gallery' ? 'font-semibold text-text-accent' : 'text-text-primary'
            }"
            ${activePage === 'gallery' ? 'aria-current="page"' : ''}
          >
            Gallery
          </a>

          <!-- Contact -->
          <a
            href="contact.html"
            class="py-3 border-b border-border-subtle font-display text-xl text-start transition-colors hover:text-text-accent ${
              activePage === 'contact' ? 'font-semibold text-text-accent' : 'text-text-primary'
            }"
            ${activePage === 'contact' ? 'aria-current="page"' : ''}
          >
            Contact
          </a>

          <!-- Student Login CTA -->
          <div class="pt-4">
            <a
              href="login.html"
              class="block text-center py-3 px-4 border border-border-strong hover:border-text-primary hover:bg-text-primary hover:text-text-inverse font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              ${activePage === 'login' ? 'aria-current="page"' : ''}
            >
              Student Login
            </a>
          </div>
        </nav>
      </div>

      <!-- Drawer Footer (Controls on Mobile) -->
      <div class="p-6 border-t border-border-subtle bg-bg-surface-elevated flex items-center justify-between">
        <span class="text-xs uppercase tracking-wider text-text-muted">Preferences</span>
        ${createControlsHTML()}
      </div>
    </div>
  `;
}

/**
 * Generates the Auth layout variant header (login.html).
 * Minimalist luxury lockup with clean return link.
 * @returns {string}
 */
function createAuthHeaderHTML() {
  return `
    <div class="container-standard py-4 sm:py-5 flex items-center justify-between">
      ${createLogoHTML()}
      <div class="flex items-center gap-4 sm:gap-6">
        <a
          href="index.html"
          class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
        >
          ${ICONS.arrowLeft}
          <span>Return to Academy</span>
        </a>
        <span class="w-[1px] h-4 bg-border-subtle" aria-hidden="true"></span>
        ${createControlsHTML()}
      </div>
    </div>
  `;
}

/**
 * Generates the Dashboard layout variant header (dashboard.html).
 * Application shell header with compact emblem and workspace identity.
 * @returns {string}
 */
function createDashboardHeaderHTML() {
  return `
    <div class="container-standard py-3.5 sm:py-4 flex items-center justify-between">
      <div class="flex items-center gap-3 sm:gap-4">
        ${createLogoHTML(true)}
        <span class="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase border border-border-medium bg-bg-surface text-text-accent rounded-none">
          Student Atelier Portal
        </span>
      </div>

      <div class="flex items-center gap-3 sm:gap-6">
        <a
          href="index.html"
          class="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
        >
          Exit to Website
        </a>
        <span class="w-[1px] h-4 bg-border-subtle" aria-hidden="true"></span>
        ${createControlsHTML()}
      </div>
    </div>
  `;
}

/**
 * Main public marketing header layout.
 * Tri-part balanced composition: Left Brand, Center Navigation, Right Actions.
 * @param {string} activePage
 * @returns {string}
 */
function createPublicHeaderHTML(activePage) {
  return `
    <div class="container-editorial py-4 sm:py-5 flex items-center justify-between gap-6 lg:gap-8">
      <!-- Left: Luxury Brand Logo & Emblem -->
      <div class="shrink-0">
        ${createLogoHTML()}
      </div>

      <!-- Center: Desktop Navigation -->
      <div class="hidden lg:flex items-center justify-center flex-1">
        ${createDesktopNavHTML(activePage)}
      </div>

      <!-- Right: Action & Utility Controls -->
      <div class="flex items-center gap-3 sm:gap-4 shrink-0">
        <!-- Desktop Student Login Action -->
        <a
          href="login.html"
          class="hidden lg:inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase border border-border-strong hover:border-text-primary hover:bg-text-primary hover:text-text-inverse transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy ${
            activePage === 'login' ? 'border-text-primary bg-text-primary text-text-inverse font-semibold' : 'text-text-primary'
          }"
          ${activePage === 'login' ? 'aria-current="page"' : ''}
        >
          Student Login
        </a>

        <!-- Subtle Hairline Separator -->
        <span class="hidden lg:block w-[1px] h-4 bg-border-subtle" aria-hidden="true"></span>

        <!-- Theme & Direction Controls -->
        <div class="hidden lg:flex items-center">
          ${createControlsHTML()}
        </div>

        <!-- Mobile Navigation Hamburger Button -->
        <button
          type="button"
          id="mobile-nav-toggle"
          class="lg:hidden inline-flex items-center justify-center w-9 h-9 text-text-primary hover:text-text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy rounded-none"
          aria-expanded="false"
          aria-controls="mobile-nav-drawer"
          aria-label="Open navigation menu"
        >
          ${ICONS.menu}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    ${createMobileNavHTML(activePage)}
  `;
}

/**
 * Sets up desktop Home dropdown interactions (click, outside click, keyboard navigation).
 */
function initDesktopDropdown(container) {
  const trigger = container.querySelector('#home-dropdown-trigger');
  const menu = container.querySelector('#home-dropdown-menu');

  if (!trigger || !menu) return;

  function openDropdown() {
    trigger.setAttribute('aria-expanded', 'true');
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    const chevron = trigger.querySelector('.chevron-icon');
    if (chevron) chevron.classList.add('rotate-180');
  }

  function closeDropdown() {
    trigger.setAttribute('aria-expanded', 'false');
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    const chevron = trigger.querySelector('.chevron-icon');
    if (chevron) chevron.classList.remove('rotate-180');
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Keyboard navigation for dropdown
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDropdown();
      const firstItem = menu.querySelector('a');
      if (firstItem) firstItem.focus();
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  menu.addEventListener('keydown', (e) => {
    const items = Array.from(menu.querySelectorAll('a'));
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeDropdown();
      trigger.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex].focus();
    } else if (e.key === 'Tab') {
      closeDropdown();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      closeDropdown();
    }
  });
}

/**
 * Sets up mobile menu drawer open, close, accordion, and trap handlers.
 */
function initMobileMenu(container) {
  const toggleBtn = container.querySelector('#mobile-nav-toggle');
  const closeBtn = container.querySelector('#mobile-nav-close');
  const drawer = container.querySelector('#mobile-nav-drawer');
  const backdrop = container.querySelector('#mobile-nav-backdrop');
  const homeAccordionBtn = container.querySelector('#mobile-home-accordion-btn');
  const homeSubmenu = container.querySelector('#mobile-home-submenu');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openMobileNav() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.remove('hidden');
    backdrop.classList.remove('hidden');

    // Force reflow for smooth transition
    void drawer.offsetWidth;
    drawer.classList.remove('mobile-drawer-closed');
    drawer.classList.add('mobile-drawer-open');
    backdrop.classList.remove('opacity-0');

    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMobileNav() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('mobile-drawer-open');
    drawer.classList.add('mobile-drawer-closed');
    backdrop.classList.add('opacity-0');

    setTimeout(() => {
      drawer.classList.add('hidden');
      backdrop.classList.add('hidden');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }, 280);
  }

  toggleBtn.addEventListener('click', openMobileNav);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  backdrop.addEventListener('click', closeMobileNav);

  // Mobile home accordion
  if (homeAccordionBtn && homeSubmenu) {
    homeAccordionBtn.addEventListener('click', () => {
      const isExpanded = homeAccordionBtn.getAttribute('aria-expanded') === 'true';
      homeAccordionBtn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      homeSubmenu.classList.toggle('hidden');
      const chevron = homeAccordionBtn.querySelector('.chevron-icon');
      if (chevron) chevron.classList.toggle('rotate-180');
    });
  }

  // Close on Escape
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
    }
  });

  // Close drawer if clicking any nav link
  const navLinks = drawer.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
}

/**
 * Binds Theme and Direction toggle buttons to the existing Phase 1 modules.
 */
function initToggleControls(container) {
  const themeBtns = container.querySelectorAll('#theme-toggle');
  const dirBtns = container.querySelectorAll('#direction-toggle');

  function updateThemeUI() {
    const currentTheme = getTheme();
    const isDark = currentTheme === THEME_DARK;
    themeBtns.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      const iconSpan = btn.querySelector('.theme-toggle-icon');
      if (iconSpan) {
        iconSpan.innerHTML = isDark ? ICONS.sun : ICONS.moon;
      }
    });
  }

  function updateDirectionUI() {
    const currentDir = getDirection();
    const isRtl = currentDir === DIR_RTL;
    dirBtns.forEach((btn) => {
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR layout' : 'Switch to RTL layout');
      btn.setAttribute('title', isRtl ? 'Switch to LTR layout' : 'Switch to RTL layout');
      const labelSpan = btn.querySelector('#direction-toggle-label');
      if (labelSpan) {
        labelSpan.textContent = isRtl ? 'LTR' : 'RTL';
      }
    });
  }

  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleTheme();
      updateThemeUI();
    });
  });

  dirBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleDirection();
      updateDirectionUI();
    });
  });

  // React to custom events dispatched anywhere in the app
  window.addEventListener('maison-elan:theme-changed', updateThemeUI);
  window.addEventListener('maison-elan:direction-changed', updateDirectionUI);

  // Initial sync
  updateThemeUI();
  updateDirectionUI();
}

/**
 * Public function to render and initialize the header component.
 * @param {Object} options
 * @param {HTMLElement} options.container
 * @param {'public' | 'auth' | 'dashboard'} [options.variant='public']
 * @param {string} [options.activePage='']
 */
export function renderHeader({ container, variant = 'public', activePage = '' }) {
  if (!container) return;

  if (variant === 'auth') {
    container.innerHTML = createAuthHeaderHTML();
  } else if (variant === 'dashboard') {
    container.innerHTML = createDashboardHeaderHTML();
  } else {
    container.innerHTML = createPublicHeaderHTML(activePage);
    initDesktopDropdown(container);
    initMobileMenu(container);
  }

  initToggleControls(container);
}
