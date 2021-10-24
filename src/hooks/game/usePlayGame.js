import { useMutation, useQueryClient } from 'react-query'
import axiosClient from '../../utils/axios'
import useUser from '../user/useUser'

const usePlayGame = () => {
  const queryClient = useQueryClient()
  const { id } = useUser()
  const mutate = useMutation(
    (gameId) => axiosClient.post(`/game/${gameId}/play`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', id, 'wallets'])
      },
    }
  )
  return mutate
}

export default usePlayGame
