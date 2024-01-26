export const setLocalStorageValue = (key: string, value: string | null) => {
  const oldValue = localStorage.getItem(key)
  if (oldValue === value) return
  localStorage.setItem(key, value ?? '')
  window.dispatchEvent(
    new StorageEvent('storage', {
      key,
      newValue: value,
      oldValue,
      storageArea: localStorage,
    })
  )
}

export const deleteLocalStorageValue = (key: string) => {
  const oldValue = localStorage.getItem(key)
  localStorage.removeItem(key)
  window.dispatchEvent(
    new StorageEvent('storage', {
      key,
      newValue: null,
      oldValue,
      storageArea: localStorage,
    })
  )
}
