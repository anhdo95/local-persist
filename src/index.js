import * as util from './util'
import * as stub from './stub'

const localPersist = 'localStorage' in global ? global.localStorage : stub

function get(key) {
  try {
    return JSON.parse(localPersist.getItem(key))
  } catch (e) {
    return localPersist.getItem(key)
  }
}

function set(key, value) {
  try {
    if (util.isObject(value)) {
      localPersist.setItem(key, JSON.stringify(value))
      return true
    }

    localPersist.setItem(key, value)
    return true
  } catch (e) {
    return false
  }
}

function remove(key) {
  return localPersist.removeItem(key)
}

function clear() {
  return localPersist.clear()
}

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
