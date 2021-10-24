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
import { getBadgeImage, sleep } from '../../utils/utils'
import Text from '../../components/Text'
// Sound
import clickSfx from '../../assets/sounds/button-click.wav'
import rewardSfx from '../../assets/sounds/reward.wav'
import badLuckSfx from '../../assets/sounds/bad-luck.wav'
// Images
import backImage from '../../assets/images/back.png'
import mascot from '../../assets/images/reward-bear.png'
import useGame from '../../hooks/game/useGame'
import CircularLoaddingDialog from '../../components/Loading/CircularLoaddingDialog'
import ErrorDialog from '../../components/Dialog/ErrorDialog'

const gameRewards = ['Voucher 20K', 'Voucher 50K', 'Voucher 70K', 'BAD LUCK']

const GAMEID = '2D5698FC-B9B2-4CDD-A503-0FE5E93C1CEA'

export default function OpenBoxGame() {
  const { mute } = useSetting()

  const [showConfirm, setShowConfirm] = useState(false)
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

  const { gameConfig, playGameAsync, isGettingReward } = useGame(GAMEID)
  const [error, setError] = useState(null)

  const startPlayGame = useCallback(async () => {
    if (isPlaying || prize) return
    clickSound()
    await sleep(1000)
    try {
      const reward = await playGameAsync()
      // getReward(gameConfig.id)
      console.log(`reward`, reward)
      setIsPlaying(true)
      setPrize(reward)
      if (reward.displayText === 'LUCKY_NEXT_TIME') {
        badLuckSound()
      } else {
        rewardSound()
      }
      setIsPlaying(false)
    } catch (error) {
      const errMsg = error.response?.data?.message ?? 'Có lỗi'
      setError(errMsg)
    }
  }, [isPlaying, prize, clickSound, playGameAsync, badLuckSound, rewardSound])

  const resetGame = () => {
    setIsPlaying(false)
    setPrize(null)
  }

  const totalItem =
    Array.isArray(gameConfig?.gameItems) && gameConfig?.gameItems.length

  return (
    <StyledUniloWrapper>
      {isGettingReward && <CircularLoaddingDialog />}
      <ErrorDialog
        visible={Boolean(error)}
        errorMsg={error}
        onClose={() => setError(null)}
      />
      <Dialog
        visible={Boolean(showConfirm)}
        headerTitle="Xác nhận"
        footer={
          <Box display="flex" justifyContent="space-around">
            <Button
              width="150px"
              variant="success"
              onClick={() => setShowConfirm(false)}
            >
              Quay lại
            </Button>
            <Button
              width="150px"
              onClick={() => {
                setShowConfirm(false)
                startPlayGame()
              }}
            >
              Xác nhận
            </Button>
          </Box>
        }
      >
        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="1rem">
            Bạn có muốn mở hộp quà này?
          </Text>
        </Box>
      </Dialog>
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
            <Box as="img" src={prize?.imgUrl} width={75} height="auto" />
            <Text color="white" fontSize="2rem">
              {prize?.description}
            </Text>
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
        <Box
          mb={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={-1}
        >
          <BorderText as="h2" color="#FFFFFF" fontWeight="bold">
            Hộp quà bí mật
          </BorderText>
          <BorderText as="h5" color="#3391EC" fontWeight="bold">
            Săn mật cùng ACB Subie
          </BorderText>
          <BorderText as="h4" color="#F1D302" fontWeight="bold" pt={2}>
            1 lượt chơi = 2
            <StyledNut position="relative" top="5px" left="3px" />
          </BorderText>
        </Box>
        <MiniGameBox
          totalItem={totalItem}
          onPlay={() => setShowConfirm(true)}
        />
        <CustomerSummary />
      </StyledDarkUnilo>
    </StyledUniloWrapper>
  )
}
