/**
 * MAISON ÉLAN — Main Application Script
 * Orchestrates Global Components (Header, Footer, Navigation, Theme, Direction)
 * Pure Static Architecture (No Vite / No Frameworks)
 */

import { initTheme, toggleTheme, getTheme, THEME_DARK } from './theme.js';
import { initDirection, toggleDirection, getDirection, DIR_RTL } from './direction.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

/**
 * Initializes the global application components and layout shells.
 */
function initializeApp() {
  // 1. Initialize Theme and Direction foundations
  const activeTheme = initTheme();
  const activeDir = initDirection();

  // 2. Render Shared Header
  const headerContainer = document.getElementById('site-header');
  if (headerContainer) {
    const variant = headerContainer.getAttribute('data-variant') || 'public';
    const activePage = headerContainer.getAttribute('data-active-page') || '';
    renderHeader({
      container: headerContainer,
      variant,
      activePage,
    });
  }

  // 3. Render Shared Footer
  const footerContainer = document.getElementById('site-footer');
  if (footerContainer) {
    const variant = footerContainer.getAttribute('data-variant') || 'public';
    renderFooter({
      container: footerContainer,
      variant,
    });
  }

  // 4. Setup in-page verification controls if present on the page
  setupPageVerificationControls();

  console.info(
    `%c MAISON ÉLAN %c Global Components Initialized %c [Theme: ${activeTheme}] [Dir: ${activeDir}]`,
    'background: #171717; color: #F4F0E8; font-weight: bold; padding: 4px 8px; border-radius: 2px;',
    'background: #7B263A; color: #FFFFFF; font-weight: bold; padding: 4px 8px; border-radius: 2px;',
    'background: #B79A78; color: #171717; padding: 4px 8px; border-radius: 2px;'
  );
}

/**
 * Attaches handlers to in-page verification controls (if present in the validation shells).
 */
function setupPageVerificationControls() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const dirToggleBtn = document.getElementById('dir-toggle-btn');
  const themeStatusBadge = document.getElementById('theme-status-badge');
  const dirStatusBadge = document.getElementById('dir-status-badge');

  function updateStatusDisplay() {
    const currentTheme = getTheme();
    const currentDir = getDirection();

    if (themeStatusBadge) {
      themeStatusBadge.textContent = currentTheme.toUpperCase();
      themeStatusBadge.setAttribute('data-current', currentTheme);
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-pressed', currentTheme === THEME_DARK ? 'true' : 'false');
    }

    if (dirStatusBadge) {
      dirStatusBadge.textContent = currentDir.toUpperCase();
      dirStatusBadge.setAttribute('data-current', currentDir);
    }
    if (dirToggleBtn) {
      dirToggleBtn.setAttribute('aria-pressed', currentDir === DIR_RTL ? 'true' : 'false');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      toggleTheme();
      updateStatusDisplay();
    });
  }

  if (dirToggleBtn) {
    dirToggleBtn.addEventListener('click', () => {
      toggleDirection();
      updateStatusDisplay();
    });
  }

  window.addEventListener('maison-elan:theme-changed', updateStatusDisplay);
  window.addEventListener('maison-elan:direction-changed', updateStatusDisplay);

  updateStatusDisplay();
}

// Execute on DOM ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
