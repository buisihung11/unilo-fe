import { useMutation, useQueryClient } from 'react-query'
import axiosClient from '../../utils/axios'
import useMembership from '../user/useMembership'
import useUser from '../user/useUser'

const usePlayGame = () => {
  const queryClient = useQueryClient()
  const { id } = useUser()
  const { currentMembership } = useMembership()
  const mutate = useMutation(
    ({ gameId, data }) =>
      axiosClient.post(`/game/${gameId}/play`, {
        ...data,
        membershipId: currentMembership.id,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', id, 'wallets'])
      },
    }
  )
  return mutate
}

export default usePlayGame
