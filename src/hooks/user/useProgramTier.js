import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'

const useProgramTier = (programId) => {
  const { data: tiers, ...others } = useQuery(
    ['program', programId, 'programTiers'],
    () =>
      axiosClient.get('', {
        params: {
          programId: programId,
        },
      }),
    {
      enabled: Boolean(programId),
    }
  )

  return {
    tiers,
    ...others,
  }
}

export default useProgramTier
