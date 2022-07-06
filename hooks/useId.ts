import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useId = (): string => {
  const [id] = useState(uuidv4())

  return id
}

export default useId
