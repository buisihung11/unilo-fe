import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'
import useUser from './useUser'

const useTransactions = () => {
  const { id } = useUser()
  const { data: transactions, ...others } = useQuery(
    ['user', id, 'transactions'],
    () => axiosClient.get(`/customers/${id}/transactions`),
    {
      enabled: Boolean(id),
    }
  )

  return {
    transactions,
    ...others,
  }
}

export default useTransactions
