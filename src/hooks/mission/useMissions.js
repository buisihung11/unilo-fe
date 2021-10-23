import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'

const useMissions = () => {
  return useQuery(['missions'], () => axiosClient.get(`/missions`), {
    select: (res) => res.missions,
  })
}

export default useMissions
