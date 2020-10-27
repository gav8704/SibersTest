
/**
 * Check if key exists in local storage
 * @param  {string} key
 * @returns {boolean}
 */
export const localStorageHas = key => {
  const item = localStorage.getItem(key)

  return item !== null 
}

/**
 * Retrive an object from local storage.
 * @param {string} key
 * @returns {*}
 */
export const localStorageGet = key => {
  const item = localStorage.getItem(key)

  if (item[0] === '{' || item[0] === '[') {
    return JSON.parse(item)
  } else if (!item) {
    return
  } else {
    return item
  }
}

/**
 * Save some value to local storage.
 * @param {string} key    
 * @param {*} value
 */
export const localStorageSave = (key, value) => {
  if ( typeof(value) === 'object' ) {
    value = JSON.stringify(value)
  }

  localStorage.setItem(key, value)
}

/**
 * Remove element from local storage.
 * @param {string} key 
 */
export const localStorageRemove = key => {
  localStorage.removeItem(key)
}