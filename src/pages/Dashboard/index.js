import React from 'react'
import { useHistory } from 'react-router'
import {
  Box,
  CustomerSummary,
  ExitButton,
  Icon,
  LeaderboardButton,
  MinigameButton,
  RewardButton,
  SettingButton,
  TierBox,
} from '../../components'
import {
  StyledUniloBackground,
  StyledUniloWrapper,
} from '../../components/AppStyles'
import Layout from '../../components/Layout'
import BearTalking from './BearTalking'
import qrcode from '../../assets/icons/qrcode.png'
import { SidebarWrapper } from './Dashboard.style'

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
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <CustomerSummary />
            <TierBox />
            <Box px={4} position="relative">
              <SidebarWrapper>
                <Icon onClick={() => router.push('/qr-scan')} img={qrcode} />
              </SidebarWrapper>
              <BearTalking />
            </Box>
          </Box>
        }
        Footer={
          <Box display="flex" justifyContent="space-between">
            <ExitButton />
            <LeaderboardButton onClick={() => router.push('/leaderboard')} />
            <MinigameButton onClick={() => router.push('/minigame/wheel')} />
            <RewardButton />
            <SettingButton />
          </Box>
        }
      />
    </StyledUniloWrapper>
  )
}
