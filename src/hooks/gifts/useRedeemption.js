import { useMutation, useQueryClient } from 'react-query'
import axiosClient from '../../utils/axios'
import useMembership from '../user/useMembership'
import useUser from '../user/useUser'

const useRedeemption = () => {
  const queryClient = useQueryClient()
  const { id } = useUser()
  const { currentMembership } = useMembership()

  const mutate = useMutation(
    (voucherId) =>
      axiosClient.post(`/gift-groups/${voucherId}/redeempt`, {
        membershipId: currentMembership.id,
      }),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(['user', id, 'gift-items']),
    }
  )

  return mutate
}

export default useRedeemption
