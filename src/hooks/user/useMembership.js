import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'
import useUser from './useUser'

const useMembership = () => {
  const { id } = useUser()
  const { data: memberships, ...others } = useQuery(
    ['user', id, 'memberships'],
    () => axiosClient.get(`/customers/${id}/memberships`),
    {
      enabled: Boolean(id),
    }
  )

  const currentMembership = memberships?.find((m) => m.currentTierFlg)

  const nextMembership =
    currentMembership &&
    memberships?.find(
      (m) =>
        m.programTier.tierIndex === currentMembership.programTier.tierIndex + 1
    )

  return {
    memberships,
    currentMembership,
    nextMembership,
    ...others,
  }
}

export default useMembership
