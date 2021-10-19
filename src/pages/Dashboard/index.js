import React from 'react'
import { useHistory } from 'react-router'
import {
  Box,
  CustomerSummary,
  ExitButton,
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
            <Box px={4}>
              <TierBox />
            </Box>
            <BearTalking />
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
