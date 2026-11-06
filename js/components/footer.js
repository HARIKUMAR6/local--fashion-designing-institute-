/**
 * MAISON ÉLAN — Global Footer Component
 * Haute Couture Brand Architecture & Editorial Footer Shell
 * Designed from scratch for luxury fashion academy presentation.
 * Strictly uses relative paths for 100% static hosting compatibility.
 */

import { createEmblemSVG } from './header.js';

// Recognizable inline SVG icons for exactly 4 social channels (no external dependencies)
const SOCIAL_ICONS = {
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="9" x2="12" y2="21"/><path d="M8 14.5c-1.5-1-2-2.5-2-4.5a6 6 0 1 1 12 0c0 4-3 6.5-6 6.5-1.5 0-2.8-.8-3.3-1.8"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>`,
};

/**
 * Creates the public marketing footer markup.
 * Designed with an editorial brand impression and asymmetric content layout.
 * @param {number} currentYear
 * @returns {string}
 */
function createPublicFooterHTML(currentYear) {
  return `
    <div class="container-editorial py-16 sm:py-20 lg:py-24">
      <!-- 1. Upper Grand Brand Section -->
      <div class="space-y-6 max-w-3xl">
        <div class="flex items-center gap-4 sm:gap-5">
          ${createEmblemSVG({ size: 54, className: 'text-text-primary' })}
          <div class="flex flex-col justify-center">
            <span class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-text-primary uppercase leading-tight">MAISON ÉLAN</span>
            <span class="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.32em] sm:tracking-[0.36em] text-text-muted uppercase mt-1 leading-tight">FASHION &amp; DESIGN ACADEMY</span>
          </div>
        </div>

        <p class="font-serif text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl italic font-normal">
          &ldquo;A sanctuary of classical atelier discipline and contemporary fashion visionary thinking. Shaping the next generation of international couturiers and creative directors.&rdquo;
        </p>
      </div>

      <!-- Hairline Editorial Separator -->
      <hr class="border-t border-border-subtle my-12 lg:my-14" />

      <!-- 2. Middle Editorial Content Grid (Asymmetric Layout) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
        
        <!-- Left: Atelier Social Archives (5 Columns) -->
        <div class="md:col-span-5 space-y-4">
          <span class="text-[10px] font-semibold tracking-[0.26em] uppercase text-text-muted block">Atelier Archives</span>
          <p class="text-xs text-text-secondary leading-relaxed max-w-sm">
            Explore our atelier masterclasses, couture drapery critiques, and graduate runway exhibitions across our archive channels.
          </p>
          <!-- Exactly Four Social Links -->
          <div class="flex items-center gap-2.5 pt-1">
            <a
              href="#social-placeholder-instagram"
              class="w-8.5 h-8.5 inline-flex items-center justify-center border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
              aria-label="MAISON ÉLAN on Instagram (Demo Link)"
              title="Instagram"
            >
              ${SOCIAL_ICONS.instagram}
            </a>
            <a
              href="#social-placeholder-pinterest"
              class="w-8.5 h-8.5 inline-flex items-center justify-center border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
              aria-label="MAISON ÉLAN on Pinterest (Demo Link)"
              title="Pinterest"
            >
              ${SOCIAL_ICONS.pinterest}
            </a>
            <a
              href="#social-placeholder-linkedin"
              class="w-8.5 h-8.5 inline-flex items-center justify-center border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
              aria-label="MAISON ÉLAN on LinkedIn (Demo Link)"
              title="LinkedIn"
            >
              ${SOCIAL_ICONS.linkedin}
            </a>
            <a
              href="#social-placeholder-youtube"
              class="w-8.5 h-8.5 inline-flex items-center justify-center border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-burgundy"
              aria-label="MAISON ÉLAN on YouTube (Demo Link)"
              title="YouTube"
            >
              ${SOCIAL_ICONS.youtube}
            </a>
          </div>
        </div>

        <!-- Center: Navigation (3 Columns) -->
        <div class="md:col-span-3 space-y-4">
          <span class="text-[10px] font-semibold tracking-[0.26em] uppercase text-text-muted block">Navigation</span>
          <ul class="space-y-2 text-xs" role="list">
            <li>
              <a href="index.html" class="text-text-secondary hover:text-text-primary uppercase tracking-[0.18em] transition-colors duration-150 inline-block py-0.5">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" class="text-text-secondary hover:text-text-primary uppercase tracking-[0.18em] transition-colors duration-150 inline-block py-0.5">
                About
              </a>
            </li>
            <li>
              <a href="courses.html" class="text-text-secondary hover:text-text-primary uppercase tracking-[0.18em] transition-colors duration-150 inline-block py-0.5">
                Courses
              </a>
            </li>
            <li>
              <a href="gallery.html" class="text-text-secondary hover:text-text-primary uppercase tracking-[0.18em] transition-colors duration-150 inline-block py-0.5">
                Gallery
              </a>
            </li>
            <li>
              <a href="contact.html" class="text-text-secondary hover:text-text-primary uppercase tracking-[0.18em] transition-colors duration-150 inline-block py-0.5">
                Contact
              </a>
            </li>
            <li class="pt-1">
              <a href="login.html" class="text-text-accent hover:text-text-primary uppercase tracking-[0.18em] font-semibold transition-colors duration-150 inline-block py-0.5">
                Student Login &rarr;
              </a>
            </li>
          </ul>
        </div>

        <!-- Right: Atelier & Admissions Contact (4 Columns) -->
        <div class="md:col-span-4 space-y-4">
          <span class="text-[10px] font-semibold tracking-[0.26em] uppercase text-text-muted block">Atelier Inquiries</span>
          <div class="space-y-3.5 text-xs text-text-secondary">
            <div>
              <span class="block text-[9.5px] uppercase tracking-[0.22em] text-text-muted mb-0.5">Admissions Office:</span>
              <a href="mailto:hello@maisonelan.example" class="text-text-primary hover:text-text-accent transition-colors font-medium">
                hello@maisonelan.example
              </a>
            </div>
            <div>
              <span class="block text-[9.5px] uppercase tracking-[0.22em] text-text-muted mb-0.5">Inquiry Desk:</span>
              <a href="tel:+919000000000" class="text-text-primary hover:text-text-accent transition-colors font-medium">
                +91 90000 00000
              </a>
            </div>
            <div>
              <span class="block text-[9.5px] uppercase tracking-[0.22em] text-text-muted mb-0.5">Campus Atelier:</span>
              <span class="text-text-secondary italic">
                Institute Address – To Be Confirmed
              </span>
            </div>
          </div>
          <p class="text-[10px] text-text-muted tracking-wide pt-1 italic">
            Institutional coordinates shown are demo placeholders reserved for configuration.
          </p>
        </div>

      </div>

      <!-- 3. Bottom Bar: Dynamic Copyright & Editorial Standard -->
      <div class="pt-8 mt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <div>
          <span>&copy; <span id="footer-year">${currentYear}</span> MAISON ÉLAN — Fashion &amp; Design Academy. All rights reserved.</span>
        </div>
        <div class="flex items-center gap-6 text-[11px] uppercase tracking-[0.16em]">
          <span>Haute Couture &amp; Atelier Education</span>
          <span>Static Vercel Multi-Page Architecture</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Creates the auth layout variant footer (login.html).
 * @param {number} currentYear
 * @returns {string}
 */
function createAuthFooterHTML(currentYear) {
  return `
    <div class="container-standard py-8 border-t border-border-subtle text-center space-y-2 text-xs text-text-muted">
      <div>
        <span>&copy; <span id="footer-year">${currentYear}</span> MAISON ÉLAN — Student Authentication Gateway</span>
      </div>
      <p class="text-[10.5px] text-text-muted opacity-80 uppercase tracking-wider">
        Authorized student and atelier faculty access only. Protected by TLS encryption.
      </p>
    </div>
  `;
}

/**
 * Creates the dashboard layout variant footer (dashboard.html).
 * @param {number} currentYear
 * @returns {string}
 */
function createDashboardFooterHTML(currentYear) {
  return `
    <div class="container-standard py-5 sm:py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
      <div>
        <span>&copy; <span id="footer-year">${currentYear}</span> MAISON ÉLAN — Student Atelier Workspace</span>
      </div>
      <div class="flex items-center gap-4 text-[11px] uppercase tracking-wider">
        <span>Academic Year: 2026/2027</span>
        <a href="mailto:hello@maisonelan.example" class="hover:text-text-primary transition-colors">Atelier Support</a>
      </div>
    </div>
  `;
}

/**
 * Public function to render the global footer component.
 * @param {Object} options
 * @param {HTMLElement} options.container
 * @param {'public' | 'auth' | 'dashboard'} [options.variant='public']
 */
export function renderFooter({ container, variant = 'public' }) {
  if (!container) return;

  const currentYear = new Date().getFullYear();

  if (variant === 'auth') {
    container.innerHTML = createAuthFooterHTML(currentYear);
  } else if (variant === 'dashboard') {
    container.innerHTML = createDashboardFooterHTML(currentYear);
  } else {
    container.innerHTML = createPublicFooterHTML(currentYear);
  }
}
