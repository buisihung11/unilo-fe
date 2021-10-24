import { useQuery } from 'react-query'
import { WALLET_TYPE } from '../../constraints'
import axiosClient from '../../utils/axios'
import useUser from './useUser'

const useVouchersWallet = () => {
  const { id } = useUser()
  const { data: vouchers, ...others } = useQuery(
    ['user', id, 'gift-items'],
    () => axiosClient.get(`/customers/${id}/gift-items`),
    {
      enabled: Boolean(id),
    }
  )

  const normalizedVouchers = vouchers?.map(({ giftGroup, ...others }) => ({
    ...others,
    ...giftGroup,
  }))

  return {
    vouchers: normalizedVouchers,
    ...others,
  }
}

export default useVouchersWallet
