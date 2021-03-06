import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Box, Button, CustomerSummary, Icon } from '../../components'
import {
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
import BearTalking from './BearTalking'
import qrcode from '../../assets/icons/qrcode.png'
import { SidebarWrapper, StyledGameBackground } from './Dashboard.style'
import taskIcon from '../../assets/icons/task-icon.png'
import leaderboardIcon from '../../assets/icons/leaderboard-icon.png'
import rewardIcon from '../../assets/icons/reward-icon.png'
import accountIcon from '../../assets/icons/account-icon.png'
import wheelGameIcon from '../../assets/icons/wheel.png'
import openBoxGameIcon from '../../assets/images/giftbox/box_2.png'
import settingIcon from '../../assets/icons/setting-icon.png'
import muteIcon from '../../assets/icons/mute.png'
import Text from '../../components/Text'

// SOUNDS
import gameBgSfx from '../../assets/sounds/game-background.mp3'
import useSetting from '../../hooks/useSetting'
import useSound from 'use-sound'
import { useQuery } from 'react-query'
import axiosClient from '../../utils/axios'

const checkHasFeed = () => {
  if (localStorage.getItem('LAST_FEED') == null) return false

  const lastFeed = Date.parse(localStorage.getItem('LAST_FEED') ?? new Date())
  const curent = new Date()
  const diffMs = Math.abs(curent - lastFeed)
  return diffMs / 1000 / 60 < 30
}
const updateFeedTime = () => {
  return localStorage.setItem('LAST_FEED', new Date())
}

export default function Dashboard(props) {
  const router = useHistory()
  const { mute, updateSoundMode } = useSetting()
  const [hasFeed, setHasFeed] = useState(checkHasFeed())
  console.log(`hasFeed`, hasFeed)
  const [playBgGameSound, { stop }] = useSound(gameBgSfx, {
    soundEnabled: !mute,
    volume: 0.5,
  })

  useEffect(() => {
    playBgGameSound()
    return stop
  }, [playBgGameSound, stop])

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Layout
        Content={
          <Box
            px={2}
            pt={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <CustomerSummary />
            <Box px={4} position="relative">
              <SidebarWrapper>
                <Icon
                  onClick={() => router.push('/qr-scan')}
                  img={qrcode}
                  style={{
                    marginBottom: '.5rem',
                    marginTop: '2rem',
                    maxWidth: '5em',
                  }}
                />
                <Icon img={muteIcon} onClick={() => updateSoundMode(!mute)} />
              </SidebarWrapper>
              <Box display={'flex'} justifyContent={'space-around'} mt={2}>
                <StyledGameBackground>
                  <Icon
                    img={openBoxGameIcon}
                    style={{ width: '5em', height: '5em' }}
                    onClick={() => {
                      router.push('/minigame/openbox')
                    }}
                  />
                  <Text
                    textAlign={'center'}
                    fontSize={'12px'}
                    fontWeight={'bold'}
                  >
                    {'H???p qu?? b?? m???t'}
                  </Text>
                </StyledGameBackground>
                <StyledGameBackground>
                  <Icon
                    img={wheelGameIcon}
                    style={{ width: '5em', height: '5em' }}
                    onClick={() => {
                      router.push('/minigame/wheel')
                    }}
                  />
                  <Text
                    textAlign={'center'}
                    fontSize={'12px'}
                    fontWeight={'bold'}
                  >
                    {'V??ng quay may m???n'}
                  </Text>
                </StyledGameBackground>
              </Box>
              <BearTalking hasFeed={hasFeed} />
              <Button
                onClick={() => {
                  setHasFeed(true)
                  updateFeedTime()
                }}
              >
                {!hasFeed ? 'N???p n??ng l?????ng ' : 'Quay l???i sau 30ph'}
              </Button>
            </Box>
          </Box>
        }
        Footer={
          <Box
            pb={2}
            display="flex"
            justifyContent="space-around"
            alignItems="flex-end"
          >
            <IconNav
              img={taskIcon}
              title="Nhi???m v???"
              path="/mission"
              style={{
                maxWidth: '2.5em',
              }}
            />
            <IconNav
              img={leaderboardIcon}
              title="X???p h???ng"
              path="/leaderboard"
            />
            <IconNav img={rewardIcon} title="Khuy???n m??i" path="/promotion" />
            <IconNav
              img={accountIcon}
              style={{
                maxWidth: '2.2em',
              }}
              path="/account"
              title="T??i kho???n"
            />
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}

const IconNav = ({ img, path, title, props }) => {
  const router = useHistory()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
    >
      <Icon
        img={img}
        onClick={() => {
          router.push(path)
        }}
        {...props}
      />
      <Text fontSize="0.8rem" fontWeight="bold">
        {title}
      </Text>
    </Box>
  )
}
