/**
 * Save a value to localStorage.
 * @param {string} key - The key under which to save the value.
 * @param {*} value - The value to be saved.
 * @returns {void}
 */
function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

/**
 * Get a value from localStorage.
 * @param {string} key - The key of the value to retrieve.
 * @returns {*} - The retrieved value, or null if the key does not exist.
 */
function getFromLocalStorage(key: string): any {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return null;
  }
}

/**
 * Remove a value from localStorage.
 * @param {string} key - The key of the value to remove.
 * @returns {void}
 */
function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
}

/**
 * Check if a key exists in localStorage.
 * @param {string} key - The key to check.
 * @returns {boolean} - True if the key exists in localStorage, false otherwise.
 */
function existsInLocalStorage(key: string): boolean {
  try {
    return key in localStorage;
  } catch (error) {
    console.error('Error checking localStorage:', error);
    return false;
  }
}

/**
 * Clear localStorage completely.
 * @returns {void}
 */
function clearLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

export {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  existsInLocalStorage,
  clearLocalStorage,
};