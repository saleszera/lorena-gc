import { useEffect, useState } from "react"

interface IUseDebounce {
  interval?: number
  value: any
}

const useDebounce = ({value, interval = 500}: IUseDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, interval)

    return () => {
      clearTimeout(timer)
    }
  }, [value, interval])

  return debouncedValue
}

export default useDebounce