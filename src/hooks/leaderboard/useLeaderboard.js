import { useQuery } from 'react-query'
import { sleep } from '../../utils/utils'
import faker from 'faker'

faker.locale = 'vi'

const MOCKUP_DATA = [...new Array(10)].map(() => ({
  avatar: faker.image.cats(),
  userName: faker.name.findName(),
  membership: faker.random.arrayElement(['Vàng', 'Bạc', 'Đồng']),
  totalNut: faker.datatype.number(30),
  totalBadge: faker.datatype.number(30),
}))

const useLeaderboard = () => {
  return useQuery(['leaderboard'], async () => {
    await sleep(1000)
    return MOCKUP_DATA
  })
}

export default useLeaderboard
