import { useState } from 'react'

const useUser = () => {
  const [userId] = useState(1)

  return {
    userId,
  }
}

export default useUser
