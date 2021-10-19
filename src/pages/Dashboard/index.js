import React from 'react'
import { useHistory } from 'react-router'
import { Box, CustomerSummary, Icon, TierBox } from '../../components'
import { StyledUniloBackground, StyledUniloWrapper } from '../../components/AppStyles'
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
import Text from '../../components/Text'

export default function Dashboard(props) {
  const router = useHistory()

  return (
    <StyledUniloWrapper>
      <StyledUniloBackground />
      <Layout
        Content={
          <Box
            px={2}
            pt={1}
            display='flex'
            flexDirection='column'
            justifyContent='center'
          >
            <CustomerSummary />
            <TierBox />
            <Box px={4} position='relative'>
              <SidebarWrapper>
                <Icon onClick={() => router.push('/qr-scan')} img={qrcode}
                      style={{ marginBottom: '.5rem', marginTop: "2rem", maxWidth: '5em' }} />
                <Icon img={settingIcon} />
              </SidebarWrapper>
              <Box display={'flex'} justifyContent={'space-around'} mt={2}>
                <StyledGameBackground>
                  <Icon img={openBoxGameIcon} style={{ maxWidth: '4em' }} onClick={() => {
                    router.push('/minigame/openbox')
                  }} />
                  <Text textAlign={'center'} fontSize={'12px'} fontWeight={'bold'}>{'Hộp quà bí mật'}</Text>
                </StyledGameBackground>
                <StyledGameBackground>
                  <Icon img={wheelGameIcon} style={{ maxWidth: '4em' }} onClick={() => {
                    router.push('/minigame/wheel')
                  }} />
                  <Text textAlign={'center'} fontSize={'12px'} fontWeight={'bold'}>{'Vòng quay may mắn'}</Text>
                </StyledGameBackground>
              </Box>
              <BearTalking />
            </Box>
          </Box>
        }
        Footer={
          <Box display='flex' justifyContent='space-around' alignItems={'center'}>
            <Icon img={taskIcon} style={{
              maxWidth: '2.5em',
            }} onClick={() => {
              router.push('/mission')
            }
            } />
            <Icon img={leaderboardIcon} onClick={() => {
              router.push('/leaderboard')
            }
            } />
            <Icon img={rewardIcon} onClick={() => {
              router.push('/promotion')
            }
            } />
            <Icon img={accountIcon} style={{
              maxWidth: '2.2em',
            }} onClick={() => {
              router.push("/account")
            }
            } />
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}
