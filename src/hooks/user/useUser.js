import { useMemo } from 'react'
import { useQuery } from 'react-query'

const useUser = (token) => {
  const data = useQuery(
    ['user', 'profile', token],
    () => {
      return new Promise((res) => {
        setTimeout(() => {
          const userData = {
            id: 123,
            fullName: 'Nguời chơi 1',
          }
          return res(userData)
        }, 1000)
      })
    },
    {
      enabled: Boolean(token),
      staleTime: Infinity, // only refetch when reveive invalidate query command
    }
  )

  const value = useMemo(
    () => ({ ...(data || {}), isAuthenticated: Boolean(data) }),
    [data]
  )
  return value
}

export default useUser
