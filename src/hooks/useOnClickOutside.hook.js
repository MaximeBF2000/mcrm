import { useEffect } from 'react'

export const useOnClickOutside = (ref, callback) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event, ref)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])
}
