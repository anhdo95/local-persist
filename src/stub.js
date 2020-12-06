let localPersist = {}

/**
 * When passed a key name, will return that key's value from in-memory store.
 * @param {string} key
 * @returns {T}
 * @template T
 */
export function getItem(key) {
  return localPersist[key]
}

/**
 * When passed a key name and value, will add that key to in-memory store,
 * or update that key's value if it already exists.
 * @param {string} key
 * @param {T} value
 * @template T
 */
export function setItem(key, value) {
  localPersist[key] = value
  return true
}

/**
 * When passed a key name, will remove that key from in-memory store.
 * @param {string} key
 */
export function removeItem(key) {
  const found = key in localPersist
  if (found) {
    return delete localPersist[key]
  }
  return false
}

/**
 * When invoked, will empty all keys out of in-memory store.
 */
export function clear() {
  localPersist = {}
  return true
}
