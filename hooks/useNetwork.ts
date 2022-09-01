import { useState, useEffect, useCallback } from 'react'
import useWindowEvent from './useWindowEvent'

type NetworkEffectiveTypes = 'slow-2g' | '2g' | '3g' | '4g'

type NetWorkTypes =
  | 'bluetooth'
  | 'cellular'
  | 'ethernet'
  | 'wifi'
  | 'wimax'
  | 'none'
  | 'other'
  | 'unknown'

type NetworkStatus = {
  downlink?: number
  downlinkMax?: number
  effectiveType?: NetworkEffectiveTypes
  rtt?: number
  saveData?: boolean
  type?: NetWorkTypes
}

const getConnection = (): NetworkStatus => {
  if (typeof navigator === 'undefined') {
    return {}
  }

  const _navigator = navigator as any
  const connection: any =
    _navigator.connection ||
    _navigator.mozConnection ||
    _navigator.webkitConnection

  if (!connection) {
    return {}
  }

  return {
    downlink: connection?.downlink,
    downlinkMax: connection?.downlinkMax,
    effectiveType: connection?.effectiveType,
    rtt: connection?.rtt,
    saveData: connection?.saveData,
    type: connection?.type,
  }
}

const useNetwork = () => {
  const [status, setStatus] = useState<{ online: boolean } & NetworkStatus>({
    online: true,
  })

  const handleConnectionChange = useCallback(
    () => setStatus((current) => ({ ...current, ...getConnection() })),
    []
  )

  useWindowEvent('online', () =>
    setStatus({ online: true, ...getConnection() })
  )
  useWindowEvent('offline', () =>
    setStatus({ online: false, ...getConnection() })
  )

  useEffect(() => {
    if (navigator.connection) {
      setStatus({ online: true, ...getConnection() })
      navigator.connection.addEventListener('change', handleConnectionChange)

      return () =>
        navigator.connection.removeEventListener(
          'change',
          handleConnectionChange
        )
    }

    return undefined
  }, [])

  return status
}

export default useNetwork
