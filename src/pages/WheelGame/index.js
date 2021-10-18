import React, { useState } from 'react'
import useSound from 'use-sound'
import { Box, CustomerSummary } from '../../components'
import {
  Overlay,
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Wheel from '../../components/Wheel'
import clickSfx from '../../assets/sounds/button-click.wav'
import useSetting from '../../hooks/useSetting'
import backIcon from '../../assets/icons/back.png'
import { useHistory } from 'react-router'
import Icon from '../../components/Icon'
import { sleep } from '../../utils/utils'

const DEFAULT_DURATION = 5000 /* ms */
const DEFAULT_ROTATE = 360 * 10 /* ms */

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
  const gameRewards = [
    'Voucher 20K',
    'Voucher 50K',
    'Voucher 70K',
    'Voucher 25K',
    'GOOD LUCK',
    'Voucher 200K',
    'Voucher 500K',
    'Voucher 800K',
  ]

  const startPlayGame = async () => {
    if (isPlaying) return
    setIsPlaying(true)
    clickSound()
    // API TO PLAY GAME
    console.log('SHOW LOADING....')
    console.log('PLAY WHEEL GAME....')
    await sleep(1000)
    // GET REWARD ITEM
    const rewardIdx = Math.ceil(Math.random() * gameRewards.length)
    const rotateDeg =
      DEFAULT_ROTATE + (rewardIdx + 1) * Math.ceil(360 / gameRewards.length)
    console.log(`WINNING PRIZE`, rewardIdx)
    // SPIN TO THAT ITEM
    console.log('START SPIN....')
    setRotate(true)
    setRotateDeg(rotateDeg)
    await sleep(DEFAULT_DURATION)
    setPrize(gameRewards[rewardIdx])
    setIsPlaying(false)
  }

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Overlay />
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
              onClick={() => {
                startPlayGame()
              }}
              onWinner={setPrize}
              isRotate={rotate}
              deg={rotateDeg}
              duration={DEFAULT_DURATION}
              width="100%"
              height="auto"
              aspectRatio={'1/1'}
              style={{ cursor: 'pointer' }}
            />
            <Text fontSize="3rem">{prize}</Text>
          </Box>
        }
        Footer={<CustomerSummary />}
      />
    </StyledUniloWrapper>
  )
}

export default WheelGamePage
