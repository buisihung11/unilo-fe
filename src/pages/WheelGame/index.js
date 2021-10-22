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
import backIcon from '../../assets/icons/back.png'
import mascot from '../../assets/images/reward-bear.png'
import { useHistory } from 'react-router'
import Icon from '../../components/Icon'
import { sleep } from '../../utils/utils'
import { useQuery } from 'react-query'
import { getGameInfo } from '../../api/game'

const DEFAULT_DURATION = 5000 /* ms */
const DEFAULT_ROTATE = 360 * 10 /* ms */

// const gameRewards = [
//   'Voucher 20K',
//   'Voucher 50K',
//   'Voucher 70K',
//   'Voucher 25K',
//   'BAD LUCK',
//   'Voucher 200K',
//   'Voucher 500K',
//   'Voucher 800K',
// ]

const GAME_PARAMS = {
  gameConfigId: '23a84279-5011-4ec3-8719-35a7ea3ac7d2',
  brandId: 'd05777ad-26fc-4d76-a44b-d462b6c1a181',
}

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im5ndXllbiIsInJvbGUiOiJCcmFuZCBNYW5hZ2VyIiwibmJmIjoxNjM0ODAxODQwLCJleHAiOjE2MzU0MDY2NDAsImlhdCI6MTYzNDgwMTg0MH0.TC1QgyPpVLRLUqiVrm5SkLYOV2NZ0287HAtRXHkbqFM'

// const theWheel = window.WinWheel()

// console.log(theWheel)

const WheelGamePage = () => {
  const history = useHistory()
  const { mute } = useSetting()
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

  const { data: gameConfig } = useQuery(
    ['minigame', 'wheel', 'config'],
    () =>
      getGameInfo(GAME_PARAMS, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }),
    {
      select: (res) => res?.data,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  )

  const [isPlaying, setIsPlaying] = useState(false)
  const [prizeIdx, setPrizeIdx] = useState(null)

  const gameRewards = useMemo(
    () =>
      gameConfig?.gameItems?.map((gameItem) => ({
        text: gameItem.displayText,
        fillStyle: gameItem.itemColor,
      })) ?? [],
    [gameConfig]
  )

  const prize = gameConfig?.gameItems && gameConfig.gameItems[prizeIdx]
  const badLuck = prize?.displayText === 'Chúc bạn may mắn lần sau'

  const startPlayGame = useCallback(async () => {
    if (isPlaying || prizeIdx) return
    clickSound()
    await sleep(1000)
    const rewardIdx = Math.floor(Math.random() * gameRewards.length)
    console.log(`rewardIdx`, rewardIdx)
    setIsPlaying(true)
    setPrizeIdx(rewardIdx)
  }, [clickSound, isPlaying, prizeIdx, gameRewards])

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
