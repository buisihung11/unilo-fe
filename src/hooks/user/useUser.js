import axios from 'axios'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'

const useUser = () => {
  const userId = localStorage.getItem('user_id')
  const token = localStorage.getItem('access_token')
  const { data, isFetching } = useQuery(
    ['user', userId, 'profile', token],
    () => {
      return axiosClient.get(`/customers/${userId}`)
    },
    {
      enabled: Boolean(token && userId),
      staleTime: Infinity, // only refetch when reveive invalidate query command
    }
  )

  const value = useMemo(
    () => ({ ...(data || {}), isFetching, isAuthenticated: Boolean(data) }),
    [data, isFetching]
  )

  return value
}

export default useUser
