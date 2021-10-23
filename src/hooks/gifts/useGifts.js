import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'

const ACB_BRAND_ID = '8cbac6f4-6578-4920-8825-586d1634ff1b'

const useGifts = () => {
  return useQuery(['brands', ACB_BRAND_ID, 'gifts'], () =>
    axiosClient.get(`/brands/${ACB_BRAND_ID}/gift-groups`)
  )
}

export default useGifts
