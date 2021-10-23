import { useQuery } from 'react-query'
import { WALLET_TYPE } from '../../constraints'
import axiosClient from '../../utils/axios'
import useUser from './useUser'

const useWallets = () => {
  const { id } = useUser()
  const { data: wallets, ...others } = useQuery(
    ['user', id, 'wallets'],
    () => axiosClient.get(`/customers/${id}/wallets`),
    {
      enabled: Boolean(id),
    }
  )

  const pointWallet = wallets?.find(
    (w) => w.walletType?.name === WALLET_TYPE.POINT
  )
  const badge1Wallet = wallets?.find(
    (w) => w.walletType?.name === WALLET_TYPE.BADGE_1
  )
  const badge2Wallet = wallets?.find(
    (w) => w.walletType?.name === WALLET_TYPE.BADGE_2
  )
  const badge3Wallet = wallets?.find(
    (w) => w.walletType?.name === WALLET_TYPE.BADGE_3
  )

  return {
    wallets,
    pointWallet,
    badge1Wallet,
    badge2Wallet,
    badge3Wallet,
    ...others,
  }
}

export default useWallets
