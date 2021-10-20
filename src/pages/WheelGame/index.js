import React, { useCallback, useEffect, useState } from 'react'
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

const DEFAULT_DURATION = 5000 /* ms */
const DEFAULT_ROTATE = 360 * 10 /* ms */

const gameRewards = [
  'Voucher 20K',
  'Voucher 50K',
  'Voucher 70K',
  'Voucher 25K',
  'BAD LUCK',
  'Voucher 200K',
  'Voucher 500K',
  'Voucher 800K',
]
const WheelGamePage = () => {
  const history = useHistory()
  const { mute } = useSetting()

  const [isPlaying, setIsPlaying] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [rotateDeg, setRotateDeg] = useState(0)
  const [prize, setPrize] = useState(null)

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

  const startPlayGame = useCallback(async () => {
    if (isPlaying || prize) return
    setIsPlaying(true)
    clickSound()
    // API TO PLAY GAME
    console.log('SHOW LOADING....')
    console.log('PLAY WHEEL GAME....')
    await sleep(1000)
    // GET REWARD ITEM
    const rewardIdx = Math.floor(Math.random() * gameRewards.length)
    const rotateDeg =
      DEFAULT_ROTATE + (rewardIdx + 1) * Math.ceil(360 / gameRewards.length)
    console.log(`WINNING PRIZE`, rewardIdx)
    // SPIN TO THAT ITEM
    console.log('START SPIN....')
    setRotateDeg(rotateDeg)
    setRotate(true)
    await sleep(DEFAULT_DURATION)

    setPrize(gameRewards[rewardIdx])
    if (gameRewards[rewardIdx] === 'BAD LUCK') {
      badLuckSound()
    } else {
      rewardSound()
    }
    setIsPlaying(false)
  }, [clickSound, rewardSound, badLuckSound, isPlaying, prize])

  useEffect(() => {
    if (isPlaying) {
      wheelGameSound()
    } else {
      stopGameSound()
    }
  }, [isPlaying, stopGameSound, wheelGameSound])

  const resetGame = () => {
    setIsPlaying(false)
    setPrize(null)
    setRotate(false)
    setRotateDeg(0)
  }

  console.log(`prize`, prize)

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Overlay />
      <Dialog
        visible={Boolean(prize)}
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
            <h4>Tiếp tục</h4>
          </Button>
        }
      >
        <Box textAlign="center">
          <div style={{ width: '100%' }}>
            <h2>Chúc mừng</h2>
            <DashedLine />
            <p>Bạn đã nhận được 01 phần quà</p>
            <Text fontSize="3rem">{prize}</Text>
          </div>
          <div style={{ width: '100%' }}>
            <DashedLine />
            <p>Bạn có muốn tiếp tục?</p>
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
              onClick={startPlayGame}
              isRotate={rotate}
              deg={rotateDeg}
              duration={DEFAULT_DURATION}
              width="100%"
              height="auto"
              aspectRatio={'1/1'}
              style={{ cursor: 'pointer' }}
            />

            {prize && !isPlaying && (
              <Button onClick={resetGame}>Chơi lại</Button>
            )}
          </Box>
        }
        Footer={<CustomerSummary />}
      />
    </StyledUniloWrapper>
  )
}

export default WheelGamePage
