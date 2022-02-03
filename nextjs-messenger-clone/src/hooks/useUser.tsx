import { useState } from 'react'

const getUserId = () => {
  if (typeof window !== 'undefined') {
    return parseInt(localStorage.getItem('userId') ?? '1', 10)
  }

  return 1
}

const useUser = () => {
  const [userId] = useState(getUserId())

  return {
    userId,
  }
}

export default useUser
