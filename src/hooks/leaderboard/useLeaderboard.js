import { useQuery } from 'react-query'

const useLeaderboard = () => {
  return useQuery(['leaderboard'], () => {})
}
