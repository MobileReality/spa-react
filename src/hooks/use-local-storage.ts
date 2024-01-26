import { useCallback, useEffect, useState } from 'react'

import { setLocalStorageValue } from '#utils/local-storage'

type SetValueFunction = (newValue: string | null) => void

export const useLocalStorage = (
  key: string
): [string | null, SetValueFunction] => {
  const [value, setValue] = useState<string | null>(localStorage.getItem(key))

  useEffect(() => {
    const listener = () => {
      const newValue = localStorage.getItem(key)
      if (value === newValue) return
      setValue(newValue)
    }

    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [value, key])

  const returnSetValue = useCallback(
    (newValue: string | null) => {
      if (value === newValue) return
      setLocalStorageValue(key, newValue)
    },
    [key, value]
  )

  return [value, returnSetValue]
}
