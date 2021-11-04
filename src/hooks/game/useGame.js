import { useQuery } from 'react-query'
import { getGameInfo } from '../../api/game'
import usePlayGame from './usePlayGame'

const GAME_PARAMS = {
  brandId: 'd05777ad-26fc-4d76-a44b-d462b6c1a181',
}

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5ndXllbiIsInJvbGUiOiJCcmFuZCBNYW5hZ2VyIiwibmJmIjoxNjM1OTUyNjU0LCJleHAiOjE2MzY1NTc0NTQsImlhdCI6MTYzNTk1MjY1NH0.D_3zHh5p_FyeDVFiYvc11xEzPIw47dvn16zCfX8Vw_I'

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

    const badgeCode = randomRewards.displayText
    console.log(`badgeCode`, badgeCode)
    return mutateAsync({ gameId: gameConfigId, data: { badgeCode } }).then(
      (res) => randomRewards
    )
  }

  return {
    gameConfig,
    playGameAsync,
    isGettingReward,
    ...others,
  }
}

export default useGame
