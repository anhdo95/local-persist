let localPersist = {}

export function getItem(key) {
  return localPersist[key]
}

export function setItem(key, value) {
  localPersist[key] = value
  return true
}

export function removeItem(key) {
  const found = key in localPersist
  if (found) {
    return delete localPersist[key]
  }
  return false
}

export function clear() {
  localPersist = {}
  return true
}
