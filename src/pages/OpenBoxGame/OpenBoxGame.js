import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledDarkUnilo, StyledUniloWrapper } from '../../components/AppStyles'
import StyledNut from '../../components/NutStyle'
import {
  Box,
  CustomerSummary,
  BorderText,
  Dialog,
  Button,
  DashedLine,
} from '../../components'
import MiniGameBox from './components/OpenBoxGame'
import useSound from 'use-sound'
import useSetting from '../../hooks/useSetting'
import { sleep } from '../../utils/utils'
import Text from '../../components/Text'
// Sound
import clickSfx from '../../assets/sounds/button-click.wav'
import rewardSfx from '../../assets/sounds/reward.wav'
import badLuckSfx from '../../assets/sounds/bad-luck.wav'
// Images
import backImage from '../../assets/images/back.png'
import mascot from '../../assets/images/reward-bear.png'

const gameRewards = ['Voucher 20K', 'Voucher 50K', 'Voucher 70K', 'BAD LUCK']

export default function OpenBoxGame() {
  const { mute } = useSetting()
  const [isPlaying, setIsPlaying] = useState(false)
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

    console.log(`WINNING PRIZE`, rewardIdx)
    // SPIN TO THAT ITEM
    console.log('START SPIN....')

    setPrize(gameRewards[rewardIdx])
    if (gameRewards[rewardIdx] === 'BAD LUCK') {
      badLuckSound()
    } else {
      rewardSound()
    }
    setIsPlaying(false)
  }, [clickSound, rewardSound, badLuckSound, isPlaying, prize])

  const resetGame = () => {
    setIsPlaying(false)
    setPrize(null)
  }

  return (
    <StyledUniloWrapper>
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
      <StyledDarkUnilo>
        <Link to="/dashboard">
          <img src={backImage} alt="back button" width="65px" />
        </Link>
        <Box display="flex" flexDirection="column" alignItems="center" mt={-1}>
          <BorderText as="h2" color="#FFFFFF" fontWeight="bold">
            Hộp quà bí mật
          </BorderText>
          <BorderText as="h5" color="#3391EC" fontWeight="bold">
            Săn mật cùng ACB Subie
          </BorderText>
          <BorderText as="h4" color="#F1D302" fontWeight="bold" pt={3}>
            1 lượt chơi = 2
            <StyledNut position="relative" top="5px" left="3px" />
          </BorderText>
        </Box>
        <MiniGameBox onPlay={startPlayGame} />
        <CustomerSummary />
      </StyledDarkUnilo>
    </StyledUniloWrapper>
  )
}
