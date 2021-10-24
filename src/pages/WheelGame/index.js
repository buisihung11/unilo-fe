import React, { useCallback, useEffect, useMemo, useState } from 'react'
import WinWheel from 'winwheeljs'
import useSound from 'use-sound'
import {
  Box,
  Button,
  CustomerSummary,
  DashedLine,
  Dialog,
} from '../../components'
import {
  Overlay,
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Wheel from '../../components/Wheel'
import clickSfx from '../../assets/sounds/button-click.wav'
import rewardSfx from '../../assets/sounds/reward.wav'
import badLuckSfx from '../../assets/sounds/bad-luck.wav'
import wheelMusicSfx from '../../assets/sounds/wheel-music.mp3'
import useSetting from '../../hooks/useSetting'
import usePlayGame from '../../hooks/game/usePlayGame'
import backIcon from '../../assets/icons/back.png'
import mascot from '../../assets/images/reward-bear.png'
import { useHistory } from 'react-router'
import Icon from '../../components/Icon'
import { sleep } from '../../utils/utils'
import { useQuery } from 'react-query'
import { getGameInfo } from '../../api/game'
import useGame from '../../hooks/game/useGame'
import CircularLoaddingDialog from '../../components/Loading/CircularLoaddingDialog'
import ErrorDialog from '../../components/Dialog/ErrorDialog'

const GAMEID = '23a84279-5011-4ec3-8719-35a7ea3ac7d2'

const WheelGamePage = () => {
  const history = useHistory()
  const { mute } = useSetting()

  const [error, setError] = useState(null)
  const [clickSound] = useSound(clickSfx, {
    soundEnabled: !mute,
  })
  const [rewardSound] = useSound(rewardSfx, {
    soundEnabled: !mute,
  })
  const [badLuckSound] = useSound(badLuckSfx, {
    soundEnabled: !mute,
  })
  const [wheelGameSound, { stop: stopGameSound }] = useSound(wheelMusicSfx, {
    soundEnabled: !mute,
  })

  const { gameConfig, playGameAsync, isGettingReward } = useGame(GAMEID)

  const [isPlaying, setIsPlaying] = useState(false)
  const [prizeIdx, setPrizeIdx] = useState(null)

  const gameRewards = useMemo(
    () =>
      gameConfig?.gameItems?.map((gameItem) => ({
        text: gameItem.description,
        fillStyle: gameItem.itemColor,
      })) ?? [],
    [gameConfig]
  )

  const prize = gameConfig?.gameItems && gameConfig.gameItems[prizeIdx]
  const badLuck = prize?.displayText === 'LUCKY_NEXT_TIME'

  const startPlayGame = useCallback(async () => {
    if (isPlaying || prizeIdx) return
    clickSound()
    await sleep(1000)
    try {
      const rewardIdx = await playGameAsync()
      // getReward(gameConfig.id)
      console.log(`rewardIdx`, rewardIdx)
      setIsPlaying(true)
      setPrizeIdx(/* rewardIdx */ 3)
    } catch (error) {
      const errMsg = error.response.data?.message ?? 'Có lỗi'
      setError(errMsg)
    }
  }, [isPlaying, prizeIdx, clickSound, playGameAsync])

  useEffect(() => {
    if (isPlaying) {
      wheelGameSound()
    } else {
      stopGameSound()
    }
  }, [isPlaying, stopGameSound, wheelGameSound])

  const onFinishRotate = () => {
    console.log(`prize.displayText`, prize.displayText)
    if (badLuck) {
      badLuckSound()
    } else {
      rewardSound()
    }

    setIsPlaying(false)
  }

  const resetGame = () => {
    setIsPlaying(false)
    setPrizeIdx(null)
  }

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Overlay />
      {isGettingReward && <CircularLoaddingDialog />}
      <ErrorDialog
        visible={Boolean(error)}
        errorMsg={error}
        onClose={() => setError(null)}
      />
      <Dialog
        visible={Boolean(prize && !isPlaying)}
        headerTitle={
          <Text fontWeight="bold" color="white">
            Phần thưởng
          </Text>
        }
        extraHeader={
          <Box pr={4} as="img" src={mascot} width={140} height="auto" />
        }
        footer={
          <Button onClick={resetGame} variant="primary">
            <h4>Quay lại</h4>
          </Button>
        }
      >
        <Box textAlign="center">
          <div style={{ width: '100%' }}>
            <h2>{badLuck ? 'Tiếc quá ' : 'Chúc mừng'}</h2>
            <DashedLine />
            {!badLuck && <p>Bạn đã nhận được 01 phần quà</p>}
            <Box style={{ 'overflow-wrap': 'break-word' }}>
              <Text fontSize="3rem">{prize?.displayText}</Text>
            </Box>
          </div>
        </Box>
      </Dialog>
      <Layout
        Header={
          <Box p={2} display="flex">
            <Icon img={backIcon} onClick={() => history.replace('/')} />
          </Box>
        }
        Content={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            zIndex="90"
            p={2}
            position="relative"
            overflow="hidden"
          >
            <Text as="h1" fontSize="2rem" color="#fff" pb={2}>
              Vòng quay may mắn
            </Text>
            <Wheel
              segments={gameRewards}
              onStart={startPlayGame}
              onFinish={onFinishRotate}
              rewardSegmentIdx={prizeIdx}
              isPlaying={isPlaying}
              width="100%"
              height="auto"
              aspectRatio={'1/1'}
              style={{ cursor: 'pointer' }}
            />

            {prize && !isPlaying && (
              <Button onClick={resetGame}>Chơi lại</Button>
            )}
            {/* <Box width="300px" height="300px">
              <canvas id="wheel-canvas" width="300" height="300"></canvas>
            </Box> */}
          </Box>
        }
        Footer={<CustomerSummary />}
      />
    </StyledUniloWrapper>
  )
}

export default WheelGamePage
