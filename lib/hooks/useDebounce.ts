// Debounce inspired by https://usehooks-ts.com/react-hook/use-debounce
// delays callback value with x seconds

import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
