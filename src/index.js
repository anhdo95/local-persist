import * as stub from './stub'

/**
 * @type {Storage | stub}
 */
const localPersist = 'localStorage' in global ? global.localStorage : stub

/**
 * When passed a key name, will return that key's value from localStorage.
 * @param {string} key
 * @returns {T | string | null}
 * @template T
 */
function get(key) {
  try {
    return JSON.parse(localPersist.getItem(key))
  } catch (e) {
    return localPersist.getItem(key)
  }
}

/**
 * When passed a key name and value, will add that key to localStorage,
 * or update that key's value if it already exists.
 * @param {string} key
 * @param {T} value
 * @template T
 * @returns {boolean}
 */
function set(key, value) {
  try {
    localPersist.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    return false
  }
}

/**
 * When passed a key name, will remove that key from localStorage.
 * @param {string} key
 */
function remove(key) {
  return localPersist.removeItem(key)
}

/**
 * When invoked, will empty all keys out of localStorage.
 */
function clear() {
  return localPersist.clear()
}

/**
 * When passed a key name and value, will add that key to localStorage,
 * otherwise it will return that key's value from localStorage.
 * @param {string} key
 * @param {T} [value]
 * @returns {T | string | boolean | null}
 * @template T
 */
function accessor(key, value) {
  if (arguments.length === 1) {
    return get(key)
  }
  return set(key, value)
}

accessor.set = set
accessor.get = get
accessor.remove = remove
accessor.clear = clear

export default accessor
