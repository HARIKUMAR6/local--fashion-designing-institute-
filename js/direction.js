/**
 * MAISON ÉLAN — Direction Management (LTR / RTL)
 * Enforces layout direction changes with CSS logical properties while keeping content in English.
 */

export const DIR_STORAGE_KEY = 'maison-elan-dir';
export const DIR_LTR = 'ltr';
export const DIR_RTL = 'rtl';

/**
 * Returns stored direction preference if set.
 * @returns {'ltr' | 'rtl' | null}
 */
export function getStoredDirection() {
  try {
    const stored = localStorage.getItem(DIR_STORAGE_KEY);
    if (stored === DIR_LTR || stored === DIR_RTL) {
      return stored;
    }
  } catch (e) {
    console.warn('[Maison Élan Direction] Storage access error:', e);
  }
  return null;
}

/**
 * Returns current effective layout direction.
 * @returns {'ltr' | 'rtl'}
 */
export function getDirection() {
  const currentAttr = document.documentElement.getAttribute('dir');
  if (currentAttr === DIR_LTR || currentAttr === DIR_RTL) {
    return currentAttr;
  }
  return getStoredDirection() || DIR_LTR;
}

/**
 * Applies and persists layout direction.
 * @param {'ltr' | 'rtl'} dir
 * @param {boolean} [save=true]
 */
export function setDirection(dir, save = true) {
  const targetDir = dir === DIR_RTL ? DIR_RTL : DIR_LTR;

  document.documentElement.setAttribute('dir', targetDir);
  document.documentElement.dir = targetDir;

  if (save) {
    try {
      localStorage.setItem(DIR_STORAGE_KEY, targetDir);
    } catch (e) {
      console.warn('[Maison Élan Direction] Unable to persist direction:', e);
    }
  }

  // Dispatch custom event for directional layout updates
  window.dispatchEvent(
    new CustomEvent('maison-elan:direction-changed', {
      detail: { direction: targetDir },
    })
  );

  return targetDir;
}

/**
 * Toggles layout direction between LTR and RTL.
 * @returns {'ltr' | 'rtl'} The new active direction
 */
export function toggleDirection() {
  const current = getDirection();
  const next = current === DIR_RTL ? DIR_LTR : DIR_RTL;
  return setDirection(next, true);
}

/**
 * Initializes direction listeners and cross-tab sync.
 */
export function initDirection() {
  const initialDir = getStoredDirection() || DIR_LTR;
  setDirection(initialDir, false);

  // Cross-tab synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === DIR_STORAGE_KEY && e.newValue) {
      if (e.newValue === DIR_LTR || e.newValue === DIR_RTL) {
        setDirection(e.newValue, false);
      }
    }
  });

  return initialDir;
}

