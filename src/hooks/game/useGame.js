import { useQuery } from 'react-query'
import { getGameInfo } from '../../api/game'
import usePlayGame from './usePlayGame'

const GAME_PARAMS = {
  brandId: 'd05777ad-26fc-4d76-a44b-d462b6c1a181',
}

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5ndXllbiIsInJvbGUiOiJCcmFuZCBNYW5hZ2VyIiwibmJmIjoxNjM0ODAxODQwLCJleHAiOjE2MzU0MDY2NDAsImlhdCI6MTYzNDgwMTg0MH0.TC1QgyPpVLRLUqiVrm5SkLYOV2NZ0287HAtRXHkbqFM'

const useGame = (gameConfigId) => {
  const { data: gameConfig, ...others } = useQuery(
    ['minigame', gameConfigId],
    () =>
      getGameInfo(
        {
          gameConfigId,
          brandId: GAME_PARAMS.brandId,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      ),
    {
      enabled: Boolean(gameConfigId),
      select: (res) => res?.data,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  )

  const { mutateAsync, isLoading: isGettingReward } = usePlayGame()

  const playGameAsync = () => {
    if (!Array.isArray(gameConfig?.gameItems)) return

    const rewardIdx = Math.floor(Math.random() * gameConfig?.gameItems.length)
    const randomRewards = gameConfig?.gameItems[rewardIdx]

    const badgeCode = randomRewards.name

    return mutateAsync(gameConfigId, { badgeCode })
  }

  return {
    gameConfig,
    playGameAsync,
    isGettingReward,
    ...others,
  }
}

export default useGame
