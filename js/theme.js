/**
 * MAISON ÉLAN — Theme Management (Light / Dark Mode)
 * Ensures zero-flicker initialization, persistent preferences, and system fallbacks.
 */

export const THEME_STORAGE_KEY = 'maison-elan-theme';
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

/**
 * Returns user's stored theme preference if one exists.
 * @returns {'light' | 'dark' | null}
 */
export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === THEME_LIGHT || stored === THEME_DARK) {
      return stored;
    }
  } catch (e) {
    console.warn('[Maison Élan Theme] Storage access error:', e);
  }
  return null;
}

/**
 * Returns the OS system theme preference.
 * @returns {'light' | 'dark'}
 */
export function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME_DARK;
  }
  return THEME_LIGHT;
}

/**
 * Returns current effective theme from the DOM or system.
 * @returns {'light' | 'dark'}
 */
export function getTheme() {
  const currentAttr = document.documentElement.getAttribute('data-theme');
  if (currentAttr === THEME_LIGHT || currentAttr === THEME_DARK) {
    return currentAttr;
  }
  return getStoredTheme() || getSystemTheme();
}

/**
 * Applies and persists the specified theme.
 * @param {'light' | 'dark'} theme
 * @param {boolean} [save=true] Whether to save to localStorage
 */
export function setTheme(theme, save = true) {
  const targetTheme = theme === THEME_DARK ? THEME_DARK : THEME_LIGHT;

  document.documentElement.setAttribute('data-theme', targetTheme);
  if (targetTheme === THEME_DARK) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (save) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, targetTheme);
    } catch (e) {
      console.warn('[Maison Élan Theme] Unable to persist theme:', e);
    }
  }

  // Dispatch custom event for reactive UI components
  window.dispatchEvent(
    new CustomEvent('maison-elan:theme-changed', {
      detail: { theme: targetTheme },
    })
  );

  return targetTheme;
}

/**
 * Toggles between light and dark mode.
 * @returns {'light' | 'dark'} The new active theme
 */
export function toggleTheme() {
  const current = getTheme();
  const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  return setTheme(next, true);
}

/**
 * Initializes theme listeners and handles cross-tab / OS sync.
 */
export function initTheme() {
  const initialTheme = getStoredTheme() || getSystemTheme();
  setTheme(initialTheme, false);

  // Sync when OS theme changes if user hasn't explicitly set a preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? THEME_DARK : THEME_LIGHT, false);
      }
    });
  }

  // Cross-tab synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_STORAGE_KEY && e.newValue) {
      if (e.newValue === THEME_LIGHT || e.newValue === THEME_DARK) {
        setTheme(e.newValue, false);
      }
    }
  });

  return initialTheme;
}

