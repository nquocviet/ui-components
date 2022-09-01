import { useState } from 'react'

const useClipboard = (timeout) => {
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<any>(null)

  const handleCopyResult = () => {
    if (timeout) {
      clearTimeout(copyTimeout)
      setCopyTimeout(setTimeout(() => setCopied(false), timeout))
    }

    setCopied(true)
  }

  const copy = async (value: any) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(value)

      handleCopyResult()
    } else {
      console.log('navigator.clipboard is not supported in your browser.')
    }
  }

  const reset = () => {
    setCopied(false)
    clearTimeout(copyTimeout)
  }

  return { copy, reset, copied }
}

export default useClipboard
